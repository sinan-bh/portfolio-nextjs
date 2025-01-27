"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  // Handle form input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID as string;

    if (!formRef.current) return;

    try {
      const response = await emailjs.sendForm(
        serviceID,
        templateID,
        formRef.current,
        userID
      );

      if (response.status === 200) {
        setFormStatus("Message sent successfully!");
      } else {
        setFormStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus("An error occurred while sending your message.");
    } finally {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div id="contact" className="max-w-full">
      <div className="min-h-screen flex items-center justify-center py-12">
        <motion.div
          className="rounded-lg shadow-lg max-w-3xl w-full text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-gray-50 to-gray-400"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Contact Me
          </motion.h2>

          {formStatus && (
            <motion.div
              className={`text-center mt-4 ${
                formStatus.includes("successfully")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {formStatus}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} ref={formRef} className="mt-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label htmlFor="name" className="block text-sm text-gray-400">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-1 rounded-lg bg-gradient-to-r from-purple-900 to-gray-900 text-white"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="block text-sm text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-1 rounded-lg bg-gradient-to-r from-purple-900 to-gray-900 text-white"
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-sm text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-3 mt-1 rounded-lg bg-gradient-to-r from-purple-900 to-gray-900 text-white"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-6 max-w-full flex justify-center items-center px-3 py-3 rounded-lg bg-gradient-to-r from-purple-900 to-gray-900 ${
                isSubmitting ? "opacity-50" : "hover:bg-purple-700"
              }`}
            >
              {isSubmitting ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C6.48 0 0 6.48 0 12h4z"
                  ></path>
                </svg>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
