// ProductsSection.jsx
import React from "react";

const products = [
  {
    name: "Gear VR Headset",
    img: "https://storage.googleapis.com/a1aa/image/06ff0aee-5bb4-4415-664b-bcb85a0e088b.jpg",
    size: "180px",
  },
  {
    name: "Smart VR Headset",
    img: "https://storage.googleapis.com/a1aa/image/b6e14ee8-7126-4a8b-f3cc-e633a9f0b23e.jpg",
    size: "140px",
  },
  {
    name: "PI Station VR",
    img: "https://storage.googleapis.com/a1aa/image/f6e3f64a-8fe4-49fd-fb4f-74ea6176c687.jpg",
    size: "180px",
  },
];

export default function ProductsSection() {
  return (
    <section>
      <h1 className="text-center text-3xl font-semibold tracking-wide">Our Products</h1>
      <div className="flex flex-wrap justify-center gap-12 mt-8">
        {products.map((product, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <div
              className={`rounded-2xl border-4 border-gradient-to-br from-cyan-400 to-pink-600 overflow-hidden max-w-[${product.size}] max-h-[${product.size}]`}
            >
              <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <p className="text-sm text-white tracking-wide text-center">{product.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
