"use client";
import React, { useEffect, useRef, useState } from "react";
import { Flex, Container, IconButton } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Toaster } from "sonner";
import { easeOut, motion } from "framer-motion";

const Header = () => {
  const [isClient, setIsClient] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null);
  const pathname = usePathname();
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    // Focus first link when menu opens
    firstMobileLinkRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  if (!isClient) return <Container py={"7"}></Container>;

  const tabNavItems = [
    { label: "Home", href: "/" },
    { label: "Our Services", href: "/our-services" },
    { label: "Contact", href: "/contact" },
  ];

  const panelVariants = {
    closed: { x: "-100%", opacity: 0 },
    open: { x: 0, opacity: 1, transition: { duration: 0.4, ease: easeOut } },
  };
  const overlayVariants = {
    closed: { opacity: 0, pointerEvents: "none" as const },
    open: {
      opacity: 0.6,
      pointerEvents: "auto" as const,
      transition: { duration: 0.3 },
    },
  };
  const itemVariants = {
    initial: { opacity: 0, y: 8 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeOut } },
  };

  return (
    <Container py={"4"} className="shadow px-6 xl:px-0">
      <Toaster position="top-center" richColors closeButton />
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Flex gap={"6"} justify={"between"} align={"center"}>
          <Link href={"/"}>
            <Image
              src={"/images/CNGTechlogo.png"}
              width="180"
              height="60"
              alt="Logo"
            ></Image>
          </Link>
          <div className="hidden md:flex gap-6">
            {tabNavItems.map((item) => (
              <div key={item.href} className="relative group py-3">
                <Link
                  href={item.href}
                  className={`text-sm font-medium ${
                    pathname === item.href ? "text-green-700" : "text-gray-900"
                  } hover:text-green-600`}
                >
                  {item.label}
                </Link>
                {pathname === item.href ? (
                  <motion.div
                    layoutId="desktop-underline"
                    className="absolute left-0 bottom-0 h-[2px] w-full bg-green-600"
                    transition={{ duration: 0.4, ease: easeOut }}
                  />
                ) : (
                  <div className="absolute left-0 bottom-0 h-[2px] w-full bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </div>
            ))}
          </div>
          <div className="md:hidden p-2">
            <IconButton
              color="grass"
              variant="soft"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {!menuOpen && <HamburgerMenuIcon />}
              {menuOpen && <Cross1Icon />}
            </IconButton>
          </div>
          {/* Mobile Menu Overlay */}
          <motion.div
            className="fixed inset-0 bg-black md:hidden"
            variants={overlayVariants}
            animate={menuOpen ? "open" : "closed"}
            initial="closed"
            onClick={() => setMenuOpen(false)}
            aria-hidden={!menuOpen}
          />
          {/* Mobile Menu Panel */}
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            className="fixed top-0 left-0 h-full w-[300px] bg-white shadow-md z-50 md:hidden flex flex-col"
            variants={panelVariants}
            initial="closed"
            animate={menuOpen ? "open" : "closed"}
          >
            <div className="p-6">
              {tabNavItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  variants={itemVariants}
                  initial="initial"
                  animate="enter"
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    ref={index === 0 ? firstMobileLinkRef : undefined}
                    className={`block py-3 text-base ${
                      pathname === item.href
                        ? "text-green-700 font-semibold"
                        : "text-gray-800"
                    } hover:text-green-600 focus:text-green-600 focus:outline-none`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        </Flex>
      </motion.div>
    </Container>
  );
};

export default Header;
