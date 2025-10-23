/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: 'https', 
            hostname: process.env.NEXT_HOSTNAME_SUPABASE,
         },
      ],
   },
};

export default nextConfig;
