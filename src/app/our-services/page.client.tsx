import React from "react";
import Image from "next/image";
import {
  GearIcon,
  HomeIcon,
  LightningBoltIcon,
  MagicWandIcon,
  MixIcon,
  RocketIcon,
  Share1Icon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "@radix-ui/themes";

// import { Icon } from "@radix-ui/themes/src/components/callout.jsx";
const iconSize = "20";

const ServicesClient = () => {
  const services = [
    {
      title: "CNG Vehicle and Generator Conversions",
      description:
        "Transform your cars, trucks, and generators into dual-fuel systems, ensuring fuel flexibility, reduced emissions, and cost savings.",
      icon: <GearIcon width={iconSize} height={iconSize} />, // Example icon
    },
    {
      title: "CNG Gas Station Construction",
      description:
        "Build reliable and efficient gas stations that support your operations seamlessly.",
      icon: <HomeIcon width={iconSize} height={iconSize} />, // Example icon,
    },
    {
      title: "Daughter Station Construction",
      description:
        "Establish stations equipped for hassle-free gas distribution to remote areas.",
      icon: <Share1Icon width={iconSize} height={iconSize} />,
    },
    {
      title: "Gas Compression Services",
      description:
        "Optimize your CNG supply with high-quality gas compression solutions tailored to your needs.",
      icon: <RocketIcon width={iconSize} height={iconSize} />,
    },
    {
      title: "Power Services (CNG)",
      description:
        "Power your systems with sustainable and efficient CNG solutions.",
      icon: <LightningBoltIcon width={iconSize} height={iconSize} />,
    },
    {
      title: "Kits and Accessories",
      description:
        "We provide a range of CNG kits and accessories to ensure the optimal performance of your dual-fuel systems.",
      icon: <MixIcon width={iconSize} height={iconSize} />,
    },
    {
      title: "Repairs, Installation, and Maintenance",
      description:
        "Our expert team ensures that your systems are always operational with regular servicing and repair solutions.",
      icon: <MagicWandIcon width={iconSize} height={iconSize} />,
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white text-center py-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-shadow-2xl">
          Our Services
        </h1>
        <p className="text-lg md:text-2xl font-medium text-shadow-lg px-4">
          Comprehensive CNG Solutions for Every Need
        </p>
      </section>
      <section className="py-12 bg-white text-center">
        <div className=" p-9">
          <div className="w-full md:1/2 max-w-[600px] h-64 bg-gray-200 rounded-lg mb-6 md:mb-6  relative clip m-auto">
            <Image
              src={"/images/truck.jpg"}
              objectFit="cover"
              style={{ borderRadius: "1rem" }}
              fill
              alt="conversion of truck"
            />
          </div>
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              At CNG-Tech Edge Limited
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              We specialize in various services to cater to your energy needs,
              from vehicle conversions to complete gas station setups.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md hover:shadow-2xl rounded-lg p-6 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-t from-gray-800 via-gray-700 to-gray-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8">Why CNG?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-300">
            <div className="p-6 bg-gray-900 rounded-lg shadow-md hover:bg-gray-50 hover:text-gray-900">
              <h3 className="text-xl font-semibold mb-2 text-green-400">
                Affordable
              </h3>
              <p>
                At just ₦250 per liter, CNG is a cost-effective alternative to
                diesel, priced at ₦1200 per liter.
              </p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg shadow-md hover:bg-gray-50 hover:text-gray-900">
              <h3 className="text-xl font-semibold mb-2 text-green-400">
                Engine-Friendly
              </h3>
              <p>
                Extend engine life and reduce maintenance costs with cleaner
                fuel.
              </p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg shadow-md hover:bg-gray-50 hover:text-gray-900">
              <h3 className="text-xl font-semibold mb-2 text-green-400">
                Safe and Sustainable
              </h3>
              <p>
                CNG systems are safer than petrol, diesel, and LPG and have
                advanced safety features.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-green-700 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with Us</h2>
        <p className="text-lg mb-6">
          Tailored CNG solutions to meet your specific requirements.
        </p>
        <Link href="/contact">
          <Button
            variant="solid"
            size="3"
            className="bg-white text-green-700 font-bold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 hover:text-gray-600">
            Get in Touch
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default ServicesClient;
