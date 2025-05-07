import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create particles for background effect
    if (particlesRef.current) {
      const particleCount = 20;
      const container = particlesRef.current;

      // Clear existing particles
      container.innerHTML = "";

      // Create new particles
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        // Random size
        const size = Math.random() * 6 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random opacity
        particle.style.opacity = `${Math.random() * 0.4 + 0.1}`;

        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;

        container.appendChild(particle);
      }
    }
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Particle background */}
      <div ref={particlesRef} className="particle-background"></div>

      {/* Mandala pattern for cultural touch */}
      <div className="absolute top-1/3 right-[10%] w-96 h-96 mandala-pattern opacity-10 animate-float"></div>
      <div className="absolute bottom-1/4 left-[5%] w-64 h-64 mandala-pattern opacity-5 animate-float"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="max-w-xl">
              <h1 className="mb-6 opacity-0 animate-fade-in">
                <span>Grow Your Wedding Fund with </span>
                <span className="gradient-text">Shaadi Vault.</span>
              </h1>

              <p className="text-xl mb-8 opacity-0 animate-fade-in-delay-1">
                Secure, high-yield savings for Indian families, powered by
                Solana's DeFi technology.
              </p>

              <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-delay-2">
                <Button className="btn-primary group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>

                <Button variant="outline" className="btn-secondary">
                  Explore Features
                </Button>
              </div>

              <div className="flex items-center mt-10 space-x-6 opacity-0 animate-fade-in-delay-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-wedlock-purple/20 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-wedlock-purple"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="ml-2 text-wedlock-gray">
                    No fees to start
                  </span>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-wedlock-teal/20 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-wedlock-teal"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="ml-2 text-wedlock-gray">
                    Fully audited smart contracts
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 opacity-0 animate-fade-in-delay-2">
              <div className="w-full h-full max-w-lg mx-auto rounded-2xl overflow-hidden bg-gradient-to-tr from-wedlock-black to-wedlock-navy p-1">
                <div className="bg-wedlock-black rounded-xl overflow-hidden p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        Wedding Savings
                      </h3>
                      <p className="text-sm text-wedlock-gray">
                        Start building your future
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-wedlock-teal/20 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-wedlock-teal"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 5L5 19M5 5L19 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="bg-wedlock-navy/50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-sm text-wedlock-gray">
                          Total Balance
                        </p>
                        <h4 className="text-2xl font-bold text-white">
                          ₹4,32,000
                        </h4>
                      </div>
                      <div className="bg-green-500/10 text-green-400 text-xs py-1 px-2 rounded-full">
                        +5.4% APY
                      </div>
                    </div>

                    <div className="h-24 w-full mt-4">
                      <div className="h-full w-full bg-gradient-to-r from-wedlock-teal/20 to-wedlock-purple/20 rounded-md flex items-end">
                        <div className="h-[30%] w-[10%] bg-wedlock-teal/30 rounded-sm mx-1"></div>
                        <div className="h-[45%] w-[10%] bg-wedlock-teal/50 rounded-sm mx-1"></div>
                        <div className="h-[60%] w-[10%] bg-wedlock-teal/50 rounded-sm mx-1"></div>
                        <div className="h-[40%] w-[10%] bg-wedlock-teal/30 rounded-sm mx-1"></div>
                        <div className="h-[70%] w-[10%] bg-wedlock-teal/50 rounded-sm mx-1"></div>
                        <div className="h-[85%] w-[10%] bg-wedlock-purple/50 rounded-sm mx-1"></div>
                        <div className="h-[75%] w-[10%] bg-wedlock-purple/30 rounded-sm mx-1"></div>
                        <div className="h-[90%] w-[10%] bg-wedlock-purple/50 rounded-sm mx-1"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between gap-4">
                    <button className="w-1/2 bg-wedlock-teal hover:bg-wedlock-teal/90 text-white py-3 rounded-lg transition-colors">
                      Deposit
                    </button>
                    <button className="w-1/2 bg-wedlock-navy hover:bg-wedlock-navy/90 text-white py-3 rounded-lg transition-colors">
                      Withdraw
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Blurred circles for futuristic effect */}
            <div className="absolute top-0 -right-20 w-72 h-72 bg-wedlock-purple/10 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute bottom-0 -left-20 w-80 h-80 bg-wedlock-teal/10 rounded-full blur-3xl opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
