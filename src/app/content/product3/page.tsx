"use client"

import Image from 'next/image';
import React from 'react';

export default function VitaminCSoapBlog() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-10 py-32 mx-auto">
        {/* Blog Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
            Vitamin C Soap: Radiance for Your Skin
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Unveil the magic of Vitamin C for skincare and experience the glow it brings to your daily routine.
          </p>
        </div>

        {/* Blog Content */}
        <div className="flex flex-wrap -m-4">
          <div className="p-6 md:w-3/4 mx-auto">
            <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-2xl overflow-hidden shadow-lg">
              {/* Blog Image */}
              <Image
                className="lg:h-[800px] md:h-[350px] w-full object-cover object-center"
                src="/images/co3.jpeg"
                alt="Vitamin C Soap"
                width={1000}
                height={500}
              />

              {/* Content */}
              <div className="p-8">
                <h2 className="tracking-widest text-sm title-font font-medium text-gray-500 dark:text-gray-400 mb-3">
                  NATURAL SKINCARE
                </h2>
                <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Elevate your skincare with the rejuvenating power of Vitamin C Soap. Packed with antioxidants, it helps brighten your skin, reduce dark spots, and even out skin tone. This soap is a must-have for anyone looking to achieve a radiant, youthful glow.
                </p>
                <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Vitamin C works by neutralizing free radicals, repairing skin damage, and boosting collagen production. With consistent use, your skin will feel refreshed, hydrated, and visibly more radiant.
                </p>

                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                  Benefits of Vitamin C Soap:
                </h3>
                <ul className="list-disc text-gray-700 dark:text-gray-300 text-lg ml-8 mb-6">
                  <li>
                    <strong>Brightens Skin:</strong> Reduces pigmentation and restores a natural glow.
                  </li>
                  <li>
                    <strong>Fades Dark Spots:</strong> Lightens blemishes and uneven skin tone over time.
                  </li>
                  <li>
                    <strong>Boosts Collagen:</strong> Enhances skin elasticity and reduces signs of aging.
                  </li>
                  <li>
                    <strong>Hydrates and Nourishes:</strong> Keeps your skin moisturized and smooth.
                  </li>
                </ul>

                <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Infused with the goodness of natural Vitamin C, this soap is perfect for daily use. Its gentle formula is free from harsh chemicals, making it ideal for all skin types, including sensitive skin.
                </p>

                <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300">
                  Experience the luxurious feel of Vitamin C Soap and let its rejuvenating properties pamper your skin. It’s not just a soap; it’s a skincare essential that brings out your natural beauty.
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
