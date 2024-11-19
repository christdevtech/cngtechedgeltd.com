import React from "react";
import ServicesClient from "./page.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | CNG Tech Ltd.",
  description: "Tailored CNG solutions to meet your specific requirements.",
  icons: ["/favicon.png"],
};
const Services = () => {
  return <ServicesClient />;
};

export default Services;
