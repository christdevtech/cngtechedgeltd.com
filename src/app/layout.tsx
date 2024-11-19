import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Flex, Theme } from "@radix-ui/themes";
import Header from "@/components/Header";
import "@radix-ui/themes/styles.css";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Home | CNG Tech Ltd.",
  description: "Tailored CNG solutions to meet your specific requirements.",
  icons: ["/favicon.png"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
        <Theme
          accentColor="grass"
          radius="medium"
          scaling="110%"
          className="min-h-[100%]">
          <Flex direction={"column"} justify={"between"}>
            <Header />
            {children}
          </Flex>
          <Footer />
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  );
}
