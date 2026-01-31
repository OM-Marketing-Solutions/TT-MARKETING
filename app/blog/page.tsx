import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowRight, Sparkles, TrendingUp, Scale, Factory } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog - TT Marketing | Weighing Industry Insights',
    description: 'Latest news, tips, and insights from the weighing scale industry. Expert advice on choosing and maintaining weighing equipment.',
};

export default function BlogPage() {
    const featuredPost = {
        title: 'The Ultimate Guide to Choosing the Right Weighing Scale for Your Business',
        excerpt: 'Selecting the perfect weighing scale is crucial for accuracy, compliance, and operational efficiency. Learn how to make the right choice for your specific industry needs.',
        image: 'https://placehold.co/1200x600/1e293b/10b981?text=Weighing+Scale+Guide',
        category: 'Guides',
        date: '2026-01-25',
        author: 'TT Marketing Team',
        slug: 'ultimate-guide-choosing-weighing-scale',
    };

    const blogPosts = [
        {
            title: '5 Essential Maintenance Tips for Industrial Weighing Scales',
            excerpt: 'Proper maintenance extends the life of your weighing equipment and ensures consistent accuracy. Follow these expert tips to keep your scales in top condition.',
            image: 'https://placehold.co/800x500/1e293b/10b981?text=Maintenance+Tips',
            category: 'Maintenance',
            date: '2026-01-20',
            author: 'Technical Team',
            slug: 'maintenance-tips-industrial-scales',
        },
        {
            title: 'Understanding Load Cell Technology: A Deep Dive',
            excerpt: 'Load cells are the heart of every weighing system. Explore the different types, their applications, and how to choose the right one for your needs.',
            image: 'https://placehold.co/800x500/1e293b/10b981?text=Load+Cell+Tech',
            category: 'Technology',
            date: '2026-01-15',
            author: 'Engineering Team',
            slug: 'load-cell-technology-explained',
        },
        {
            title: 'Why Invest in Receipt Printer Scales for Your Retail Business',
            excerpt: 'Receipt printer scales streamline billing operations and improve customer experience. Discover the benefits and ROI of upgrading your retail weighing system.',
            image: 'https://placehold.co/800x500/1e293b/10b981?text=Retail+Solutions',
            category: 'Business',
            date: '2026-01-10',
            author: 'Sales Team',
            slug: 'receipt-printer-scales-retail-business',
        },
        {
            title: 'Industrial Platform Scales: Capacity vs. Accuracy Trade-offs',
            excerpt: 'Learn how to balance capacity requirements with accuracy needs when selecting industrial platform scales for your facility.',
            image: 'https://placehold.co/800x500/1e293b/10b981?text=Platform+Scales',
            category: 'Technical',
            date: '2026-01-05',
            author: 'Technical Team',
            slug: 'platform-scales-capacity-accuracy',
        },
        {
            title: 'Compliance and Calibration: Legal Requirements for Weighing Equipment',
            excerpt: 'Stay compliant with industry regulations. Understand calibration requirements, certification standards, and legal metrology for your weighing scales.',
            image: 'https://placehold.co/800x500/1e293b/10b981?text=Compliance+Guide',
            category: 'Compliance',
            date: '2025-12-28',
            author: 'Compliance Team',
            slug: 'weighing-equipment-compliance-calibration',
        },
        {
            title: 'Digital vs. Analog Scales: Which is Right for You?',
            excerpt: 'Compare the pros and cons of digital and analog weighing technology to make an informed decision for your application.',
            image: 'https://placehold.co/800x500/1e293b/10b981?text=Digital+vs+Analog',
            category: 'Comparison',
            date: '2025-12-20',
            author: 'Product Team',
            slug: 'digital-vs-analog-scales',
        },
    ];

    const categories = [
        { name: 'All Posts', count: 7 },
        { name: 'Guides', count: 2 },
        { name: 'Maintenance', count: 1 },
        { name: 'Technology', count: 2 },
        { name: 'Business', count: 1 },
        { name: 'Compliance', count: 1 },
    ];

    return (
        <main className="pt-24 min-h-screen bg-black">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500 opacity-15 blur-[120px] rounded-full animate-pulse-glow" />
                    <div className="absolute  bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500 opacity-15 blur-[120px] rounded-full animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
                </div>

                <div className="container-constraint relative z-10">
                    <div className="text-center max-w-4xl mx-auto space-y-6">
                        <div className="inline-flex items-center gap-2 px-6 py-3 glass-strong rounded-full border border-white/20 mb-4">
                            <Sparkles className="w-5 h-5 text-emerald-400" />
                            <span className="text-sm font-bold text-white tracking-wider uppercase">Industry Insights</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                            <span className="gradient-text-animated">Our Blog</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                            Expert insights, guides, and news from the weighing industry
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="relative py-12">
                <div className="container-constraint">
                    <Link href={`/blog/${featuredPost.slug}`} className="group block">
                        <div className="glass-strong rounded-3xl border border-white/10 overflow-hidden hover:border-emerald-500/50 transition-all duration-500 hover-lift">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Image */}
                                <div className="relative h-80 md:h-full overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                    <Image
                                        src={featuredPost.image}
                                        alt={featuredPost.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full z-20">
                                        <span className="text-sm font-bold text-white">Featured</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <div className="inline-block px-3 py-1 glass rounded-lg border border-white/10 mb-4 self-start">
                                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                                            {featuredPost.category}
                                        </span>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-400 transition-all">
                                        {featuredPost.title}
                                    </h2>

                                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                        {featuredPost.excerpt}
                                    </p>

                                    <div className="flex items-center gap-6 text-sm text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            {new Date(featuredPost.date).toLocaleDateString('en-IN', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric',
                                            })}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <User className="w-4 h-4" />
                                            {featuredPost.author}
                                        </div>
                                    </div>

                                    <div className="mt-6 inline-flex items-center gap-2 text-emerald-400 font-bold group-hover:gap-4 transition-all">
                                        Read More
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="relative py-12">
                <div className="container-constraint">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <Link
                                key={index}
                                href={`/blog/${post.slug}`}
                                className="group block animate-slide-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="glass-strong rounded-3xl border border-white/10 overflow-hidden hover:border-emerald-500/50 transition-all duration-500 hover-lift h-full">
                                    {/* Image */}
                                    <div className="relative h-56 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 space-y-4">
                                        <div className="inline-block px-3 py-1 glass rounded-lg border border-white/10">
                                            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                                                {post.category}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-white line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-400 transition-all">
                                            {post.title}
                                        </h3>

                                        <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center gap-4 text-xs text-gray-500 pt-4 border-t border-white/10">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {new Date(post.date).toLocaleDateString('en-IN', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                })}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <User className="w-3 h-3" />
                                                {post.author}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20">
                <div className="container-constraint">
                    <div className="text-center glass-strong rounded-3xl border border-white/10 p-12">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            Need Expert Advice?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Our team is here to help you choose the perfect weighing solution
                        </p>
                        <Link
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
                        >
                            Contact Us
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
