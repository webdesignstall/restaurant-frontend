/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React strict mode
    reactStrictMode: true,
  
    // Customize Webpack config
    webpack: (config) => {
      // Disable Webpack cache if serialization issues persist
      config.cache = false;
  
      // Return the modified config
      return config;
    },
  };
  
  export default nextConfig;
  