import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_API_YOUR_SERVICE_ID;
    const templateId = import.meta.env.VITE_API_YOUR_TEMPLATE_ID;
    const userId = import.meta.env.VITE_API_YOUR_PUBLIC_KEY;

    if (!serviceId || !templateId || !userId) {
      toast.error("Email service is not configured properly.");
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, userId).then(
      () => toast.success("Message sent successfully!"),
      () => toast.error("Something went wrong, try again!")
    );
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center content px-4 py-16">
      <ToastContainer />
      <div className="max-w-3xl w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-12 border border-borderColor">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-yellow-700">
          Contact Me
        </h1>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                className="w-full border border-borderColor text-gray-800 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
                type="text"
                id="name"
                name="user_name"
                required
                placeholder="Your Name"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                className="w-full bg-white border border-borderColor text-gray-800 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
                type="email"
                id="email"
                name="user_email"
                required
                placeholder="Your Email"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              className="w-full bg-white border border-borderColor text-gray-800 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
              rows="4"
              name="message"
              id="message"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button
            className="border border-primaryColor hover:bg-[#F4A700] text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
            type="submit"
          >
            Send Message
          </button>

          <div className="flex items-center justify-center gap-6 mt-4 text-2xl text-yellow-700">
            <a href="https://www.linkedin.com/in/dilipdandi" target="_blank" className="hover:text-yellow-500 transition transform hover:scale-110">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/dilipdandi" target="_blank" className="hover:text-yellow-500 transition transform hover:scale-110">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://leetcode.com/u/dilipdandi/" target="_blank" className="hover:text-yellow-500 transition transform hover:scale-110">
              <i className="fa-solid fa-code"></i>
            </a>
            <a href="https://www.hackerrank.com/profile/dilipdandi90" target="_blank" className="hover:text-yellow-500 transition transform hover:scale-110">
              <i className="fa-brands fa-hackerrank"></i>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
