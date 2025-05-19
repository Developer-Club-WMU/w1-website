import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const geistSans = localFont({
  src: [
    {
      path: '../node_modules/geist/dist/fonts/geist-sans/Geist-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../node_modules/geist/dist/fonts/geist-sans/Geist-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../node_modules/geist/dist/fonts/geist-sans/Geist-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-geist-sans',
  display: 'swap',
});

const geistMono = localFont({
  src: [
    {
      path: '../node_modules/geist/dist/fonts/geist-mono/GeistMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../node_modules/geist/dist/fonts/geist-mono/GeistMono-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../node_modules/geist/dist/fonts/geist-mono/GeistMono-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "W1 Startup Community",
  description: "W1 Startup Community based in West Michigan helps students turn project ideas into startups through mentorship, resources, and connections.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
