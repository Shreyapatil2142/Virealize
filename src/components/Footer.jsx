// Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 text-xs text-gray-400 max-w-7xl mx-auto px-6">
      <nav className="flex justify-center gap-10 text-sm text-white mb-10">
        {["Home", "About us", "Company", "Services", "Contact"].map((item, i) => (
          <a key={i} href="#" className="hover:underline">{item}</a>
        ))}
      </nav>
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
        <div className="flex gap-6 mb-4 md:mb-0">
          {["Terms", "Privacy", "Condition"].map((item, i) => (
            <a key={i} href="#" className="hover:text-white">{item}</a>
          ))}
        </div>
        <div className="text-center md:text-right mb-4 md:mb-0">
          ©2025 Shreya All right reserved
        </div>
        <div className="flex gap-6 text-gray-400">
          <a href="#" aria-label="Twitter" className="hover:text-white"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="YouTube" className="hover:text-white"><i className="fab fa-youtube"></i></a>
          <a href="#" aria-label="GitHub" className="hover:text-white"><i className="fab fa-github"></i></a>
          <a href="#" aria-label="Instagram" className="hover:text-white"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
}
