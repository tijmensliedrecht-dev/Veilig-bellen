import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VeiligBellen — Prototype',
  description: 'Extra bescherming tegen telefonische oplichting.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}