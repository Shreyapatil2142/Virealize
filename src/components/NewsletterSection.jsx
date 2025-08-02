// NewsletterSection.jsx
import React from "react";

export default function NewsletterSection() {
  return (
    <section className="max-w-3xl mx-auto w-full mt-16">
      <div className="border-4 rounded-3xl p-8 border-gradient-to-br from-purple-500 via-pink-500 to-cyan-400">
        <h3 className="text-center font-semibold tracking-wide mb-1">SUBSCRIBE TO OUR NEWSLETTER</h3>
        <p className="text-center text-gray-300 text-xs mb-6">
          be the first to experience cutting-edge vr tech, get early access to exclusive demos, and stay updated on future-forward innovations
        </p>
        <form className="flex rounded-full overflow-hidden max-w-md mx-auto border border-purple-600">
          <input className="flex-grow px-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none" placeholder="Your email" type="email" required />
          <button className="bg-gradient-to-r from-cyan-400 to-purple-600 px-5 text-xs font-semibold tracking-wide" type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
