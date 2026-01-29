import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import ProductCategories from '@/components/ProductCategories';
import { ProductCardProps } from '@/components/ProductCard';
import About from '@/components/About';
import ContactForm from '@/components/ContactForm';

/**
 * Home Page
 * 
 * Main landing page with:
 * - New Hero section with gradient background and CTAs
 * - Product showcase
 * - About section
 * - Contact form
 * 
 * Mobile-first design with optimized loading
 */

// Sample product data
const sampleProducts: ProductCardProps[] = [
  {
    title: 'Digital Marketing',
    description:
      'Comprehensive digital marketing strategies to boost your online presence and drive engagement across all platforms.',
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    imageAlt: 'Digital marketing dashboard',
    price: 'From $999/mo',
    link: '#contact',
  },
  {
    title: 'Social Media Management',
    description:
      'Expert social media management to grow your brand, engage audiences, and build lasting customer relationships.',
    imageSrc: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop',
    imageAlt: 'Social media management',
    price: 'From $799/mo',
    link: '#contact',
  },
  {
    title: 'Content Creation',
    description:
      'Professional content creation services including blog posts, videos, graphics, and more to tell your brand story.',
    imageSrc: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop',
    imageAlt: 'Content creation workspace',
    price: 'From $599/mo',
    link: '#contact',
  },
  {
    title: 'SEO Optimization',
    description:
      'Boost your search rankings with our proven SEO strategies, keyword research, and technical optimization.',
    imageSrc: 'https://images.unsplash.com/photo-1571677208715-34c5c2f76d5c?w=800&auto=format&fit=crop',
    imageAlt: 'SEO analytics',
    price: 'From $899/mo',
    link: '#contact',
  },
  {
    title: 'Email Marketing',
    description:
      'Effective email campaigns that convert. We design, write, and manage campaigns that drive results.',
    imageSrc: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop',
    imageAlt: 'Email marketing campaign',
    price: 'From $499/mo',
    link: '#contact',
  },
  {
    title: 'Analytics & Reporting',
    description:
      'Data-driven insights and comprehensive reporting to track your marketing ROI and make informed decisions.',
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    imageAlt: 'Analytics dashboard',
    price: 'From $399/mo',
    link: '#contact',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Precision Weighing Solutions */}
      <Hero
        subheadline="TT Marketing"
        headline="Precision Weighing Solutions for Industrial & Commercial Excellence"
        subcopy="High-performance digital weighing scales, industrial platforms, receipt printer scales, and heavy-duty weighing systems — engineered for accuracy, durability, and long-term performance."
        imageSrc="/PRODUCTS/WhatsApp Image 2026-01-21 at 11.09.59.jpeg"
        imageAlt="High-performance precision weighing scales and industrial platforms"
        phoneNumber="+91-9876543210"
      />

      {/* Product Categories - 6 Card Grid */}
      <ProductCategories />

      {/* 
        ProductGrid temporarily disabled due to broken Unsplash image URLs
        Uncomment and update with proper images when ready
      */}
      {/* 
      <ProductGrid
        products={sampleProducts}
        title="Our Services"
        subtitle="Comprehensive marketing solutions tailored to your business needs"
      />
      */}

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <ContactForm />
    </>
  );
}
