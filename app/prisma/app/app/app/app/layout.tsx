import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Antares Novella Vault',
  description: 'منصة قراءة ونشر الروايات الرقمية والويب نوفل',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
      }
