'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { getAllProducts, getCategories, getProductsByCategory } from '@/lib/productsData';
import { ArrowRight, Package, Sparkles, Phone, Filter } from 'lucide-react';

/**
 * Products Listing Page with Category Filtering
 * 
 * Displays products with:
 * - Category filtering via URL query params
 * - Dynamic product grid
 * - Responsive design
 */

function ProductsContent() {
    const searchParams = useSearchParams();
    const selectedCategory = searchParams.get('category');

    const allProducts = getAllProducts();
    const categories = getCategories();

    // Filter products based on selected category
    const displayedProducts = selectedCategory
        ? getProductsByCategory(selectedCategory)
        : allProducts;

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[60vh] bg-black overflow-hidden flex items-center">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500 opacity-20 blur-[140px] rounded-full animate-pulse-glow" />
                    <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-emerald-500 opacity-25 blur-[120px] rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
                </div>

                <div className="container-constraint relative z-10 py-20">
                    <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-in-up">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-strong rounded-full border border-white/20">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-glow" />
                            <span className="text-sm font-bold text-white tracking-wider uppercase">
                                {selectedCategory || 'All Products'}
                            </span>
                            <Sparkles className="w-4 h-4 text-emerald-400" />
                        </div>

                        {/* Headline */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight text-shadow">
                            <span className="block mb-2">
                                {selectedCategory ? selectedCategory : 'Our Complete Range of'}
                            </span>
                            <span className="block gradient-text-animated">Weighing Solutions</span>
                        </h1>

                        {/* Description */}
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                            {selectedCategory
                                ? `Explore our ${displayedProducts.length} ${selectedCategory.toLowerCase()} products`
                                : 'From compact digital scales to heavy-duty industrial systems – precision-engineered solutions for every weighing requirement.'
                            }
                        </p>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4 justify-center pt-4">
                            <a
                                href="#products-grid"
                                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 animate-gradient text-white font-bold rounded-2xl hover-glow transition-all duration-500 shadow-2xl"
                            >
                                <span className="text-lg">Browse Products</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </a>
                            <a
                                href="/contact"
                                className="group inline-flex items-center gap-3 px-10 py-5 glass-strong hover:bg-white/10 border border-white/20 hover:border-blue-500/50 text-white font-bold rounded-2xl transition-all duration-300 hover-lift"
                            >
                                <Phone className="w-6 h-6" />
                                <span className="text-lg">Get a Quote</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Filter Pills */}
            <section className="relative py-8 bg-black border-b border-white/10">
                <div className="container-constraint">
                    <div className="flex items-center gap-4 flex-wrap">
                        <Filter className="w-5 h-5 text-emerald-400" />
                        <span className="text-white font-bold">Filter by Category:</span>

                        <Link
                            href="/products"
                            className={`px-4 py-2 rounded-xl font-semibold transition-all ${!selectedCategory
                                ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white'
                                : 'glass border border-white/10 text-gray-400 hover:text-white hover:border-emerald-500/50'
                                }`}
                        >
                            All Products ({allProducts.length})
                        </Link>

                        {categories.map((category) => (
                            <Link
                                key={category}
                                href={`/products?category=${encodeURIComponent(category)}`}
                                className={`px-4 py-2 rounded-xl font-semibold transition-all ${selectedCategory === category
                                    ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white'
                                    : 'glass border border-white/10 text-gray-400 hover:text-white hover:border-emerald-500/50'
                                    }`}
                            >
                                {category} ({getProductsByCategory(category).length})
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Grid Section */}
            <section id="products-grid" className="relative py-32 bg-black overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500 opacity-15 blur-[120px] rounded-full animate-pulse-glow" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500 opacity-15 blur-[120px] rounded-full animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
                </div>

                <div className="container-constraint relative z-10">
                    {/* Products Count */}
                    <div className="text-center mb-12">
                        <p className="text-gray-400 text-lg">
                            Showing <span className="text-emerald-400 font-bold">{displayedProducts.length}</span> product{displayedProducts.length !== 1 ? 's' : ''}
                            {selectedCategory && <> in <span className="text-white font-bold">{selectedCategory}</span></>}
                        </p>
                    </div>

                    {/* Products Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayedProducts.map((product, index) => (
                            <Link
                                key={product.id}
                                href={`/products/${product.slug}`}
                                className="group relative animate-slide-in-up block"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="relative h-full glass-strong rounded-3xl border border-white/10 group-hover:border-blue-500/50 overflow-hidden transition-all duration-500 hover-lift">
                                    {/* Top Gradient Bar */}
                                    <div className="h-1.5 bg-gradient-to-r from-blue-500 via-emerald-500 to-cyan-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

                                    {/* Content */}
                                    <div className="p-8 space-y-6">
                                        {/* Icon Badge */}
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-2xl border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 glow-blue">
                                            <Package className="w-8 h-8 text-blue-400" />
                                        </div>

                                        {/* Category */}
                                        <div className="inline-block px-3 py-1 glass rounded-lg border border-white/10">
                                            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                                                {product.category}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-white min-h-[4rem] leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-400 transition-all duration-300">
                                            {product.title}
                                        </h3>

                                        {/* Image */}
                                        <div className="relative h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 group-hover:border-emerald-500/30 transition-all duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <Image
                                                src={product.images.main}
                                                alt={product.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                className="object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                                                quality={85}
                                            />
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                                            {product.shortDescription}
                                        </p>

                                        {/* View Details Button */}
                                        <div className="flex items-center gap-2 text-emerald-400 font-semibold group/btn">
                                            <span>View Details</span>
                                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                                        </div>
                                    </div>

                                    {/* Hover Shimmer Effect */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* No Results */}
                    {displayedProducts.length === 0 && (
                        <div className="text-center py-20">
                            <Package className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">No products found</h3>
                            <p className="text-gray-400 mb-8">Try selecting a different category</p>
                            <Link
                                href="/products"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
                            >
                                View All Products
                            </Link>
                        </div>
                    )}

                    {/* Bottom CTA */}
                    <div className="text-center mt-20">
                        <div className="inline-flex flex-col items-center gap-6 glass-strong p-10 rounded-3xl border border-white/10">
                            <h3 className="text-3xl font-bold text-white">Can't find what you need?</h3>
                            <p className="text-gray-400 max-w-2xl">
                                We offer custom weighing solutions tailored to your specific requirements. Contact our team for expert consultation.
                            </p>
                            <a
                                href="/contact"
                                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 animate-gradient text-white font-bold text-lg rounded-2xl hover-glow transition-all duration-500 shadow-2xl"
                            >
                                <span>Request Custom Quote</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default function ProductsPage() {
    return (
        <Suspense fallback={
            <div className="pt-24 min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4" />
                    <p className="text-white text-lg">Loading products...</p>
                </div>
            </div>
        }>
            <ProductsContent />
        </Suspense>
    );
}
