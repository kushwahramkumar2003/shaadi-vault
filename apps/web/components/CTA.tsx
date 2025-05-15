"use client";
import React, { useState, useId } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const id = useId();

  const createSeededRandom = (seed: string) => {
    const hashString = (str: string) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
      }
      return hash;
    };

    const seedValue = hashString(seed);
    return (index: number) => {
      const x = Math.sin(seedValue + index) * 10000;
      return Math.abs(x - Math.floor(x));
    };
  };

  const random = createSeededRandom(id);

  const particles = Array.from({ length: 20 }).map((_, i) => ({
    left: `${random(i * 6 + 1) * 100}%`,
    top: `${random(i * 6 + 2) * 100}%`,
    width: `${random(i * 6 + 3) * 4 + 2}px`,
    height: `${random(i * 6 + 4) * 4 + 2}px`,
    opacity: `${random(i * 6 + 5) * 0.3 + 0.1}`,
    animationDelay: `${random(i * 6 + 6) * 5}s`,
    animationDuration: `${random(i * 6 + 7) * 10 + 10}s`,
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="section relative overflow-hidden ">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-ShaadiVault-purple/10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-ShaadiVault-teal/10 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-ShaadiVault-purple/5 to-ShaadiVault-teal/5 blur-3xl animate-pulse"></div>

        <div className="particle-background">
          {particles.map((style, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: style.left,
                top: style.top,
                width: style.width,
                height: style.height,
                opacity: style.opacity,
                animationDelay: style.animationDelay,
                animationDuration: style.animationDuration,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-4 opacity-0 animate-fade-in">
            <span className="inline-block bg-gradient-to-r from-ShaadiVault-teal/20 to-ShaadiVault-purple/20 text-ShaadiVault-teal text-sm rounded-full py-1.5 px-4 mb-4 backdrop-blur-sm border border-ShaadiVault-teal/10">
              Ready to Start
            </span>
          </div>

          <h2 className="mb-6 opacity-0 animate-fade-in text-4xl md:text-5xl font-bold">
            Start Saving for Your{" "}
            <span className="gradient-text relative">
              Wedding Today
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-ShaadiVault-teal to-ShaadiVault-purple rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
          </h2>

          <p className="mb-10 max-w-2xl mx-auto text-lg opacity-0 animate-fade-in-delay-1 text-ShaadiVault-gray/80">
            Join Shaadi Vault now to start growing your wedding fund with higher
            yields, lower fees, and complete security. No risk to try, no fees
            to start.
          </p>

          <div className="opacity-0 animate-fade-in-delay-5 mb-16">
            <Button className="btn-primary enhanced-cta-animate text-xl py-7 px-10 rounded-full relative overflow-hidden group">
              <span className="relative z-10">Join Shaadi Vault</span>
              <div className="absolute inset-0 bg-gradient-to-r from-ShaadiVault-teal to-ShaadiVault-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>

          <div className="mt-12 max-w-md mx-auto opacity-0 animate-fade-in-delay-3">
            <p className="text-sm text-ShaadiVault-gray/70 mb-4">
              Sign up for early access and updates
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="flex-grow">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-ShaadiVault-navy/50 border-ShaadiVault-navy/70 h-12 rounded-full focus:border-ShaadiVault-purple focus:ring-1 focus:ring-ShaadiVault-purple backdrop-blur-sm py-4"
                  required
                />
              </div>
              <Button
                type="submit"
                className="bg-gradient-to-r from-ShaadiVault-teal to-ShaadiVault-purple hover:from-ShaadiVault-teal/90 hover:to-ShaadiVault-purple/90 text-white h-12 rounded-full transition-all duration-300 hover:scale-105"
                disabled={submitted}
              >
                {submitted ? "Thank You!" : "Get Updates"}
              </Button>
            </form>

            <p className="text-xs text-ShaadiVault-gray/60 mt-3">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-br from-ShaadiVault-navy/40 to-ShaadiVault-black/40 rounded-2xl p-8 border border-ShaadiVault-purple/10 backdrop-blur-sm opacity-0 animate-fade-in-delay-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-ShaadiVault-navy/50 flex items-center justify-center group-hover:bg-ShaadiVault-teal/20 transition-colors duration-300">
                  <svg
                    className="h-7 w-7 text-ShaadiVault-teal group-hover:scale-110 transition-transform duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-medium mb-2 group-hover:text-ShaadiVault-teal transition-colors duration-300">
                Fully Audited
              </h3>
              <p className="text-sm text-ShaadiVault-gray/70">
                Smart contracts verified by leading security firms
              </p>
            </div>

            <div className="text-center group">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-ShaadiVault-navy/50 flex items-center justify-center group-hover:bg-ShaadiVault-purple/20 transition-colors duration-300">
                  <svg
                    className="h-7 w-7 text-ShaadiVault-purple group-hover:scale-110 transition-transform duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-medium mb-2 group-hover:text-ShaadiVault-purple transition-colors duration-300">
                Lightning Fast
              </h3>
              <p className="text-sm text-ShaadiVault-gray/70">
                Deposits and withdrawals in seconds, not days
              </p>
            </div>

            <div className="text-center group">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-ShaadiVault-navy/50 flex items-center justify-center group-hover:bg-ShaadiVault-teal/20 transition-colors duration-300">
                  <svg
                    className="h-7 w-7 text-ShaadiVault-teal group-hover:scale-110 transition-transform duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-medium mb-2 group-hover:text-ShaadiVault-teal transition-colors duration-300">
                Higher Yields
              </h3>
              <p className="text-sm text-ShaadiVault-gray/70">
                8-12% APY on your wedding savings
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
