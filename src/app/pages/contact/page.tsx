"use client";

import { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"; // Importing React Icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending an email or saving to a database)
    alert("Form submitted!");
  };

  return (
    <section className="text-gray-600 body-font relative" id="contact">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Us</h1>
          <p className="text-gray-600 mt-4 dark:text-yellow-50">
            We would love to hear from you! Reach out with any questions or feedback.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Contact Info */}
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 dark:text-white">Get In Touch</h2>
            <ul className="space-y-4 text-gray-600 dark:text-gray-100">
              <li className="flex items-center">
                <MdEmail className="w-6 h-6" />
                <span className="ml-4">infohkmentor@gmail.com</span>
              </li>
              <li className="flex items-center">
                <MdPhone className="w-6 h-6" />
                <span className="ml-4">+123 456 7890</span>
              </li>
              <li className="flex items-center">
                <MdLocationOn className="w-6 h-6" />
                <span className="ml-4">Instagram: @Hooria_Codehub</span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 dark:text-white">Send Us A Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-100 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-red-600 dark:bg-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-100 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-red-600 dark:bg-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-100 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-red-600 dark:bg-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  rows={6}
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-red-500 text-white font-semibold rounded-md hover:bg-red-900"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Optional: Display a Google Map or Address */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_EMBED_URL"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              className="rounded-md"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
