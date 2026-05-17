"use client";

type ResultCardProps = {
  imageSrc: string | null;
  styleLabel?: string | null;
  roomType?: string;
};

export default function ResultCard({
  imageSrc,
  styleLabel,
  roomType = "Living Room",
}: ResultCardProps) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-[#efe6e1] bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <span className="material-symbols-outlined text-primary">image</span>
        <h2 className="text-lg font-medium text-[#4a3f39]">Your Uploaded Room</h2>
      </div>

      <div className="relative min-h-[320px] flex-1 overflow-hidden rounded-lg bg-[#efebe8]">
        {imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            alt="Uploaded room"
            className="h-full min-h-[320px] w-full object-cover"
            src={imageSrc}
          />
        ) : (
          <div className="flex min-h-[320px] items-center justify-center text-[#a8968f]">
            No image found. Upload a room photo first.
          </div>
        )}

        {imageSrc && (
          <div className="absolute left-4 top-4 flex flex-col gap-2">
            <span className="rounded-full bg-[#2f2b2a] px-4 py-2 text-xs font-medium uppercase tracking-widest text-white">
              {roomType}
            </span>
            {styleLabel && (
              <span className="rounded-full bg-primary/90 px-4 py-2 text-xs font-medium uppercase tracking-widest text-white">
                {styleLabel}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
