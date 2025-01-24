import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Multi-Theme Demo",
  description: "A minimal, yet powerful demonstration showcasing seamless theme switching with Next.js, Tailwind CSS, and Radix UI",
  authors: [{ name: "7hours", url: "https://github.com/7hourspg" }],
  keywords: ["Next.js", "React", "Tailwind CSS", "Themes", "Dark Mode", "Radix UI"],
  creator: "7hours",
  openGraph: {
    title: "Next.js Multi-Theme Demo",
    description: "A minimal, yet powerful demonstration showcasing seamless theme switching with Next.js, Tailwind CSS, and Radix UI",
    type: "website",
    url: "https://nextjs-multi-theme-alpha.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Multi-Theme Demo",
    description: "A minimal, yet powerful demonstration showcasing seamless theme switching with Next.js, Tailwind CSS, and Radix UI",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                let theme = localStorage.getItem('theme') || 'system';
                let systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                let effectiveTheme = theme === 'system' ? systemTheme : theme;
                
                document.documentElement.classList.remove('light', 'dark', 'sunset', 'forest', 'ocean');
                document.documentElement.classList.add(effectiveTheme);
              } catch (e) {
                console.error('Theme initialization failed:', e);
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
