#!/bin/bash

echo "🚀 Testing Copa Starter Kit with Theme & Language Switchers"
echo "==========================================================="
echo ""

echo "📦 Installing dependencies..."
pnpm install

echo ""
echo "🔍 Checking TypeScript..."
pnpm typecheck

echo ""
echo "🎨 Testing build process..."
pnpm build

echo ""
echo "✅ All checks completed!"
echo ""
echo "🌐 Ready to test language & theme switchers:"
echo "   - English/Khmer language switching"
echo "   - Light/Dark theme switching"
echo "   - Responsive navbar design"
echo ""
echo "Run 'pnpm dev' to start the development server"
