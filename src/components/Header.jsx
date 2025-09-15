import { Link } from "react-router-dom";
import virealize from "/virealize.svg";
import logo from "/logo.png";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 
                       bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="flex items-center space-x-3">
        {/* Grid Icon */}
        <div className="w-10 h-10">
         <img src= {virealize} className="w-full h-full object-contain" alt="virealize" />
        </div>

        {/* Menu */}
        <span className="w-20 h-15 cursor-pointer">
          <a href="#top">
            <img src={logo} className="w-full h-full object-contain" alt="logo"/></a>
        </span>

        <span className="text-white text-sm">|</span>

        {/* Search */}
        <button
          aria-label="Search"
          className="flex items-center justify-center w-8 h-8 rounded-full 
                     bg-white/20 hover:bg-white/30 transition-colors"
        >
          <i className="fas fa-search text-white text-sm"></i>
        </button>
      </div>

      <nav className="flex justify-center gap-10 text-sm text-white">
        {[
          { name: "Home", href: "#top" },
          { name: "About us", href: "#about" },
          { name: "Company", href: "#company" },
          { name: "Services", href: "#services" },
          { name: "Contact", href: "#contact" },
        ].map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="hover:underline transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Auth Buttons */}
      <div className="flex space-x-4">
        <Link
          to="/auth"
          className="text-white text-base font-semibold px-4 py-2 border border-white rounded-md hover:bg-white/20 transition"
        >  Log In
        </Link>
      </div>
    </header>
  );
}
