"use client";
import React, { useEffect, useRef } from "react";
import {
  Shield,
  Percent,
  PiggyBank,
  Target,
  TrendingUp,
  ArrowRight,
  Crown,
  BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const Solution = () => {
  const features = [
    {
      icon: <PiggyBank className="h-6 w-6 text-white" />,
      title: "Stablecoin Stability",
      description:
        "Save in USDC and USDT stablecoins that maintain their value, reducing volatility while your savings grow.",
      color: "from-teal-500/20 to-teal-700/20",
      iconBg: "from-teal-400 to-teal-600",
    },
    {
      icon: <Percent className="h-6 w-6 text-white" />,
      title: "Automated Yield",
      description:
        "Our smart contracts automatically allocate your funds to the highest-yielding DeFi protocols on Solana.",
      color: "from-purple-500/20 to-purple-700/20",
      iconBg: "from-purple-400 to-purple-600",
      badge: "Popular",
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Secure Savings",
      description:
        "Multi-signature wallets and audited smart contracts protect your funds with institutional-grade security.",
      color: "from-blue-500/20 to-blue-700/20",
      iconBg: "from-blue-400 to-blue-600",
    },
    {
      icon: <Target className="h-6 w-6 text-white" />,
      title: "Customized Goals",
      description:
        "Set your wedding date and budget goals, and we'll optimize your yield strategy to help you get there.",
      color: "from-emerald-500/20 to-emerald-700/20",
      iconBg: "from-emerald-400 to-emerald-600",
    },
  ];

  const comparisonData = [
    {
      name: "Traditional Bank FD",
      percent: 40,
      rate: "4-6%",
      color: "bg-slate-400",
    },
    {
      name: "Gold Investment",
      percent: 55,
      rate: "5-8%",
      color: "bg-amber-500",
    },
    {
      name: "Shaadi Vault",
      percent: 85,
      rate: "8-12%",
      color: "bg-gradient-to-r from-teal-400 to-purple-600",
    },
  ];

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
    <section id="features" className="relative overflow-hidden py-24 lg:py-32">
      {/* Enhanced background elements */}
      <div ref={particlesRef} className="particle-background"></div>
      <div className="absolute inset-0 opacity-90"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>

      {/* Decorative blurs */}
      <div className="absolute -top-80 -right-80 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl"></div>
      <div className="absolute -bottom-80 -left-80 w-96 h-96 rounded-full bg-teal-600/10 blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-600/5 blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-teal-400/20 to-purple-600/20 text-white border-teal-500/20 backdrop-blur-sm hover:from-teal-400/30 hover:to-purple-600/30 hover:border-teal-500/30 transition-all duration-300">
            Innovative DeFi Solutions
          </Badge>

          <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Shaadi Vault:{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-600">
              Smarter Wedding Savings
            </span>
          </h2>

          <p className="text-white/70 text-lg">
            Our DeFi platform uses Solana&apos;s blockchain technology to provide
            secure, high-yield savings for wedding planning. With stablecoin
            deposits, automated yield strategies, and user-friendly design, we
            make building your wedding fund simple and rewarding.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={cn(
                "bg-black/40 backdrop-blur-sm border-0 overflow-hidden relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
                "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/5 before:to-white/0 before:rounded-lg",
                "after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-br",
                `after:${feature.color}`,
                "after:opacity-30 after:hover:opacity-40 after:transition-opacity"
              )}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div
                    className={cn(
                      "h-12 w-12 rounded-lg bg-gradient-to-br flex items-center justify-center shadow-lg",
                      feature.iconBg
                    )}
                  >
                    {feature.icon}
                  </div>

                  {feature.badge && (
                    <Badge className="bg-gradient-to-r from-purple-400/20 to-purple-600/20 text-purple-300 border-purple-500/20">
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl font-semibold mt-4 text-white group-hover:text-white/90 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/60 group-hover:text-white/70 transition-colors">
                  {feature.description}
                </p>
              </CardContent>
              <CardFooter>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button
                      variant="link"
                      className="text-white/70 p-0 hover:text-teal-400 flex items-center gap-1"
                    >
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-black/80 border border-white/10 backdrop-blur-lg text-white">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">{feature.title}</h4>
                      <p className="text-xs text-white/70">
                        {feature.description} Our technologies ensure optimal
                        performance while maintaining security and transparency.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mt-24 max-w-5xl mx-auto">
          <Card className="bg-black/40 backdrop-blur-sm border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-teal-600/10 blur-3xl"></div>

            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent"></div>

            <CardHeader>
              <Badge className="w-fit mb-2 bg-gradient-to-r from-teal-400/20 to-purple-600/20 text-white border-teal-500/20">
                Yield Comparison
              </Badge>
              <CardTitle className="text-2xl font-bold text-white">
                How ShaadiVault Compares
              </CardTitle>
              <CardDescription className="text-white/70">
                Our DeFi platform consistently delivers higher returns than
                traditional savings methods while maintaining strong security
                protections.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Tabs defaultValue="comparison" className="w-full">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-black/50 border border-white/10">
                  <TabsTrigger
                    value="comparison"
                    className="data-[state=active]:bg-white/10"
                  >
                    Comparison
                  </TabsTrigger>
                  <TabsTrigger
                    value="calculator"
                    className="data-[state=active]:bg-white/10"
                  >
                    Calculator
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="comparison" className="mt-0">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
                      <div className="space-y-6 bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                        {comparisonData.map((item, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                {index === 2 && (
                                  <Crown className="h-4 w-4 text-yellow-500" />
                                )}
                                <span className="text-sm text-white/80">
                                  {item.name}
                                </span>
                              </div>
                              <span className="text-sm font-medium text-white">
                                {item.rate}
                              </span>
                            </div>
                            <div className="relative">
                              <Progress
                                value={item.percent}
                                className={`h-2 bg-white/10 ${item.color}`}
                              />
                              {index === 2 && (
                                <span className="absolute top-1 right-0 transform translate-x-1/2 -translate-y-1/2 flex h-4 w-4">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-20"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                                </span>
                              )}
                            </div>
                          </div>
                        ))}

                        <div className="pt-4 border-t border-white/10 mt-6">
                          <div className="flex items-center gap-2">
                            <BadgeCheck className="h-5 w-5 text-teal-400" />
                            <span className="text-white font-medium">
                              ShaadiVault Advantages
                            </span>
                          </div>
                          <ul className="mt-3 space-y-2 text-sm text-white/70">
                            <li className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-teal-400"></div>
                              <span>
                                Higher yield through optimized DeFi protocols
                              </span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-teal-400"></div>
                              <span>Daily compounding interest</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-teal-400"></div>
                              <span>No lock-in periods or penalties</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-1/2 lg:pl-8 lg:border-l border-white/10">
                      <div className="text-center bg-white/5 rounded-xl p-6 mb-6 backdrop-blur-sm">
                        <p className="text-sm text-white/70 mb-1">
                          Monthly Deposit
                        </p>
                        <p className="text-3xl font-bold text-white">₹10,000</p>
                        <p className="text-xs text-white/50 mt-1">
                          For 3 years (36 months)
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg text-white">
                              Bank Savings
                            </CardTitle>
                            <CardDescription className="text-white/50">
                              3 Years at 5% APY
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-baseline">
                              <span className="text-2xl font-bold text-white">
                                ₹3.98
                              </span>
                              <span className="text-white ml-1">Lakh</span>
                            </div>
                            <p className="text-xs text-white/50 mt-1">
                              Total: ₹3,98,000
                            </p>
                          </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-br from-black/40 to-black/60 border border-white/10 backdrop-blur-sm relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-purple-600/10"></div>
                          <CardHeader className="pb-3 relative z-10">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg text-white">
                                ShaadiVault Savings
                              </CardTitle>
                              <Badge className="bg-gradient-to-r from-teal-400 to-purple-600 border-none text-white">
                                +8.5%
                              </Badge>
                            </div>
                            <CardDescription className="text-white/50">
                              3 Years at 10% APY
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="relative z-10">
                            <div className="flex items-baseline">
                              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-600">
                                ₹4.32
                              </span>
                              <span className="text-white ml-1">Lakh</span>
                            </div>
                            <p className="text-xs text-white/50 mt-1">
                              Total: ₹4,32,000
                            </p>
                          </CardContent>
                          <div className="absolute top-0 right-0">
                            <svg
                              width="103"
                              height="101"
                              viewBox="0 0 103 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="opacity-20"
                            >
                              <path
                                d="M102.5 0.5V72C102.5 87.74 89.74 100.5 74 100.5H0.5L102.5 0.5Z"
                                stroke="url(#paint0_linear_0_1)"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_0_1"
                                  x1="51.5"
                                  y1="0.5"
                                  x2="51.5"
                                  y2="100.5"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#5eead4" />
                                  <stop offset="1" stopColor="#9333ea" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        </Card>
                      </div>

                      <div className="mt-6 text-center bg-gradient-to-r from-teal-400/10 to-purple-600/10 rounded-xl p-6 backdrop-blur-sm border border-white/5">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <TrendingUp className="h-5 w-5 text-teal-400" />
                          <p className="font-medium text-white text-lg">
                            Extra ₹34,000 for your wedding
                          </p>
                        </div>
                        <p className="text-sm text-white/70 mb-4">
                          With the same monthly contribution
                        </p>

                        <Button className="bg-gradient-to-r from-teal-400 to-purple-600 hover:opacity-90 text-white border-none shadow-lg transition-all duration-300">
                          Start Saving Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="calculator" className="mt-0">
                  <div className="text-center text-white py-8">
                    <div className="max-w-md mx-auto bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                      <h3 className="text-xl font-medium mb-4">
                        Savings Calculator
                      </h3>
                      <p className="text-white/70 mb-6">
                        Estimate your potential wedding savings with our DeFi
                        platform
                      </p>

                      <div className="text-center space-y-4">
                        <div className="flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-400 to-purple-600 flex items-center justify-center">
                            <TrendingUp className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <p className="text-sm text-white/70">
                          Coming soon! Our interactive calculator will help you
                          plan your wedding savings.
                        </p>
                        <Button
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10"
                        >
                          Get Notified
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Solution;
