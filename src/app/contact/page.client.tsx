"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const ContactClient: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    emailjs
      .send(
        "service_4mq4pi5",
        "template_u4v62le",
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        "6Wm4qmw_kZfWgyWp3" // EmailJS User ID
      )
      .then(
        () => alert("Message sent successfully!"),
        (error) => alert(`Failed to send message: ${error.text}`)
      );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white text-center py-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-shadow-2xl">
          Contact Us
        </h1>
        <p className="text-lg md:text-2xl font-medium text-shadow-lg px-4">
          Get in Touch with CNG Technologies Limited
        </p>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We're here to provide innovative energy solutions and answer all
            your questions. Let us help you embark on a journey to greener,
            safer, and more economical energy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Phone Numbers
              </h3>
              <p className="text-gray-700">08033104470</p>
              <p className="text-gray-700">08169472000</p>
            </div>
            <div className="shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Email Address
              </h3>
              <p className="text-gray-700">info@cngtechedgeltd.com</p>
            </div>
            <div className="shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Office Location
              </h3>
              <p className="text-gray-700">44A Old Aba Road, Port Harcourt</p>
            </div>
            <div className="shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Website
              </h3>
              <p className="text-gray-700">
                Visit us at:{" "}
                <a
                  href="http://www.cngtechedgeltd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 underline">
                  www.cngtechedgeltd.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Send Us a Message
          </h2>
          <p className="text-center text-gray-700 mb-8">
            Fill out the form below to reach out, and we’ll get back to you
            promptly.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow-lg rounded-lg p-8 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                {...register("name", { required: "Name is required" })}
                type="text"
                className="w-full mt-1 p-3 border rounded-md focus:ring-green-500 focus:border-green-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  The name is required
                </p>
              )}
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@]+@[^@]+\.[^@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  className="w-full mt-1 p-3 border rounded-md focus:ring-green-500 focus:border-green-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    The email is required
                  </p>
                )}
              </div>
              <div className="flex-1">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  id="phone"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10,15}$/,
                      message:
                        "Invalid phone number. Use 10 to 15 digits without special characters.",
                    },
                  })}
                  type="tel"
                  className="w-full mt-1 p-3 border rounded-md focus:ring-green-500 focus:border-green-500"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    The Phone number is required
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                rows={5}
                className="w-full mt-1 p-3 border rounded-md focus:ring-green-500 focus:border-green-500"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">Message is required</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 transition disabled:opacity-50"
              disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-12 bg-green-700 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Power the Future Together
        </h2>
        <p className="text-lg mb-6">
          Contact us today to explore tailored energy solutions for your needs.
        </p>
        <a
          href="tel:08033104470"
          className="bg-white text-green-700 font-bold px-6 py-3 rounded-md shadow-md hover:bg-gray-100">
          Call Us Now
        </a>
      </section>
    </div>
  );
};

export default ContactClient;
