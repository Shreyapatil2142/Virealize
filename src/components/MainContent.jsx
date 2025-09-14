
export default function MainContent() {
  return (
    <main className="relative z-20 max-w-7xl mx-auto px-6 py-20 sm:py-28 md:py-32 lg:py-36">
      <h1 className="text-white font-orbitron font-bold text-4xl sm:text-5xl md:text-6xl leading-tight max-w-lg">
        Upgrade Your
        <br />
        VR 
        <span
          className="text-gradient font-semibold"
          style={{
            background: 'linear-gradient(90deg, #b33cff, #f07ce0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Experience
        </span>
        <br />
        Today
      </h1>
      <p className="text-white text-base sm:text-xl max-w-md mt-4 leading-relaxed font-sans">
        Discover cutting-edge VR accessories to elevate your gaming experience — immerse yourself in the future of virtual reality.
      </p>
      <div className="mt-8 flex space-x-4">
        <button className="flex items-center space-x-2 text-base sm:text-base font-bold tracking-widest uppercase px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 hover:opacity-90 transition">
          <span>SHOP NOW</span>
          <i className="fas fa-shopping-bag"></i>
        </button>
        <button className="text-white text-base sm:text-base font-bold tracking-widest uppercase px-5 py-2 rounded-full border border-white bg-white/10 hover:bg-white/20 transition">
          EXPLORE PRODUCTS
        </button>
      </div>
    </main>
  );
}