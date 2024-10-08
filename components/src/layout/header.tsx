import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import logo from './logo.webp';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="#"
          className="flex items-center gap-2"
          prefetch={false}
          aria-label="Serwis Bielecki"
        >
          <Image src={logo} loading='eager' alt='Serwis Bielecki Logo' />
          <span className="text-lg font-bold">Serwis Bielecki</span>
        </Link>
        <nav className="hidden space-x-4 md:flex" aria-label="Główna Nawigacja">
          <Link
            href="#about"
            className="text-md font-medium hover:underline underline-offset-4"
            prefetch={false}
            aria-label="O Firmie"
          >
            O Firmie
          </Link>
          <Link
            href="#services"
            className="text-md font-medium hover:underline underline-offset-4"
            prefetch={false}
            aria-label="Usługi"
          >
            Usługi
          </Link>
          <Link
            href="#area"
            className="text-md font-medium hover:underline underline-offset-4"
            prefetch={false}
            aria-label="Rejon działania"
          >
            Rejon Działania
          </Link>
        </nav>
        <Link href="#contact" prefetch={false}>
          <Button aria-label="Kontakt">Kontakt</Button>
        </Link>
      </div>
    </header>
  );
}
