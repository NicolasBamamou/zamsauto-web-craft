# ZAMSA - Zaly Multi-Services Auto

## Deployment Status
[![Deploy to GitHub Pages](https://github.com/NicolasBamamou/zamsauto-web-craft/actions/workflows/deploy.yml/badge.svg)](https://github.com/NicolasBamamou/zamsauto-web-craft/actions/workflows/deploy.yml)

## Live Demo
🌐 **[View Live Site](https://NicolasBamamou.github.io/zamsauto-web-craft/)**

## About
Professional automotive service website for ZAMSA (Zaly Multi-Services Auto) - your trusted partner for automotive maintenance in Nzérékoré, Guinea.

## Features
- Modern dark-themed UI with glass morphism effects
- Responsive design optimized for all devices
- Interactive service booking system
- Professional gallery with before/after showcase
- Contact forms and location information
- Multi-page routing with React Router

## Tech Stack
- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Build**: Vite with SWC
- **Deployment**: GitHub Pages
- **Package Manager**: Bun (development) / npm (CI/CD)

## Development

### Prerequisites
- Node.js 18+ or Bun runtime
- Git

### Local Setup
```bash
# Clone the repository
git clone https://github.com/NicolasBamamou/zamsauto-web-craft.git
cd zamsauto-web-craft

# Install dependencies
npm install
# or with Bun
bun install

# Start development server
npm run dev
# or with Bun
bun dev
```

The development server will be available at `http://localhost:8080`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Deployment

### Automatic Deployment
The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

### Manual Deployment
```bash
npm run deploy
```

## Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui base components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
├── pages/              # Route pages
│   ├── Index.tsx       # Home page
│   ├── Services.tsx    # Services overview
│   ├── Booking.tsx     # Appointment booking
│   ├── Gallery.tsx     # Work gallery
│   ├── About.tsx       # Company info
│   └── Contact.tsx     # Contact page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Images and static assets
└── index.css           # Global styles and design tokens
```

## GitHub Pages Configuration
- **Base URL**: `/zamsauto-web-craft/`
- **Build Output**: `dist/`
- **Deploy Branch**: `gh-pages` (auto-managed)

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
This project is proprietary and confidential.

## Contact
For inquiries about ZAMSA services, visit the [contact page](https://NicolasBamamou.github.io/zamsauto-web-craft/contact) or reach out directly in Nzérékoré, Guinea.
