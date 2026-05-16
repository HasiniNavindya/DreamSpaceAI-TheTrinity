import Image from "next/image";
import Link from "next/link";

const productLinks = [
  { href: "#styles", label: "Styles Library" },
  { href: "#pricing", label: "Pricing Plans" },
  { href: "#enterprise", label: "Enterprise" },
];

const companyLinks = [
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
  { href: "#terms", label: "Terms of Service" },
  { href: "#privacy", label: "Privacy Policy" },
];

const socialLinks = [
  { href: "#", icon: "photo_camera", label: "Instagram" },
  { href: "#", icon: "share", label: "Share" },
  { href: "#", icon: "alternate_email", label: "Email" },
];

export function Footer() {
  return (
    <footer className="mt-24 w-full border-t border-outline-variant bg-surface-container py-24 md:mt-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-4 md:px-16">
        <div className="md:col-span-1">
          <div className="mb-6 flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="DreamSpace AI Logo"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <span className="font-display text-xl font-bold text-primary">
              DreamSpace AI
            </span>
          </div>
          <p className="mb-6 text-base leading-6 text-on-surface-variant">
            Revolutionizing interior design through the power of curated
            artificial intelligence.
          </p>
          <p className="text-base leading-6 text-on-surface-variant">
            © 2024 DreamSpace AI. All rights reserved.
          </p>
        </div>

        <div>
          <h4 className="mb-6 text-sm font-bold tracking-wide text-on-surface">
            Product
          </h4>
          <ul className="space-y-4">
            {productLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-base text-on-surface-variant transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-sm font-bold tracking-wide text-on-surface">
            Company
          </h4>
          <ul className="space-y-4">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-base text-on-surface-variant transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-sm font-bold tracking-wide text-on-surface">
            Follow Us
          </h4>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container text-primary transition-transform hover:scale-110"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {social.icon}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}




