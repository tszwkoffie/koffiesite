/** @type {import('next').NextConfig} */

// Default to a fully static export (GitHub Pages build at www.tszw.nl).
// On Vercel (VERCEL is automatically set to "1") we keep a real server so the
// /api/contact route (Resend) works.
const isStaticExport = process.env.VERCEL !== "1"

const nextConfig = {
  ...(isStaticExport ? { output: "export" } : {}),
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
