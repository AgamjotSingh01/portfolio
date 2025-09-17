/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable styled-components support
  compiler: {
    styledComponents: true,
  },
  
  // Image optimization settings
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  
  // Webpack configuration to handle potential SSR issues
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

export default nextConfig;
