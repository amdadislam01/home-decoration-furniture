import React from "react";

const testimonials = [
  {
    id: 1,
    name: "MD Amdad Islam",
    role: "Happy Customer",
    message:
      "HomeDecor এর সোফা কিনেছি, কোয়ালিটি অসাধারণ! দাম অনুযায়ী দারুণ ভ্যালু।",
    image: "https://avatars.githubusercontent.com/u/195456266?v=4",
  },
  {
    id: 2,
    name: "Zahidul Islam Mahim",
    role: "Interior Designer",
    message:
      "আমার ক্লায়েন্টদের জন্য HomeDecor সবসময় recommend করি। ডিজাইন আর durability দারুণ।",
    image: "https://avatars.githubusercontent.com/u/92626624?v=4",
  },
  {
    id: 3,
    name: "Md Rijoan Maruf",
    role: "Businessman",
    message:
      "ডেলিভারি খুব দ্রুত পেয়েছি। সার্ভিসে আমি ১০/১০ দিব। আবারো কেনার প্ল্যান আছে।",
    image: "https://avatars.githubusercontent.com/u/78620963?v=4",
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Why Customers Love <span className="text-cyan-600">HomeDecor</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-gray-50 shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-2 border-cyan-500"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">“{t.message}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
