/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  allowCrossOrigin: [
    { origin: "localhost"},
    { origin: "192.168.1.108" }
  ]
}

export default nextConfig
