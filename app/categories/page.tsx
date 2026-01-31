import React from 'react';
import Link from 'next/link';
import { Package, ArrowRight, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';
import { getCategories, getProductsByCategory } from '@/lib/productsData';

export const metadata: Metadata = {
    title: 'Product Categories - TT Marketing | Weighing Scale Types',
    description: 'Browse our weighing scales by category: Table Top Scales, Platform Scales, and Specialty Scales. Find the perfect weighing solution for your needs.',
};

export default function CategoriesPage() {
    const categories = getCategories();

    // Category descriptions
    const categoryInfo: Record<string, { description: string; icon: string }> = {
        'Table Top Scales': {
            description: 'Compact, accurate weighing scales perfect for retail counters, grocery stores, and food businesses. Features receipt printing and digital displays.',
            icon: '⚖️'
        },
        'Platform Scales': {
            description: 'Heavy-duty industrial platform scales for warehouses, factories, and logistics. Designed for weighing heavy loads with precision and durability.',
            icon: '🏗️'
        },
        'Specialty Scales': {
            description: 'Specialized weighing solutions including baby scales, crane scales, conveyor scales, and scoop-type scales for unique applications.',
            icon: '🔧'
        }
    };

    return (
        <main className="pt-24 min-h-screen bg-black">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500 opacity-15 blur-[120px] rounded-full animate-pulse-glow" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500 opacity-15 blur-[120px] rounded-full animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
                </div>

                <div className="container-constraint relative z-10">
                    <div className="text-center max-w-4xl mx-auto space-y-6">
                        <div className="inline-flex items-center gap-2 px-6 py-3 glass-strong rounded-full border border-white/20 mb-4">
                            <Sparkles className="w-5 h-5 text-emerald-400" />
                            <span className="text-sm font-bold text-white tracking-wider uppercase">Product Categories</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                            Browse by <span className="gradient-text-animated">Category</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                            Find the perfect weighing solution for your specific needs
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="relative py-20">
                <div className="container-constraint">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((category, index) => {
                            const productCount = getProductsByCategory(category).length;
                            const info = categoryInfo[category];

                            return (
                                <Link
                                    key={category}
                                    href={`/products?category=${encodeURIComponent(category)}`}
                                    className="group block animate-slide-in-up"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="relative h-full glass-strong rounded-3xl border border-white/10 hover:border-blue-500/50 overflow-hidden transition-all duration-500 hover-lift p-8">
                                        {/* Top Gradient Bar */}
                                        <div className="h-1.5 bg-gradient-to-r from-blue-500 via-emerald-500 to-cyan-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 absolute top-0 left-0 right-0" />

                                        {/* Content */}
                                        <div className="space-y-6 pt-4">
                                            {/* Icon Badge */}
                                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-2xl border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 glow-blue text-4xl">
                                                {info?.icon || '📦'}
                                            </div>

                                            {/* Category Name */}
                                            <div>
                                                <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-400 transition-all duration-300">
                                                    {category}
                                                </h2>
                                                <div className="inline-block px-3 py-1 glass rounded-lg border border-white/10">
                                                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                                                        {productCount} {productCount === 1 ? 'Product' : 'Products'}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-400 leading-relaxed">
                                                {info?.description || 'View all products in this category'}
                                            </p>

                                            {/* CTA */}
                                            <div className="flex items-center gap-2 text-emerald-400 font-bold group-hover:gap-4 transition-all pt-4">
                                                <span>View Products</span>
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>

                                        {/* Hover Shimmer Effect */}
                                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20">
                <div className="container-constraint">
                    <div className="text-center glass-strong rounded-3xl border border-white/10 p-12">
                        <Package className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            Need Help Choosing?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                            Our experts are here to help you find the perfect weighing solution for your specific requirements
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/products"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
                            >
                                View All Products
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 glass border border-white/20 text-white font-bold rounded-xl hover:border-emerald-500/50 transition-all"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
