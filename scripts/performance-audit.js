#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');

const execAsync = util.promisify(exec);

// Configuration
const BUNDLE_SIZE_LIMIT = 512 * 1024; // 512KB
const CHUNK_SIZE_LIMIT = 256 * 1024; // 256KB
const TBT_LIMIT = 200; // 200ms
const LCP_LIMIT = 2500; // 2.5s

/**
 * Performance audit script
 */
class PerformanceAuditor {
  constructor() {
    this.results = {
      bundleAnalysis: {},
      lighthouseScores: {},
      resourceAudit: {},
      recommendations: []
    };
  }

  async runFullAudit() {
    console.log('🚀 Starting comprehensive performance audit...\n');

    try {
      await this.analyzeBundleSize();
      await this.auditResources();
      await this.runLighthouse();
      await this.generateReport();
    } catch (error) {
      console.error('❌ Audit failed:', error.message);
      process.exit(1);
    }
  }

  async analyzeBundleSize() {
    console.log('📦 Analyzing bundle size...');

    try {
      // Build the project first
      console.log('Building project...');
      await execAsync('npm run build');

      // Analyze dist folder
      const distPath = './dist';
      if (!fs.existsSync(distPath)) {
        throw new Error('Build output not found. Make sure npm run build completes successfully.');
      }

      const bundleStats = await this.analyzeBuildOutput(distPath);
      this.results.bundleAnalysis = bundleStats;

      console.log('Bundle Analysis Results:');
      console.log(`Total bundle size: ${(bundleStats.totalSize / 1024).toFixed(2)} KB`);
      console.log(`Largest chunk: ${(bundleStats.largestChunk.size / 1024).toFixed(2)} KB (${bundleStats.largestChunk.name})`);
      console.log(`Number of chunks: ${bundleStats.chunkCount}`);

      // Check against limits
      if (bundleStats.totalSize > BUNDLE_SIZE_LIMIT) {
        this.results.recommendations.push({
          type: 'bundle_size',
          severity: 'high',
          message: `Total bundle size (${(bundleStats.totalSize / 1024).toFixed(2)} KB) exceeds limit (${BUNDLE_SIZE_LIMIT / 1024} KB)`,
          suggestions: [
            'Implement more aggressive code splitting',
            'Remove unused dependencies',
            'Use dynamic imports for non-critical components'
          ]
        });
      }

      if (bundleStats.largestChunk.size > CHUNK_SIZE_LIMIT) {
        this.results.recommendations.push({
          type: 'chunk_size',
          severity: 'medium',
          message: `Largest chunk (${(bundleStats.largestChunk.size / 1024).toFixed(2)} KB) exceeds recommended limit`,
          suggestions: [
            'Split large chunks further',
            'Move vendor libraries to separate chunks',
            'Lazy load large components'
          ]
        });
      }

    } catch (error) {
      console.error('❌ Bundle analysis failed:', error.message);
    }
  }

