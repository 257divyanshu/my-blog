/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  outputFileTracingRoot: import.meta.dirname,
  async redirects() {
    return [
      {
        source: "/",            // when visiting root
        destination: "/blog",   // redirect to /blog
        permanent: true,        // 308 redirect (SEO-friendly)
      },
    ];
  },
};

export default nextConfig;
