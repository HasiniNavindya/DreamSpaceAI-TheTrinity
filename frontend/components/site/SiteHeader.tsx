import Link from "next/link";
import type { NavLink } from "./navLinks";

type SiteHeaderProps = {
  links: NavLink[];
  ctaHref?: string;
  ctaLabel?: string;
};

export default function SiteHeader({
  links,
  ctaHref = "/dashboard",
  ctaLabel = "Get Started",
}: SiteHeaderProps) {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#e9ddd4] bg-surface/85 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-16">
        <Link href="/" className="font-display text-2xl font-bold text-primary">
          DreamSpace AI
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
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
          href={ctaHref}
          className="rounded-full bg-primary px-6 py-3 text-sm font-medium tracking-wide text-on-primary transition-all duration-150 hover:scale-105 active:scale-95"
        >
          {ctaLabel}
        </Link>
      </div>
    </nav>
  );
}
