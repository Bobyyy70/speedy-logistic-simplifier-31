const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration des formats et qualités d'optimisation
const OPTIMIZATION_CONFIG = {
  webp: {
    quality: 85,
    effort: 6, // Plus d'effort pour une meilleure compression
  },
  avif: {
    quality: 75,
    effort: 9, // Maximum d'effort pour AVIF
  },
  jpeg: {
    quality: 85,
    progressive: true,
    mozjpeg: true,
  },
  png: {
    compressionLevel: 9,
    adaptiveFiltering: true,
  }
};

// Dossiers source et destination
const SOURCE_DIR = path.join(__dirname, '../public/lovable-uploads');
const OUTPUT_DIR = path.join(__dirname, '../public/lovable-uploads/optimized');

// Créer le dossier de sortie s'il n'existe pas
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Fonction pour obtenir la taille d'un fichier
function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  return stats.size;
}

// Fonction pour formater la taille en octets
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Fonction pour optimiser une image
async function optimizeImage(inputPath, outputPath, format) {
  try {
    let pipeline = sharp(inputPath);
    
    // Obtenir les métadonnées de l'image originale
    const metadata = await pipeline.metadata();
    const originalSize = getFileSize(inputPath);
    
    console.log(`\n🔄 Optimisation: ${path.basename(inputPath)}`);
    console.log(`   Dimensions: ${metadata.width}x${metadata.height}`);
    console.log(`   Taille originale: ${formatBytes(originalSize)}`);
    
    // Appliquer les optimisations selon le format
    switch (format) {
      case 'webp':
        pipeline = pipeline.webp(OPTIMIZATION_CONFIG.webp);
        break;
      case 'avif':
        pipeline = pipeline.avif(OPTIMIZATION_CONFIG.avif);
        break;
      case 'jpeg':
        pipeline = pipeline.jpeg(OPTIMIZATION_CONFIG.jpeg);
        break;
      case 'png':
        pipeline = pipeline.png(OPTIMIZATION_CONFIG.png);
        break;
    }
    
    // Sauvegarder l'image optimisée
    await pipeline.toFile(outputPath);
    
    const optimizedSize = getFileSize(outputPath);
    const compressionRatio = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`   ✅ ${format.toUpperCase()} généré: ${formatBytes(optimizedSize)}`);
    console.log(`   📊 Compression: ${compressionRatio}% de réduction`);
    
    return {
      original: originalSize,
      optimized: optimizedSize,
      ratio: compressionRatio
    };
  } catch (error) {
    console.error(`   ❌ Erreur lors de l'optimisation en ${format}:`, error.message);
    return null;
  }
}

// Fonction principale
async function optimizeAllImages() {
  console.log('Debut de l\'optimisation des images...\n');
  
  try {
    const files = fs.readdirSync(SOURCE_DIR);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|gif)$/i.test(file)
    );
    
    if (imageFiles.length === 0) {
      console.log('Aucune image trouvee dans le dossier source.');
      return;
    }
    
    console.log(`${imageFiles.length} images trouvees a optimiser\n`);
    
    let totalOriginalSize = 0;
    let totalOptimizedSize = 0;
    let processedImages = 0;
    
    for (const file of imageFiles) {
      const inputPath = path.join(SOURCE_DIR, file);
      const baseName = path.parse(file).name;
      
      console.log(`📁 Traitement: ${file}`);
      
      // Générer les versions WebP et AVIF
      const formats = ['webp', 'avif'];
      
      for (const format of formats) {
        const outputPath = path.join(OUTPUT_DIR, `${baseName}.${format}`);
        const result = await optimizeImage(inputPath, outputPath, format);
        
        if (result && format === 'webp') { // Compter seulement pour WebP pour éviter le double comptage
          totalOriginalSize += result.original;
          totalOptimizedSize += result.optimized;
          processedImages++;
        }
      }
      
      // Générer aussi une version JPEG optimisée si l'original n'est pas déjà JPEG
      if (!/\.(jpg|jpeg)$/i.test(file)) {
        const outputPath = path.join(OUTPUT_DIR, `${baseName}.jpg`);
        await optimizeImage(inputPath, outputPath, 'jpeg');
      }
    }
    
    // Statistiques finales
    console.log('\n' + '='.repeat(50));
    console.log('RESUME DE L\'OPTIMISATION');
    console.log('='.repeat(50));
    console.log(`Images traitees: ${processedImages}`);
    console.log(`Taille originale totale: ${formatBytes(totalOriginalSize)}`);
    console.log(`Taille optimisee totale: ${formatBytes(totalOptimizedSize)}`);
    
    if (totalOriginalSize > 0) {
      const globalReduction = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
      console.log(`Reduction globale: ${globalReduction}%`);
      console.log(`Espace economise: ${formatBytes(totalOriginalSize - totalOptimizedSize)}`);
    }
    
    console.log(`\nImages optimisees sauvegardees dans: ${OUTPUT_DIR}`);
    
  } catch (error) {
    console.error('Erreur lors de l\'optimisation:', error);
  }
}

// Exécuter le script
if (require.main === module) {
  optimizeAllImages();
}

module.exports = { optimizeAllImages, optimizeImage };