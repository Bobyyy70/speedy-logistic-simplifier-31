#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const INPUT_DIR = './public/lovable-uploads';
const OUTPUT_DIR = './public/optimized';
const WEBP_QUALITY = 85;
const JPEG_QUALITY = 80;
const PNG_COMPRESSION = 9;
const WIDTHS = [320, 480, 640, 768, 960, 1024, 1280, 1600, 1920];

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Statistics tracking
let stats = {
  processed: 0,
  originalSize: 0,
  optimizedSize: 0,
  errors: 0
};

/**
 * Convert and optimize a single image
 */
async function optimizeImage(inputPath, filename) {
  try {
    const originalStats = fs.statSync(inputPath);
    const ext = path.extname(filename).toLowerCase();
    const baseName = path.basename(filename, ext);
    
    console.log(`Processing: ${filename} (${(originalStats.size / 1024).toFixed(2)} KB)`);

    // Generate AVIF and WebP versions (primary, max 1920)
    const avifPath = path.join(OUTPUT_DIR, `${baseName}.avif`);
    await sharp(inputPath)
      .resize(1920, 1920, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .avif({
        quality: Math.min(90, WEBP_QUALITY + 5),
        effort: 6 // Max compression effort
      })
      .toFile(avifPath);

    const webpPath = path.join(OUTPUT_DIR, `${baseName}.webp`);
    await sharp(inputPath)
      .resize(1920, 1920, { 
        fit: 'inside', 
        withoutEnlargement: true 
      })
      .webp({ 
        quality: WEBP_QUALITY,
        effort: 6 // Max compression effort
      })
      .toFile(webpPath);

    // Generate optimized fallback
    let fallbackPath;
    let optimizedBuffer;

    if (['.jpg', '.jpeg'].includes(ext)) {
      fallbackPath = path.join(OUTPUT_DIR, `${baseName}.jpg`);
      optimizedBuffer = await sharp(inputPath)
        .resize(1920, 1920, { 
          fit: 'inside', 
          withoutEnlargement: true 
        })
        .jpeg({ 
          quality: JPEG_QUALITY,
          progressive: true,
          mozjpeg: true
        })
        .toBuffer();
    } else {
      fallbackPath = path.join(OUTPUT_DIR, `${baseName}.png`);
      optimizedBuffer = await sharp(inputPath)
        .resize(1920, 1920, { 
          fit: 'inside', 
          withoutEnlargement: true 
        })
        .png({ 
          compressionLevel: PNG_COMPRESSION,
          progressive: true
        })
        .toBuffer();
    }

    fs.writeFileSync(fallbackPath, optimizedBuffer);

    // Generate responsive variants (AVIF, WebP, and fallback) across widths
    for (const width of WIDTHS) {
      try {
        const avifW = path.join(OUTPUT_DIR, `${baseName}-${width}w.avif`);
        await sharp(inputPath)
          .resize(width, width, { fit: 'inside', withoutEnlargement: true })
          .avif({ quality: Math.min(90, WEBP_QUALITY + 5), effort: 6 })
          .toFile(avifW);

        const webpW = path.join(OUTPUT_DIR, `${baseName}-${width}w.webp`);
        await sharp(inputPath)
          .resize(width, width, { fit: 'inside', withoutEnlargement: true })
          .webp({ quality: WEBP_QUALITY, effort: 6 })
          .toFile(webpW);

        const fallbackExt = ['.png'].includes(ext) ? 'png' : 'jpg';
        const fallbackW = path.join(OUTPUT_DIR, `${baseName}-${width}w.${fallbackExt}`);
        const pipeline = sharp(inputPath).resize(width, width, { fit: 'inside', withoutEnlargement: true });
        if (fallbackExt === 'jpg') {
          await pipeline.jpeg({ quality: JPEG_QUALITY, progressive: true, mozjpeg: true }).toFile(fallbackW);
        } else {
          await pipeline.png({ compressionLevel: PNG_COMPRESSION, progressive: true }).toFile(fallbackW);
        }
      } catch (e) {
        console.warn(`Variant generation failed for ${filename} @${width}w:`, e.message);
      }
    }

    // Calculate savings (compare against WebP primary)
    const webpStats = fs.statSync(webpPath);
    const fallbackStats = fs.statSync(fallbackPath);
    const bestOptimized = webpStats.size < fallbackStats.size ? webpStats : fallbackStats;
    
    const savings = ((originalStats.size - bestOptimized.size) / originalStats.size * 100).toFixed(1);
    
    console.log(`✅ ${filename}: ${(originalStats.size / 1024).toFixed(2)} KB → ${(bestOptimized.size / 1024).toFixed(2)} KB (${savings}% saved)`);
    
    // Update stats
    stats.processed++;
    stats.originalSize += originalStats.size;
    stats.optimizedSize += bestOptimized.size;

  } catch (error) {
    console.error(`❌ Error processing ${filename}:`, error.message);
    stats.errors++;
  }
}

/**
 * Process all images in input directory
 */
async function processAllImages() {
  console.log('🚀 Starting image optimization...\n');
  
  const files = fs.readdirSync(INPUT_DIR);
  const imageFiles = files.filter(file => 
    /\.(jpe?g|png|webp)$/i.test(file)
  );

  console.log(`Found ${imageFiles.length} images to process\n`);

  // Process images in batches to avoid memory issues
  const BATCH_SIZE = 5;
  for (let i = 0; i < imageFiles.length; i += BATCH_SIZE) {
    const batch = imageFiles.slice(i, i + BATCH_SIZE);
    await Promise.all(
      batch.map(filename => 
        optimizeImage(path.join(INPUT_DIR, filename), filename)
      )
    );
  }

  // Print summary
  console.log('\n📊 Optimization Summary:');
  console.log(`Images processed: ${stats.processed}`);
  console.log(`Errors: ${stats.errors}`);
  console.log(`Original total size: ${(stats.originalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Optimized total size: ${(stats.optimizedSize / 1024 / 1024).toFixed(2)} MB`);
  
  if (stats.originalSize > 0) {
    const totalSavings = ((stats.originalSize - stats.optimizedSize) / stats.originalSize * 100).toFixed(1);
    console.log(`Total savings: ${totalSavings}%`);
  }

  // Generate usage instructions
  generateUsageInstructions();
}

/**
 * Generate instructions for using optimized images
 */
function generateUsageInstructions() {
  const instructions = `
# Optimized Images Usage Guide

## Implementation in React Components

Replace your image imports with the optimized versions:

\`\`\`tsx
import { ResponsiveImage } from '@/components/ui/ResponsiveImage';

// Instead of:
<img src="/lovable-uploads/image.png" alt="Description" />

// Use:
<ResponsiveImage
  src="/lovable-uploads/image.png"
  alt="Description"
  width={1200}
  height={800}
  sizes="(max-width: 768px) 100vw, 1200px"
/>
\`\`\`

## Benefits
- 60-80% smaller file sizes
- WebP format with fallbacks
- Lazy loading by default
- Responsive sizing
- Better Core Web Vitals scores

## Generated Files
Each original image now has:
- \`.webp\` version (modern browsers)
- \`.jpg/.png\` optimized fallback (legacy browsers)

Total space savings: ${stats.originalSize > 0 ? ((stats.originalSize - stats.optimizedSize) / stats.originalSize * 100).toFixed(1) : 0}%
`;

  fs.writeFileSync(path.join(OUTPUT_DIR, 'README.md'), instructions);
  console.log('\n📖 Usage instructions saved to /public/optimized/README.md');
}

// Run the optimization
processAllImages().catch(console.error);