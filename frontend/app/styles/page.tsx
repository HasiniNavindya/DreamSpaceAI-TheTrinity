import type { Metadata } from "next";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { getNavLinks } from "@/components/site/navLinks";
import StylesCarousel, { type StyleCard } from "@/components/styles/StylesCarousel";

const interiorStyles: StyleCard[] = [
  {
    name: "Modern",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCi8vFGrojRfc9z1LZ1bh3NHNnJnbYuKJ8ytW2vxMIKMzTTEhHa3eZFf4VDGDp1wufGu4chXg_kBI2M7as1OTg34qiVfvl8hthwfyG31mVfS06zNws481hCTtiRBFtUIEjlCi3rYPjWYqJiH7ox-69s4rHJBBUWQE9LKvLxY5eOxWs5RokmLYkfzdMdp8LoQXvEPnE5vhHyzNybBcdmD4D3kTcGmXXN2_2AhA_5YQu0m3QFWCcN8eo98k_X10R1osrVaVZpHQvRWadg",
  },
  {
    name: "Minimal",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDrTTy3OPmagQ31vMIrm0NtcuS-PEzcl0mSnINPUoYOQDH1ypZVnIgb3x8B35w5TEhmp6Kw9CeZddllE7a98ECvwUYwX9bfEwfzHAFtZZf4GLq0iUjBfSCs02cNpy2bIu12o8khRYtOs_DVFGWtewu26b7AVjgllIORGQfh7vl8SGBWCpIImtEvGdTYT8f8eHkn4VtVvZYRDy5ALZ4idC-qxistAZRYVa3puY0_ir_YiruULBTb0KzjGJwpm1LN9uKgOexgIkMHrDR4",
    showArrow: true,
  },
  {
    name: "Luxury",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTHeEnYxeR5ypyTzlknOkB3SseENzCC6LKND9GaRgYZt2rzyW-m9hKJMWoIwqlezbnRRcM6ZiY0RkQ7X41FR3WVB51uClfpm8IfFanGofCTF65bXNCPP7iKXiqXqwZQ4YL-iOjqFBmHO1rtDlZzjIB0EuJGDTSmX0NWGQQnq0jf9cFVF6-7FvHK7OTmgT5OdLHszIm-IzJ6Zk0h4N0qhn81UHDIAXgfUQKouSeadeBDMWiy5JRmu47w-y8_EWPKsLJfmaP6HPSFItL",
    showArrow: true,
  },
  {
    name: "Gaming",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-y0SvMAU5AoalfuOvBCvU_5mLUTO5os_q2Yt8wVVBhvyxJuW8CywfP96Aa506bHzzuazXIiG05sNEQ0PHKX0YhIw9-Xif_mtUbRxmpcxSIyfzK8C2PBFBtiAeoeDpK0GntpVtb0knDcrr2Jq1kKcf76kOflUgv_oVw6z-YXI1qllEIGcgoXdkfOTkU57EHHL9jhOoWr-SOs77ubIA3-own3osrb_ucxls_ASksG-esJVOsiqoXtCLgggkjmTp51TmQqEyMWfAQCXb",
    showArrow: true,
  },
  {
    name: "Cafe Style",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDliyrD116xDYd6xbFz6XLRLL2WNWa0W2SsEN2z9OtseIPu7AJi7ZzJmdMbLVjGipoHEzdpYkOwMPtXjDX2PvwfA3zODXcMh7HPnL6Ehn4oh41w14Ctk4xLo0-2J8RhXMLzSJECfBt2x0mF1aqT8C3LaL1AHEL7GiGqF5QzfIAG0MbnT2SX9CojfRhDFPCUrXrQFbX8OHsXaQHySyVilr7KkXGvzizzEF1KTbkFLuojX1_r6piVe2DLvyLPLZdYzaJJzIuea3OotrrD",
    showArrow: true,
  },
  {
    name: "Korean Style",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGTWL0TxTov2O6GMM4gJhZ75oR3BNPkXCCMcpm6mFYSI8OmhoxSY9j2uMLblNSXvNwVbKfWUp0E5tmCNIa3d_xczgK3KaEUly7bHXRVgBBvZOtDO14Qlsf2dOnFZe7M7sKHydYWz-SFwCBjyUYYUwKZpFPK7STWENr7oEgRj8hdXCd9GnbaZzNQUamEQGZuUyBF7OOwyyoKQgk68kZfqeco5aVGVeWFRYrrOYdlWeVcrSTn9rpmUGjv1AkD1eOBfQ4mieQEn_9Hiz7",
    showArrow: true,
  },
  {
    name: "Scandinavian",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBbmMKXBgu5LNe8j-pEUhlQdUMjaTpqvVJDcvpRGF5tabTgHUR_uxOjDwObzxeHp34rwXZGuewJ7aCQ-EQ_octn9k7uMbY5EAUn7C19qqdzL-iheX5Yq4Cuf4P3AGHijClYEXM0iJOQxnV78cDmp601U0FWS1xMNbkJEbn1h2eU1LODdE9AH51Oeldr1nE7wbd6gwK8cqoLAem7iIjiSHxwa33QonzKMDsESU6xNRLGngCbFhZv8smVZ64qcq59uAoufgq2c7hmeb1j",
    showArrow: true,
  },
];

export const metadata: Metadata = {
  title: "DreamSpace AI - Popular Interior Styles",
  description:
    "Discover curated interior design aesthetics from modern minimalism to luxury elegance for your AI-enhanced space.",
};

export default function StylesPage() {
  return (
    <div className="min-h-screen text-on-surface">
      <SiteHeader links={getNavLinks("/styles")} />

      <main className="overflow-hidden pb-30 pt-32">
        <section className="mx-auto max-w-7xl px-6 md:px-16">
          <div className="relative mb-16 text-center">
            <h1 className="relative inline-block font-display text-4xl font-medium text-on-background md:text-[40px] md:leading-12">
              Popular Interior Styles
              <span className="absolute -bottom-4 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-primary" />
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-base leading-6 text-on-surface-variant opacity-80">
              Discover curated aesthetics tailored to your vision. From modern minimalism to
              luxury elegance, find the perfect foundation for your AI-enhanced space.
            </p>
          </div>

          <StylesCarousel styles={interiorStyles} />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
