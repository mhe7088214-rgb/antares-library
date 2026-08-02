import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Novella Vault — Antares Library',
  description: 'منصة الروايات الرقمية والويب نوفل العالمية',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-neutral-950 text-neutral-100 font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
