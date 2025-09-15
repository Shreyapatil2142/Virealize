import React from "react";
import { motion } from "framer-motion";
import Rectangle7 from "/Rectangle 7.png";
import Rectangle8 from "/Rectangle 8.png";
import Rectangle9 from "/Rectangle 9.png";

const ProductsSection = () => {
  const products = [
    {
      name: "Gear VR Headset",
      img: Rectangle7,
      animation: { x: -100, opacity: 0 }, // from left
    },
    {
      name: "Smart VR Headset",
      img: Rectangle8,
      animation: { y: 100, opacity: 0 }, // from bottom
    },
    {
      name: "PI Station VR",
      img: Rectangle9,
      animation: { x: 100, opacity: 0 }, // from right
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Heading */}
      <h2 className="text-white text-4xl md:text-5xl font-orbitron font-bold mb-12 text-center">
        Our{" "}
        <span
          className="text-gradient font-semibold"
          style={{
            background: "linear-gradient(90deg, #b33cff, #f07ce0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Products
        </span>
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl w-full gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="p-4 flex flex-col items-center"
            initial={product.animation}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {index === 1 ? (
              // Middle special product
              <div className="relative flex items-center justify-center">
                {/* Gradient glow only for middle image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-96 h-96 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl opacity-70 animate-pulse"></div>
                </div>

                <img
                  src={product.img}
                  alt={product.name}
                  className="relative w-full h-48 mt-10 shadow-xl hover:scale-105 transition-transform duration-300 object-cover"
                />
              </div>
            ) : (
              <img
                src={product.img}
                alt={product.name}
                className="relative w-full h-full shadow-slate-50 hover:scale-105 transition-transform duration-300 object-cover"
              />
            )}

            {/* Product Name */}
            <p className="mt-4 text-lg font-semibold text-white text-center">
              {product.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
