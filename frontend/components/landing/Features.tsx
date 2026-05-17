import Image from "next/image";
import Link from "next/link";

const styleThumbnails = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdD6oLPMzaGtnx26dXBauCvPnZTqezZmnGnkEuXJjxkfR4Y-5w5J6ItOtdxMrDG7xpFUsBF2h8l6NsP7Mo1NLanyA9Qklko1tz-pvMWEg9ZW0FL3P-BmISiBFhr9d2EAwZ1Pe_q2KAyQSbcdPxYxccRwPEE_Snqua5cCMB5oeYwPnuaz5hXsKaDuUqeDVDS7CWFNScttpH9ipVRl73zn87wrLoO8Rq1ouPALU7iGp3ePZNjnxLlT0fjNBUqJT-0PeYVx0e15cBUXzD",
    alt: "Cozy minimalist living room corner",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzRK3HWriYF5-abJqfLO2MFe9z4_Ec3JpPaKyVFpr1b0AVTFF-z3zZqIGJkOwiBIl_wxCpTcihLSeOyBo9FwvIYBHoy0qukcx8ue-Jm1hiC28u8OpLCHgMsP7WQtWOQ2wstZfjiM764DQtJ8RHY2A7a3si2dXKmgtu6GJ4Xvz2-Hu6sTJ4BtxMebXPN91ThBQ38kCUaF2oJ1du_7_fmuyL6t3zwirR3fMF-XGKo9GJkd0gEUVK1dlw7g5uLl2pNYZuUAfdB_6yKG2X",
    alt: "Modern architectural bedroom",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvQc8OBCHqCi3XbIf9BBkwDe8aBHNfqyEbNdqN7nAxGyiEj_r5PuObbJUXPc7dkGaWeH5QHLY6VhYDUbRezyG9o4EhxFpXmahX9u0kNABb_4oGBXzGdKCK14nXHD_7SXJZO6UJ8-3in5I3E_gYckUs_U3Rx5d0Te9LQojvNvP0-aXLL0vcIW-I7RKRJZVTwxL1LcDT7ulnKS6YuG_nxPLR8LZ_B3w-_MEkanp5Fev9CWRg18d4h0Iyot2wYCcTKSc6ngMUQYNsLyXS",
    alt: "Elegant dining space with moody lighting",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="mx-auto mt-24 max-w-7xl px-6 md:mt-32 md:px-16"
    >
      <div className="mb-16 text-center">
        <h2 className="font-display mb-4 text-3xl font-medium text-on-surface md:text-[40px] md:leading-[48px]">
          Curated Intelligence for Every Room
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-7 text-on-surface-variant">
          Our AI understands texture, lighting, and layout to provide results
          that feel like a high-end designer&apos;s hand.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Link
          href="/styles"
          className="group ambient-shadow flex flex-col justify-between rounded-2xl bg-[#fffdfb] p-8 transition-transform duration-300 hover:scale-[1.01] md:col-span-2"
        >
          <div>
            <span className="material-symbols-outlined mb-4 text-4xl text-primary">
              auto_awesome
            </span>
            <h3 className="font-display mb-3 text-2xl font-medium text-on-surface md:text-[32px]">
              Infinite Style Palette
            </h3>
            <p className="max-w-md text-base leading-6 text-on-surface-variant">
              From Mediterranean warmth to Minimalist cold-tech, switch your
              entire room&apos;s aesthetic with a single click using our advanced
              style engine.
            </p>
          </div>
          <div className="mt-8 flex gap-4">
            {styleThumbnails.map((thumb) => (
              <div
                key={thumb.src}
                className="relative h-20 w-20 overflow-hidden rounded-2xl bg-surface-container-high"
              >
                <Image
                  src={thumb.src}
                  alt={thumb.alt}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
            ))}
          </div>
        </Link>

        <div className="group ambient-shadow flex flex-col items-center justify-center rounded-2xl bg-primary-accent p-8 text-center text-white transition-transform duration-300 hover:scale-[1.01]">
          <span className="material-symbols-outlined mb-6 text-5xl">bolt</span>
          <h3 className="font-display mb-4 text-2xl font-medium md:text-[32px]">
            Real-time Rendering
          </h3>
          <p className="text-base leading-6 opacity-90">
            No more waiting days for design boards. Get photorealistic previews
            of your new room in under 15 seconds.
          </p>
          <Link
            href="/loading-state"
            className="mt-8 rounded-full bg-white/20 px-6 py-2 text-sm font-medium tracking-wide backdrop-blur transition-colors hover:bg-white/30"
          >
            Try It Now
          </Link>
        </div>
      </div>
    </section>
  );
}
