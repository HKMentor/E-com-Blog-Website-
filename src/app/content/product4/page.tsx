"use client"

import Image from 'next/image';
import React from 'react';

export default function HairOilBlog() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-10 py-32 mx-auto">
        {/* Blog Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
            Hair Growth Oil: Your Path to Lush, Healthy Hair
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Revitalize your hair with our natural oil, designed to promote growth, reduce hair fall, and nourish your scalp.
          </p>
        </div>

        {/* Blog Content */}
        <div className="flex flex-wrap -m-4">
          <div className="p-6 md:w-3/4 mx-auto">
            <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-2xl overflow-hidden shadow-lg">
              {/* Blog Image */}
              <Image
                className="lg:h-[800px] md:h-[350px] w-full object-cover object-center"
                src="/images/co4.jpeg"
                alt="Hair Growth Oil"
                width={1000}
                height={500}
              />

              {/* Content */}
              <div className="p-8">
                <h2 className="tracking-widest text-sm title-font font-medium text-gray-500 dark:text-gray-400 mb-3">
                  NATURAL HAIRCARE
                </h2>
                <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Transform your hair care routine with our premium Hair Growth Oil, crafted from a blend of natural ingredients that deeply nourish your scalp, strengthen roots, and stimulate hair growth. Packed with essential vitamins and nutrients, this oil is your go-to solution for achieving thick, shiny, and healthy hair.
                </p>
                <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300 mb-6">
                  The lightweight, non-greasy formula absorbs easily into your scalp, leaving no residue while delivering powerful hydration. Infused with nature’s best oils, this product works to repair damaged hair, prevent split ends, and bring life back to dull, lifeless strands.
                </p>

                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                  Benefits of Hair Growth Oil:
                </h3>
                <ul className="list-disc text-gray-700 dark:text-gray-300 text-lg ml-8 mb-6">
                  <li>
                    <strong>Stimulates Hair Growth:</strong> Boosts blood circulation to the scalp, encouraging faster hair growth.
                  </li>
                  <li>
                    <strong>Strengthens Roots:</strong> Deeply nourishes hair follicles to reduce hair fall and improve strength.
                  </li>
                  <li>
                    <strong>Prevents Dandruff:</strong> Keeps your scalp hydrated, reducing dryness and flakes.
                  </li>
                  <li>
                    <strong>Repairs Damage:</strong> Restores moisture and shine to dull, brittle hair.
                  </li>
                  <li>
                    <strong>Improves Texture:</strong> Leaves hair silky smooth, soft, and easy to manage.
                  </li>
                </ul>

                <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Suitable for all hair types, our Hair Growth Oil is free from harmful chemicals and made with 100% natural ingredients. Whether you struggle with thinning hair, split ends, or dryness, this oil is the ultimate solution for achieving the luscious locks you’ve always desired.
                </p>

                <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300">
                  Pamper your hair with the care it deserves. Use this oil regularly to unlock the full potential of your hair’s natural beauty.
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
            href="/pages/blogs"
            className="inline-block bg-gray-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-gray-600 transition text-lg font-semibold"
          >
            Back to Blogs
          </a>
        </div>
      </div>
    </section>
  );
}
