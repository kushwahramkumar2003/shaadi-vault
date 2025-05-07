import React from "react";
import { Shield, Percent, PiggyBank, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const Solution = () => {
  const features = [
    {
      icon: <PiggyBank className="h-6 w-6 text-zinc-200" />,
      title: "Stablecoin Stability",
      description:
        "Save in USDC and USDT stablecoins that maintain their value, reducing volatility while your savings grow.",
      color: "zinc-700",
    },
    {
      icon: <Percent className="h-6 w-6 text-zinc-200" />,
      title: "Automated Yield",
      description:
        "Our smart contracts automatically allocate your funds to the highest-yielding DeFi protocols on Solana.",
      color: "zinc-800",
    },
    {
      icon: <Shield className="h-6 w-6 text-zinc-200" />,
      title: "Secure Savings",
      description:
        "Multi-signature wallets and audited smart contracts protect your funds with institutional-grade security.",
      color: "zinc-700",
    },
    {
      icon: <Target className="h-6 w-6 text-zinc-200" />,
      title: "Customized Goals",
      description:
        "Set your wedding date and budget goals, and we'll optimize your yield strategy to help you get there.",
      color: "zinc-800",
    },
  ];

  return (
    <section id="features" className="section relative overflow-hidden py-24">
      {/* Modern subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-950 opacity-90"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-zinc-800/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-zinc-700/10 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="mb-6 text-3xl md:text-4xl font-bold text-white">
            Shaadi Vault:{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-400">
              Smarter Wedding Savings
            </span>
          </h2>
          <p className="text-zinc-300">
            Our DeFi platform uses Solana's blockchain technology to provide
            secure, high-yield savings for wedding planning. With stablecoin
            deposits, automated yield strategies, and user-friendly design, we
            make building your wedding fund simple and rewarding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-b from-zinc-800/70 to-zinc-900/90 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/20 
                shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] opacity-0 animate-fade-in-delay-${index + 1}`}
            >
              <div
                className={`mb-6 h-14 w-14 rounded-full bg-gradient-to-br from-${feature.color}/30 to-${feature.color}/20 flex items-center justify-center`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-8 border border-zinc-800/30 shadow-2xl relative overflow-hidden opacity-0 animate-fade-in-delay-3">
            {/* Modern decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-zinc-700/10 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-zinc-600/10 blur-3xl"></div>

            <div className="flex flex-col md:flex-row items-center relative z-10">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  How WedLock Compares
                </h3>
                <p className="mb-6 text-zinc-400">
                  Our DeFi platform consistently delivers higher returns than
                  traditional savings methods while maintaining strong security
                  protections.
                </p>
                <div className="bg-zinc-800/50 p-5 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-zinc-300">
                      Traditional Bank FD
                    </span>
                    <div className="flex items-center">
                      <div className="w-24 h-2 bg-zinc-700 rounded-full mr-2">
                        <div
                          className="h-full rounded-full bg-zinc-500"
                          style={{ width: "40%" }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-zinc-400">
                        4-6%
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-zinc-300">
                      Gold Investment
                    </span>
                    <div className="flex items-center">
                      <div className="w-24 h-2 bg-zinc-700 rounded-full mr-2">
                        <div
                          className="h-full rounded-full bg-amber-500/60"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-amber-400">
                        5-8%
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-300">Shaadi Vault</span>
                    <div className="flex items-center">
                      <div className="w-24 h-2 bg-zinc-700 rounded-full mr-2">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-zinc-300 to-zinc-500"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-zinc-300">
                        8-12%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 md:pl-8 md:border-l border-zinc-700/50">
                <div className="bg-zinc-800/30 rounded-xl p-5 mb-5 backdrop-blur-sm">
                  <div className="text-center">
                    <p className="text-sm text-zinc-400 mb-1">
                      Monthly Deposit
                    </p>
                    <p className="text-xl font-semibold text-white">₹10,000</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="bg-zinc-800/30 rounded-xl p-5 backdrop-blur-sm">
                    <p className="text-sm text-zinc-400 mb-1">
                      Bank Savings (3 Years)
                    </p>
                    <p className="text-xl font-semibold text-white">
                      ₹3.98 <span className="text-sm">Lakh</span>
                    </p>
                    <div className="mt-2 text-xs text-zinc-500">5% APY</div>
                  </div>

                  <div className="bg-gradient-to-br from-zinc-800/40 to-zinc-900/40 rounded-xl p-5 backdrop-blur-sm relative overflow-hidden border border-zinc-700/30">
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-400/5 to-zinc-600/5 opacity-70"></div>
                    <div className="relative z-10">
                      <p className="text-sm text-zinc-400 mb-1">
                        WedLock (3 Years)
                      </p>
                      <p className="text-xl font-semibold text-white">
                        ₹4.32 <span className="text-sm">Lakh</span>
                      </p>
                      <div className="mt-2 text-xs text-emerald-400">
                        10% APY
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <p className="font-medium text-white">
                    Extra ₹34,000 for your wedding
                  </p>
                  <p className="text-sm text-zinc-400">
                    With same monthly contribution
                  </p>

                  <Button className="mt-4 bg-gradient-to-r from-zinc-700 to-zinc-800 text-white hover:from-zinc-600 hover:to-zinc-700 rounded-xl py-2.5 px-6 shadow-lg transition-all duration-300">
                    Start Saving Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
