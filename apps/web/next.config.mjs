/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  // Experimental features to help with hydration
  experimental: {
    // Helps with hydration mismatches
    optimizePackageImports: ['@radix-ui/react-toast', 'lucide-react'],
  },
  // Better error handling in development
  onDemandEntries: {
    // Period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // Number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
}

export default nextConfig
