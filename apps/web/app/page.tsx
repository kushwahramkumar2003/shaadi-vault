"use client";

import Challenge from "@/components/Challenge";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Security from "@/components/Security";
import SolanaAdvantage from "@/components/SolanaAdvantage";
import Solution from "@/components/Solution";
import React, { useEffect } from "react";
import "./page.module.css";

const Index = () => {
  useEffect(() => {
    // Initialize observer for animation elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    // Target elements with the animation classes that need to be triggered on scroll
    document.querySelectorAll(".opacity-0").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-wedlock-navy text-wedlock-white font-poppins relative overflow-hidden">
      {/* Overlay grain effect for texture */}
      <div className="grain-overlay"></div>

      {/* Main Content */}
      <Header />
      <Hero />
      <Challenge />
      <Solution />
      <Journey />
      <SolanaAdvantage />
      <Security />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
