import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css';
import { roboto } from './fonts';

export const metadata: Metadata = {
  title: 'Emmanuel Valentin',
  description:
    'Emmanuel Valentin, Desarrollador Web y futuro Ingeniero en Sistemas Computacionales',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
