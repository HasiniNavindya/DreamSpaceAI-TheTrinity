"use client";

import { useRef } from "react";

export default function UploadPanel({ onUpload, roomType, setRoomType, styleChoice, setStyleChoice, onGenerate }: any) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) onUpload(file);
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#efe6e1]">
      <div className="flex items-center gap-2 mb-4">
        <span className="material-symbols-outlined text-[#c46a4a]">add_a_photo</span>
        <h2 className="font-label-md text-lg text-[#4a3f39]">1. Upload & Configure</h2>
      </div>

      <div onClick={() => inputRef.current?.click()} className="border-2 border-dashed border-[#ecded6] rounded-xl p-8 flex flex-col items-center justify-center gap-4 bg-[#fff7f2] hover:bg-[#fff2ec] transition-colors group cursor-pointer mb-6">
        <div className="w-20 h-20 rounded-full bg-[#e9d7cf] flex items-center justify-center text-[#c46a4a] group-hover:scale-105 transition-transform">
          <div className="text-3xl">cloud_upload</div>
        </div>
        <div className="text-center">
          <p className="font-body-md text-[#4a3f39] font-semibold">Drag and drop your room photo</p>
          <p className="text-xs text-[#8e7e76] mt-1">Supports JPG, PNG up to 10MB</p>
        </div>
        <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
        <button onClick={() => inputRef.current?.click()} className="mt-2 px-6 py-2 bg-[#c46a4a] rounded-full text-white font-medium hover:opacity-95 transition-opacity">
          Upload Image
        </button>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-xs text-[#8e7e76] uppercase tracking-wider ml-1">Room Type</label>
          <div className="relative">
            <select value={roomType} onChange={(e) => setRoomType(e.target.value)} className="w-full appearance-none bg-white border border-[#efe6e1] rounded-full px-5 py-3 outline-none font-medium text-[#4a3f39]">
              <option>Living Room</option>
              <option>Bedroom</option>
              <option>Kitchen</option>
              <option>Dining Area</option>
              <option>Home Office</option>
            </select>
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#b9aca6]">expand_more</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs text-[#8e7e76] uppercase tracking-wider ml-1">Choose Style</label>
          <div className="relative">
            <select value={styleChoice} onChange={(e) => setStyleChoice(e.target.value)} className="w-full appearance-none bg-white border border-[#efe6e1] rounded-full px-5 py-3 outline-none font-medium text-[#4a3f39]">
              <option>Modern Luxury</option>
              <option>Scandinavian Minimalist</option>
              <option>Industrial Loft</option>
              <option>Mid-Century Modern</option>
              <option>Bohemian Chic</option>
            </select>
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#b9aca6]">expand_more</span>
          </div>
        </div>
      </div>

      <button onClick={onGenerate} className="w-full mt-8 py-4 bg-[#c46a4a] rounded-full text-white font-headline-md text-lg shadow-sm hover:scale-[1.01] active:scale-[0.99] transition-all">
        Generate Dream Space ✨
      </button>
    </div>
  );
}
