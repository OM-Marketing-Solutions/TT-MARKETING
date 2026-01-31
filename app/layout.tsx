import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import Footer from '@/components/Footer';
import NavMobile from '@/components/NavMobile';
import WhatsAppWidget from '@/components/WhatsAppWidget';

/**
 * SEO Metadata Configuration
 * 
 * Comprehensive metadata for search engines and social media
 * - OpenGraph for Facebook, LinkedIn
 * - Twitter Cards for Twitter
 * - Mobile-optimized viewport settings
 * - Accessibility features
 */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ttmarketing.com';
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'TT Marketing';

export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: `${siteName} - Marketing Solutions & Business Growth`,
    template: `%s | ${siteName}`,
  },
  description:
    'Professional marketing solutions and business growth strategies. We help businesses achieve their goals through data-driven campaigns and innovative digital solutions.',

  // Keywords for SEO
  keywords: [
    'marketing solutions',
    'business growth',
    'digital marketing',
    'marketing agency',
    'business consulting',
  ],

  // Author and robots
  authors: [{ name: siteName }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // OpenGraph metadata (Facebook, LinkedIn, etc.)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: `${siteName} - Marketing Solutions & Business Growth`,
    description:
      'Professional marketing solutions and business growth strategies tailored to your needs.',
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteName} - Marketing Solutions`,
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} - Marketing Solutions & Business Growth`,
    description:
      'Professional marketing solutions and business growth strategies tailored to your needs.',
    images: [`${siteUrl}/images/twitter-image.jpg`],
    creator: '@ttmarketing',
  },

  // PWA support (optional)
  manifest: '/manifest.json',

  // Additional metadata
  alternates: {
    canonical: siteUrl,
  },
};

// Viewport configuration (separate export required by Next.js 14+)
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // Allow zoom for accessibility
};

/**
 * Root Layout Component
 * 
 * Global layout with:
 * - Skip to content link for accessibility
 * - Responsive header with mobile/desktop navigation
 * - Main content area
 * - Footer
 * - JSON-LD structured data for SEO
 */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for local business
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteName,
    description:
      'Professional marketing solutions and business growth strategies.',
    url: siteUrl,
    telephone: '+1-234-567-890',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Business St, Suite 100',
      addressLocality: 'City',
      addressRegion: 'State',
      postalCode: '12345',
      addressCountry: 'US',
    },
    email: 'contact@ttmarketing.com',
    sameAs: [
      'https://twitter.com/ttmarketing',
      'https://linkedin.com/company/ttmarketing',
      'https://facebook.com/ttmarketing',
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {/* Header with navigation - Sticky with backdrop blur */}
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm transition-all">
          <nav
            className="container-constraint flex items-center justify-between h-16"
            aria-label="Main navigation"
          >
            {/* Logo - Compact */}
            <Link
              href="/"
              className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 hover:opacity-90 transition-opacity"
            >
              <img
                src="/images/ttmarketing_logo.png"
                alt="TT Marketing Logo"
                className="h-8 md:h-10 w-auto max-h-10 max-w-[120px] object-contain"
              />
              <span className="text-lg md:text-xl font-bold text-emerald-400">
                TT Marketing
              </span>
            </Link>

            {/* Desktop Navigation - Product/Pricing/Blog/Resources/Contact */}
            <ul className="hidden lg:flex items-center space-x-6">
              <li>
                <Link
                  href="/products"
                  className="text-gray-700 dark:text-gray-200 hover:text-[var(--color-primary)] dark:hover:text-[var(--color-accent)] font-medium transition-smooth focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 dark:text-gray-200 hover:text-[var(--color-primary)] dark:hover:text-[var(--color-accent)] font-medium transition-smooth focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-gray-700 dark:text-gray-200 hover:text-[var(--color-primary)] dark:hover:text-[var(--color-accent)] font-medium transition-smooth focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-gray-700 dark:text-gray-200 hover:text-[var(--color-primary)] dark:hover:text-[var(--color-accent)] font-medium transition-smooth focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-5 py-2 rounded-lg font-medium transition-smooth focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Mobile Navigation - Hamburger on right */}
            <NavMobile />
          </nav>
        </header>

        {/* Main Content */}
        <main id="main-content">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* WhatsApp Widget - Global */}
        <WhatsAppWidget />
      </body>
    </html>
  );
}

