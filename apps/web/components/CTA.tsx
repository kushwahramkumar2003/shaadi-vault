"use client";
import React, { useState, useId } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Create a stable ID for this component instance
  const id = useId();

  // Create a deterministic pseudo-random number generator
  const createSeededRandom = (seed: string) => {
    // Simple string hash function for seed
    const hashString = (str: string) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
      }
      return hash;
    };

    const seedValue = hashString(seed);

    // Deterministic random function
    return (index: number) => {
      const x = Math.sin(seedValue + index) * 10000;
      return Math.abs(x - Math.floor(x));
    };
  };

  // Create seeded random generator
  const random = createSeededRandom(id);

  // Pre-generate all particles with deterministic values
  const particles = Array.from({ length: 15 }).map((_, i) => ({
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
      // Here would be the logic to submit the email to a backend
      setSubmitted(true);
    }
  };

  return (
    <section className="section relative overflow-hidden bg-wedlock-black">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-wedlock-purple/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-wedlock-teal/10 blur-3xl"></div>

        {/* Particle background */}
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
          <div className="mb-2 opacity-0 animate-fade-in">
            <span className="inline-block bg-gradient-to-r from-wedlock-teal/20 to-wedlock-purple/20 text-wedlock-teal text-sm rounded-full py-1 px-3 mb-4">
              Ready to Start
            </span>
          </div>

          <h2 className="mb-6 opacity-0 animate-fade-in">
            Start Saving for Your{" "}
            <span className="gradient-text">Wedding Today</span>
          </h2>

          <p className="mb-8 max-w-2xl mx-auto text-lg opacity-0 animate-fade-in-delay-1">
            Join Shaadi Vault now to start growing your wedding fund with higher
            yields, lower fees, and complete security. No risk to try, no fees
            to start.
          </p>

          <div className="opacity-0 animate-fade-in-delay-5">
            <Button className="btn-primary enhanced-cta-animate text-xl  py-6 px-8 animate-pulse-glow">
              Join Shaadi Vault
            </Button>
          </div>

          <div className="mt-12 max-w-md mx-auto opacity-0 animate-fade-in-delay-3">
            <p className="text-sm text-wedlock-gray mb-4">
              Sign up for early access and updates
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2"
            >
              <div className="flex-grow">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-wedlock-navy border-wedlock-navy/70 h-12 focus:border-wedlock-purple focus:ring-1 focus:ring-wedlock-purple"
                  required
                />
              </div>
              <Button
                type="submit"
                className="bg-wedlock-teal hover:bg-wedlock-teal/90 text-white h-12"
                disabled={submitted}
              >
                {submitted ? "Thank You!" : "Get Updates"}
              </Button>
            </form>

            <p className="text-xs text-wedlock-gray mt-3">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-br from-wedlock-navy/40 to-wedlock-black/40 rounded-2xl p-6 border border-wedlock-purple/10 opacity-0 animate-fade-in-delay-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-wedlock-navy/50 flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-wedlock-teal"
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
              <h3 className="text-lg font-medium mb-2">Fully Audited</h3>
              <p className="text-sm text-wedlock-gray">
                Smart contracts verified by leading security firms
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-wedlock-navy/50 flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-wedlock-purple"
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
              <h3 className="text-lg font-medium mb-2">Lightning Fast</h3>
              <p className="text-sm text-wedlock-gray">
                Deposits and withdrawals in seconds, not days
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-wedlock-navy/50 flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-wedlock-teal"
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
              <h3 className="text-lg font-medium mb-2">Higher Yields</h3>
              <p className="text-sm text-wedlock-gray">
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
