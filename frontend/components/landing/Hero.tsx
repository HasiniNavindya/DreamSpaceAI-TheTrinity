import Image from "next/image";
import Link from "next/link";

const avatars = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAC0UmUKuqzb_bXZdK8O2pwyyemgGm-oN08N2DxtfAH6tONo9TtknmQttUNvYAOgieijqsvX8u1OHlYxBcB3iUQEDzVvLQNpcT-8KGwknSUGUFanqLCQt0NZiRIJIZU_HZLUHsCTeAumarLPU8IOWbl8u6xLAQ_ZBLCjBILI_yiLEZPdDtGCJ-z7VJEXvyHngHG8AGwAEnot4Jnc-a12DlIXiMk6Vcx8uTJfsB1J8nHaQQpXhJKgVJIGxM2iVTDNteUZQNuOFBwyu1Z",
    alt: "User portrait one",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ-fKOwC6BlNWQMKBGQ1dWe71EMxgUtiTa53pSVw3mH6u5oDH9Hpt1YVbQSo3Qwyn27zVpt8SFPbojknvlSxKyGcJKf-924VsvulWWNwVdXj-owRSKCZW6wi7XXvOIbx-2DzS_4J3ESd1Q_h1_22-UMZ9AvWbiM5z-HX1OvauBenHMBZV5zyoqenM4PFWEwMWXxVgzbj4vAF6EOxxXyWLaoWdPTkE4EkpACu7V9eV82RHLRJPpcxqXchQRBSajEcoOiB0Cml9qL_Fw",
    alt: "User portrait two",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAv-qL58zitKi7GTw9hqK7oLTUuMiw-5HxU04-TsqYbWPp9fcuKdyXDvlT4eZioREJypaHlonEIO_g33TE98W4hCun5006z35xK30P9yU5I6bSGOk0yVZLis-bW2PwJbA6k6rFAQbFCxNKyGPOByHDXVveFLHr4tfX8BHD-MI9ybbp4twKXOGYUoN3ivfOhX3GwZ68MYsfaIWkh9u0MkOsqih5Z9ixyWrK0kLyVAu08z2_IiKiXVYkAQ2H-IF8f96M4Mf4Pv-Etp5V5",
    alt: "User portrait three",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvpp9bzMQ6siPyw7YXAySwTn9Y-qQxfJYlMVKIJ5z3iTGidmo9b600Q4ZBo8UkTBaqMwYaq0EpsRQFlNSOPpINZ31YWBP0pTO2AcONrByb04fbCPnQFBnrxfs5pcXDrHYItVj3LNOQkbjK5BFWNsGUG1yzyQBPVCes-QbTubvKzodjcbxyEU-w9U65UJQdPoKzTKtRq9aLwp1usp_vuYmldiH1TJAXRv0ZhFGzMLVs9Uvvbf6yBA7xFY1ivbH1DVDi9gScO6TqGm2z",
    alt: "User portrait four",
  },
];

export function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-6 md:px-16 lg:grid-cols-2 lg:gap-8">
      <div className="flex flex-col items-start gap-8 lg:pr-12">
        <div className="flex items-center gap-2 rounded-full bg-primary-fixed px-4 py-1.5 text-sm font-medium text-on-primary-fixed">
          AI Powered Transformation ✨
        </div>

        <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-on-surface lg:text-[64px] lg:leading-[72px]">
          Redesign Your <br />
          Space With <br />
          <span className="text-primary-accent">AI Magic ✨</span>
        </h1>

        <p className="max-w-lg text-lg leading-7 text-on-surface-variant">
          Upload your room image and transform it into your dream space in
          seconds. Experience effortless elegance with curated AI styles
          tailored to your unique taste.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#get-started"
            className="rounded-full bg-primary-accent px-8 py-4 text-sm font-medium tracking-wide text-white shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            Start Designing
          </Link>
          <Link
            href="#styles"
            className="rounded-full border border-outline-variant px-8 py-4 text-sm font-medium tracking-wide text-on-surface transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            Explore Styles
          </Link>
        </div>

        <div className="mt-4 flex items-center gap-4">
          <div className="flex -space-x-3">
            {avatars.map((avatar) => (
              <Image
                key={avatar.src}
                src={avatar.src}
                alt={avatar.alt}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full border-2 border-white object-cover"
              />
            ))}
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-secondary text-[10px] font-medium tracking-wide text-on-secondary">
              +10k
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-medium tracking-wide text-on-surface-variant">
              Trusted by 10K+ happy users
            </span>
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold">4.9/5</span>
              <div className="flex text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined material-symbols-filled text-[16px]"
                  >
                    star
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-12 lg:mt-0">
        <div className="ambient-shadow relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface-container-highest">
          <Image
            src="/landingImg2.png"
            alt="Original interior space"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="floating-shadow absolute -bottom-8 -left-8 w-4/5 overflow-hidden rounded-2xl border-4 border-white bg-white md:-left-12">
          <div className="relative aspect-[4/3]">
            <Image
              src="/landingImg1.png"
              alt="AI transformed interior space"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 80vw, 40vw"
              priority
            />
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold tracking-wider text-primary uppercase shadow-sm backdrop-blur">
                AI Generated
              </span>
              <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-wider text-white uppercase shadow-sm">
                AI Powered Transformation
              </span>
            </div>
            <div className="absolute right-4 bottom-4 rounded-lg bg-white/90 px-4 py-2 shadow-md backdrop-blur-md">
              <p className="text-sm font-bold tracking-wide text-primary">
                Dream Style: Japandi Luxe
              </p>
            </div>
          </div>
        </div>

        <div className="absolute -top-6 -right-6 -z-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 -z-10 h-48 w-48 rounded-full bg-secondary-container/30 blur-3xl" />
      </div>
    </section>
  );
}
