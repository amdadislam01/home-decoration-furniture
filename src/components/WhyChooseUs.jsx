import React from "react";

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: "✅",
      title: "Premium Quality",
      desc: "Crafted with top-grade materials to ensure durability and long-lasting comfort.",
    },
    {
      id: 2,
      icon: "🛡️",
      title: "Trusted by Thousands",
      desc: "Over 20 years of excellence with happy customers nationwide.",
    },
    {
      id: 3,
      icon: "🚚",
      title: "Fast & Safe Delivery",
      desc: "Get your furniture delivered safely and on time, anywhere in Bangladesh.",
    },
    {
      id: 4,
      icon: "✨",
      title: "Modern Designs",
      desc: "A perfect blend of style and functionality to elevate your home decor.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          WHY CUSTOMERS CHOOSE <span className="text-cyan-600">HOME DECOR</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          At home Furniture, we don’t just sell furniture — we bring elegance, comfort, and 
          durability into your home. Here’s why people trust us:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4 text-4xl">{reason.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
