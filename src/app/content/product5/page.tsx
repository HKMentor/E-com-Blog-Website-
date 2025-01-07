"use client"

import Image from 'next/image';
import React from 'react';

export default function WhiteningCreamBlog() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-10 py-32 mx-auto">
        {/* Blog Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
            Whitening Cream: Radiance in Every Drop
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Achieve a glowing, even-toned complexion with our all-natural Whitening Cream, specially formulated for vibrant skin.
          </p>
        </div>

        {/* Blog Content */}
        <div className="flex flex-wrap -m-4">
          <div className="p-6 md:w-3/4 mx-auto">
            <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-2xl overflow-hidden shadow-lg">
              {/* Blog Image */}
              <Image
                className="lg:h-[800px] md:h-[350px] w-full object-cover object-center"
                src="/images/co5.jpeg"
                alt="Whitening Cream"
                width={1000}
                height={500}
              />

              {/* Content */}
              <div className="p-8">
                <h2 className="tracking-widest text-sm title-font font-medium text-gray-500 dark:text-gray-400 mb-3">
                  NATURAL SKINCARE
                </h2>
                <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Introducing our Whitening Cream, a luxurious blend of natural ingredients designed to lighten dark spots, reduce pigmentation, and enhance your skin,s natural radiance. It’s the perfect solution for anyone seeking to achieve a smooth, even-toned complexion.
                </p>
                <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Enriched with skin-nourishing vitamins and antioxidants, this cream penetrates deeply to hydrate and rejuvenate, leaving your skin soft, supple, and luminous. Its lightweight, non-greasy formula absorbs quickly, ensuring a matte finish for day-long comfort.
                </p>

                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                  Benefits of Whitening Cream:
                </h3>
                <ul className="list-disc text-gray-700 dark:text-gray-300 text-lg ml-8 mb-6">
                  <li>
                    <strong>Lightens Dark Spots:</strong> Targets hyperpigmentation and uneven skin tone for a brighter appearance.
                  </li>
                  <li>
                    <strong>Improves Skin Texture:</strong> Smoothens rough patches and promotes a silky-soft feel.
                  </li>
                  <li>
                    <strong>Hydrates Skin:</strong> Deeply moisturizes to prevent dryness and flakiness.
                  </li>
                  <li>
                    <strong>Reduces Fine Lines:</strong> Antioxidants work to combat premature aging and maintain youthful skin.
                  </li>
                  <li>
                    <strong>Non-Greasy Formula:</strong> Ideal for daily use without clogging pores.
                  </li>
                </ul>

                <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Our Whitening Cream is free from harmful chemicals and artificial fragrances, making it safe for all skin types. Whether you’re battling stubborn dark spots or simply looking to enhance your natural glow, this cream is your ultimate skincare companion.
                </p>

                <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300">
                  Treat your skin to the care it deserves with our Whitening Cream. Use it daily for visible results and radiant, glowing skin.
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
