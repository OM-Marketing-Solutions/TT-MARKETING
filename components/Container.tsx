import React from 'react';

/**
 * Container Component
 * 
 * Purpose: Provides consistent max-width and padding across all pages
 * Mobile-first: Uses responsive padding (16px mobile → 24px tablet → 32px desktop)
 * 
 * @param children - React children to wrap
 * @param className - Additional Tailwind classes for customization
 */

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
}

export default function Container({
    children,
    className = '',
    as: Component = 'div'
}: ContainerProps) {
    return (
        <Component className={`container-constraint ${className}`}>
            {children}
        </Component>
    );
}
