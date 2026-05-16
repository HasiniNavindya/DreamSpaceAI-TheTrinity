"use client";

export default function ResultCard({ afterSrc, isLoading }: { afterSrc: string | null, isLoading: boolean }) {
  function handleDownload() {
    if (!afterSrc) return;
    const a = document.createElement("a");
    a.href = afterSrc;
    a.download = "dreamspace.png";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#efe6e1] h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#c46a4a]">auto_awesome</span>
          <h2 className="font-label-md text-lg text-[#4a3f39]">AI Generated Result</h2>
        </div>
        <div className="flex gap-3">
          <button onClick={() => navigator.share?.({ title: "DreamSpace result", url: afterSrc || window.location.href })} className="px-4 py-1.5 rounded-full bg-[#f0e6e0] text-[#6f5f57] hover:brightness-95 transition-all">
            <span className="material-symbols-outlined align-middle">share</span>
            <span className="ml-2 text-sm">share</span>
          </button>
          <button onClick={handleDownload} className="px-4 py-1.5 rounded-full bg-[#f0e6e0] text-[#6f5f57] hover:brightness-95 transition-all">
            <span className="material-symbols-outlined align-middle">download</span>
            <span className="ml-2 text-sm">download</span>
          </button>
        </div>
      </div>

      <div className="relative flex-1 rounded-lg overflow-hidden group bg-[#efebe8] min-h-[400px]">
        {isLoading ? (
          <div className="flex flex-col h-full items-center justify-center text-[#a8968f] gap-4">
            <div className="w-12 h-12 border-4 border-[#c46a4a] border-t-transparent rounded-full animate-spin"></div>
            <p className="font-medium animate-pulse text-[#c46a4a]">Designing your space...</p>
          </div>
        ) : afterSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img alt="AI Generated Interior" className="w-full h-full object-cover rounded-lg" src={afterSrc} />
        ) : (
          <div className="flex h-full items-center justify-center text-[#a8968f]">No result yet — generate to preview.</div>
        )}

        {afterSrc && (
          <div className="absolute top-6 left-6">
            <span className="bg-[#2f2b2a] text-white font-label-md text-xs px-4 py-2 rounded-full uppercase tracking-widest">Modern Luxury</span>
          </div>
        )}
      </div>
    </div>
  );
}
