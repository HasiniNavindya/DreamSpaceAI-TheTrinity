"use client";

import Image from "next/image";

type StylesGalleryFeaturedProps = {
  onSelectLuxury: () => void;
};

export default function StylesGalleryFeatured({ onSelectLuxury }: StylesGalleryFeaturedProps) {
  return (
    <section className="mt-[120px]">
      <div className="flex flex-col overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-lowest ambient-shadow lg:flex-row">
        <div className="relative h-80 lg:h-auto lg:w-2/3">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMX629V9Oii7OnbU_682yQ9i9cZuzTvzlpFAbETWg4Uj2efwxXBGD9LnLMl_fXtEhnM2d3gOGs0OYkXKa85Sijsq7q8bhhkqxUhnJxuyCKe8jN0lramfmU5Lnr1wo3Pbv8MxphdZKKRPh6kSsBqnMioLMSFyMhaMYXx2DUcXl9CEE-eIjsLuiZ6mtBcxGkOkxrtL53rNf1VXQikKuWYkUaoQ6mk_Md420eLyRyhrg-5EX9cuS_p1jqUO9QZFD9i2yS5TKF8MRq5veA"
            alt="Luxury penthouse transformation"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
          <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 shadow-sm backdrop-blur">
            <span className="flex items-center gap-2 text-sm font-medium tracking-wide text-primary">
              Most Popular This Week ✨
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center p-10 lg:w-1/3">
          <h2 className="mb-4 font-display text-4xl font-medium text-on-surface">
            Luxury Transformation
          </h2>
          <p className="mb-8 text-base leading-6 text-secondary">
            Experience our most requested style this season. Elevate your space with rich
            textures and sophisticated architectural details.
          </p>
          <div className="mb-10 flex gap-4">
            <div className="relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvkRvB1q4pBLlYSqiI0H5aIypD9u_sVDgosuYpAcCZjYEqQAEU2VO7g4QHl-EN44e62EF8HTpJ5a1knRJvsNyY9XVyy6Rlz4p02x1D_cZ1H_DJ-T9iGRfJB4oc9PK1jciSinG1TgBbfor11IJjb6Wr_vfLzVnc3D4Eq1ORyLi2mE7mihBSuMX4E8NxORHBI7djs2eQyJZACOhh4oR9k32euS-pfvWk36FiaKaoATIy7QSRBN-xDAD-PZKrryZ0N4zOhTLF6l9GdSC0"
                alt="Before transformation"
                width={80}
                height={80}
                className="rounded-2xl border-2 border-white object-cover shadow-sm"
              />
              <span className="absolute -left-2 -top-2 rounded-full bg-secondary px-2 py-0.5 text-[10px] text-white">
                Before
              </span>
            </div>
            <div className="relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBcn5t0TQMk4mWuWaoCtdet8FRI82l4O_a9eJvIEVuqEsQrSDwEM2ioLczWO19v5XuHps1GRzQSzY6O18OC0vdvTfTnTU1bqjB8PaJ7yTSULs9-iEM9dvFYDbkXqsqeKloWJfxKytpVQCz3sSzBVaBDcmBsIMfBALQREshEffUjUIPmOzv8sziapWcssUm21sbQeSw3m1CQQ9HYXj8Dwm5ZKMxXM-ces5l2i1IBtmfcgc_7FS7eaN7U7d63CG8KaHY1xUJPBQbxOY2"
                alt="After transformation"
                width={80}
                height={80}
                className="rounded-2xl border-2 border-primary object-cover shadow-sm"
              />
              <span className="absolute -left-2 -top-2 rounded-full bg-primary px-2 py-0.5 text-[10px] text-white">
                After
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onSelectLuxury}
            className="rounded-full bg-primary px-8 py-4 text-sm font-medium tracking-wide text-on-primary transition-transform hover:scale-105"
          >
            Select Luxury Style
          </button>
        </div>
      </div>
    </section>
  );
}
