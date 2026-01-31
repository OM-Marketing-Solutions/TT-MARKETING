import type { NextConfig } from 'next';

/**
 * Next.js Configuration
 * Optimized for mobile-first performance and production builds
 * 
 * Performance optimizations:
 * - Image optimization with remote patterns
 * - Strict mode enabled for better development experience
 * - Compression enabled
 */

const nextConfig: NextConfig = {
  /* Enable React strict mode for highlighting potential problems */
  reactStrictMode: true,

  /* Image optimization configuration */
  images: {
    /* 
     * Define remote patterns for external images
     * Add your image CDN domains here (e.g., Cloudinary, imgix, etc.)
     */
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      // Add more image domains as needed
    ],

    /* 
     * Device sizes for responsive images (mobile-first)
     * These match our breakpoint strategy
     */
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],

    /* 
     * Image sizes for next/image 'sizes' prop
     * Optimized for mobile loading
     */
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    /* Image quality values */
    qualities: [75, 80, 85, 90],

    /* Format optimization (WebP for better compression) */
    formats: ['image/webp'],
  },

  /* Compression for static assets */
  compress: true,
};

export default nextConfig;
