import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/a/**",
        search: "",
      },
    ],
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
    AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    ADMIN_NAME: process.env.ADMIN_NAME,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    BASE_URL: process.env.BASE_URL,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_FROM_NAME: process.env.RESEND_FROM_NAME,
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
    RESEND_TO_NAME: process.env.RESEND_TO_NAME,
    RESEND_TO_EMAIL: process.env.RESEND_TO_EMAIL,
  },
};

export default nextConfig;
