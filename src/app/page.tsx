// "use client"

import Image from 'next/image'
import React from 'react'
const Home = () => {
  return (
    <>
      <main className=' dark:bg-gray-900 '>
        <section className="text-gray-500 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            {/* Left Text Section */}
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-100">
                Discover the Essence of Natural Beauty
                <br className="hidden lg:inline-block" />
                with HKEssentials
              </h1>
              <p className="mt-10 leading-relaxed">
                Experience skincare like never before with our organic and handmade products.
                From nourishing soaps to rejuvenating creams, HKEssentials is your trusted partner
                for radiant and healthy skin.
              </p>

            </div>

            {/* Right Image Section */}
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image
                className="object-cover object-center rounded shadow-xl"
                alt="HKEssentials Product"
                src="/images/allproducts.jpeg" /* Ensure the path is correct */
                width={800}
                height={800}
              />
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font" id='blogs'>
          <div className="container px-5 py-24 mx-auto">
            {/* Top Blog Heading */}
            <div className="text-center mb-12 dark:text-white">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Top Blogs</h1>
              <p className="text-gray-600 mt-4">Explore our latest blogs to discover skincare tips, product benefits, and natural beauty secrets!</p>
            </div>

            <div className="flex flex-wrap -m-4">
              {/* Rice Soap Blog */}
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    className="lg:h-96 md:h-36 w-full object-cover object-center"
                    src="/images/product2.jpeg"
                    alt="Rice Soap"
                    width={200}
                    height={200}
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      ORGANIC BEAUTY
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 dark:text-gray-300 mb-3">
                      Rice Soap: The Secret to Flawless Skin
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Harness the brightening properties of rice extract. Perfect for reducing pigmentation and giving your skin an even, radiant tone.
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a href='/content/product2' className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Read More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vitamin C Soap Blog */}
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    className="lg:h-96 md:h-36 w-full object-cover object-center"
                    src="/images/product3.jpeg"
                    alt="Vitamin C Soap"
                    width={200}
                    height={200}
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      BRIGHTENING CARE
                    </h2>
                    <h1 className="title-font text-lg font-medium dark:text-gray-300  text-gray-900 mb-3">
                      Vitamin C Soap: Glow Naturally
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Infused with Vitamin C, this soap boosts collagen production and brightens your skin, leaving it rejuvenated and youthful.
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a href='/content/product3' className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Read More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Hair Oil Blog */}
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    className="lg:h-96 md:h-36 w-full object-cover object-center"
                    src="/images/hairoil.jpeg"
                    alt="Hair Oil"
                    width={200}
                    height={200}
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      HAIR CARE
                    </h2>
                    <h1 className="title-font text-lg font-medium  dark:text-gray-300 text-gray-900 mb-3">
                      Hair Oil: Nourish and Strengthen
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Revitalize your hair with our nutrient-rich Hair Oil. Formulated with herbal extracts, it promotes healthy growth and reduces hair fall.
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a href='/content/product4' className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Read More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className='py-12 bg-gray-100 dark:bg-gray-900 '>
          <div className='container px-4 mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-4xl font-bold text-gray-800 dark:text-gray-200'>HKEssentials Pricing Plans</h2>
              <p className='mt-4 text-lg text-gray-500 dark:text-gray-300'>Choose the perfect plan for your skincare journey</p>
            </div>
            <div className='flex flex-wrap justify-center'>
              {/* Basic Plan */}
              <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
                <div className='p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center'>
                  <h3 className='text-2xl font-semibold text-gray-800 dark:text-gray-200'>Starter Pack</h3>
                  <p className='mt-4 text-gray-500 dark:text-gray-300'>PKR 999</p>
                  <ul className='mt-6 mb-6 space-y-4'>
                    <li className='text-gray-600 dark:text-gray-400'>1 Organic Soap</li>
                    <li className='text-gray-600 dark:text-gray-400'>30ml Glow Cream</li>
                    <li className='text-gray-600 dark:text-gray-400'>Free Delivery</li>
                  </ul>
                  <button className='px-6 py-2 bg-black text-white rounded-lg mb-16'>Buy Now</button>
                </div>
              </div>
              {/* Standard Plan */}
              <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
                <div className='p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-yellow-300'>
                  <h3 className='text-2xl font-semibold text-gray-800 dark:text-gray-200'>Essentials Pack</h3>
                  <p className='mt-4 text-gray-500 dark:text-gray-300'>PKR 1999</p>
                  <span className='inline-block px-3 py-1 text-sm font-semibold text-white bg-yellow-500 rounded-full'>Best Value</span>
                  <ul className='mt-6 mb-6 space-y-4'>
                    <li className='text-gray-600 dark:text-gray-400'>3 Organic Soaps</li>
                    <li className='text-gray-600 dark:text-gray-400'>50ml Glow Cream</li>
                    <li className='text-gray-600 dark:text-gray-400'>50ml Sugar Scrub</li>
                    <li className='text-gray-600 dark:text-gray-400'>Free Delivery</li>
                  </ul>
                  <button className='px-6 py-2 bg-yellow-500 text-white rounded-lg'>Buy Now</button>
                </div>
              </div>
              {/* Premium Plan */}
              <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
                <div className='p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center'>
                  <h3 className='text-2xl font-semibold text-gray-800 dark:text-gray-200'>Luxury Pack</h3>
                  <p className='mt-4 text-gray-500 dark:text-gray-300'>PKR 2999</p>
                  <ul className='mt-6 mb-6 space-y-4'>
                    <li className='text-gray-600 dark:text-gray-400'>5 Organic Soaps</li>
                    <li className='text-gray-600 dark:text-gray-400'>100ml Glow Cream</li>
                    <li className='text-gray-600 dark:text-gray-400'>100ml Sugar Scrub</li>
                    <li className='text-gray-600 dark:text-gray-400'>30ml Hair Oil</li>
                    <li className='text-gray-600 dark:text-gray-400'>Free Delivery + Gift</li>
                  </ul>
                  <button className='px-6 py-2 bg-green-500 text-white rounded-lg'>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-12 '>
          <div className="container px-4 py-8 mx-auto bg-slate-500">
            <div className='text-center mb-12'>
              <h2 className='text-4xl font-bold text-gray-200 dark:text-gray-200'>What Our Customers Say</h2>
              <p className='mt-4 text-lg text-gray-500 dark:text-gray-100'>Real feedback from our valued customers</p>
            </div>
            <div className='flex flex-wrap justify-center'>
              {/* Testimonial 1 */}
              <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
                <div className='p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center'>
                  <p className='text-gray-600 dark:text-gray-400'>
                    HKEssentials products are absolutely amazing! Their organic face cream transformed my skin, making it soft and glowing.
                  </p>
                  <h3 className='mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200'>Ayesha Khan</h3>
                  <p className='text-gray-500 dark:text-gray-400'>Entrepreneur</p>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
                <div className='p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center'>
                  <p className='text-gray-600 dark:text-gray-400'>
                    The handmade soaps from HKEssentials are so gentle on my sensitive skin. I,ve never felt this refreshed before!
                  </p>
                  <h3 className='mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200'>Sara Ali</h3>
                  <p className='text-gray-500 dark:text-gray-400'>Lifestyle Blogger</p>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
                <div className='p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center'>
                  <p className='text-gray-600 dark:text-gray-400'>
                    I love the sugar scrubs! They smell divine and leave my skin feeling super smooth. Highly recommend HKEssentials!
                  </p>
                  <h3 className='mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200'>Zara Ahmed</h3>
                  <p className='text-gray-500 dark:text-gray-400'>Makeup Artist</p>
                </div>
              </div>
            </div>
          </div>
        </section>




        <section className="flex flex-col items-center justify-center min-h-screen animate-zoom-in mb-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white animate-fade-in">Welcome to Our Natural Beauty Hub</h2>
            <p className="mt-4 text-lg text-gray-500 animate-fade-in delay-200">Explore our range of organic products designed to enhance your natural beauty.</p>
          </div>

          {/* Scrolling Images Section */}
          <div className="w-full mt-12">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white text-center mb-6">Our Featured Products</h3>
            <div className="flex overflow-x-auto space-x-4 pb-4 scroll-smooth">
              <Image src="/images/page6.PNG" alt="Product 9" className="w-48 h-48 object-cover rounded-md" height={250} width={250} />
              <Image src="/images/page1.jpeg" alt="Product 4" className="w-48 h-48 object-cover rounded-md" height={250} width={250} />
              <Image src="/images/page2.jpeg" alt="Product 5" className="w-48 h-48 object-cover rounded-md" height={250} width={250} />
              <Image src="/images/page3.jpeg" alt="Product 6" className="w-48 h-48 object-cover rounded-md" height={250} width={250} />
              <Image src="/images/page4.jpeg" alt="Product 7" className="w-48 h-48 object-cover rounded-md" height={250} width={250} />
              <Image src="/images/page5.jpeg" alt="Product 8" className="w-48 h-48 object-cover rounded-md" height={250} width={250} />

            </div>
          </div>

          {/* Video Section */}
          <div className="w-full mt-12">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white text-center mb-6">Watch Our Story</h3>
            <div className="flex justify-center">
              <div className="w-full md:w-2/3 lg:w-1/2">
                <iframe
                  width="100%"
                  height="400"
                  src="/images/videohome.mp4"  // Replace with your video ID
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-full md:w-2/3 lg:w-1/2">
                <iframe
                  width="100%"
                  height="400"
                  src="/images/videohome.mp4"  // Replace with your video ID
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-full md:w-2/3 lg:w-1/2">
                <iframe
                  width="100%"
                  height="400"
                  src="/images/videohome.mp4"  // Replace with your video ID
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>



      </main>
    </>
  )
}

export default Home
