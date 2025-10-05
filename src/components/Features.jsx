import React from "react";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: "🪑",
      title: "Wide Variety",
      desc: "From modern sofas to classic beds, explore our huge range of furniture collections.",
    },
    {
      id: 2,
      icon: "🌿",
      title: "Eco-Friendly",
      desc: "We use sustainable wood and eco-friendly materials to protect the environment.",
    },
    {
      id: 3,
      icon: "💰",
      title: "Affordable Pricing",
      desc: "Premium furniture at prices that suit every budget without compromising quality.",
    },
    {
      id: 4,
      icon: "🛠️",
      title: "Custom Designs",
      desc: "Tailor-made furniture to perfectly match your home and lifestyle.",
    },
  ];

  return (
    <section className="bg-white pt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Our <span className="text-cyan-600">Features</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Discover why Hatim Furniture stands out in the market with features designed 
          to bring style, comfort, and value to your home.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-gray-50 rounded-2xl p-6 border hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4 text-4xl">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
