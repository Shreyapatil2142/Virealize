import React from "react";
import { motion } from "framer-motion";

export default function RealitySection() {
  return (
    <section className="flex flex-col md:flex-row md:items-center md:justify-between max-w-5xl mx-auto gap-8 mt-20 px-6">
      {/* Left: Text */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide leading-tight">
          <span className="text-cyan-400">Touch </span>
          <span className="text-purple-500">the </span>
          <span className="text-white">Reality</span>
        </h2>
        <p className="text-base text-gray-300 mt-2">
          Get ready to enter breathtaking digital landscapes, feel the thrill of hyper-immersive games, and interact with environments like never before.
        </p>
        <button className="mt-6 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 text-base font-semibold tracking-wide">
          Play now
        </button>
      </motion.div>

      {/* Right: Image */}
      <motion.div
        className="md:w-1/2 rounded-xl max-w-[320px] mx-auto md:mx-0"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src="https://storage.googleapis.com/a1aa/image/d4fd971f-f06e-46e9-30d1-713d3e06770f.jpg"
          alt="Woman VR"
          className="object-cover rounded-2xl w-full h-full"
        />
      </motion.div>
    </section>
  );
}
