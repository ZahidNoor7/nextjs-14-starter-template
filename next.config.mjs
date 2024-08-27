import { dirname } from "path";
import { fileURLToPath } from "url";

/** @type {import('next').NextConfig} */

// Get the directory path of the current module
const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [`${__dirname}/styles`],
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    // nextScriptWorkers: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
