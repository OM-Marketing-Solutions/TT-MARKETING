# TT Marketing - Next.js Mobile-First Web Application

A production-ready Next.js application built with mobile-first design principles, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Mobile-First Design**: Optimized for mobile devices with responsive breakpoints (640px, 768px, 1024px, 1280px)
- **Accessibility-First**: WCAG AA compliant with semantic HTML, ARIA labels, and keyboard navigation
- **Performance Optimized**: Next.js Image optimization, code splitting, and lazy loading
- **Modern Tech Stack**: Next.js 16 (App Router), TypeScript, Tailwind CSS v4
- **SEO Ready**: Dynamic metadata, OpenGraph tags, Twitter Cards, and JSON-LD structured data
- **Contact Form**: Server-side validation with Zod and email sending via Nodemailer
- **Testing**: Playwright E2E tests for critical user flows

## 📋 Prerequisites

- Node.js 18+ and npm
- SMTP email account (for contact form)

## 🛠️ Installation

1. Clone the repository:
```bash
cd tt-marketing-web
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your SMTP credentials:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-specific-password
SMTP_FROM=noreply@ttmarketing.com
CONTACT_EMAIL=contact@ttmarketing.com
```

## 🏃 Running the Application

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm start
```

### Linting & Formatting
```bash
npm run lint
npm run format
```

## 🧪 Testing

### Run E2E Tests
```bash
npm run test:e2e
```

### Run Tests with UI
```bash
npm run test:e2e:ui
```

## 📁 Project Structure

```
tt-marketing-web/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles & design tokens
├── components/            # React components
│   ├── Container.tsx      # Layout container
│   ├── Hero.tsx          # Hero section
│   ├── ProductCard.tsx   # Product card
│   ├── ProductGrid.tsx   # Product grid
│   ├── About.tsx         # About section
│   ├── ContactForm.tsx   # Contact form with validation
│   ├── Footer.tsx        # Footer
│   └── NavMobile.tsx     # Mobile navigation
├── lib/                   # Utility functions
│   └── sendMail.ts       # Email service
├── public/               # Static assets
│   └── images/           # Image assets
├── tests/                # Playwright tests
│   └── home.spec.ts     # Home page tests
├── hooks/                # Custom React hooks
├── utils/                # Utility functions
├── next.config.ts        # Next.js configuration
├── playwright.config.ts  # Playwright configuration
├── tailwind.config.js    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Design System

### Color Palette (Dark Metallic Theme)
- **Primary**: Deep blue (#1e40af)
- **Secondary**: Graphite gray (#374151)
- **Accent**: Bright blue (#60a5fa)

### Breakpoints (Mobile-First)
- Base: 0px (mobile)
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

### Typography
- Base font size: 16px
- Line height: 1.5 (body text)
- Font family: Inter, system fonts

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles where needed
- Keyboard navigation support
- Focus visible states (2px outline)
- Color contrast ratios ≥4.5:1 for body text
- Skip to content link
- Screen reader friendly

## ⚡ Performance

- **Image Optimization**: Next/Image with WebP format
- **Code Splitting**: Dynamic imports for large components
- **Critical CSS**: Inlined in head
- **Lazy Loading**: Below-the-fold images lazy loaded
- **Lighthouse Target**: Mobile performance ≥90

## 📧 Contact Form

The contact form includes:
- Client-side validation with real-time error messages
- Server-side validation with Zod
- Email sending via Nodemailer (SMTP)
- Accessible error messages with ARIA
- Loading and success states

## 🔐 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `SMTP_HOST` | SMTP server hostname | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP server port | `587` |
| `SMTP_USER` | SMTP username | `your-email@gmail.com` |
| `SMTP_PASSWORD` | SMTP password | `your-app-password` |
| `SMTP_FROM` | From email address | `noreply@ttmarketing.com` |
| `CONTACT_EMAIL` | Contact form recipient | `contact@ttmarketing.com` |
| `NEXT_PUBLIC_SITE_URL` | Site URL | `https://ttmarketing.com` |

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## 📞 Support

For questions or issues, contact: contact@ttmarketing.com
