"use client"

import Image from 'next/image';

import React from 'react';

export default function RiceSoapBlog() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-10 py-32 mx-auto">
        {/* Blog Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
            Rice Soap: The Secret to Flawless Skin
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Unlock the ancient secret of rice for radiant, smooth, and flawless skin with every wash.
          </p>
        </div>

        {/* Blog Content */}
        <div className="flex flex-wrap -m-4">
          <div className="p-6 md:w-3/4 mx-auto">
            <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-2xl overflow-hidden shadow-lg">
              {/* Blog Image */}
              <Image
                className="lg:h-[800px] md:h-[350px] w-full object-cover object-center"
                src="/images/co2.jpeg"
                alt="Rice Soap"
                width={1000}
                height={500}
              />

              {/* Content */}
              <div className="p-8">
                <h2 className="tracking-widest text-sm title-font font-medium text-gray-500 dark:text-gray-400 mb-3">
                  NATURAL SKINCARE
                </h2>
                <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Rice has been a beauty staple for centuries, and our Rice Soap harnesses its natural goodness to nourish and revitalize your skin. Enriched with rice extract and other natural ingredients, this soap gently cleanses while providing deep hydration, leaving your skin soft, smooth, and glowing.
                </p>
                <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300 mb-6">
                  The soap is packed with essential nutrients, including vitamins B and E, that help brighten the complexion and promote a youthful appearance. With regular use, Rice Soap improves skin texture, reduces dullness, and restores a healthy glow.
                </p>

                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                  Benefits of Rice Soap:
                </h3>
                <ul className="list-disc text-gray-700 dark:text-gray-300 text-lg ml-8 mb-6">
                  <li>
                    <strong>Brightens Skin Tone:</strong> Naturally lightens dark spots and evens out skin tone.
                  </li>
                  <li>
                    <strong>Hydrates and Softens:</strong> Provides long-lasting hydration for a silky smooth finish.
                  </li>
                  <li>
                    <strong>Reduces Wrinkles:</strong> Improves skin elasticity and reduces the appearance of fine lines.
                  </li>
                  <li>
                    <strong>Gently Exfoliates:</strong> Removes dead skin cells, revealing a fresher, more youthful complexion.
                  </li>
                </ul>

                <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Whether you have dry, sensitive, or combination skin, Rice Soap is the perfect addition to your skincare routine. Its gentle formula makes it suitable for daily use, ensuring your skin stays healthy and radiant all day long.
                </p>

                <p className="leading-relaxed text-lg text-gray-700 dark:text-gray-300">
                  Choose Rice Soap for a natural, chemical-free option that pampers your skin while embracing sustainable beauty. It's more than just soap—it's a commitment to flawless, glowing skin.
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
