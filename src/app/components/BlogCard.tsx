// import Image from "next/image";

// interface BlogCardProps {
//   imageSrc: string;
//   altText: string;
//   category: string;
//   title: string;
//   description: string;
//   href: string;
//   imageWidth?: number;  // Optional width
//   imageHeight?: number; // Optional height
//   datePublished?: string; // Optional publish date
// }

// const BlogCard: React.FC<BlogCardProps> = ({
//   imageSrc,
//   altText,
//   category,
//   title,
//   description,
//   href,
//   imageWidth = 200,
//   imageHeight = 200,
//   datePublished
// }) => (
//   <div className="p-4 md:w-1/3">
//     <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-lg">
//       <Image
//         className="lg:h-96 md:h-36 w-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-110"
//         src={imageSrc}
//         alt={altText}
//         width={imageWidth}
//         height={imageHeight}
//       />
//       <div className="p-6">
//         <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
//           {category}
//         </h2>
//         <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
//           {title}
//         </h1>
//         {datePublished && <p className="text-xs text-gray-500 mb-3">Published on {new Date(datePublished).toLocaleDateString()}</p>}
//         <p className="leading-relaxed mb-3">{description}</p>
//         <div className="mt-2 flex space-x-2">
//           {['Tag1', 'Tag2', 'Tag3'].map(tag => (
//             <span key={tag} className="text-xs bg-gray-200 rounded-full py-1 px-3 text-gray-600">
//               {tag}
//             </span>
//           ))}
//         </div>
//         <div className="flex items-center flex-wrap mt-4">
//           <a
//             href={href}
//             className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
//             title="Click to read more about this post"
//             aria-label="Read full article"
//           >
//             Read More
//             <svg
//               className="w-4 h-4 ml-2"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M5 12h14" />
//               <path d="M12 5l7 7-7 7" />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default BlogCard;
