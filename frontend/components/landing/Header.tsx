import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#", label: "Home", active: true },
  { href: "#styles", label: "Styles" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "#features", label: "Features" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About Us" },
];

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-surface/80 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-16">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="DreamSpace AI Logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            priority
          />
          <span className="font-display text-xl font-bold text-primary md:text-2xl">
            DreamSpace AI
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-all duration-200 hover:scale-105 hover:text-primary ${
                link.active
                  ? "border-b-2 border-primary pb-1 font-bold text-primary"
                  : "text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#get-started"
          className="rounded-full bg-primary px-6 py-3 text-sm font-medium tracking-wide text-on-primary transition-all duration-150 hover:scale-105 active:scale-95"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}
