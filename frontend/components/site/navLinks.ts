export type NavLink = {
  href: string;
  label: string;
  active?: boolean;
};

export const MAIN_NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/comparison", label: "Comparison" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/styles", label: "Styles" },
] as const;

export function getNavLinks(activeHref: string): NavLink[] {
  return MAIN_NAV_ITEMS.map((item) => ({
    ...item,
    active: item.href === activeHref,
  }));
}
