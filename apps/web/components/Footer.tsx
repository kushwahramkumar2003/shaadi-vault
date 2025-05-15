import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaDiscord, FaGithub, FaXTwitter, FaTelegram } from "react-icons/fa6";
import { SiSolana } from "react-icons/si";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  // Footer links organized by sections
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#" },
        { name: "Security", href: "#" },
        { name: "Roadmap", href: "#" },
        { name: "Fees", href: "#" },
        { name: "Staking", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Partners", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
      ],
    },
  ];

  // Social media links
  const socialLinks = [
    { icon: <FaXTwitter size={20} />, name: "Twitter", href: "#" },
    { icon: <FaDiscord size={20} />, name: "Discord", href: "#" },
    { icon: <FaGithub size={20} />, name: "GitHub", href: "#" },
    { icon: <FaTelegram size={20} />, name: "Telegram", href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-black to-[#0c111d]">
      {/* Glowing border effect */}
      <div className="h-px bg-gradient-to-r from-purple-600 via-[#14F195] to-[#9945FF]"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>

      {/* Glow effect */}
      <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#14F195] opacity-10 blur-3xl"></div>

      <div className="container relative mx-auto px-4 py-12 md:px-6 lg:py-16">
        {/* Desktop footer */}
        <div className="hidden md:grid md:grid-cols-12 md:gap-8">
          {/* Logo and description section */}
          <div className="col-span-12 md:col-span-4 lg:col-span-5">
            <Link href="/" className="flex items-center space-x-2">
              <SiSolana className="h-8 w-8 text-[#14F195]" />
              <span className="bg-gradient-to-r from-[#14F195] to-[#9945FF] bg-clip-text text-2xl font-bold text-transparent">
                Shaadi Vault
              </span>
            </Link>

            <p className="mt-4 max-w-md text-sm text-gray-400">
              Secure, high-yield savings for Indian families, powered by
              Solana&apos;s DeFi technology. Building the future of financial
              security with blockchain innovation.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all hover:bg-[#14F195]/20 hover:text-[#14F195]"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links sections */}
          <div className="col-span-12 mt-8 grid grid-cols-3 gap-8 md:col-span-8 md:mt-0 lg:col-span-7">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-white">{section.title}</h3>
                <Separator className="mb-4 mt-2 bg-gray-800" />
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 transition-colors hover:text-[#14F195]"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile footer (accordion) */}
        <div className="md:hidden">
          <Link href="/" className="flex items-center space-x-2">
            <SiSolana className="h-8 w-8 text-[#14F195]" />
            <span className="bg-gradient-to-r from-[#14F195] to-[#9945FF] bg-clip-text text-2xl font-bold text-transparent">
              Shaadi Vault
            </span>
          </Link>

          <p className="mt-4 text-sm text-gray-400">
            Secure, high-yield savings for Indian families, powered by Solana&apos;s
            DeFi technology.
          </p>

          <Accordion type="single" collapsible className="mt-6 w-full">
            {footerLinks.map((section, index) => (
              <AccordionItem
                key={index}
                value={`section-${index}`}
                className="border-gray-800"
              >
                <AccordionTrigger className="text-white hover:text-[#14F195] hover:no-underline">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="ml-1 space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-400 transition-colors hover:text-[#14F195]"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 flex justify-center space-x-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all hover:bg-[#14F195]/20 hover:text-[#14F195]"
                aria-label={social.name}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter subscription (both mobile and desktop) */}
        <div className="mt-12 rounded-xl bg-gray-900/50 p-6 backdrop-blur-sm">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Stay updated with Shaadi Vault
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Get the latest news and updates about our products and DeFi
                innovations
              </p>
            </div>
            <div className="flex w-full flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0 lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-white placeholder-gray-500 focus:border-[#14F195] focus:outline-none"
              />
              <Button
                variant="default"
                className="bg-gradient-to-r from-[#14F195] to-[#9945FF] text-white hover:opacity-90"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright and powered by section */}
        <div className="mt-12 flex flex-col items-center justify-between space-y-4 pt-8 text-center md:flex-row md:text-left">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Shaadi Vault. All rights reserved.
          </p>

          <div className="flex items-center space-x-1">
            <span className="text-sm text-gray-500">Powered by</span>
            <Link
              href="https://solana.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center"
            >
              <Image
                src="/solanaLogo.svg"
                width={100}
                height={20}
                alt="Solana Logo"
                className="transition-transform group-hover:scale-105"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
