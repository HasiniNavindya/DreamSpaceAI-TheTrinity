export default function Sidebar() {
  return (
    <aside className="w-72 bg-[#2f2b2a] text-[#efe9e5] flex flex-col justify-between py-10 px-6 shrink-0">
      <div className="space-y-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#c46a4a] flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
              home
            </span>
          </div>
          <span className="font-headline-md text-lg tracking-tight">DreamSpace AI</span>
        </div>

        <nav className="space-y-3">
          <a className="flex items-center gap-4 px-4 py-3 rounded-full bg-[#3b3837] text-white font-medium shadow-sm" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="">Dashboard</span>
          </a>
          <a className="flex items-center gap-4 px-4 py-3 rounded-lg text-[#b9aca6] hover:text-white hover:bg-[#3b3837] transition-colors" href="#">
            <span className="material-symbols-outlined">architecture</span>
            <span>My Projects</span>
          </a>
          <a className="flex items-center gap-4 px-4 py-3 rounded-lg text-[#b9aca6] hover:text-white hover:bg-[#3b3837] transition-colors" href="#">
            <span className="material-symbols-outlined">style</span>
            <span>Moodboards</span>
          </a>
          <a className="flex items-center gap-4 px-4 py-3 rounded-lg text-[#b9aca6] hover:text-white hover:bg-[#3b3837] transition-colors" href="#">
            <span className="material-symbols-outlined">favorite</span>
            <span>Favorites</span>
          </a>
          <a className="flex items-center gap-4 px-4 py-3 rounded-lg text-[#b9aca6] hover:text-white hover:bg-[#3b3837] transition-colors" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span>Settings</span>
          </a>
        </nav>
      </div>

      <div className="bg-[#3b3837] rounded-2xl p-6 space-y-4 border border-[#464241]">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-widest opacity-70">Pro Account</p>
          <p className="text-sm opacity-80">Unlock unlimited high-res AI generations.</p>
        </div>
        <button className="w-full py-3 bg-[#c46a4a] rounded-full text-white font-medium shadow-sm">Upgrade to Pro</button>
      </div>
    </aside>
  );
}
