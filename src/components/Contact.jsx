import React, { useState } from "react";

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState(""); // Add state for status message
  const [formData, setFormData] = useState({ name: "", email: "", message: "" }); // Add state for form data

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // Update form data
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xjkklnbg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), // Use formData here
      });

      if (response.ok) {
        setStatusMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset the form fields
      } else {
        setStatusMessage("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatusMessage("Network error. Please try again later.");
    }
  };

  return (
    <div className="py-16 bg-gray-1000 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-white mb-10">Contact</h1>
        <p className="text-center text-gray-400 mb-8">
          Feel free to reach out to me through the form below or connect on my social profiles!
        </p>

        {/* Contact Form */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="mt-1 p-2 w-full rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="mt-1 p-2 w-full rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here"
                rows="4"
                className="mt-1 p-2 w-full rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-400 text-black font-semibold py-2 rounded-md hover:bg-cyan-500 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Status Message */}
        {statusMessage && (
          <div
            className={`mt-4 text-center ${
              statusMessage.includes("success") ? "text-green-400" : "text-red-400"
            }`}
          >
            {statusMessage}
          </div>
        )}

        {/* Social Links */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Connect with me</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/prathameshsonawane"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 text-2xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/prathu10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 text-2xl"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="mailto:prathamesh4402@gmail.com"
              className="text-gray-400 hover:text-cyan-400 text-2xl"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
