import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllProductSlugs, getProductBySlug } from '@/lib/productsData';
import Product360Viewer from '@/components/Product360Viewer';
import { ArrowLeft, Check, Package, Phone, Mail, MessageCircle } from 'lucide-react';

/**
 * Product Detail Page
 * 
 * Dynamic route for individual product details
 * Features:
 * - 360° product viewer
 * - Complete technical specifications
 * - Features list
 * - Applications
 * - Request quote CTA
 */

// Generate static params for all products
export async function generateStaticParams() {
    const slugs = getAllProductSlugs();
    return slugs.map((slug) => ({
        slug,
    }));
}

// Generate dynamic metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        return {
            title: 'Product Not Found',
        };
    }

    return {
        title: `${product.title} - TT Marketing`,
        description: product.shortDescription,
        keywords: [product.title, product.category, 'weighing scale', 'precision weighing'],
    };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    return (
        <>
            {/* Breadcrumb Navigation */}
            <section className="bg-black border-b border-white/10">
                <div className="container-constraint py-6">
                    <nav className="flex items-center gap-2 text-sm">
                        <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                            Home
                        </Link>
                        <span className="text-gray-600">/</span>
                        <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                            Products
                        </Link>
                        <span className="text-gray-600">/</span>
                        <span className="text-white font-semibold">{product.title}</span>
                    </nav>
                </div>
            </section>

            {/* Main Product Section */}
            <section className="relative py-20 bg-black overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500 opacity-15 blur-[120px] rounded-full animate-pulse-glow" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500 opacity-15 blur-[120px] rounded-full animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
                </div>

                <div className="container-constraint relative z-10">
                    {/* Back Button */}
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-2 glass-strong px-6 py-3 rounded-xl border border-white/10 hover:border-blue-500/50 text-white font-semibold transition-all hover-lift mb-8"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Products
                    </Link>

                    {/* Product Grid */}
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Left: 360° Viewer */}
                        <div className="animate-slide-in-up">
                            <Product360Viewer images={product.images.gallery} productName={product.title} />
                        </div>

                        {/* Right: Product Info */}
                        <div className="space-y-8 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
                            {/* Category Badge */}
                            <div className="inline-flex items-center gap-2 glass-strong px-4 py-2 rounded-xl border border-white/10">
                                <Package className="w-4 h-4 text-emerald-400" />
                                <span className="text-sm font-bold text-emerald-400 uppercase tracking-wide">
                                    {product.category}
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight text-shadow">
                                {product.title}
                            </h1>

                            {/* Short Description */}
                            <p className="text-xl text-gray-300 leading-relaxed">
                                {product.shortDescription}
                            </p>

                            {/* Full Description */}
                            <div className="glass-strong p-6 rounded-2xl border border-white/10">
                                <p className="text-gray-400 leading-relaxed">
                                    {product.fullDescription}
                                </p>
                            </div>

                            {/* Contact CTAs */}
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#contact"
                                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 animate-gradient text-white font-bold rounded-2xl hover-glow transition-all duration-500 shadow-2xl"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    <span>Request Quote</span>
                                </a>
                                <a
                                    href="tel:+91-9898579707"
                                    className="group inline-flex items-center gap-3 px-8 py-4 glass-strong hover:bg-white/10 border border-white/20 hover:border-blue-500/50 text-white font-bold rounded-2xl transition-all duration-300 hover-lift"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>Call Now</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Features & Specifications Section */}
                    <div className="grid lg:grid-cols-2 gap-8 mt-20">
                        {/* Features */}
                        <div className="glass-strong p-8 rounded-3xl border border-white/10 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center">
                                    <Check className="w-6 h-6 text-white" />
                                </div>
                                Key Features
                            </h2>
                            <ul className="space-y-4">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3 group/item">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center mt-0.5 group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-gray-300 font-medium group-hover/item:text-white transition-colors">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Technical Specifications */}
                        <div className="glass-strong p-8 rounded-3xl border border-white/10 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                                    <Package className="w-6 h-6 text-white" />
                                </div>
                                Technical Specifications
                            </h2>
                            <div className="space-y-4">
                                <SpecRow label="Maximum Capacity" value={product.specifications.maxCapacity} />
                                <SpecRow label="Minimum Weight" value={product.specifications.minWeight} />
                                <SpecRow label="Accuracy / Precision" value={product.specifications.accuracy} />
                                <SpecRow label="Weighing Range" value={product.specifications.weighingRange} />
                                <SpecRow label="Max Load Tolerance" value={product.specifications.maxLoadTolerance} />
                                <SpecRow label="Material" value={product.specifications.material} />

                                {/* Dimensions */}
                                <div className="pt-4 border-t border-white/10">
                                    <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wide mb-3">Dimensions</h3>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="glass p-3 rounded-lg border border-white/10">
                                            <p className="text-xs text-gray-500 mb-1">Height</p>
                                            <p className="text-white font-bold">{product.specifications.dimensions.height}</p>
                                        </div>
                                        <div className="glass p-3 rounded-lg border border-white/10">
                                            <p className="text-xs text-gray-500 mb-1">Width</p>
                                            <p className="text-white font-bold">{product.specifications.dimensions.width}</p>
                                        </div>
                                        <div className="glass p-3 rounded-lg border border-white/10">
                                            <p className="text-xs text-gray-500 mb-1">Length</p>
                                            <p className="text-white font-bold">{product.specifications.dimensions.length}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Applications Section */}
                    <div className="glass-strong p-8 rounded-3xl border border-white/10 mt-8 animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
                        <h2 className="text-3xl font-bold text-white mb-6">Applications</h2>
                        <div className="flex flex-wrap gap-3">
                            {product.applications.map((application, index) => (
                                <div
                                    key={index}
                                    className="glass px-5 py-3 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-all"
                                >
                                    <span className="text-gray-300 font-medium">{application}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-20">
                        <div className="inline-flex flex-col items-center gap-6 glass-strong p-10 rounded-3xl border border-white/10">
                            <h3 className="text-3xl font-bold text-white">Ready to get started?</h3>
                            <p className="text-gray-400 max-w-2xl">
                                Contact our team for expert consultation, custom quotes, and technical support.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <a
                                    href="#contact"
                                    className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 animate-gradient text-white font-bold text-lg rounded-2xl hover-glow transition-all duration-500 shadow-2xl"
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    <span>Get Custom Quote</span>
                                </a>
                                <a
                                    href="mailto:ttmarketing999@gmail.com"
                                    className="group inline-flex items-center gap-3 px-10 py-5 glass-strong hover:bg-white/10 border border-white/20 hover:border-blue-500/50 text-white font-bold text-lg rounded-2xl transition-all duration-300 hover-lift"
                                >
                                    <Mail className="w-6 h-6" />
                                    <span>Email Us</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

// Spec Row Component
function SpecRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide">{label}</span>
            <span className="text-white font-bold text-right">{value}</span>
        </div>
    );
}
