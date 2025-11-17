"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  MobileIcon,
  EnvelopeClosedIcon,
  SewingPinIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";

const ContactClient: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [sliderValue, setSliderValue] = useState(0);
  const sliderMax = 100;
  const isSliderConfirmed = sliderValue === sliderMax;
  const icons = [
    <MobileIcon key="phone" width={20} height={20} />,
    <EnvelopeClosedIcon key="email" width={20} height={20} />,
    <SewingPinIcon key="location" width={20} height={20} />,
    <GlobeIcon key="web" width={20} height={20} />,
  ];
  const infoItems = [
    {
      title: "Phone Numbers",

      lines: ["08033104470", "08169472000"],
    },
    {
      title: "Email Address",

      lines: ["info@cngtechedgeltd.com"],
      linkPrefix: "mailto:",
    },
    {
      title: "Office Location",

      lines: ["44A Old Aba Road, Port Harcourt"],
    },
    {
      title: "Website",

      lines: ["www.cngtechedgeltd.com"],
      linkPrefix: "https://",
    },
  ];

  // @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error || "Failed to send message");
      }
      toast.success(
        "Message sent successfully! Check your email for confirmation."
      );
    } catch (error: any) {
      toast.error(error?.message || "Failed to send message");
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white text-center py-16">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4 text-shadow-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl font-medium text-shadow-lg px-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          Get in Touch with CNG-Tech Edge Limited
        </motion.p>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-lg text-gray-700 leading-relaxed">
              We&apos;re here to provide innovative energy solutions and answer
              your questions. Reach out and we&apos;ll get back promptly.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: false }}
                className="group relative rounded-xl border border-gray-200 bg-white shadow hover:shadow-lg transition overflow-hidden"
              >
                <div className="flex items-center gap-3 px-5 pt-5">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-50 text-green-700">
                    {icons[index]}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <div className="px-5 pb-5 pt-3">
                  {item.lines.map((line, i) => {
                    const href = item.linkPrefix
                      ? `${item.linkPrefix}${line.replace(/^https?:\/\//, "")}`
                      : undefined;
                    return href ? (
                      <a
                        key={i}
                        href={href}
                        target={
                          item.linkPrefix === "https://" ? "_blank" : undefined
                        }
                        rel={
                          item.linkPrefix === "https://"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="block text-green-700 hover:text-green-900 underline break-words"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={i} className="text-gray-700">
                        {line}
                      </p>
                    );
                  })}
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-green-600 via-green-500 to-green-700 opacity-0 group-hover:opacity-100 transition" />
              </motion.div>
            ))}
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
            className="bg-white shadow-lg rounded-lg p-8 space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
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
                  className="block text-sm font-medium text-gray-700"
                >
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
                  className="block text-sm font-medium text-gray-700"
                >
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
                className="block text-sm font-medium text-gray-700"
              >
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
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Slide to enable sending
              </label>
              <input
                type="range"
                min={0}
                max={sliderMax}
                value={sliderValue}
                onChange={(e) => setSliderValue(Number(e.target.value))}
                className="w-full"
              />
              <button
                type="submit"
                className="w-full py-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 transition disabled:opacity-50"
                disabled={isSubmitting || !isSliderConfirmed}
              >
                {isSubmitting
                  ? "Sending..."
                  : isSliderConfirmed
                  ? "Send Message"
                  : "Slide to Enable"}
              </button>
            </div>
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
          className="bg-white text-green-700 font-bold px-6 py-3 rounded-md shadow-md hover:bg-gray-100"
        >
          Call Us Now
        </a>
      </section>
    </div>
  );
};

export default ContactClient;
