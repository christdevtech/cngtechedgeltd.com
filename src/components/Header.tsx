"use client";
import React, { useEffect, useState } from "react";
import { Flex, Button, Container, IconButton } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

const Header = () => {
  const [isClient, setIsClient] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <Container py={"7"}></Container>;

  const tabNavItems = [
    { label: "Home", href: "/" },
    { label: "Our Services", href: "/our-services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <Container py={"4"} className="shadow px-6 xl:px-0">
      <Flex gap={"6"} justify={"between"} align={"center"}>
        <Link href={"/"}>
          <Image
            src={"/images/CNGTechlogo.png"}
            width="180"
            height="60"
            alt="Logo"></Image>
        </Link>
        <div className="hidden md:flex gap-3">
          {tabNavItems.map((item, index) => (
            <Button
              size={"2"}
              key={index}
              variant={pathname === item.href ? "solid" : "soft"}>
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </div>
        <div className="md:hidden p-2">
          <IconButton
            color="grass"
            variant="soft"
            onClick={() => setMenuOpen(!menuOpen)}>
            {!menuOpen && <HamburgerMenuIcon />}
            {menuOpen && <Cross1Icon />}
          </IconButton>
        </div>
        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full bg-white shadow-md transform transition-transform duration-300 z-50 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } w-[300] md:hidden`}>
          <div className="p-4">
            {tabNavItems.map((item, index) => (
              <div key={index} className="mb-3">
                <Link href={item.href} onClick={() => setMenuOpen(false)}>
                  <div
                    className={`w-full text-left p-4 rounded-lg ${
                      pathname === item.href
                        ? "bg-green-500 text-white font-semibold"
                        : "bg-gray-100 text-gray-800 hover:bg-green-100 hover:text-green-600"
                    }`}>
                    {item.label}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Flex>
    </Container>
  );
};

export default Header;
