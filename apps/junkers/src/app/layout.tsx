import { Footer } from '@serwis-bielecki-public/components/layout/footer';
import { Header } from '@serwis-bielecki-public/components/layout/header';
import { Inter } from 'next/font/google';
import { cn } from '@serwis-bielecki-public/components/utils';
import './global.css';

export const metadata = {
  title: 'Serwis Bielecki',
  description: 'Autoryzowany serwis Junkers Bosch w Poznaniu. Oferujemy szeroki zakres usług związanych z kotłami, pompami ciepła i klimatyzacją.',
  robots: 'index, follow',
};

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body
        className={cn('antialiased', fontHeading.variable, fontBody.variable)}
      >
        <div className="flex min-h-[100dvh] flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
