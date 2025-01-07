"use client"

import Image from 'next/image';
import React from 'react';

export default function LipBalmBlog() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-10 py-32 mx-auto">
        {/* Blog Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
            Lip Balm: Nourishment in Every Swipe
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Keep your lips soft, smooth, and hydrated all day with our all-natural, chemical-free lip balm.
          </p>
        </div>

        {/* Blog Content */}
        <div className="flex flex-wrap -m-4">
          <div className="p-6 md:w-3/4 mx-auto">
            <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-2xl overflow-hidden shadow-lg">
              {/* Blog Image */}
              <Image
                className="lg:h-[800px] md:h-[350px] w-full object-cover object-center"
                src="/images/co6.jpeg"
                alt="Lip Balm"
                width={1000}
                height={500}
              />

              {/* Content */}
              <div className="p-8">
                <h2 className="tracking-widest text-sm title-font font-medium text-gray-500 dark:text-gray-400 mb-3">
                  NATURAL LIP CARE
                </h2>
                <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Say goodbye to dry, chapped lips with our nourishing Lip Balm. Crafted with natural ingredients, this balm delivers deep hydration and a protective barrier against harsh environmental factors like wind and cold. Perfect for everyday use, it ensures your lips stay soft, supple, and kissably smooth.
                </p>
                <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Infused with essential oils and vitamins, our Lip Balm not only moisturizes but also repairs damaged lips over time. Its lightweight and non-sticky formula makes it ideal for both day and night use, giving your lips the care they need 24/7.
                </p>

                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                  Benefits of Our Lip Balm:
                </h3>
                <ul className="list-disc text-gray-700 dark:text-gray-300 text-lg ml-8 mb-6">
                  <li>
                    <strong>Deep Hydration:</strong> Keeps lips moisturized and prevents dryness.
                  </li>
                  <li>
                    <strong>Repairs Damage:</strong> Helps heal cracked or chapped lips.
                  </li>
                  <li>
                    <strong>Protective Barrier:</strong> Shields lips from harsh weather conditions.
                  </li>
                  <li>
                    <strong>Non-Sticky Formula:</strong> Ensures a smooth, lightweight feel.
                  </li>
                  <li>
                    <strong>Natural Ingredients:</strong> Free from harmful chemicals and synthetic fragrances.
                  </li>
                </ul>

                <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Our Lip Balm is a pocket-friendly solution for on-the-go lip care. Whether you’re facing dry winters or sunny days, this balm keeps your lips looking healthy and feeling comfortable.
                </p>

                <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300">
                  Elevate your lip care routine with our natural Lip Balm. Perfect for every season, every occasion, and every smile.
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
