import React from "react";
import ContactClient from "./page.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | CNG Tech Ltd.",
  description: "Tailored CNG solutions to meet your specific requirements.",
  icons: ["/favicon.png"],
};
const Contact = () => {
  return <ContactClient />;
};

export default Contact;
