/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: 'https', 
            hostname: 'mwzazeyrgbgkaepmjiui.supabase.co',
         },
      ],
   },
};

export default nextConfig;
