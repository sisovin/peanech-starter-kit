# 🥜 Peanech Starter Kit

A comprehensive, production-ready monorepo starter kit built with modern technologies including Next.js 15, React 19, Convex, Clerk authentication, shadcn/ui, and TailwindCSS. Perfect for building full-stack applications with real-time features, authentication, content management, and analytics.

## 🌟 Features

### 🎯 Core Technologies
- **Next.js 15** with React 19 and TurboComponents
- **TypeScript** for type safety
- **TailwindCSS 4.0** for styling
- **shadcn/ui** for beautiful, accessible components
- **Convex** for real-time database and backend
- **Clerk** for authentication and user management
- **Turbo** for efficient monorepo build system

### 🚀 Key Features
- **Authentication & Authorization**: Complete auth system with Clerk integration
- **Real-time Database**: Convex-powered backend with live updates
- **Content Management**: Blog system with drafts, publishing, and comments
- **File Management**: Upload, organize, and manage files with folders
- **Analytics & Monitoring**: Track user activity, API usage, and performance
- **Dashboard**: Comprehensive admin and user dashboards
- **Responsive Design**: Mobile-first, accessible UI components
- **Theme Support**: Dark/light mode with custom theme switcher
- **Internationalization**: Language switching support
- **Error Handling**: Robust error boundaries and hydration error fixes
- **SEO Optimized**: Content Layer for blog posts with metadata
- **Payment Integration**: Stripe integration for subscriptions

### 🏗️ Architecture Highlights
- **Monorepo Structure** with shared packages
- **Type-safe APIs** with Convex
- **Component Library** with shadcn/ui
- **Audit Logging** for security compliance
- **Background Jobs** and async processing
- **Browser Extension Compatibility**
- **Offline-first Fonts** for reliability

## 📁 Project Structure

```
peanech-starter-kit/
├── apps/
│   ├── api/                    # API services (if needed)
│   └── web/                    # Next.js web application
│       ├── app/                # App router pages
│       │   ├── (main)/         # Main site pages
│       │   ├── blog/           # Blog functionality
│       │   ├── dashboard/      # User dashboard
│       │   ├── sign-in/        # Authentication pages
│       │   └── api/            # API routes
│       ├── components/         # React components
│       │   ├── ui/             # shadcn/ui components
│       │   ├── auth/           # Authentication components
│       │   ├── blog/           # Blog components
│       │   └── dashboard/      # Dashboard components
│       ├── convex/             # Convex backend functions
│       │   ├── schema.ts       # Database schema
│       │   ├── blog.ts         # Blog operations
│       │   ├── users.ts        # User management
│       │   ├── files.ts        # File operations
│       │   └── analytics.ts    # Analytics tracking
│       ├── lib/                # Utility functions
│       ├── hooks/              # Custom React hooks
│       └── types/              # TypeScript type definitions
├── packages/
│   ├── ui/                     # Shared UI component library
│   ├── eslint-config/          # Shared ESLint configurations
│   └── typescript-config/      # Shared TypeScript configurations
└── docs/                       # Documentation files
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20+ 
- **pnpm** 10.4.1+ (recommended package manager)
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd peanech-starter-kit
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   
   Create `.env.local` in the `apps/web` directory:
   ```bash
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

   # Convex Database
   NEXT_PUBLIC_CONVEX_URL=https://...convex.cloud
   CONVEX_DEPLOYMENT=...

   # Optional: Stripe for payments
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   ```

4. **Initialize Convex**
   ```bash
   cd apps/web
   npx convex dev
   ```

5. **Start development server**
   ```bash
   # From root directory
   pnpm dev
   ```

The application will be available at `http://localhost:3000`.

## 🛠️ Development

### Available Scripts

```bash
# Development
pnpm dev              # Start all apps in development mode
pnpm dev:web          # Start only the web app

# Building
pnpm build            # Build all apps for production
pnpm build:web        # Build only the web app

# Code Quality
pnpm lint             # Lint all packages
pnpm format           # Format code with Prettier
pnpm typecheck        # Type checking

# Testing
pnpm test             # Run tests
```

### Adding Components

To add a new shadcn/ui component:

```bash
# Add to the web app
pnpm dlx shadcn@latest add button -c apps/web

# Add to the shared UI package
pnpm dlx shadcn@latest add card -c packages/ui
```

### Using Components

Import components from the shared UI package:

```tsx
import { Button } from "@workspace/ui/components/button"
import { Card } from "@workspace/ui/components/card"

export function MyComponent() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  )
}
```

