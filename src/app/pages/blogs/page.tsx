


import Image from 'next/image'

interface BlogPost {
  image: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  link: string;
}

const blogs: BlogPost[] = [
  {
    image: '/images/product1.jpeg',
    alt: 'Coffee Soap',
    category: 'NATURAL SKINCARE',
    title: 'Coffee Soap: Energize Your Skin',
    description: 'Revitalize your mornings with the natural exfoliating power of coffee. Our Coffee Soap removes dead skin cells, leaving your skin smooth and glowing.',
    link: '/content/product1',
  },
  {
    image: '/images/product2.jpeg',
    alt: 'Rice Soap',
    category: 'ORGANIC BEAUTY',
    title: 'Rice Soap: The Secret to Flawless Skin',
    description: 'Harness the brightening properties of rice extract. Perfect for reducing pigmentation and giving your skin an even, radiant tone.',
    link: '/content/product2',
  },
  {
    image: '/images/product3.jpeg',
    alt: 'Vitamin C Soap',
    category: 'BRIGHTENING CARE',
    title: 'Vitamin C Soap: Glow Naturally',
    description: 'Infused with Vitamin C, this soap boosts collagen production and brightens your skin, leaving it rejuvenated and youthful.',
    link: '/content/product3',
  },
  {
    image: '/images/hairoil.jpeg',
    alt: 'Hair Oil',
    category: 'HAIR CARE',
    title: 'Hair Oil: Nourish and Strengthen',
    description: 'Revitalize your hair with our nutrient-rich Hair Oil. Formulated with herbal extracts, it promotes healthy growth and reduces hair fall.',
    link: '/content/product4',
  },
  {
    image: '/images/whitningcream.jpeg',
    alt: 'Whitening Zafrani Cream Soap',
    category: 'LUXURY CARE',
    title: 'Whitening Zafrani Cream: Glow with Luxury',
    description: 'Experience the richness of saffron with our Whitening Zafrani Cream Soap. Perfect for hydrating your skin while adding a natural, brightening glow.',
    link: '/content/product5',
  },
  {
    image: '/images/lipbalm.jpeg',
    alt: 'Lip Balm',
    category: 'LIP CARE',
    title: 'Lip Balm: Hydration and Protection',
    description: 'Keep your lips soft and nourished with our Lip Balm. Enriched with natural oils, it provides long-lasting hydration and protection against dryness.',
    link: '/content/product6',
  }
]

const Blogs = () => {
  return (
    <section className="text-gray-600 body-font" id="blogs">
      <div className="container px-5 py-24 mx-auto">
        {/* Top Blog Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Our Blogs</h1>
          <p className="text-gray-600 mt-4 dark:text-gray-300">
            Explore our latest blogs to discover skincare tips, product benefits, and natural beauty secrets!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {blogs.map((blog, index) => (
            <div key={index} className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-96 md:h-36 w-full object-cover object-center"
                  src={blog.image}
                  alt={blog.alt}
                  width={200}
                  height={200}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 dark:text-gray-400 mb-1">
                    {blog.category}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 dark:text-white mb-3">
                    {blog.title}
                  </h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-300">
                    {blog.description}
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a href={blog.link} className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blogs;



