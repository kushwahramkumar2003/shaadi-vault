"use client";

import React, { useState, useEffect } from "react";
import { FaGithub, FaHeart } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [stars, setStars] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/kushwahramkumar2003/shaadi-vault"
        );
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error("Error fetching GitHub stars:", error);
      }
    };

    fetchStars();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMenuOpen ? "hidden" : "unset";
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 lg:py-4 px-4 lg:px-10",
        isScrolled ? "bg-black/85 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="flex items-center group z-10 transform hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center">
              <span className="font-bold text-xl md:text-2xl text-white tracking-tight">
                Shaadi
              </span>
              <span className="font-bold text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-600 tracking-tight">
                {" "}
                Vault
              </span>
              <FaHeart className="ml-1 text-pink-500 h-3 w-3 animate-pulse" />
            </div>
          </a>

          <a
            href="https://github.com/kushwahramkumar2003/shaadi-vault"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-white/10 hover:bg-black/60 hover:scale-105 transition-all duration-300 group"
          >
            <FaGithub className="h-5 w-5 text-white group-hover:text-teal-400 transition-colors" />
            <span className="text-white font-medium">
              {stars !== null ? stars.toLocaleString() : "..."} stars
            </span>
          </a>

          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center h-12 w-12 rounded-full bg-black/40 border border-white/10 text-white z-10 hover:bg-black/60 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 bg-gradient-to-b from-black/95 to-purple-900/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 z-40 transition-all duration-500 ease-in-out",
          isMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <a
          href="https://github.com/kushwahramkumar2003/shaadi-vault"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 mt-4 px-8 py-4 rounded-full bg-black/40 border border-white/10 hover:bg-black/60 transition-all transform hover:scale-105"
          onClick={toggleMenu}
        >
          <FaGithub className="h-6 w-6 text-white" />
          <span className="text-white font-medium text-lg">
            {stars !== null ? stars.toLocaleString() : "..."} stars
          </span>
        </a>

        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 p-2 rounded-full bg-black/40 border border-white/10 text-white hover:bg-black/60 transition-all"
          aria-label="Close menu"
        >
          <HiX size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
