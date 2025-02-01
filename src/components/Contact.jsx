import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

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

    // Use form.current as the reference to the form
    emailjs.sendForm(serviceId, templateId, form.current, userId).then(
      () => {
        toast.success("Message sent successfully!");
      },
      (error) => {
        toast.error("Something went wrong, try again!");
      }
    );
  };

  return (
    <section className="content w-fit h-fit mx-auto px-2 py-4 rounded-xl border">
      <ToastContainer />
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-2 text-primary ">
        CONTACT ME
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-6 p-4 rounded-lg shadow-lg"
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col w-full">
            <label htmlFor="name" className="text-lg mb-2 ">
              Name
            </label>
            <input
              className="w-full bg-gray-900 border text-gray-200 px-4 py-2 rounded-lg outline-none placeholder-gray-400"
              type="text"
              id="name"
              name="user_name"
              required
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-lg mb-2">
              Email
            </label>
            <input
              className="w-full bg-gray-900 border text-gray-200 px-4 py-2 rounded-lg outline-none placeholder-gray-400"
              type="email"
              id="email"
              name="user_email"
              required
              placeholder="Your Email"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-lg mb-2">
            Message
          </label>
          <textarea
            className="w-full bg-gray-900 border text-gray-200 px-4 py-2 rounded-lg outline-none placeholder-gray-400"
            rows="2"
            name="message"
            id="message"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button className="btn" type="submit">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
