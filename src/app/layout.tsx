import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans' });
const fontMono = Space_Grotesk({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'NextJS Starter Template by Adarsh Dubey',
  description:
    'Simple and easy to use nextjs 14 starter template made by Adarsh Dubey.',
  metadataBase: new URL('https://nextjs.adarshdubey.com'),
  openGraph: {
    title: 'NextJS Starter Template by Adarsh Dubey',
    description:
      'Simple and easy to use nextjs 14 starter template made by Adarsh Dubey.',
    url: 'https://nextjs.adarshdubey.com',
    siteName: 'NextJS Starter Template by Adarsh Dubey',
    images: {
      url: '/opengraph-image.png',
      width: 1920,
      height: 960,
      alt: "The only nexjs starter kit you'll ever need.",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'font-sans antialiased',
          fontSans.variable,
          fontMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
