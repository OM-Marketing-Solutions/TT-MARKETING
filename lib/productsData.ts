/**
 * Products Data
 * 
 * Centralized product catalog with complete technical specifications
 * and imagery for the product listing and detail pages.
 */

export interface ProductSpecifications {
    maxCapacity: string;
    minWeight: string;
    accuracy: string;
    weighingRange: string;
    maxLoadTolerance: string;
    material: string;
    dimensions: {
        height: string;
        width: string;
        length: string;
    };
}

export interface Product {
    id: string;
    slug: string;
    title: string;
    category: string;
    shortDescription: string;
    fullDescription: string;
    features: string[];
    specifications: ProductSpecifications;
    images: {
        main: string;
        gallery: string[];
    };
    applications: string[];
}

export const products: Product[] = [
    {
        id: '1',
        slug: 'digital-table-top',
        title: 'Digital Table Top Weighing Scales',
        category: 'Retail & Laboratory',
        shortDescription: 'Compact digital weighing scales with high-precision sensors for retail and laboratory use',
        fullDescription: 'Our Digital Table Top Weighing Scales combine compact design with exceptional precision. Featuring a stainless steel top plate and advanced load cell technology, these scales are perfect for retail counters, laboratories, and quality control applications. The bright LED/LCD display ensures easy reading in all lighting conditions.',
        features: [
            'Compact and portable design',
            'Stainless steel weighing platform',
            'High-precision load cell sensors',
            'Bright LED/LCD display',
            'AC/DC operation with rechargeable battery',
            'Tare function and unit conversion',
            'Overload protection',
            'Auto-off power saving mode',
        ],
        specifications: {
            maxCapacity: '30 kg (customizable up to 60 kg)',
            minWeight: '5 grams',
            accuracy: '±1g to ±5g (depending on model)',
            weighingRange: '5g to 30kg',
            maxLoadTolerance: '150% of max capacity',
            material: 'Stainless steel platform with ABS body',
            dimensions: {
                height: '100 mm',
                width: '300 mm',
                length: '350 mm',
            },
        },
        images: {
            main: '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.00.jpeg',
            gallery: [
                '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.00.jpeg',
                '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.00 (1).jpeg',
                'https://placehold.co/800x600/1e293b/10b981?text=Table+Top+Scale+Front',
                'https://placehold.co/800x600/1e293b/10b981?text=Display+Panel',
                'https://placehold.co/800x600/1e293b/10b981?text=Side+View',
                'https://placehold.co/800x600/1e293b/10b981?text=Platform+Detail',
            ],
        },
        applications: ['Retail shops', 'Grocery stores', 'Laboratories', 'Quality control', 'Jewellery stores'],
    },
    {
        id: '2',
        slug: 'receipt-printer',
        title: 'Receipt Printer Weighing Scales',
        category: 'Retail & Billing',
        shortDescription: 'Advanced weighing scales with integrated thermal receipt printer for seamless billing operations',
        fullDescription: 'Transform your retail operations with our Receipt Printer Weighing Scales. These intelligent scales combine precise weighing with instant receipt printing, barcode scanning, and price computing functions. Ideal for supermarkets, grocery stores, and retail chains requiring fast, accurate billing.',
        features: [
            'Built-in thermal receipt printer',
            'Price computing function',
            'Barcode label printing support',
            'Multi-currency support',
            'Product database (PLU memory)',
            'Real-time clock and date stamping',
            'RS-232/USB connectivity',
            'Dual-side display (customer & operator)',
        ],
        specifications: {
            maxCapacity: '30 kg (models available up to 60 kg)',
            minWeight: '10 grams',
            accuracy: '±2g to ±10g',
            weighingRange: '10g to 30kg',
            maxLoadTolerance: '150% of max capacity',
            material: 'Stainless steel pan with reinforced ABS housing',
            dimensions: {
                height: '350 mm',
                width: '320 mm',
                length: '420 mm',
            },
        },
        images: {
            main: '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.01.jpeg',
            gallery: [
                '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.01.jpeg',
                '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.01 (1).jpeg',
                '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.01 (2).jpeg',
                'https://placehold.co/800x600/1e293b/10b981?text=Printer+Scale+View',
                'https://placehold.co/800x600/1e293b/10b981?text=Receipt+Sample',
                'https://placehold.co/800x600/1e293b/10b981?text=Control+Panel',
            ],
        },
        applications: ['Supermarkets', 'Grocery stores', 'Vegetable markets', 'Meat shops', 'Bakeries'],
    },
    {
        id: '3',
        slug: 'industrial-platform',
        title: 'Industrial Platform Weighing Scales',
        category: 'Industrial',
        shortDescription: 'Heavy-duty platform scales with stainless steel construction for industrial weighing applications',
        fullDescription: 'Built to withstand the toughest industrial environments, our Industrial Platform Weighing Scales deliver reliable performance for heavy-duty applications. The robust stainless steel platform and reinforced load cells ensure accurate measurements even under demanding conditions.',
        features: [
            'Heavy-duty stainless steel platform',
            'Industrial-grade load cells',
            'IP65/IP67 waterproof rating (optional)',
            'Remote indicator with cable',
            'Ramp and support legs included',
            'Calibration certificate provided',
            'Overload and underload alarm',
            'Data logging capability',
        ],
        specifications: {
            maxCapacity: '500 kg to 3000 kg',
            minWeight: '100 grams',
            accuracy: '±50g to ±500g (based on capacity)',
            weighingRange: '100g to 3000kg',
            maxLoadTolerance: '120% of max capacity',
            material: 'SS304 stainless steel platform with powder-coated MS frame',
            dimensions: {
                height: '120 mm',
                width: '1200 mm',
                length: '1200 mm',
            },
        },
        images: {
            main: '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.02.jpeg',
            gallery: [
                '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.02.jpeg',
                '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.02 (1).jpeg',
                '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.02 (2).jpeg',
                'https://placehold.co/800x600/1e293b/10b981?text=Platform+Top',
                'https://placehold.co/800x600/1e293b/10b981?text=Load+Cells',
                'https://placehold.co/800x600/1e293b/10b981?text=Full+Setup',
            ],
        },
        applications: ['Manufacturing', 'Warehouses', 'Logistics', 'Chemical plants', 'Pharmaceutical industry'],
    },
    {
        id: '4',
        slug: 'floor-weighing',
        title: 'Floor Weighing Scales',
        category: 'Warehouse & Logistics',
        shortDescription: 'Rugged floor scales with diamond plate platform for heavy load handling in warehouses',
        fullDescription: 'Our Floor Weighing Scales are engineered for high-volume warehouse and logistics operations. The anti-slip diamond plate platform provides safe operation while maintaining precision accuracy for loads up to several tons. Perfect for shipping, receiving, and inventory management.',
        features: [
            'Diamond plate anti-slip surface',
            'Low-profile design for easy loading',
            'Heavy-duty MS construction',
            'Portable and relocatable',
            'Weather-resistant powder coating',
            'Optional ramps for pallet jack access',
            'Large LED display with stand',
            'Check weighing with Hi/Lo limits',
        ],
        specifications: {
            maxCapacity: '1000 kg to 5000 kg',
            minWeight: '200 grams',
            accuracy: '±100g to ±1kg',
            weighingRange: '200g to 5000kg',
            maxLoadTolerance: '120% of max capacity',
            material: 'MS diamond plate with powder-coated frame',
            dimensions: {
                height: '100 mm',
                width: '1500 mm',
                length: '1500 mm',
            },
        },
        images: {
            main: '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.03.jpeg',
            gallery: [
                '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.03.jpeg',
                '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.03 (1).jpeg',
                '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.03 (2).jpeg',
                'https://placehold.co/800x600/1e293b/10b981?text=Floor+Scale+Diamond+Plate',
                'https://placehold.co/800x600/1e293b/10b981?text=Indicator+Display',
                'https://placehold.co/800x600/1e293b/10b981?text=Ramp+Access',
            ],
        },
        applications: ['Warehouses', 'Logistics centers', 'Shipping & receiving', 'Distribution centers', 'Freight terminals'],
    },
    {
        id: '5',
        slug: 'heavy-duty-industrial',
        title: 'Heavy-Duty Industrial Systems',
        category: 'Heavy Industrial',
        shortDescription: 'Extra-strong industrial weighing systems for extreme load capacity and harsh environments',
        fullDescription: 'Designed for the most demanding industrial applications, our Heavy-Duty Industrial Weighing Systems feature extra-strong MS construction and industrial-grade indicators. These systems handle multi-ton loads with precision while withstanding harsh environmental conditions.',
        features: [
            'Extra strong MS structure',
            'High-capacity load cells (multiple)',
            'Shock-resistant reinforced body',
            'Industrial-grade digital indicator',
            'Weatherproof enclosure (IP67)',
            'Network connectivity (RS-485/Ethernet)',
            'Data export to PC/printer',
            'Multi-range weighing capability',
        ],
        specifications: {
            maxCapacity: '5 tons to 100 tons',
            minWeight: '1 kg',
            accuracy: '±1kg to ±20kg (based on capacity)',
            weighingRange: '1kg to 100 tons',
            maxLoadTolerance: '110% of max capacity',
            material: 'Heavy MS construction with SS load cells',
            dimensions: {
                height: '200 mm',
                width: '3000 mm',
                length: '6000 mm',
            },
        },
        images: {
            main: '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.04.jpeg',
            gallery: [
                '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.04.jpeg',
                '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.04 (1).jpeg',
                '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.04 (2).jpeg',
                'https://placehold.co/800x600/1e293b/10b981?text=Heavy+Duty+Platform',
                'https://placehold.co/800x600/1e293b/10b981?text=Junction+Box',
                'https://placehold.co/800x600/1e293b/10b981?text=Industrial+Setup',
            ],
        },
        applications: ['Steel mills', 'Mining operations', 'Construction sites', 'Scrap yards', 'Heavy machinery weighing'],
    },
    {
        id: '6',
        slug: 'load-cells-components',
        title: 'Load Cells & Components',
        category: 'Components & Custom Solutions',
        shortDescription: 'Precision load cells and industrial components for custom weighing system fabrication',
        fullDescription: 'We supply high-quality load cells and weighing components for custom system integration and OEM applications. From precision single-point load cells to heavy-duty compression load cells, we provide complete solutions including indicators, junction boxes, and mounting hardware.',
        features: [
            'Precision load cells (0.5kg to 100 tons)',
            'Single-point, S-type, and compression types',
            'Stainless steel and alloy steel construction',
            'Junction boxes and summing boards',
            'Digital indicators and controllers',
            'Custom mounting and fabrication',
            'Calibration and certification',
            'Technical support and consultation',
        ],
        specifications: {
            maxCapacity: '0.5 kg to 100 tons (various models)',
            minWeight: 'Depends on load cell type',
            accuracy: 'C3 to C6 accuracy class',
            weighingRange: 'Application specific',
            maxLoadTolerance: '150% of rated capacity',
            material: 'Stainless steel (SS304/SS316) or nickel-plated alloy steel',
            dimensions: {
                height: 'Varies by model',
                width: 'Varies by model',
                length: 'Varies by model',
            },
        },
        images: {
            main: '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.05.jpeg',
            gallery: [
                '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.05.jpeg',
                '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.05 (1).jpeg',
                '/PRODUCTS/WhatsApp Image 2026-01-21 at 11.10.05 (2).jpeg',
                'https://placehold.co/800x600/1e293b/10b981?text=Load+Cell+Types',
                'https://placehold.co/800x600/1e293b/10b981?text=Mounting+Hardware',
                'https://placehold.co/800x600/1e293b/10b981?text=Digital+Indicators',
            ],
        },
        applications: ['Custom system integration', 'OEM applications', 'Tank and hopper weighing', 'Conveyor belt scales', 'Special purpose weighing'],
    },
];

/**
 * Get product by slug
 */
export function getProductBySlug(slug: string): Product | undefined {
    return products.find((product) => product.slug === slug);
}

/**
 * Get all product slugs for static generation
 */
export function getAllProductSlugs(): string[] {
    return products.map((product) => product.slug);
}

/**
 * Get all products
 */
export function getAllProducts(): Product[] {
    return products;
}
