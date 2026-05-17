"use client";

type ResultCardProps = {
  imageSrc: string | null;
  styleLabel?: string | null;
  roomType?: string;
  isLoading?: boolean;
};

export default function ResultCard({
  imageSrc,
  styleLabel,
  roomType = "Living Room",
  isLoading = false,
}: ResultCardProps) {
  function handleDownload() {
    if (!imageSrc) return;
    const anchor = document.createElement("a");
    anchor.href = imageSrc;
    anchor.download = "dreamspace-room.png";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  }

  return (
    <div className="flex h-full flex-col rounded-xl border border-[#efe6e1] bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">image</span>
          <h2 className="text-lg font-medium text-[#4a3f39]">Your Uploaded Room</h2>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() =>
              navigator.share?.({
                title: "DreamSpace room",
                url: imageSrc || window.location.href,
              })
            }
            className="rounded-full bg-[#f0e6e0] px-4 py-1.5 text-sm text-[#6f5f57] transition-all hover:brightness-95"
          >
            <span className="material-symbols-outlined align-middle text-lg">share</span>
          </button>
          <button
            type="button"
            onClick={handleDownload}
            disabled={!imageSrc}
            className="rounded-full bg-[#f0e6e0] px-4 py-1.5 text-sm text-[#6f5f57] transition-all hover:brightness-95 disabled:opacity-50"
          >
            <span className="material-symbols-outlined align-middle text-lg">download</span>
          </button>
        </div>
      </div>

      <div className="relative flex-1 overflow-hidden rounded-lg bg-[#efebe8] min-h-[320px]">
        {isLoading ? (
          <div className="flex min-h-[320px] flex-col items-center justify-center gap-4 text-[#a8968f]">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            <p className="animate-pulse font-medium text-primary">
              Designing your space...
            </p>
          </div>
        ) : imageSrc ? (
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

        {imageSrc && !isLoading && (
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
