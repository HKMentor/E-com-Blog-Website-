
// import BlogCard from "../../components/BlogCard"; // Ensure this path is correct

// const Blogs = () => {
//   const blogData = [
//     {
//       imageSrc: "/images/product1.jpeg",
//       altText: "Coffee Soap",
//       category: "NATURAL SKINCARE",
//       title: "Coffee Soap: Energize Your Skin",
//       description: "Revitalize your mornings with the natural exfoliating power of coffee.",
//       href: "/blogs/coffee-soap",
//       id: "coffee", // Add unique ID if possible
//     },
//     {
//       imageSrc: "/images/product2.jpeg",
//       altText: "Rice Soap",
//       category: "ORGANIC BEAUTY",
//       title: "Rice Soap: The Secret to Flawless Skin",
//       description: "Harness the brightening properties of rice extract for an even skin tone.",
//       href: "/blogs/rice-soap",
//       id: "rice-soap", // Add unique ID
//     },
//     {
//       imageSrc: "/images/product3.jpeg",
//       altText: "Vitamin C Soap",
//       category: "BRIGHTENING CARE",
//       title: "Vitamin C Soap: Glow Naturally",
//       description: "Boost collagen production and brighten your skin with Vitamin C.",
//       href: "/blogs/vitamin-c-soap",
//       id: "vitamin-c-soap", // Add unique ID
//     },
//     {
//       imageSrc: "/images/whitningcream.jpeg",
//       altText: "Whitening Zafrani Cream",
//       category: "LUXURY CARE",
//       title: "Whitening Zafrani Cream: Glow with Luxury",
//       description: "Hydrate and brighten your skin with the richness of saffron.",
//       href: "/blogs/zafrani-cream",
//       id: "zafrani-cream", // Add unique ID
//     },
//     {
//       imageSrc: "/images/saffronsoap.jpeg",
//       altText: "Saffron Zafrani Soap",
//       category: "PREMIUM SKINCARE",
//       title: "Saffron Zafrani Soap: The Essence of Radiance",
//       description: "Enhance your skin tone and glow naturally with saffron.",
//       href: "/blogs/saffron-soap",
//       id: "saffron-soap", // Add unique ID
//     },
//     {
//       imageSrc: "/images/lipbalm.jpeg",
//       altText: "Lip Balm",
//       category: "LIP CARE",
//       title: "Lip Balm: Hydration and Protection",
//       description: "Keep your lips nourished and hydrated with natural oils.",
//       href: "/blogs/lip-balm",
//       id: "lip-balm", // Add unique ID
//     },
//     {
//       imageSrc: "/images/hairoil.jpeg",
//       altText: "Hair Oil",
//       category: "HAIR CARE",
//       title: "Hair Oil: Nourish and Strengthen",
//       description: "Promote healthy hair growth and reduce hair fall naturally.",
//       href: "/blogs/hair-oil",
//       id: "hair-oil", // Add unique ID
//     }
//   ];

//   return (
//     <section className="text-gray-600 body-font" id="blog">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900">Top Blogs</h2>
//           <p className="text-gray-600 mt-4">
//             Explore our latest blogs to discover skincare tips, product benefits, and natural beauty secrets!
//           </p>
//         </div>

//         <div className="flex flex-wrap -m-4">
//           {blogData.map((blog) => (
//             <BlogCard
//               key={blog.id}  // Use unique 'id' instead of index
//               imageSrc={blog.imageSrc}
//               altText={blog.altText}
//               category={blog.category}
//               title={blog.title}
//               description={blog.description}
//               href={blog.href}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blogs;
