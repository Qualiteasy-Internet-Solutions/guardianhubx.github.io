#!/bin/bash
# Phase 1: Convert 5 pack images (highest priority - 8.7MB total)

echo "📦 Converting Phase 1: Pack Images"
echo "=================================="

QUALITY_WEBP=85
QUALITY_AVIF=75

for file in ironwall-pack.png smartlayer-pack.png solo-pack.png lightcore-pack.png edu-pack.png; do
  if [ ! -f "$file" ]; then
    echo "⚠️  Skipping $file (not found)"
    continue
  fi
  
  base="${file%.png}"
  echo ""
  echo "Converting $file..."
  
  # WebP conversion (if cwebp available)
  if command -v cwebp &> /dev/null; then
    cwebp -q $QUALITY_WEBP "$file" -o "${base}.webp" 2>/dev/null && \
      echo "✓ WebP: $(ls -lh ${base}.webp | awk '{print $5}')"
  else
    echo "⚠️  cwebp not found - install with: brew install webp"
  fi
  
  # AVIF conversion (if avifenc available)
  if command -v avifenc &> /dev/null; then
    avifenc -s 4 -q $QUALITY_AVIF "$file" "${base}.avif" 2>/dev/null && \
      echo "✓ AVIF:  $(ls -lh ${base}.avif | awk '{print $5}')"
  else
    echo "⚠️  avifenc not found - install with: brew install libavif"
  fi
  
  # Show original size
  echo "  Original: $(ls -lh $file | awk '{print $5}')"
done

echo ""
echo "✅ Phase 1 conversion complete!"
