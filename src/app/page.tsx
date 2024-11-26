import React from "react";
import HomeClient from "./page.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | CNG-Tech Edge Limited.",
  description: "Tailored CNG solutions to meet your specific requirements.",
  icons: ["/favicon.png"],
};
const Home = () => {
  return <HomeClient />;
};

export default Home;