## 🏢 Monorepo Setup Guide

### Package Management

This project uses **pnpm workspaces** for efficient package management:

1. **Workspace Configuration** (`pnpm-workspace.yaml`):
   ```yaml
   packages:
     - "apps/*"
     - "packages/*"
   ```

2. **Shared Dependencies**: Common dependencies are hoisted to the root
3. **Package References**: Use `workspace:*` for internal package dependencies
4. **Build Orchestration**: Turbo handles build caching and parallelization

### Adding New Packages

1. **Create a new package**:
   ```bash
   mkdir packages/my-new-package
   cd packages/my-new-package
   pnpm init
   ```

2. **Configure package.json**:
   ```json
   {
     "name": "@workspace/my-new-package",
     "version": "0.0.1",
     "private": true,
     "main": "./src/index.ts",
     "types": "./src/index.ts"
   }
   ```

3. **Add to workspace**: Automatically included via workspace patterns

### Build System (Turbo)

Turbo provides:
- **Caching**: Intelligent build caching
- **Parallelization**: Run tasks across packages simultaneously  
- **Dependencies**: Proper build order based on package dependencies
- **Incremental Builds**: Only rebuild what changed

Configure in `turbo.json`:
```json
{
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "dist/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

## 🔐 Authentication Setup

### Clerk Configuration

1. **Create Clerk Application**:
   - Visit [clerk.dev](https://clerk.dev)
   - Create a new application
   - Copy your API keys

2. **Configure Authentication**:
   - Set up sign-in/sign-up flows
   - Configure social providers (Google, GitHub, etc.)
   - Set up webhooks for user sync

3. **Middleware Protection**:
   ```typescript
   // apps/web/middleware.ts
   export default clerkMiddleware(async (auth, req) => {
     // Protect dashboard routes
     if (req.nextUrl.pathname.startsWith('/dashboard')) {
       await auth.protect()
     }
   })
   ```

### User Management

Users are automatically synced between Clerk and Convex:
- **ClerkConvexSync**: Component handles real-time sync
- **User Profiles**: Extended with custom fields
- **Role-based Access**: Admin, editor, author, reader roles
- **Audit Logging**: Track user actions for compliance

## 💾 Database Schema

### Convex Integration

The project includes a comprehensive Convex schema:

```typescript
// Core entities
users          // User profiles with Clerk integration
blogPosts      // Content management system
fileUploads    // File storage and organization
activities     // User activity tracking
auditLogs      // Security audit trail
stats          // Analytics and metrics

