import React from 'react';
import Image from 'next/image';

/**
 * ProductCard Component
 * 
 * Mobile-first product card with:
 * - Responsive image loading (lazy by default)
 * - Touch-friendly interaction area
 * - Accessible content structure
 * - Hover effects for desktop
 */

export interface ProductCardProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    price?: string;
    link?: string;
}

export default function ProductCard({
    title,
    description,
    imageSrc,
    imageAlt,
    price,
    link = '#',
}: ProductCardProps) {
    return (
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-smooth hover:shadow-lg hover:-translate-y-1 focus-within:ring-2 focus-within:ring-[var(--color-primary)]">
            {/* Product Image */}
            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    loading="lazy" // Lazy load product images (below the fold)
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 300px"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    quality={80}
                />
            </div>

            {/* Product Content */}
            <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {description}
                </p>

                <div className="flex items-center justify-between">
                    {price && (
                        <span className="text-lg md:text-xl font-bold text-[var(--color-primary)]">
                            {price}
                        </span>
                    )}

                    {/* 
            CTA Link: Minimum touch target 44x44px
            Focus visible for keyboard navigation
          */}
                    <a
                        href={link}
                        className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-medium px-4 py-2 md:px-6 md:py-3 rounded transition-smooth focus-visible:outline-2 focus-visible:outline-offset-2"
                        aria-label={`Learn more about ${title}`}
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </article>
    );
}
