"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-4">
      <div className="max-w-7xl mx-auto text-center text-sm">
        &copy; {new Date().getFullYear()} CNG Technologies Limited. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
