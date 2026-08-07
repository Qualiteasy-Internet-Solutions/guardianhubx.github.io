#!/bin/bash
# Genera el PDF del qüestionari de ciberseguretat (A4, paginat, amb numeració).
# Els logos van incrustats com a data-URI dins l'HTML, així que no cal servidor.
set -e

cd "$(dirname "$0")"

# WeasyPrint necessita les llibreries natives de Homebrew (pango, cairo)
export DYLD_FALLBACK_LIBRARY_PATH=/opt/homebrew/lib:$DYLD_FALLBACK_LIBRARY_PATH

SRC="static/questionnaire_v2_form.html"
OUT="static/docs/questionari-ciberseguretat.pdf"

~/.local/bin/weasyprint -e utf-8 "$SRC" "$OUT" 2>&1 | grep -v "print-color-adjust" || true

echo "PDF generat: $OUT ($(mdls -raw -name kMDItemNumberOfPages "$OUT") pàgines, $(du -h "$OUT" | cut -f1))"
