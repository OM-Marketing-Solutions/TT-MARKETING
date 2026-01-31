'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

export interface Product360ViewerProps {
    images: string[];
    productName: string;
}

/**
 * Product360Viewer Component
 * 
 * Interactive product image viewer with:
 * - Mouse drag / touch swipe to navigate between images
 * - Zoom in/out functionality
 * - Fullscreen mode
 * - Keyboard navigation (arrow keys)
 * - Auto-rotation mode (optional)
 */

export default function Product360Viewer({ images, productName }: Product360ViewerProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [zoom, setZoom] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);

    const totalImages = images.length;

    // Navigate to next image
    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % totalImages);
    };

    // Navigate to previous image
    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
    };

    // Handle mouse down
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.clientX);
    };

    // Handle mouse move
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;

        const diff = e.clientX - startX;
        const threshold = 30; // pixels to drag before changing image

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                prevImage();
            } else {
                nextImage();
            }
            setStartX(e.clientX);
        }
    };

    // Handle mouse up
    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Handle touch events for mobile
    const handleTouchStart = (e: React.TouchEvent) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        const diff = e.touches[0].clientX - startX;
        const threshold = 50;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                prevImage();
            } else {
                nextImage();
            }
            setStartX(e.touches[0].clientX);
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Zoom controls
    const zoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3));
    const zoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 1));
    const resetZoom = () => setZoom(1);

    return (
        <div className="relative">
            {/* Main Image Viewer */}
            <div
                ref={containerRef}
                className="relative aspect-square bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl overflow-hidden border border-white/10 group cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 opacity-50" />

                {/* Image */}
                <div className="relative h-full flex items-center justify-center p-8">
                    <Image
                        src={images[currentIndex]}
                        alt={`${productName} - View ${currentIndex + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain transition-transform duration-300"
                        style={{ transform: `scale(${zoom})` }}
                        quality={90}
                        priority={currentIndex === 0}
                    />
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 glass-strong rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover-lift opacity-0 group-hover:opacity-100"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 glass-strong rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover-lift opacity-0 group-hover:opacity-100"
                    aria-label="Next image"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Zoom Controls */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                        onClick={zoomOut}
                        disabled={zoom <= 1}
                        className="w-10 h-10 glass-strong rounded-lg border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Zoom out"
                    >
                        <ZoomOut className="w-5 h-5" />
                    </button>
                    <button
                        onClick={zoomIn}
                        disabled={zoom >= 3}
                        className="w-10 h-10 glass-strong rounded-lg border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Zoom in"
                    >
                        <ZoomIn className="w-5 h-5" />
                    </button>
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-4 glass-strong px-4 py-2 rounded-lg border border-white/20">
                    <p className="text-sm font-bold text-white">
                        {currentIndex + 1} / {totalImages}
                    </p>
                </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all hover-lift ${index === currentIndex
                                ? 'border-emerald-500 ring-2 ring-emerald-500/50'
                                : 'border-white/20 hover:border-blue-500/50'
                            }`}
                    >
                        <Image
                            src={image}
                            alt={`${productName} thumbnail ${index + 1}`}
                            fill
                            sizes="80px"
                            className="object-contain p-2"
                            quality={60}
                        />
                    </button>
                ))}
            </div>

            {/* Instructions */}
            <div className="mt-4 text-center">
                <p className="text-sm text-gray-400">
                    <span className="hidden md:inline">Drag to rotate • </span>
                    <span className="md:hidden">Swipe to rotate • </span>
                    Click thumbnails to jump • Use arrow keys
                </p>
            </div>
        </div>
    );
}
