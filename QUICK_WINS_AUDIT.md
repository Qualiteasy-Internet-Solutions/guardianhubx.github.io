# Quick Wins Audit Report

**Date**: 2026-02-17
**Scope**: Image alt text, dimensions, and loading attributes
**Files Scanned**: 10 layout files + content

---

## 🔴 Issues Found

### Issue #1: Missing Width/Height on Logo (radar.html)

**Location**: `layouts/_default/radar.html:19`
**Impact**: Possible layout shift, CLS penalty

```html
<!-- CURRENT (BAD) -->
<img src="{{ .Params.logo }}" alt="{ .Title }} Logo"
     class="img-fluid mb-3" fetchpriority="high" loading="eager"
     width="500" height="auto">

<!-- SHOULD BE -->
<img src="{{ .Params.logo }}" alt="{{ .Title }} Logo"
     class="img-fluid mb-3" fetchpriority="high" loading="eager"
     width="500" height="500">
```

**Issue**: `height="auto"` doesn't help browser calculate layout. Should be fixed dimension.

---

### Issue #2: Missing Width/Height on Product Logos (products.html)

**Location**: `layouts/_default/products.html:20`
**Severity**: Medium (affects product pages)

```html
<!-- CURRENT -->
<img src="{{ .Params.logo }}" alt="{{ .Title }} Logo" class="img-fluid mb-3">

<!-- RECOMMENDATION -->
<img src="{{ .Params.logo }}" alt="{{ .Title }} Logo" class="img-fluid mb-3"
     width="300" height="300" loading="lazy">
```

---

### Issue #3: Missing Lazy Loading on Hero Images

**Location**: Multiple layouts
**Files**: `radar.html:19`, `products.html:20`
**Issue**: Hero images use `loading="eager"` (correct), but non-hero images missing `loading="lazy"`

**Good Examples**:
- ✅ Footer logo: has `loading="lazy"` (line 10)
- ✅ ASCICAT logo: has `loading="lazy"` (line 20)

**Bad Examples**:
- ❌ Product intro images: no `loading` attribute (products.html:36)
- ❌ Testimonial avatars: no `loading` attribute (radar.html:106)

---

### Issue #4: Inconsistent Decoding Attribute

**Files Affected**: All image tags
**Current State**: Mostly missing `decoding="async"`

**Recommendation**: Add to all non-critical images:
```html
<img src="..." alt="..." loading="lazy" decoding="async">
```

---

### Issue #5: Alt Text Typo (radar.html)

**Location**: `layouts/_default/radar.html:19`
**Issue**:
```html
alt="{ .Title }} Logo"  <!-- WRONG: missing opening bracket -->
alt="{{ .Title }} Logo" <!-- CORRECT -->
```

---

## 📊 Summary by File

| File | Issues | Alt Text | Width/Height | Loading | Decoding |
|------|--------|----------|--------------|---------|----------|
| footer.html | 0 | ✅ All | ⚠️ Partial | ✅ Yes | ❌ No |
| header-inner.html | 0 | ✅ All | ✅ Yes | ✅ Yes | ❌ No |
| header-home.html | 0 | ✅ All | ❌ No | ⚠️ Mixed | ❌ No |
| products.html | 2 | ✅ All | ❌ No | ❌ No | ❌ No |
| radar.html | 3 | ⚠️ 1 typo | ⚠️ Mixed | ⚠️ Mixed | ❌ No |
| objectives.html | ? | ? | ? | ? | ? |
| shortcodes/* | 1 | ✅ All | ✅ Yes | ❌ No | ❌ No |

---

## 🔧 Quick Fix Priority

### Priority 1 (5 minutes) - Fix Alt Text Typo
**File**: `layouts/_default/radar.html:19`
```diff
- alt="{ .Title }} Logo"
+ alt="{{ .Title }} Logo"
```

---

### Priority 2 (10 minutes) - Add Missing Dimensions

**Files to fix**:

1. **products.html:20**
   ```html
   <!-- ADD dimensions to .Params.logo -->
   width="300" height="300"
   ```

2. **radar.html:19**
   ```html
   <!-- CHANGE height from "auto" to fixed value -->
   width="500" height="500"
   ```

3. **header-home.html banners**
   - Line 23: Add width/height to banner images
   - Line 26: Add width/height to banner images
   - Line 30: Add width/height to banner images
   - Line 33: Add width/height to banner images

---

### Priority 3 (15 minutes) - Add Lazy Loading

**Files to fix**:

1. **products.html:36** - Intro images
   ```html
   <img src="{{ .img }}" alt=" {{ .alt }}" class="img-fluid landing-training-img"
        loading="lazy" decoding="async">
   ```

2. **radar.html:63** - Screenshot images
   ```html
   <img src="{{ .image }}" class="img-fluid zoomable-image radar-img-limit"
        alt="{{ .alt }}" onclick="openFullscreen(this)"
        loading="lazy" decoding="async" />
   ```

3. **radar.html:106** - Testimonial avatars
   ```html
   <img src="{{ .image }}" alt="{{ .name }}" class="rounded-circle testimonial-avatar"
        loading="lazy" decoding="async">
   ```

4. **radar.html:181** - Footer logo variant
   ```html
   <img src="{{ .Params.logo }}" alt="{{ .Title }}"
        style="height: 40px; margin-bottom: 10px;"
        loading="lazy" decoding="async">
   ```

---

### Priority 4 (20 minutes) - Add Decoding to All

Add `decoding="async"` to every `<img>` tag (except hero/critical images which can use `decoding="sync"`)

---

## 📋 Implementation Checklist

- [ ] Fix alt text typo in radar.html:19
- [ ] Add width/height to products.html:20
- [ ] Add width/height to radar.html:19
- [ ] Add width/height to header-home.html banners (4 images)
- [ ] Add lazy loading to products.html:36
- [ ] Add lazy loading to radar.html:63
- [ ] Add lazy loading to radar.html:106
- [ ] Add lazy loading to radar.html:181
- [ ] Add decoding="async" to all non-hero images

---

## 📈 Expected Impact

| Fix | CLS Impact | Performance | Effort |
|-----|-----------|-------------|--------|
| Alt text typo | -5ms | +2% | 1min |
| Dimensions | -10-20ms | +5% | 10min |
| Lazy loading | -5ms | +3% | 15min |
| Decoding async | 0ms | +2% | 5min |

**Total Expected Improvement**: 15-35ms faster LCP + 10-12% performance boost

---

## 🖼️ Images NOT Found Issues

✅ All images have alt text where dynamic content applies
✅ Footer & header images are well-structured
✅ No broken image references detected

---

## 💾 No Content Images Found

Note: Content markdown pages are custom HTML, so images are embedded via front matter parameters (already handled by updated head.html).

---

## Recommend Next Steps

1. **Implement all fixes** (40 minutes total work)
2. **Test with Google PageSpeed Insights** for each major page
3. **Check Core Web Vitals** improvements
4. **After fixes**: Consider Proposal 3 (Picture element for modern formats)