// Relationships
userConnections    // Follow/follower system
blogComments      // Nested comment system
blogReactions     // Like/bookmark/share
```

### Key Features
- **Real-time Updates**: Live data synchronization
- **Type Safety**: Fully typed database operations
- **Validation**: Zod schema validation
- **Pagination**: Efficient data loading
- **Search**: Full-text search capabilities

## 🎨 UI Components

### shadcn/ui Integration

Pre-configured components include:
- **Layout**: Navigation, sidebars, headers
- **Forms**: Input validation with react-hook-form
- **Data Display**: Tables, cards, charts
- **Feedback**: Toasts, alerts, loading states
- **Navigation**: Menus, breadcrumbs, pagination

### Theme System

- **Dark/Light Mode**: Automatic system preference detection
- **Custom Themes**: Extendable theme configuration
- **CSS Variables**: Dynamic color schemes
- **Font Management**: Local fonts with fallbacks

### Responsive Design

- **Mobile-first**: Optimized for all screen sizes
- **Accessibility**: WCAG 2.1 AA compliance
- **Touch-friendly**: Proper touch targets
- **Performance**: Optimized for Core Web Vitals

## 📊 Analytics & Monitoring

### Built-in Analytics

- **User Activity**: Track page views, actions, engagement
- **API Monitoring**: Response times, error rates, usage patterns
- **Content Metrics**: Blog post views, likes, comments
- **Performance**: Core Web Vitals, bundle analysis

### Dashboard Features

- **Real-time Stats**: Live updates with Convex
- **User Management**: Admin panel for user operations
- **Content Management**: Blog post creation and editing
- **File Management**: Upload and organize media files
- **Analytics Views**: Charts and metrics visualization

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**:
   ```bash
   npx vercel
   ```

2. **Configure Environment Variables**:
   - Set all required environment variables in Vercel dashboard
   - Configure Convex production deployment

3. **Deploy**:
   ```bash
   git push origin main  # Automatic deployment
   ```

### Alternative Platforms

- **Netlify**: Full support for Next.js
- **Railway**: Built-in PostgreSQL if needed
- **Docker**: Included Dockerfile for containerization

### Production Checklist

- [ ] Environment variables configured
- [ ] Convex production deployment
- [ ] Clerk production instance
- [ ] Domain configuration
- [ ] SSL certificates
- [ ] Analytics setup
- [ ] Error monitoring (Sentry recommended)
- [ ] Performance monitoring

## 🤝 Contributing

We welcome contributions to the Peanech Starter Kit! Here's how you can help:

### Getting Started

1. **Fork the repository**
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request**

### Development Guidelines

- **Code Style**: Follow existing patterns and use Prettier
- **Type Safety**: Ensure all code is properly typed
- **Testing**: Add tests for new functionality
- **Documentation**: Update docs for new features
- **Commits**: Use conventional commit messages

### Areas for Contribution

- 🐛 **Bug Fixes**: Report and fix issues
- ✨ **Features**: Add new functionality
- 📚 **Documentation**: Improve guides and examples
- 🎨 **UI/UX**: Enhance design and user experience
- ⚡ **Performance**: Optimize speed and efficiency
- 🔒 **Security**: Strengthen authentication and authorization

### Issue Reporting

When reporting issues, please include:
- **Environment**: OS, Node.js version, browser
- **Steps to Reproduce**: Clear reproduction steps
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Screenshots**: If applicable

## 💪 Support

### Community Support

- **GitHub Issues**: [Report bugs and request features](https://github.com/your-repo/issues)
- **Discussions**: [Community Q&A and discussions](https://github.com/your-repo/discussions)
- **Discord**: [Join our community server](#) (if available)

### Professional Support

For enterprise support, custom development, or consulting:
- 📧 Email: support@peanech.com
- 🌐 Website: [www.peanech.com](#)
- 💼 LinkedIn: [Company Profile](#)

### Documentation

- **API Documentation**: Available in `/docs/api`
- **Component Storybook**: Run `pnpm storybook`
- **Architecture Guide**: See `/docs/architecture.md`
- **Deployment Guide**: See `/docs/deployment.md`

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What this means:
- ✅ **Commercial Use**: Use in commercial projects
- ✅ **Modification**: Modify and distribute
- ✅ **Distribution**: Share with others
- ✅ **Private Use**: Use for personal projects
- ⚠️ **Limitation**: No warranty or liability
- 📄 **License Notice**: Include license in distributions

## 👨‍💻 About the Author

### Peanech Development Team

We're passionate developers dedicated to creating high-quality, developer-friendly tools and starter kits.

**Our Mission**: To accelerate development by providing production-ready, well-architected starter kits that incorporate modern best practices and battle-tested technologies.

### Connect With Us

- 🐙 **GitHub**: [@peanech](https://github.com/peanech)
- 🐦 **Twitter**: [@peanech_dev](https://twitter.com/peanech_dev)
- 💼 **LinkedIn**: [Peanech Development](https://linkedin.com/company/peanech)
- 🌐 **Website**: [www.peanech.com](https://www.peanech.com)
- 📧 **Email**: hello@peanech.com

### Other Projects

Check out our other open-source projects:
- **[Next.js Boilerplate](#)**: Minimal Next.js starter
- **[React Component Library](#)**: Reusable React components
- **[API Starter Kit](#)**: Node.js/Express API boilerplate

---

## 🙏 Acknowledgments

Special thanks to the amazing open-source community and the teams behind:

- **[Next.js](https://nextjs.org)** - The React framework for production
- **[Convex](https://convex.dev)** - Real-time backend platform
- **[Clerk](https://clerk.dev)** - Authentication and user management
- **[shadcn/ui](https://ui.shadcn.com)** - Beautiful, accessible components
- **[TailwindCSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[Turbo](https://turbo.build)** - High-performance build system
- **[React](https://react.dev)** - The library for web and native interfaces
- **[TypeScript](https://typescriptlang.org)** - JavaScript with syntax for types

### Contributors

Thanks to all contributors who have helped shape this project:

<!-- Contributors will be automatically populated via GitHub API -->

---

<div align="center">

**Built with ❤️ by the Peanech Team**

[⭐ Star this repo](https://github.com/your-repo) | [🐛 Report Bug](https://github.com/your-repo/issues) | [✨ Request Feature](https://github.com/your-repo/issues)

</div>
