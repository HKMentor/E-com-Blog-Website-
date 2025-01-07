
import Link from "next/link";

const AboutMe = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 sm:text-5xl">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed sm:text-xl">
          Hi, I’m <span className="text-indigo-600 font-semibold">Hooria</span>!
          I am a passionate <span className="font-semibold">web developer</span> and the creator of
          <span className="text-indigo-600 font-semibold"> HKEssentials</span>, a brand dedicated to providing natural skincare solutions.
          I love blending creativity and technology to build stunning websites and e-commerce platforms.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4 sm:text-xl">
          Alongside my web development journey, I run a successful e-commerce business where I offer handmade,
          organic skincare products like soaps, creams, and hair oils. My aim is to empower others through
          high-quality, natural beauty solutions and to inspire through my tech projects.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4 sm:text-xl">
          Through this blog, I share my expertise in web development, insights into running an online business,
          and stories about my entrepreneurial journey. Let’s connect, learn, and grow together!
        </p>
        <div className="mt-6">
          <Link
            href="https://www.instagram.com/hkessentials195?igsh=MWt"
            target="_blank"
            className="inline-block bg-red-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-red-700 transition duration-300 sm:py-3 sm:px-8"
          >
            Visit My Instagram
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
