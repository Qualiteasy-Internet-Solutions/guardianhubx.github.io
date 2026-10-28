/**
 * Formulari de contacte GuardianHubX → full "GuardianHubX Form Reponses" (pestanya "responses").
 * Còpia de referència del codi desplegat a Apps Script (Extensions → Apps Script del full).
 * Si canvies el codi allà, actualitza aquest fitxer.
 *
 * Configuració (Apps Script → Configuració del projecte → Propietats del script):
 *   RECAPTCHA_SECRET = clau secreta de reCAPTCHA v3   (no la posis al codi: aquest repo és públic)
 *
 * Què fa amb cada enviament:
 *   - Buit (sense nom, correu ni missatge) o camp trampa "honeypot" ple → s'ignora (no es guarda).
 *   - reCAPTCHA fallit / puntuació baixa / error → pestanya "rejected" amb columna "status", sense correu.
 *     Així l'spam no embruta "responses", però si el formulari s'espatlla els contactes reals no es perden.
 *   - Correcte → pestanya "responses" + correu.
 *   - weeklyReport(): resum setmanal per correu; ALERTA si hi ha rebutjats però cap de correcte.
 *     Activar-lo un cop: Activadors → Afegeix activador → weeklyReport → Basat en temps → Setmanal.
 */

var TO_ADDRESS = "inogues@qualiteasy.com";
var SHEET_NAME = "responses";
var REJECTED_SHEET = "rejected";
var MIN_SCORE = 0.5;

function doPost(e) {
  var p = e.parameter;
  if (p.honeypot) return json({ result: "success" }); // bot: fer-li creure que ha funcionat
  if (!String(p.name || "").trim() && !String(p.email || "").trim() && !String(p.message || "").trim()) {
    return json({ result: "error", error: "empty" });
  }

  var status = "ok";
  try {
    var token = e.parameter["g-recaptcha-response"];
    var secret = PropertiesService.getScriptProperties().getProperty("RECAPTCHA_SECRET");
    var res = JSON.parse(UrlFetchApp.fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "post",
      payload: { secret: secret, response: token },
      muteHttpExceptions: true
    }).getContentText());

    if (!res.success) {
      status = "recaptcha_failed";
    } else if (res.score < MIN_SCORE) {
      status = "low_score:" + res.score;
    }
  } catch (err) {
    status = "error:" + err;
  }

  if (status !== "ok") {
    e.parameters.status = [status];
    record_data(e, REJECTED_SHEET);
    return json({ result: "error", error: status });
  }

  record_data(e, SHEET_NAME);
  try {
    MailApp.sendEmail({
      to: TO_ADDRESS,
      subject: "Contact form GuardianHubX",
      replyTo: String(e.parameter.email || ""),
      htmlBody: formatMailBody(e.parameters, e.parameters.formDataNameOrder && JSON.parse(e.parameters.formDataNameOrder))
    });
  } catch (err) {
    Logger.log("Mail error: " + err);
  }
  return json({ result: "success" });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/** Resum setmanal + alerta si el formulari sembla trencat. */
function weeklyReport() {
  var ok = countLastWeek(SHEET_NAME);
  var rejected = countLastWeek(REJECTED_SHEET);
  var broken = ok === 0 && rejected > 0;
  MailApp.sendEmail({
    to: TO_ADDRESS,
    subject: (broken ? "⚠️ ALERTA formulari web: " : "Formulari web: ") + ok + " correctes, " + rejected + " rebutjats (7 dies)",
    htmlBody: broken
      ? "<p><b>Hi ha enviaments rebutjats però cap de correcte.</b> Pot ser que el formulari estigui trencat. Revisa la pestanya \"rejected\" del full: hi poden haver contactes reals.</p>"
      : "<p>Resum setmanal del formulari de contacte de guardianhubx.com.</p>"
  });
}

function countLastWeek(name) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);
  if (!sheet) return 0;
  var since = new Date(Date.now() - 7 * 24 * 3600 * 1000);
  return sheet.getRange(1, 1, sheet.getLastRow(), 1).getValues().filter(function (r) {
    return r[0] instanceof Date && r[0] >= since;
  }).length;
}

function formatMailBody(obj, order) {
  var result = "";
  order = order || Object.keys(obj);
  for (var idx in order) {
    var key = order[idx];
    if (key === "g-recaptcha-response") continue;
    result += "<h4 style='text-transform: capitalize; margin-bottom: 0'>" + key + "</h4><div>" + sanitizeInput(obj[key]) + "</div>";
  }
  return result;
}

function sanitizeInput(rawInput) {
  var placeholder = HtmlService.createHtmlOutput(" ");
  placeholder.appendUntrusted(rawInput);
  return placeholder.getContent();
}

function record_data(e, sheetName) {
  var lock = LockService.getDocumentLock();
  lock.waitLock(30000);
  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName(sheetName);
    if (!sheet) {
      sheet = doc.insertSheet(sheetName);
      sheet.getRange(1, 1).setValue("Timestamp");
    }
    var oldHeader = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var newHeader = oldHeader.slice();
    var fieldsFromForm = getDataColumns(e.parameters);
    var row = [new Date()];

    for (var i = 1; i < oldHeader.length; i++) {
      var field = oldHeader[i];
      row.push(getFieldFromData(field, e.parameters));
      var formIndex = fieldsFromForm.indexOf(field);
      if (formIndex > -1) fieldsFromForm.splice(formIndex, 1);
    }
    for (var j = 0; j < fieldsFromForm.length; j++) {
      row.push(getFieldFromData(fieldsFromForm[j], e.parameters));
      newHeader.push(fieldsFromForm[j]);
    }

    sheet.getRange(sheet.getLastRow() + 1, 1, 1, row.length).setValues([row]);
    if (newHeader.length > oldHeader.length) {
      sheet.getRange(1, 1, 1, newHeader.length).setValues([newHeader]);
    }
  } catch (error) {
    Logger.log(error);
  } finally {
    lock.releaseLock();
  }
}

function getDataColumns(data) {
  return Object.keys(data).filter(function (column) {
    return ["formDataNameOrder", "formGoogleSheetName", "formGoogleSendEmail", "honeypot", "g-recaptcha-response"].indexOf(column) === -1;
  });
}

function getFieldFromData(field, data) {
  var values = data[field] || "";
  return values.join ? values.join(", ") : values;
}
