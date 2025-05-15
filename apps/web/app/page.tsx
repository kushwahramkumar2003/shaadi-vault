"use client";

import Challenge from "@/components/Challenge";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import SolanaAdvantage from "@/components/SolanaAdvantage";
import Solution from "@/components/Solution";
import React, { useEffect } from "react";
import "./page.module.css";

const Index = () => {
  useEffect(() => {
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

    document.querySelectorAll(".opacity-0").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen  text-ShaadiVault-white font-poppins relative overflow-hidden">
      <Header />
      <Hero />
      <Challenge />
      <Solution />
      <Journey />
      <SolanaAdvantage />
      {/* <Security /> */}
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
