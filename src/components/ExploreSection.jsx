// ExploreSection.jsx
import React from "react";

export default function ExploreSection() {
  return (
    <section className="flex flex-col md:flex-row md:items-center md:gap-8 max-w-5xl mx-auto mt-16">
      <div className="grid grid-cols-2 grid-rows-2 gap-4 md:w-1/2">
        <img className="rounded-tl-3xl w-full h-full object-cover max-w-[160px] max-h-[160px]" src="https://storage.googleapis.com/a1aa/image/9fabbe95-a84c-4ae5-0d04-89f70a056d54.jpg" alt="" />
        <img className="rounded-tr-3xl w-full h-full object-cover max-w-[80px] max-h-[80px]" src="https://storage.googleapis.com/a1aa/image/a0235693-8d1d-4baf-e902-a00c833dca6c.jpg" alt="" />
        <img className="rounded-bl-3xl w-full h-full object-cover max-w-[80px] max-h-[80px]" src="https://storage.googleapis.com/a1aa/image/deab9a0e-564d-4476-2b82-3b411c3396db.jpg" alt="" />
      </div>
      <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
        <h2 className="text-3xl font-semibold tracking-wide leading-tight">
          <span className="text-cyan-400">Explore </span>
          <span className="text-purple-500">in the </span>
          <span className="text-cyan-400">metaverse </span>
          <span className="text-purple-500">one </span>
          <span className="text-white">pixel </span>
          <br />
          <span className="text-white">at a time</span>
        </h2>
        <p className="text-xs text-gray-300 mt-2">
          Experience the future of marketing with VR! Explore virtual showrooms, enjoy 360-degree ads, and get personalized experiences.
        </p>
        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 text-xs font-semibold tracking-wide">Explore !!</button>
          <button className="w-8 h-8 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
            <i className="fas fa-play text-xs" />
          </button>
        </div>
      </div>
    </section>
  );
}
