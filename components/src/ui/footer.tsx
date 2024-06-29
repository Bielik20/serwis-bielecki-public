import Link from 'next/link';

export function Footer() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return <footer className="bg-muted p-6 md:py-12 w-full">
    <div
      className="container mx-auto max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
      <div className="grid gap-1">
        <h3 className="font-semibold">Company</h3>
        <Link href="#" prefetch={false}>
          About Us
        </Link>
        <Link href="#" prefetch={false}>
          Our Team
        </Link>
        <Link href="#" prefetch={false}>
          Careers
        </Link>
        <Link href="#" prefetch={false}>
          News
        </Link>
      </div>
      <div className="grid gap-1">
        <h3 className="font-semibold">Products</h3>
        <Link href="#" prefetch={false}>
          Industrial Equipment
        </Link>
        <Link href="#" prefetch={false}>
          Automation Solutions
        </Link>
        <Link href="#" prefetch={false}>
          Customized Solutions
        </Link>
      </div>
      <div className="grid gap-1">
        <h3 className="font-semibold">Services</h3>
        <Link href="#" prefetch={false}>
          Installation
        </Link>
        <Link href="#" prefetch={false}>
          Maintenance
        </Link>
        <Link href="#" prefetch={false}>
          Consulting
        </Link>
      </div>
      <div className="grid gap-1">
        <h3 className="font-semibold">Legal</h3>
        <Link href="#" prefetch={false}>
          Privacy Policy
        </Link>
        <Link href="#" prefetch={false}>
          Terms of Service
        </Link>
        <Link href="#" prefetch={false}>
          Cookie Policy
        </Link>
      </div>
      <div className="grid gap-1">
        <h3 className="font-semibold">Connect</h3>
        <Link href="#" prefetch={false}>
          Facebook
        </Link>
        <Link href="#" prefetch={false}>
          Twitter
        </Link>
        <Link href="#" prefetch={false}>
          LinkedIn
        </Link>
        <Link href="#" prefetch={false}>
          Instagram
        </Link>
      </div>
    </div>
  </footer>


}
