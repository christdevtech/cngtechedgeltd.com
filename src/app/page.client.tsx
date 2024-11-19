"use client";
import Image from "next/image";
import { Link, Button } from "@radix-ui/themes";
import { BarChartIcon, SwitchIcon, RocketIcon } from "@radix-ui/react-icons";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  EffectCreative,
  Keyboard,
  Mousewheel,
  Pagination,
  Parallax,
  Scrollbar,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";
import "swiper/css/pagination";
import "swiper/css/parallax";
import "swiper/css/scrollbar";

export default function HomeClient() {
  const whyUs = [
    {
      title: "Eco-Friendly Solutions",
      description:
        "Our dual-fuel technology significantly reduces harmful emissions, cutting down on carbon monoxide, nitrogen oxide, and particulate matter for a greener planet.",
    },
    {
      title: "Cost-effective",
      description:
        "Compared to diesel, you can save up to 60% on fuel costs and enjoy reduced engine maintenance expenses.",
    },
    {
      title: "Proven Expertise",
      description:
        "We have years of experience converting engines from brands like Cummins, Mitsubishi, Volvo, and Ford.",
    },
    {
      title: "Safety at Its Best",
      description:
        "CNG systems are designed with advanced safety features, including bulletproof cylinders, leak detectors, and burst discs.",
    },
  ];
  const benefits = [
    {
      title: "Cleaner emissions",
      description:
        "Reduce carbon dioxide by 20-30% and carbon monoxide by 70-90%.",
      icon: <BarChartIcon />,
    },
    {
      title: "Fuel flexibility",
      description: "Switch seamlessly between CNG and diesel.",
      icon: <SwitchIcon />,
    },
    {
      title: "Lower costs",
      description:
        "Affordable and abundant CNG ensures consistent savings on fuel and maintenance.",
      icon: <RocketIcon />,
    },
  ];
  const swiperParameters = {
    modules: [
      A11y,
      Autoplay,
      EffectCreative,
      Keyboard,
      Mousewheel,
      Pagination,
      Parallax,
      Scrollbar,
    ],
    grabCursor: true,
    effect: "cube",
    creativeEffect: {
      limitProgress: 5,
      prev: { shadow: true },
      next: { shadow: true },
    },
    pagination: true,
    autoplay: { enabled: true, delay: 5000, pauseOnMouseEnter: true },
    scrollbar: true,
    keyboard: { enabled: true },
    mousewheel: { enabled: true },
    parallax: { enabled: true },
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
    slidesPerGroupAuto: false,
    loop: true,
  };

  const swiperData = [
    {
      image: "/images/truck.jpg",
      alt: "Powering Communities with Reliable CNG Infrastructure",
      title: "Powering Communities with Reliable CNG Infrastructure",
      content:
        "From station construction to maintenance, we provide complete CNG solutions to keep you moving.",
      button: {
        text: "start your project today",
        url: "/contact",
      },
    },
    {
      image: "/images/diesel-gen.jpg",
      alt: "Transform Your Engines, Transform Your Savings!",
      title: "Transform Your Engines, Transform Your Savings!",
      content:
        "Upgrade your vehicles and generators with dual-fuel technology for unmatched efficiency and reliability.",
      button: {
        text: "View Our Services",
        url: "/our-services",
      },
    },
    {
      image: "/images/slider-2.jpg",
      alt: "Safe. Green. Reliable.",
      title: "Safe. Green. Reliable.",
      content:
        "Our CNG solutions are designed with safety and sustainability in mind for a cleaner planet.",
      button: {
        text: "Contact Us for Conversions",
        url: "/contact",
      },
    },
    {
      image: "/images/gen.jpg",
      alt: "Drive Into the Future with Cleaner, Safer, and Cheaper Fuel!",
      title: "Drive Into the Future with Cleaner, Safer, and Cheaper Fuel!",
      content:
        "Join the energy revolution with CNG Technologies - delivering cost-effective, eco-friendly solutions",
      button: {
        text: "Learn More About CNG Benefits",
        url: "/our-services",
      },
    },
  ];

  return (
    <div>
      <div className=" hero">
        <Swiper {...swiperParameters} height={700}>
          {swiperData.map((item, index) => (
            <SwiperSlide
              className={`swiper-slide-9183 min-h-[400px] md:min-h-[600px] flex content-center justify-center`}
              key={index}
              style={{
                backgroundImage: `url("${process.env.NEXT_PUBLIC_SERVER_URL}${item.image}")`,
                backgroundSize: "cover",
                backgroundPosition: "50% 70%",
              }}>
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-red to-black opacity-50"></div>
              <div className="swiper-slide-content swiper-slide-content-2f5e flex flex-col text-center gap-2 md:gap-4 md:max-w-[60%] m-auto relative">
                <h3
                  className="text-white text-2xl md:text-6xl font-black px-5 text-center text-shadow-2xl"
                  data-swiper-parallax="-100">
                  {item.title}
                </h3>
                <p className="px-5 text-white font-medium text-center text-shadow-lg md:text-3xl">
                  {item.content}
                </p>
                <Link href={item.button.url} className="mx-9">
                  <Button variant="solid" size={"4"} highContrast>
                    {item.button.text}
                  </Button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <header className="relative bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 flex flex-col md:flex-row items-center">
            <div className="w-full md:full h-64 bg-gray-200 rounded-md mb-6 md:mb-0 md:mr-8 relative">
              {/* Updated Image */}
              <Image
                src={"/images/team.jpg"}
                alt="Welcome"
                fill // Makes the image fill its parent
                style={{ objectFit: "cover", borderRadius: "0.375rem" }} // Matches the parent border radius
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">
                Welcome to{" "}
                <span className="text-green-600">CNG Technologies Limited</span>
              </h1>
              <p className="text-lg leading-relaxed text-gray-700">
                Your trusted partner in sustainable energy solutions. We
                revolutionize energy usage through cutting-edge compressed
                natural gas (CNG) solutions that transform vehicles, generators,
                and industrial equipment into cost-effective, eco-friendly,
                high-performing assets.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Why Choose Us Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-green-600 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  Discover the Benefits of CNG */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Discover the Benefits of CNG
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-center">
                <button
                  className="p-4 bg-green-100 rounded-full flex items-center justify-center mr-4 shadow-sm"
                  aria-label={item.title}>
                  {item.icon}
                </button>
                <div>
                  <h3 className="text-xl font-semibold text-green-600">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <footer className="bg-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Make the switch today!</h2>
          <p className="text-lg leading-relaxed mb-6">
            Join us in embracing the CNG revolution, where cleaner energy meets
            unparalleled reliability.
          </p>
          <Link href="/our-services">
            <button className="px-6 py-3 bg-white text-green-600 font-semibold rounded shadow hover:bg-gray-100">
              Learn More
            </button>
          </Link>
        </div>
      </footer>
    </div>
  );
}
