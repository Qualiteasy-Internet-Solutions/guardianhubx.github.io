# Image SEO Optimization Guide

This guide explains the new image optimization features and how to use them in your content.

## Quick Start

Add these optional front matter fields to any page:

```yaml
---
title: "My Page Title"
ogImage: "/img/my-custom-og.jpg"
ogImageAlt: "Description of the image for accessibility and social preview"
twitterImage: "/img/my-twitter-preview.jpg"
twitterImageAlt: "Alternative description for Twitter"
---
```

## Front Matter Parameters

### Image Parameters

| Parameter | Type | Required | Purpose |
|-----------|------|----------|---------|
| `ogImage` | string (path) | No | Custom Open Graph image for social sharing |
| `ogImageAlt` | string | No | Alt text for OG image (appears in social previews) |
| `twitterImage` | string (path) | No | Custom Twitter card image |
| `twitterImageAlt` | string | No | Alt text for Twitter image |
| `featuredImage` | string (path) | No | Featured image (for future implementations) |

## Image Recommendations

### Image Dimensions
- **OG/Twitter Images**: 1200×630px minimum (16:9 ratio)
- **Recommended format**: JPEG or PNG
- **File size**: < 1MB

### File Format Priority
1. **WebP** - Best for web (smaller size)
2. **AVIF** - Ultra-modern format (even smaller)
3. **PNG** - For images with transparency
4. **JPEG** - Fallback for wide compatibility

### Alt Text Best Practices
- Describe the image concisely (160 characters max)
- Include context relevant to the page
- Don't start with "Image of..." or "Picture of..."
- Be descriptive but not keyword-stuffing

✅ Good: `"GuardianHubX cybersecurity platform dashboard showing real-time threat monitoring"`
❌ Bad: `"Image of dashboard"`

## Using the Image Partial

For images within your content, use the image optimization partial:

```hugo
{{ partial "image.html" (dict
  "src" "/img/example.jpg"
  "alt" "Descriptive alt text here"
  "width" "500"
  "height" "400"
  "lazy" true
  "class" "img-fluid"
)}}
```

### Partial Parameters

| Parameter | Type | Default | Purpose |
|-----------|------|---------|---------|
| `src` | string | required | Image file path |
| `alt` | string | "GuardianHubX" | Alt text (important for SEO & accessibility) |
| `width` | string | - | Image width in pixels (prevents layout shift) |
| `height` | string | - | Image height in pixels |
| `lazy` | boolean | true | Enable lazy loading |
| `class` | string | "img-fluid" | CSS classes |
| `title` | string | - | Tooltip text |
| `decoding` | string | "async" | async or sync |

## Example: Complete Front Matter with Images

```yaml
---
title: "GuardianRadar Product Overview"
description: "Complete product description for search results"
ogImage: "/img/guardianradar-hero.jpg"
ogImageAlt: "GuardianRadar dashboard showing threat intelligence and brand monitoring"
twitterImage: "/img/guardianradar-twitter.jpg"
twitterImageAlt: "GuardianRadar - Cybersecurity monitoring dashboard"
---

# Page content here...

{{ partial "image.html" (dict
  "src" "/img/guardianradar-features.webp"
  "alt" "GuardianRadar key features and interface"
  "width" "1200"
  "height" "600"
  "lazy" true
  "class" "img-fluid shadow-sm rounded"
)}}
```

## SEO Benefits

✅ **Social Sharing**: Custom images with alt text ensure proper previews on LinkedIn, Twitter, Facebook
✅ **Accessibility**: Alt text helps screen readers and visually impaired users
✅ **Core Web Vitals**: Width/height attributes prevent layout shift (CLS)
✅ **Schema Markup**: Image JSON-LD helps search engines understand visual content
✅ **Google Images**: Better indexing and ranking in image search results

## Technical Details

### What Happens Behind the Scenes

1. **OG Tags** (lines 83-87):
   - `og:image:width` and `og:image:height` tell social platforms the optimal display size
   - `og:image:type` specifies the format
   - `og:image:alt` is shown as fallback text and in Pinterest Rich Pins

2. **Twitter Cards** (lines 97-98):
   - Falls back to OG image if no Twitter-specific image provided
   - Alt text appears on hover and in reader mode

3. **Image Schema** (lines 102-114):
   - Generates JSON-LD for image SEO
   - Helps Google understand image context
   - Enables rich results in search

4. **Image Partial** (layouts/partials/image.html):
   - Ensures lazy loading (performance)
   - Adds dimensions to prevent layout shift
   - Provides consistent markup across all images

## Testing Your Images

### Check OG Tags
Use these tools to validate your changes:
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/feed/)

### Check Schema Markup
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

## Example Pages (Update These First)

These pages would benefit most from custom OG/Twitter images:

1. **Product pages** (`content/*/ironwall.md`, `content/*/smartlayer.md`, etc.)
   - Add custom hero screenshots
   - Describe key benefits in alt text

2. **Landing pages** (`content/*/test-ciberseguridad.md`, etc.)
   - Add call-to-action focused images
   - Include alt text with value proposition

3. **GuardianRadar** (`content/*/guardianradar.md`)
   - Already has preload optimization
   - Update alt text descriptions

## Troubleshooting

**Q: My image isn't showing in social preview?**
- Check image path is correct and file exists
- Verify image is at least 1200×630px
- Wait 24 hours for social cache to update
- Use Facebook Sharing Debugger to recrawl

**Q: Should I set dimensions for all images?**
- Yes, especially for hero/featured images
- Prevents layout shift and improves Core Web Vitals
- Minimal performance cost

**Q: Can I use different formats (WebP/AVIF)?**
- Yes! Use `<picture>` element (coming in Proposal 3)
- Currently, stick with JPEG/PNG for broad compatibility
