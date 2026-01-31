/**
 * Products Data
 * 
 * Complete product catalog sourced from /public/sarkari/odoo.txt
 * All 16 weighing scale products with accurate specifications
 */

export interface ProductSpecifications {
    capacity: string;
    accuracy: string;
    platform?: string;
    display?: string;
    power?: string;
    material?: string;
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
        id: '2',
        slug: 'receipt-printer-weighing-scale',
        title: 'Receipt Printer Weighing Scale (POS Billing Scale)',
        category: 'Table Top Scales',
        shortDescription: 'Smart Weighing + Billing + Printing in One Machine',
        fullDescription: 'This advanced Receipt Printer Weighing Scale is designed for retail shops, supermarkets, fruit & vegetable vendors, sweet shops, meat shops, and grocery stores. It combines accurate weighing, billing, and receipt printing in one powerful system — helping you save time, reduce errors, and look more professional.',
        features: [
            'Built-in Thermal Receipt Printer',
            'Print customer bills instantly with weight, price, item name & total',
            'High Accuracy Digital Weighing',
            'Precise weight measurement for retail use',
            'Product Memory (PLU System)',
            'Store multiple product names & prices for fast billing',
            'LCD Display with Backlight',
            'Clear display for weight, rate & amount',
            'Heavy Duty Stainless Steel Platform',
            'Durable & hygienic weighing tray',
            'Full Keypad for Easy Operation',
            'Fast item entry, tare, print, clear & function keys',
            'Dual Communication Ports (COM 1 & COM 2)',
            'For PC, billing software & data connectivity'
        ],
        specifications: {
            capacity: 'Up to 30/60 kg',
            accuracy: '±2g to ±10g',
            platform: 'Stainless Steel',
            display: 'LCD with Backlight',
            power: 'AC/DC with Battery Backup'
        },
        images: {
            main: '/sarkari/2.jpeg',
            gallery: ['/sarkari/2.jpeg']
        },
        applications: ['Retail shops', 'Supermarkets', 'Fruit & vegetable vendors', 'Sweet shops', 'Meat shops', 'Grocery stores']
    },
    {
        id: '3',
        slug: 'heavy-duty-platform-pole-type',
        title: 'Heavy Duty Platform Digital Weighing Scale (Pole Type)',
        category: 'Platform Scales',
        shortDescription: 'Industrial-Grade Accuracy for Heavy Loads',
        fullDescription: 'This Platform Digital Weighing Scale is designed for warehouses, factories, godowns, logistics, agriculture, and wholesale markets. Built with a strong MS structure and stainless steel platform, it delivers reliable, accurate, and long-lasting performance for heavy-duty weighing applications.',
        features: [
            'Heavy Duty Stainless Steel Platform',
            'Strong, rust-resistant weighing surface for industrial use',
            'Pole Type Indicator Display',
            'Raised display for easy viewing while loading heavy items',
            'High Accuracy Load Cell System',
            'Stable & precise weight readings',
            'Bright Digital Display (LED/LCD)',
            'Clear visibility from distance',
            'Tare & Zero Functions',
            'For container and net weight calculation',
            'Rechargeable Battery Backup',
            'Works during power cuts',
            'Adjustable Anti-Skid Legs',
            'Stable positioning on uneven floors',
            'Strong MS Body Frame',
            'Long life even in rough working conditions'
        ],
        specifications: {
            capacity: '100kg to 500kg',
            accuracy: '±20g to ±100g',
            platform: 'Stainless Steel with MS Frame',
            display: 'LED/LCD Pole Mounted',
            power: 'AC/DC with Battery'
        },
        images: {
            main: '/sarkari/3.jpeg',
            gallery: ['/sarkari/3.jpeg', '/sarkari/3.1.jpeg']
        },
        applications: ['Warehouses', 'Factories', 'Godowns', 'Logistics', 'Agriculture', 'Wholesale markets']
    },
    {
        id: '4',
        slug: 'platform-weighing-scale-variant',
        title: 'Platform Digital Weighing Scale',
        category: 'Platform Scales',
        shortDescription: 'Reliable Platform Scale for Industrial Applications',
        fullDescription: 'Heavy-duty platform weighing scale perfect for commercial and light industrial use. Features robust construction and accurate digital weighing for consistent performance.',
        features: [
            'Heavy Duty Stainless Steel Platform',
            'Pole Type Indicator Display',
            'High Accuracy Load Cell System',
            'Bright Digital Display',
            'Tare & Zero Functions',
            'Rechargeable Battery Backup',
            'Adjustable Anti-Skid Legs',
            'Strong MS Body Frame'
        ],
        specifications: {
            capacity: '100kg to 500kg',
            accuracy: '±20g to ±100g',
            platform: 'Stainless Steel',
            display: 'Digital LED/LCD',
            power: 'AC/DC Operation'
        },
        images: {
            main: '/sarkari/4.jpeg',
            gallery: ['/sarkari/4.jpeg']
        },
        applications: ['Warehouses', 'Factories', 'Commercial markets', 'Logistics centers']
    },
    {
        id: '5',
        slug: 'platform-scale-back-frame',
        title: 'Heavy Duty Platform Digital Weighing Scale with Back Frame',
        category: 'Platform Scales',
        shortDescription: 'Industrial Strength • High Stability • Accurate Weighing',
        fullDescription: 'This Heavy Duty Platform Digital Weighing Scale with Back Frame is specially designed for weighing bulky, tall, and unstable items. The strong MS back frame provides extra support, making it ideal for gas cylinders, sacks, cartons, drums, and standing loads in industrial and commercial environments.',
        features: [
            'Strong Back Frame Support',
            'Prevents items from falling & improves load stability',
            'Heavy Duty Stainless Steel Platform',
            'Rust-resistant, easy to clean, long life',
            'High Accuracy Load Cell System',
            'Stable and repeatable weight readings',
            'Bright Digital LED Display',
            'Clear visibility in factory & warehouse lighting',
            'Tare & Zero Functions',
            'Net weight calculation with containers',
            'Rugged MS Body Structure',
            'Designed for rough industrial use',
            'Adjustable Anti-Skid Legs',
            'Stable operation on uneven floors',
            'Rechargeable Battery Backup',
            'Continuous use during power cuts'
        ],
        specifications: {
            capacity: '200kg to 500kg',
            accuracy: '±50g to ±100g',
            platform: 'Stainless Steel with Back Frame',
            display: 'LED Digital',
            power: 'AC/DC with Battery',
            material: 'MS Body with SS Platform'
        },
        images: {
            main: '/sarkari/5.jpeg',
            gallery: ['/sarkari/5.jpeg']
        },
        applications: ['Gas cylinder weighing', 'Sack weighing', 'Carton handling', 'Drum weighing', 'Industrial warehouses']
    },
    {
        id: '6',
        slug: 'platform-back-frame-variant',
        title: 'Platform Weighing Scale with Back Support',
        category: 'Platform Scales',
        shortDescription: 'Enhanced Stability for Tall & Bulky Items',
        fullDescription: 'Platform scale with integrated back frame support for weighing tall and unstable loads safely. Perfect for industrial and commercial applications requiring extra stability.',
        features: [
            'Strong Back Frame Support',
            'Heavy Duty Stainless Steel Platform',
            'High Accuracy Load Cell System',
            'Bright Digital LED Display',
            'Tare & Zero Functions',
            'Rugged MS Body Structure',
            'Adjustable Anti-Skid Legs',
            'Rechargeable Battery Backup'
        ],
        specifications: {
            capacity: '200kg to 500kg',
            accuracy: '±50g to ±100g',
            platform: 'Stainless Steel',
            display: 'Digital LED',
            power: 'AC/DC with Battery'
        },
        images: {
            main: '/sarkari/6.jpeg',
            gallery: ['/sarkari/6.jpeg', '/sarkari/6.1.jpeg']
        },
        applications: ['Industrial use', 'Warehouse operations', 'Commercial weighing', 'Heavy load handling']
    },
    {
        id: '7',
        slug: 'stainless-steel-table-top-scale',
        title: 'Stainless Steel Table Top Digital Weighing Scale',
        category: 'Table Top Scales',
        shortDescription: 'Compact • Durable • Accurate for Daily Business Use',
        fullDescription: 'This Stainless Steel Table Top Digital Weighing Scale is designed for fast, hygienic, and accurate weighing in retail and commercial environments. With a stainless steel platform and compact body, it is ideal for food-related businesses and daily counter operations.',
        features: [
            'Stainless Steel Weighing Platform',
            'Hygienic, rust-resistant & easy to clean',
            'High Precision Digital Sensor',
            'Stable and accurate weight measurement',
            'Bright LED Digital Display',
            'Clear visibility for operator',
            'Tare Function',
            'Easy net weight calculation with containers',
            'Compact Counter Design',
            'Saves space on shop counters',
            'Rechargeable Battery + AC Power',
            'Continuous operation during power cuts',
            'Overload Protection',
            'Prevents damage to load cell'
        ],
        specifications: {
            capacity: '3kg to 30kg',
            accuracy: '0.5g / 1g / 2g / 5g (as per capacity)',
            platform: 'Approx. 230 × 190 mm',
            display: 'LED Digital',
            power: 'AC/DC with Battery'
        },
        images: {
            main: '/sarkari/7.jpeg',
            gallery: ['/sarkari/7.jpeg', '/sarkari/7.2.jpeg']
        },
        applications: ['Retail shops', 'Grocery stores', 'Food businesses', 'Bakeries', 'Sweet shops']
    },
    {
        id: '8',
        slug: 'table-top-digital-scale',
        title: 'Stainless Steel Table Top Digital Scale',
        category: 'Table Top Scales',
        shortDescription: 'Precision Weighing for Retail Operations',
        fullDescription: 'Compact stainless steel table top weighing scale perfect for retail and commercial use. Features high precision sensors and durable construction for daily operations.',
        features: [
            'Stainless Steel Weighing Platform',
            'High Precision Digital Sensor',
            'Bright LED Digital Display',
            'Tare Function',
            'Compact Counter Design',
            'Rechargeable Battery + AC Power',
            'Overload Protection'
        ],
        specifications: {
            capacity: '3kg to 30kg',
            accuracy: '0.5g to 5g',
            platform: 'Stainless Steel',
            display: 'LED',
            power: 'AC/DC'
        },
        images: {
            main: '/sarkari/8.jpeg',
            gallery: ['/sarkari/8.jpeg']
        },
        applications: ['Retail', 'Commercial', 'Food service', 'Counter weighing']
    },
    {
        id: '9',
        slug: 'counter-top-stainless-steel-scale',
        title: 'Counter Top Stainless Steel Digital Weighing Scale',
        category: 'Table Top Scales',
        shortDescription: 'Durable • Accurate • Perfect for Daily Retail Use',
        fullDescription: 'This Counter Top Stainless Steel Digital Weighing Scale is built for reliable and hygienic weighing in retail and food-related environments. With a stainless steel platform and strong body, it is ideal for continuous daily counter operations.',
        features: [
            'Stainless Steel Weighing Platform',
            'Hygienic, rust-resistant & easy to clean',
            'High Precision Digital Sensor',
            'Fast, stable & accurate weight measurement',
            'Bright LED Digital Display',
            'Clear and easy to read',
            'Tare Function',
            'Easy net weight calculation with containers',
            'Compact Counter Design',
            'Space-saving for retail counters',
            'Rechargeable Battery Backup',
            'Works during power cuts',
            'Overload Protection',
            'Prevents damage to load cell'
        ],
        specifications: {
            capacity: '3kg to 30kg',
            accuracy: '0.5g / 1g / 2g / 5g (as per capacity)',
            platform: 'Approx. 230 × 190 mm',
            display: 'LED Digital',
            power: 'AC/DC with Battery'
        },
        images: {
            main: '/sarkari/9.jpeg',
            gallery: ['/sarkari/9.jpeg']
        },
        applications: ['Retail counters', 'Grocery', 'Food service', 'Daily weighing operations']
    },
    {
        id: '10',
        slug: 'industrial-platform-floor-type',
        title: 'Heavy Duty Industrial Platform Weighing Scale (Floor Type)',
        category: 'Platform Scales',
        shortDescription: 'High Capacity • Rugged Construction • Accurate Industrial Weighing',
        fullDescription: 'This Industrial Platform Weighing Scale is designed for weighing heavy and bulky materials in warehouses, factories, logistics centers, and industrial plants. With a diamond-pattern MS platform and pole-mounted digital indicator, it delivers reliable, accurate, and long-term performance in demanding environments.',
        features: [
            'Heavy Duty Diamond Plate Platform',
            'Anti-slip surface for safe loading of pallets & drums',
            'Pole Mounted Digital Indicator',
            'Raised display for easy viewing',
            'High Precision Load Cell System',
            'Multiple load cells for stable & accurate readings',
            'Rugged MS Frame Construction',
            'Built for rough industrial handling',
            'Bright LED Digital Display',
            'Visible from distance in warehouse lighting',
            'Tare & Zero Functions',
            'Easy pallet & container weight deduction',
            'Adjustable Heavy-Duty Legs',
            'Stable installation on uneven floors',
            'Rechargeable Battery + AC Power',
            'Uninterrupted operation'
        ],
        specifications: {
            capacity: '500kg to 3000kg',
            accuracy: '±100g to ±500g',
            platform: 'Diamond Plate MS',
            display: 'LED Pole Mounted',
            power: 'AC/DC with Battery',
            material: 'Heavy MS Construction'
        },
        images: {
            main: '/sarkari/10.jpeg',
            gallery: ['/sarkari/10.jpeg']
        },
        applications: ['Manufacturing', 'Warehouses', 'Logistics centers', 'Industrial plants', 'Heavy material handling']
    },
    {
        id: '11',
        slug: 'baby-infant-weighing-scale-height',
        title: 'Baby / Infant Weighing Scale with Height Measurement',
        category: 'Specialty Scales',
        shortDescription: 'Accurate Growth Monitoring for Infants & Toddlers',
        fullDescription: 'This Baby Weighing Scale with Height Measurement is specially designed for pediatric use in hospitals, clinics, and healthcare centers. It allows accurate measurement of both weight and height, helping doctors and nurses monitor infant growth and development.',
        features: [
            'Integrated Height Measurement Rod',
            'Simultaneous height & weight measurement',
            'High Accuracy Digital Weighing System',
            'Precise readings for infants & toddlers',
            'Bright Digital Display',
            'Easy to read for medical staff',
            'Strong & Stable Platform',
            'Safe for babies and small children',
            'Smooth, Child-Friendly Design',
            'Rounded edges for safety',
            'Tare & Zero Functions',
            'Accurate net weight measurement',
            'Rechargeable Battery + AC Power',
            'Continuous operation in clinics'
        ],
        specifications: {
            capacity: 'Up to 20kg / 30kg',
            accuracy: '5g / 10g (as per model)',
            platform: 'Child-Safe Design',
            display: 'Digital',
            power: 'AC/DC with Battery'
        },
        images: {
            main: '/sarkari/11.jpeg',
            gallery: ['/sarkari/11.jpeg']
        },
        applications: ['Hospitals', 'Clinics', 'Healthcare centers', 'Pediatric offices', 'Growth monitoring']
    },
    {
        id: '12',
        slug: 'scoop-bin-type-platform-scale',
        title: 'Scoop Type / Bin Type Platform Weighing Scale',
        category: 'Specialty Scales',
        shortDescription: 'Ideal for Loose Material, Grain, Scrap & Bulk Handling',
        fullDescription: 'This Scoop Type Platform Weighing Scale is specially designed for weighing loose, flowable, and bulk materials such as grains, spices, seeds, scrap, vegetables, and other loose commodities. The built-in metal scoop/bin allows easy pouring, dumping, and handling of material directly into containers or bags.',
        features: [
            'Integrated Metal Scoop / Bin',
            'Easy loading & unloading of loose materials',
            'Heavy Duty Mild Steel Structure',
            'Strong frame for continuous market & industrial use',
            'Stainless Steel Platform Base',
            'Durable and corrosion-resistant weighing base',
            'High Accuracy Load Cell System',
            'Stable & reliable weight measurement',
            'Smooth Material Flow Design',
            'Reduces spillage and wastage',
            'Compact Vertical Design',
            'Saves floor space in shops & godowns'
        ],
        specifications: {
            capacity: '50kg to 300kg',
            accuracy: '±20g to ±100g',
            platform: 'Stainless Steel with Scoop',
            display: 'Digital',
            material: 'MS with SS Base'
        },
        images: {
            main: '/sarkari/12.jpeg',
            gallery: ['/sarkari/12.jpeg']
        },
        applications: ['Grain markets', 'Spice shops', 'Scrap dealers', 'Vegetable markets', 'Bulk material handling']
    },
    {
        id: '13',
        slug: 'roller-top-conveyor-scale',
        title: 'Roller Top Conveyor Weighing Scale',
        category: 'Specialty Scales',
        shortDescription: 'In-Line Package Weighing for Production & Logistics',
        fullDescription: 'This Roller Top Conveyor Weighing Scale is designed for in-line weighing of cartons, boxes, and packages in packing, dispatch, and production environments. It allows smooth movement of goods while accurately measuring weight, making it ideal for automation and material handling systems.',
        features: [
            'Roller Conveyor Platform',
            'Smooth movement of packages without lifting',
            'High Precision Load Cell System',
            'Accurate in-motion or static weight measurement',
            'Heavy Duty Stainless Steel / MS Construction',
            'Designed for industrial environments',
            'Low Friction Rollers',
            'Easy manual or motorized movement',
            'Stable & Repeatable Weighing',
            'Consistent readings for quality control',
            'Compact Inline Design',
            'Easy integration into existing conveyor lines'
        ],
        specifications: {
            capacity: '30kg to 150kg',
            accuracy: '±5g to ±50g',
            platform: 'Roller Conveyor',
            display: 'Digital',
            material: 'SS/MS Construction'
        },
        images: {
            main: '/sarkari/13.jpeg',
            gallery: ['/sarkari/13.jpeg']
        },
        applications: ['Packing lines', 'Dispatch centers', 'Production facilities', 'Logistics', 'Automated systems']
    },
    {
        id: '14',
        slug: 'roller-bed-platform-back-frame',
        title: 'Roller Bed Platform Weighing Scale with Back Frame',
        category: 'Specialty Scales',
        shortDescription: 'Easy Roll-On Weighing for Heavy & Cylindrical Loads',
        fullDescription: 'This Roller Bed Platform Weighing Scale is designed for applications where heavy or cylindrical items must be rolled onto the scale instead of lifted. The integrated roller bed platform and back support frame make it ideal for pipes, drums, cartons, coils, and heavy boxes in industrial environments.',
        features: [
            'Heavy Duty Roller Bed Platform',
            'Allows smooth rolling of heavy items',
            'Back Support Frame',
            'Prevents items from rolling backward',
            'High Precision Industrial Load Cells',
            'Stable & accurate weight measurement',
            'Rugged Mild Steel Structure',
            'Designed for continuous industrial use',
            'Low Friction Rollers',
            'Reduces manual handling effort',
            'Heavy Load Handling Capability',
            'Safe for bulky and cylindrical items'
        ],
        specifications: {
            capacity: '300kg to 2000kg (2 Ton)',
            accuracy: '±100g to ±500g',
            platform: 'Roller Bed with Back Frame',
            display: 'Digital',
            material: 'MS Construction'
        },
        images: {
            main: '/sarkari/14.jpeg',
            gallery: ['/sarkari/14.jpeg']
        },
        applications: ['Pipe weighing', 'Drum handling', 'Coil weighing', 'Heavy boxes', 'Industrial warehouses']
    },
    {
        id: '15',
        slug: 'baby-infant-weighing-scale-tray',
        title: 'Baby / Infant Weighing Scale with Tray (Pediatric Scale)',
        category: 'Specialty Scales',
        shortDescription: 'Accurate & Safe Weighing for Newborns and Infants',
        fullDescription: 'This Baby Weighing Scale with Tray is specially designed for accurate and safe weighing of newborns and infants in hospitals, clinics, maternity homes, and pediatric centers. The ergonomic tray design ensures baby safety while providing precise weight measurement for medical monitoring.',
        features: [
            'Ergonomic Infant Tray',
            'Curved tray design for safe & comfortable positioning',
            'High Accuracy Digital Weighing System',
            'Precise readings for infant growth monitoring',
            'Bright Digital Display (Pole Mounted)',
            'Easy viewing for medical staff',
            'Strong & Stable Base Structure',
            'Prevents tipping and ensures safety',
            'Hold Function',
            'Locks weight even if baby moves',
            'Tare Function',
            'Allows weighing with cloth or diaper',
            'Rechargeable Battery + AC Power',
            'Reliable operation in hospitals'
        ],
        specifications: {
            capacity: 'Up to 20kg / 30kg',
            accuracy: '5g / 10g',
            platform: 'Ergonomic Tray',
            display: 'Digital Pole Mounted',
            power: 'AC/DC with Battery'
        },
        images: {
            main: '/sarkari/15.jpeg',
            gallery: ['/sarkari/15.jpeg']
        },
        applications: ['Hospitals', 'Maternity homes', 'Pediatric centers', 'Clinics', 'Newborn care']
    },
    {
        id: '16',
        slug: 'digital-crane-hanging-scale',
        title: 'Digital Crane Scale / Hanging Weighing Scale',
        category: 'Specialty Scales',
        shortDescription: 'Heavy-Duty • Accurate • Safe for Suspended Load Weighing',
        fullDescription: 'This Digital Crane Scale is designed for weighing heavy suspended loads in industrial environments. It is widely used with cranes, hoists, and lifting systems for fast, safe, and accurate weight measurement of hanging materials.',
        features: [
            'Heavy Duty Alloy Steel Hook & Shackle',
            'High-strength for safe lifting & weighing',
            'Bright LED Digital Display',
            'Clear visibility from distance',
            'Rugged Impact-Resistant Housing',
            'Designed for harsh industrial conditions',
            'Hold Function',
            'Freezes weight display for easy reading',
            'Tare Function',
            'Allows net weight calculation',
            'Overload Protection',
            'Protects load cell from excessive load',
            'Rechargeable Battery Operation',
            'Portable and easy to use'
        ],
        specifications: {
            capacity: '300kg to 5000kg (5 Ton)',
            accuracy: '±100g to ±2kg',
            display: 'LED Digital',
            power: 'Rechargeable Battery',
            material: 'Alloy Steel'
        },
        images: {
            main: '/sarkari/16.jpeg',
            gallery: ['/sarkari/16.jpeg']
        },
        applications: ['Crane operations', 'Hoisting', 'Heavy lifting', 'Industrial weighing', 'Suspended loads']
    }
];

/**
 * Get all unique categories from products
 */
export function getCategories(): string[] {
    const categories = new Set(products.map(p => p.category));
    return Array.from(categories).sort();
}

/**
 * Get products by category
 */
export function getProductsByCategory(category: string): Product[] {
    return products.filter(p => p.category === category);
}

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
