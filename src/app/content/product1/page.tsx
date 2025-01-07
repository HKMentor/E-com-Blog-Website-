"use client"

import Image from 'next/image';
import React from 'react';

export default function CoffeeSoapBlog() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-10 py-32 mx-auto">
        {/* Blog Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
            Coffee Soap: Energize Your Skin
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Discover the transformative power of coffee in skincare and how it can elevate your daily routine to new heights.
          </p>
        </div>

        {/* Blog Content */}
        <div className="flex flex-wrap -m-4">
          <div className="p-6 md:w-3/4 mx-auto">
            <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-2xl overflow-hidden shadow-lg">
              {/* Blog Image */}
              <Image
                className="lg:h-[800px] md:h-[350px] w-full object-cover object-center"
                src="/images/co1.jpeg"
                alt="Coffee Soap"
                width={1000}
                height={500}
              />

              {/* Content */}
              <div className="p-8">
                <h2 className="tracking-widest text-sm title-font font-medium text-gray-500 dark:text-gray-400 mb-3">
                  NATURAL SKINCARE
                </h2>
                <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Imagine starting your day with a product that not only wakes up your senses but also revitalizes your skin. Coffee Soap is crafted with premium coffee extracts, delivering natural exfoliation to remove impurities, dead skin cells, and excess oils. This soap works wonders in improving your skins texture, leaving it smooth, supple, and glowing with health.
                </p>
                <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300 mb-6">
                  The caffeine in coffee acts as a powerful antioxidant, shielding your skin from environmental damage and promoting a youthful glow. With each use, the soap not only cleanses but also hydrates, ensuring your skin feels fresh and nourished throughout the day.
                </p>

                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                  Benefits of Coffee Soap:
                </h3>
                <ul className="list-disc text-gray-700 dark:text-gray-300 text-lg ml-8 mb-6">
                  <li>
                    <strong>Exfoliates Dead Skin Cells:</strong> Coffee granules in the soap gently remove buildup, unclog pores, and smooth the skins surface.
                  </li>
                  <li>
                    <strong>Improves Blood Circulation:</strong> The massaging effect stimulates blood flow, reducing puffiness and giving your skin a natural, rosy glow.
                  </li>
                  <li>
                    <strong>Reduces the Appearance of Cellulite:</strong> Caffeine has been shown to temporarily tighten skin, making it a popular choice for addressing uneven textures.
                  </li>
                  <li>
                    <strong>Promotes Glowing, Healthy Skin:</strong> Regular use reveals a brighter complexion and minimizes signs of fatigue.
                  </li>
                </ul>

                <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Coffee Soap isn’t just a skincare product; it’s a self-care experience. The invigorating aroma of freshly brewed coffee provides an energizing start to your day. Plus, its gentle formulation makes it suitable for all skin types, from dry to sensitive, ensuring everyone can enjoy its benefits.
                </p>

                <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300">
                  Choose Coffee Soap for a sustainable, eco-friendly option that is free of harmful chemicals. Made with love and care, it embodies the essence of natural skincare, offering both luxury and effectiveness in a single bar.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="text-center mt-12 space-y-4">
          <a
            href="https://www.instagram.com/hkessentials195?igsh=MWt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-red-600 transition text-lg font-semibold"
          >
            Buy Now
          </a>
          <br />
          <a
            href="/blogs"
            className="inline-block bg-gray-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-gray-600 transition text-lg font-semibold"
          >
            Back to Blogs
          </a>
        </div>
      </div>
    </section>
  );
}
