/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration des images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  
  // Résolution des avertissements du workspace
  outputFileTracingRoot: __dirname,
  
  // Mode strict pour optimiser
  reactStrictMode: true,
  
  // Optimisation webpack pour le développement
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Réduire les optimisations coûteuses en développement
      config.optimization = {
        ...config.optimization,
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
      };
    }
    
    return config;
  },
};

module.exports = nextConfig;
