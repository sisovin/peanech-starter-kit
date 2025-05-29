# Theme and Language Switchers Implementation

## Overview
Added bilingual support (English/Khmer) and theme switching capabilities to the Copa Starter Kit home page navbar.

## Features Implemented

### 🌐 Language Switcher
- **Languages**: English (EN-US) and Khmer (KH-KM)
- **Persistence**: Language preference saved in localStorage
- **UI Elements**: Flag icons (🇺🇸/🇰🇭) with native language names
- **Translations**: Complete translation dictionary for all UI elements

### 🎨 Theme Switcher
- **Themes**: Light, Dark, and System modes
- **Icons**: Dynamic sun/moon icons with smooth transitions
- **Integration**: Uses existing theme provider system

### 🧩 Components Created

#### 1. Language Provider (`contexts/language-provider.tsx`)
- Context for managing language state
- Translation function `t(key)`
- Automatic localStorage persistence
- Comprehensive translation dictionary

#### 2. Language Switcher (`components/language-switcher.tsx`)
- Dropdown menu with flag icons
- Current language indicator
- Accessible ARIA labels

#### 3. Navigation Components
- `NavSwitchers` - Combines theme and language switchers
- `NavLinks` - Localized navigation links
- `HomeContent` - Localized home page content

## Translation Keys

### Navigation
- `nav.home` - Home link
- `nav.dashboard` - Dashboard link
- `nav.language` - Language selector label
- `nav.theme` - Theme selector label

### Home Page Content
- `home.title` - Main heading
- `home.subtitle` - Subtitle description
- `home.getStarted` - Primary CTA button
- `home.learnMore` - Secondary CTA button

### Feature Cards
- `feature.auth.title/description` - Authentication feature
- `feature.routes.title/description` - Protected routes feature
- `feature.profiles.title/description` - User profiles feature

### Theme Options
- `theme.light/dark/system` - Theme option labels

### Language Options
- `language.english/khmer` - Language option labels

## File Structure
```
apps/web/
├── contexts/
│   └── language-provider.tsx          # Language context and translations
├── components/
│   ├── language-switcher.tsx          # Language dropdown component
│   ├── nav-switchers.tsx              # Combined switchers component
│   ├── nav-links.tsx                  # Localized navigation links
│   └── home-content.tsx               # Localized home page content
├── components/auth/
│   └── auth-nav.tsx                   # Updated navbar with switchers
└── app/
    ├── layout.tsx                     # Added LanguageProvider
    └── page.tsx                       # Simplified to use HomeContent
```

## Navbar Layout
The navbar now includes (from left to right):
1. **Logo** - "Copa App" brand link
2. **Navigation Links** - Home, Dashboard (localized)
3. **Language Switcher** - Flag dropdown
4. **Theme Switcher** - Sun/moon toggle
5. **Auth Actions** - Sign in/up or user profile

## Usage
Users can:
- Click the language switcher (🌐 icon) to toggle between English and Khmer
- Click the theme switcher (☀️/🌙 icon) to change themes
- See all content update instantly in their selected language
- Have their preferences remembered across sessions

## Technical Notes
- All client components wrapped with `ClientOnly` to prevent hydration errors
- Server components (AuthNav) import client components for switchers
- Theme and language state managed independently
- Responsive design maintained across all screen sizes
- Accessible with proper ARIA labels and keyboard navigation

## Testing
To test the implementation:
1. Start development server: `pnpm dev`
2. Navigate to home page
3. Use language switcher to toggle between EN/KH
4. Use theme switcher to change themes
5. Verify preferences persist on page reload
