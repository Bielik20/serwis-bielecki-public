import Link from 'next/link';
import { MountainIcon } from '../icons';
import { Button } from './button';

export function Header() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return <header className="sticky top-0 z-50 bg-background">
    <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
      <Link
        href="#"
        className="flex items-center gap-2"
        prefetch={false}
      >
        <MountainIcon className="h-6 w-6" />
        <span className="text-lg font-bold">Serwis Bielecki</span>
      </Link>
      <nav className="hidden space-x-4 md:flex">
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          O Firmie
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Usługi
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Rejon Działania
        </Link>
      </nav>
      <Button ><Link href="#" prefetch={false}>Kontakt</Link></Button>
    </div>
  </header>

}
