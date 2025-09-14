export default function Header() {
  return (
    <header className="relative z-20 font-mono flex items-center justify-between px-6 py-4 bg-white/10 backdrop-blur-sm border-b border-white/20">
      <div className="flex items-center space-x-3">
        <div className="grid grid-cols-3 grid-rows-3 gap-1 w-6 h-6 text-white">
          {[...Array(9)].map((_, i) => (
            <span key={i} className="block bg-white rounded-full"></span>
          ))}
        </div>
        <span className="text-white font-Orbitron text-sm tracking-wide">MENU</span>
        <span className="text-white text-sm">|</span>
        <button
          aria-label="Search"
          className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        >
          <i className="fas fa-search text-white text-sm"></i>
        </button>
      </div>
      <div className="flex space-x-4">
        <button className="text-white text-xs font-semibold tracking-widest px-4 py-2 border border-white rounded-md hover:bg-white/20 transition">
          Sign Up
        </button>
        <button className="text-white text-xs font-semibold tracking-widest px-4 py-2 border border-white rounded-md hover:bg-white/20 transition">
          Log In
        </button>
      </div>
    </header>
  );
}