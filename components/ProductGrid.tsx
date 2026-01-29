import React from 'react';
import ProductCard, { ProductCardProps } from './ProductCard';
import Container from './Container';

/**
 * ProductGrid Component
 * 
 * Responsive grid for product cards
 * Mobile: 1 column → Tablet: 2 columns → Desktop: 3 columns
 * Proper semantic HTML with section and heading
 */

interface ProductGridProps {
    products: ProductCardProps[];
    title?: string;
    subtitle?: string;
}

export default function ProductGrid({
    products,
    title = 'Our Products',
    subtitle
}: ProductGridProps) {
    return (
        <section id="products" className="py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
            <Container>
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            {subtitle}
                        </p>
                    )}
                </div>

                {/* 
          Responsive Grid:
          - Mobile (base): 1 column
          - Tablet (sm: 640px): 2 columns
          - Desktop (lg: 1024px): 3 columns
          Gap optimized for mobile (16px) to desktop (24px)
        */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>

                {/* Empty state */}
                {products.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 dark:text-gray-400 text-lg">
                            No products available at the moment.
                        </p>
                    </div>
                )}
            </Container>
        </section>
    );
}