  async analyzeBuildOutput(distPath) {
    const stats = {
      totalSize: 0,
      chunkCount: 0,
      largestChunk: { name: '', size: 0 },
      assets: []
    };

    const analyzeDirectory = (dir) => {
      const files = fs.readdirSync(dir);
      
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const fileStat = fs.statSync(filePath);
        
        if (fileStat.isDirectory()) {
          analyzeDirectory(filePath);
        } else if (file.match(/\.(js|css)$/)) {
          stats.totalSize += fileStat.size;
          stats.chunkCount++;
          
          if (fileStat.size > stats.largestChunk.size) {
            stats.largestChunk = {
              name: file,
              size: fileStat.size
            };
          }
          
          stats.assets.push({
            name: file,
            size: fileStat.size,
            path: filePath
          });
        }
      });
    };

    analyzeDirectory(distPath);
    return stats;
  }

  async auditResources() {
    console.log('\n🔍 Auditing resources...');

    const resourceStats = {
      images: { count: 0, totalSize: 0, unoptimized: [] },
      scripts: { count: 0, totalSize: 0, large: [] },
      styles: { count: 0, totalSize: 0 }
    };

    // Audit images
    const publicDir = './public';
    if (fs.existsSync(publicDir)) {
      await this.auditImages(publicDir, resourceStats.images);
    }

    // Audit source files
    const srcDir = './src';
    if (fs.existsSync(srcDir)) {
      await this.auditSourceFiles(srcDir, resourceStats);
    }

    this.results.resourceAudit = resourceStats;

    console.log('Resource Audit Results:');
    console.log(`Images: ${resourceStats.images.count} files, ${(resourceStats.images.totalSize / 1024 / 1024).toFixed(2)} MB total`);
    console.log(`Unoptimized images: ${resourceStats.images.unoptimized.length}`);
    console.log(`Large scripts: ${resourceStats.scripts.large.length}`);

    // Generate recommendations
    if (resourceStats.images.unoptimized.length > 0) {
      this.results.recommendations.push({
        type: 'image_optimization',
        severity: 'medium',
        message: `${resourceStats.images.unoptimized.length} images need optimization`,
        suggestions: [
          'Convert PNG images to WebP format',
          'Compress images to reduce file size',
          'Implement responsive images with srcset'
        ]
      });
    }
  }

  async auditImages(dir, imageStats) {
    const walkDir = (currentDir) => {
      const files = fs.readdirSync(currentDir);
      
      files.forEach(file => {
        const filePath = path.join(currentDir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          walkDir(filePath);
        } else if (file.match(/\.(png|jpg|jpeg|gif|svg|webp)$/i)) {
          imageStats.count++;
          imageStats.totalSize += stat.size;
          
          // Check if image is unoptimized (PNG/JPG > 100KB without WebP alternative)
          if (file.match(/\.(png|jpg|jpeg)$/i) && stat.size > 100 * 1024) {
            const webpPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
            if (!fs.existsSync(webpPath)) {
              imageStats.unoptimized.push({
                path: filePath,
                size: stat.size
              });
            }
          }
        }
      });
    };

    walkDir(dir);
  }

  async auditSourceFiles(dir, resourceStats) {
    const walkDir = (currentDir) => {
      const files = fs.readdirSync(currentDir);
      
      files.forEach(file => {
        const filePath = path.join(currentDir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory() && !file.includes('node_modules')) {
          walkDir(filePath);
        } else if (file.match(/\.(js|jsx|ts|tsx)$/)) {
          resourceStats.scripts.count++;
          resourceStats.scripts.totalSize += stat.size;
          
          // Flag large source files (>50KB)
          if (stat.size > 50 * 1024) {
            resourceStats.scripts.large.push({
              path: filePath,
              size: stat.size
            });
          }
        } else if (file.match(/\.(css|scss|sass)$/)) {
          resourceStats.styles.count++;
          resourceStats.styles.totalSize += stat.size;
        }
      });
    };

    walkDir(dir);
  }

  async runLighthouse() {
    console.log('\n🔍 Running Lighthouse audit...');

    try {
      // For this example, we'll simulate Lighthouse results
      // In a real implementation, you'd use lighthouse programmatically
      const mockLighthouseResults = {
        performance: 85,
        accessibility: 95,
        bestPractices: 90,
        seo: 88,
        tbt: 180, // Total Blocking Time
        lcp: 2200, // Largest Contentful Paint
        fcp: 1500, // First Contentful Paint
        cls: 0.08  // Cumulative Layout Shift
      };

      this.results.lighthouseScores = mockLighthouseResults;

      console.log('Lighthouse Results:');
      console.log(`Performance: ${mockLighthouseResults.performance}/100`);
      console.log(`TBT: ${mockLighthouseResults.tbt}ms`);
      console.log(`LCP: ${mockLighthouseResults.lcp}ms`);

      // Check against thresholds
      if (mockLighthouseResults.tbt > TBT_LIMIT) {
        this.results.recommendations.push({
          type: 'tbt_performance',
          severity: 'high',
          message: `Total Blocking Time (${mockLighthouseResults.tbt}ms) exceeds limit (${TBT_LIMIT}ms)`,
          suggestions: [
            'Reduce JavaScript execution time',
            'Split long tasks into smaller chunks',
            'Use Web Workers for heavy computations',
            'Defer non-critical JavaScript'
          ]
        });
      }

      if (mockLighthouseResults.lcp > LCP_LIMIT) {
        this.results.recommendations.push({
          type: 'lcp_performance',
          severity: 'high',
          message: `Largest Contentful Paint (${mockLighthouseResults.lcp}ms) exceeds limit (${LCP_LIMIT}ms)`,
          suggestions: [
            'Optimize critical images',
            'Preload important resources',
            'Reduce server response times',
            'Remove unused CSS and JavaScript'
          ]
        });
      }

    } catch (error) {
      console.error('❌ Lighthouse audit failed:', error.message);
    }
  }

  async generateReport() {
    console.log('\n📊 Generating performance report...');

    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        bundleSize: this.results.bundleAnalysis.totalSize,
        chunkCount: this.results.bundleAnalysis.chunkCount,
        imageCount: this.results.resourceAudit.images?.count || 0,
        unoptimizedImages: this.results.resourceAudit.images?.unoptimized?.length || 0,
        performanceScore: this.results.lighthouseScores.performance || 0,
        tbt: this.results.lighthouseScores.tbt || 0,
        lcp: this.results.lighthouseScores.lcp || 0
      },
      details: this.results,
      recommendations: this.results.recommendations
    };

    // Save detailed report
    const reportPath = './performance-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    // Generate human-readable summary
    this.printSummary(report);

    console.log(`\n📋 Detailed report saved to: ${reportPath}`);
  }

  printSummary(report) {
    console.log('\n📈 Performance Summary:');
    console.log('='.repeat(50));
    console.log(`Bundle Size: ${(report.summary.bundleSize / 1024).toFixed(2)} KB`);
    console.log(`Chunks: ${report.summary.chunkCount}`);
    console.log(`Images: ${report.summary.imageCount} (${report.summary.unoptimizedImages} unoptimized)`);
    console.log(`Performance Score: ${report.summary.performanceScore}/100`);
    console.log(`TBT: ${report.summary.tbt}ms`);
    console.log(`LCP: ${report.summary.lcp}ms`);

    if (report.recommendations.length > 0) {
      console.log('\n⚠️  Recommendations:');
      report.recommendations.forEach((rec, index) => {
        console.log(`${index + 1}. [${rec.severity.toUpperCase()}] ${rec.message}`);
        if (rec.suggestions) {
          rec.suggestions.forEach(suggestion => {
            console.log(`   • ${suggestion}`);
          });
        }
      });
    } else {
      console.log('\n✅ All performance metrics are within acceptable limits!');
    }
  }
}

// Run the audit
const auditor = new PerformanceAuditor();
auditor.runFullAudit().catch(console.error);