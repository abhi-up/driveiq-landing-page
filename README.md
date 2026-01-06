# DriveIQ Website

A modern, responsive website for DriveIQ - an intelligent IoT platform that combines Fuel & Asset Management, Fleet Telematics, and 24x7 Safety & Emergency Response solutions.

## 🚀 Overview

DriveIQ is a next-generation platform offering comprehensive IoT-based solutions for enterprises across India. The website showcases three main product offerings:

- **Fuel Management Systems** - Real-time fuel monitoring, theft detection, and asset management
- **Fleet Management Systems** - GPS tracking, route optimization, and driver behavior analytics
- **Safety & Emergency Response** - 24x7 personal and on-road safety services

## ✨ Features

- 🎨 Modern, responsive design with Tailwind CSS
- 📱 Mobile-first approach with seamless mobile experience
- 🎯 SEO optimized with meta tags and semantic HTML
- ⚡ Fast performance with Vite build tool
- 🎭 Beautiful UI components using shadcn/ui
- 🔄 Smooth page transitions with React Router
- 📊 Interactive sections showcasing solutions and statistics
- 👥 Client showcase with 22+ trusted partners
- 📧 Contact form for enquiries
- 🌐 Multi-page navigation (Home, About, Solutions)

## 🛠️ Tech Stack

### Core Technologies

- **React 18.3** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

### Additional Libraries

- **React Query (TanStack Query)** - Data fetching and caching
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **date-fns** - Date utilities
- **Recharts** - Chart library

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** or **bun** package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd driveiq-website/driveiq
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
bun install
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
bun dev
```

The application will be available at `http://localhost:8080`

### Build

Build for production:

```bash
npm run build
# or
yarn build
# or
bun build
```

Build for development:

```bash
npm run build:dev
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
# or
yarn lint
```

## 📁 Project Structure

```
driveiq/
├── public/                 # Static assets
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/            # Images and media files
│   │   ├── clients/       # Client logos (22 logos)
│   │   ├── logo.png
│   │   └── fleetdashboard.png
│   ├── components/        # React components
│   │   ├── home/          # Home page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ValueProposition.tsx
│   │   │   ├── SolutionsSection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── ClientsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── layout/        # Layout components
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/            # shadcn/ui components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   │   ├── Index.tsx      # Home page
│   │   ├── About.tsx
│   │   ├── FleetManagement.tsx
│   │   ├── FuelManagement.tsx
│   │   ├── SafetyResponse.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── tailwind.config.ts     # Tailwind CSS configuration
```

## 🎨 Key Pages

- **Home (`/`)** - Landing page with hero, value proposition, solutions, stats, clients, and contact sections
- **About (`/about`)** - Company information, mission, and team details
- **Fuel Management (`/fuel-management`)** - Detailed fuel management solution page
- **Fleet Management (`/fleet-management`)** - Fleet management features and benefits
- **Safety Response (`/safety-response`)** - Safety and emergency response services

## 🎯 Features Breakdown

### Home Page Sections

1. **Hero Section** - Main banner with CTA and quick stats
2. **Value Proposition** - Key platform highlights
3. **Solutions Section** - Three main product offerings
4. **Stats Section** - Key metrics and achievements
5. **Clients Section** - Showcase of 22+ trusted partners
6. **Contact Section** - Contact form and company information

### Design System

- **Color Palette**: Navy blue and gold theme
- **Typography**: Inter font family
- **Components**: Consistent card designs, buttons, and form elements
- **Animations**: Smooth transitions and hover effects

## 📞 Contact Information

### Sales & Corporate Enquiries

- **Phone**: +91-9650391206
- **Phone**: +91-8800018010

### Customer Support & Emergency

- **Toll-Free**: 1800-1030-024 (24x7)

### Email

- **Support**: support@driveiq.com

### Registered Office

5, Jangpura A, Mathura Road,  
New Delhi – 110014, India

## 🔧 Configuration

### Vite Configuration

- Development server runs on port `8080`
- Path alias `@` maps to `./src`
- React SWC plugin for fast refresh

### TypeScript Configuration

- Path aliases configured for `@/*`
- Strict mode disabled for flexibility
- Supports both `.ts` and `.tsx` files

### Tailwind Configuration

- Custom color palette (navy and gold)
- Custom shadows and animations
- Responsive breakpoints

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Scripts Reference

| Script              | Description              |
| ------------------- | ------------------------ |
| `npm run dev`       | Start development server |
| `npm run build`     | Build for production     |
| `npm run build:dev` | Build for development    |
| `npm run preview`   | Preview production build |
| `npm run lint`      | Run ESLint               |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

**DriveIQ** - Intelligent IoT, Fleet & Safety Solutions

For more information, visit [www.driveiq.io](https://www.driveiq.io) or contact us at support@driveiq.com
