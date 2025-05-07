import React from "react";
import { Wallet, BanknoteIcon, BarChart3, ArrowDownToLine } from "lucide-react";

const Journey = () => {
  const steps = [
    {
      icon: <Wallet className="h-6 w-6 text-wedlock-teal" />,
      number: "01",
      title: "Connect Wallet",
      description:
        "Link your Solana wallet (Phantom, Solflare) to access the WedLock dApp securely.",
    },
    {
      icon: <BanknoteIcon className="h-6 w-6 text-wedlock-purple" />,
      number: "02",
      title: "Deposit Stablecoins",
      description:
        "Transfer USDC or USDT to your WedLock smart contract with minimal fees.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-wedlock-teal" />,
      number: "03",
      title: "Track Yield",
      description:
        "Monitor your growing wedding fund with real-time APY updates and projected totals.",
    },
    {
      icon: <ArrowDownToLine className="h-6 w-6 text-wedlock-purple" />,
      number: "04",
      title: "Withdraw Funds",
      description:
        "Access your funds anytime with no lock-in period, perfect for wedding expenses.",
    },
  ];

  return (
    <section
      id="journey"
      className="section bg-wedlock-black relative overflow-hidden"
    >
      {/* Subtle background patterns */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-wedlock-navy/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-wedlock-navy/20 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="mb-6">
            Your Path to a <span className="gradient-text">Dream Wedding</span>
          </h2>
          <p>
            With Shaadi Vault, your journey to wedding savings is simple,
            secure, and rewarding. Follow these four steps to start growing your
            wedding fund with DeFi yields today.
          </p>
        </div>

        {/* Desktop Timeline (hidden on mobile) */}
        <div className="hidden md:block relative mb-8">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-wedlock-teal to-wedlock-purple transform -translate-y-1/2"></div>
          <div className="flex justify-between relative z-10">
            {steps.map((_, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full bg-wedlock-navy border-2 border-wedlock-teal flex items-center justify-center"
              >
                <div className="w-3 h-3 rounded-full bg-wedlock-teal"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`feature-card relative group opacity-0 animate-fade-in-delay-${index + 1}`}
            >
              {/* Mobile step indicator (visible only on mobile) */}
              <div className="md:hidden absolute -left-3 -top-3 w-6 h-6 rounded-full bg-wedlock-navy border border-wedlock-purple flex items-center justify-center text-xs text-wedlock-purple font-medium">
                {step.number}
              </div>

              <div className="flex items-center mb-6">
                <div className="h-14 w-14 rounded-full bg-wedlock-navy/50 flex items-center justify-center mr-4">
                  {step.icon}
                </div>
                <span className="text-3xl font-bold text-wedlock-gray/20">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-wedlock-teal transition-colors">
                {step.title}
              </h3>

              <p>{step.description}</p>

              {/* Mobile connection line (visible only on mobile) */}
              {index < steps.length - 1 && (
                <div
                  className="md:hidden absolute bottom-0 left-0 w-px h-6 bg-wedlock-purple/30"
                  style={{ top: "100%" }}
                ></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-wedlock-navy to-wedlock-black rounded-2xl p-6 sm:p-10 border border-wedlock-purple/10 card-shadow relative overflow-hidden opacity-0 animate-fade-in-delay-3">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 mandala-pattern opacity-5"></div>

          <div className="flex flex-col md:flex-row items-center relative z-10">
            <div className="mb-8 md:mb-0 md:w-1/4 flex justify-center">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-wedlock-navy to-wedlock-black p-1 shadow-lg">
                <div className="w-full h-full rounded-full bg-wedlock-navy flex items-center justify-center overflow-hidden relative">
                  <div className="w-full h-full absolute">
                    <div className="w-full h-full bg-gradient-to-br from-wedlock-purple/10 to-wedlock-teal/10"></div>
                  </div>
                  <div className="z-10 text-center">
                    <div className="text-3xl font-bold gradient-text">2X</div>
                    <div className="text-sm text-wedlock-gray mt-1">
                      Growth Rate
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-3/4 md:pl-8">
              <h3 className="text-2xl font-semibold mb-4">
                Your Wedding Fund,{" "}
                <span className="gradient-text">Doubled</span>
              </h3>
              <p className="mb-6">
                Traditional savings might give you ₹4 lakh after 3 years (at 5%
                APY). Shaadi Vault can give you ₹8+ lakh with the same monthly
                deposit at our current yield rates. That's twice the budget for
                your dream wedding.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-wedlock-navy/30 p-4 rounded-lg">
                  <div className="text-center">
                    <p className="text-xs text-wedlock-gray mb-1">
                      Monthly Deposit
                    </p>
                    <p className="text-lg font-semibold">₹20,000</p>
                  </div>
                </div>

                <div className="bg-wedlock-navy/30 p-4 rounded-lg">
                  <div className="text-center">
                    <p className="text-xs text-wedlock-gray mb-1">Timeframe</p>
                    <p className="text-lg font-semibold">3 years</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-wedlock-teal/20 to-wedlock-purple/20 p-4 rounded-lg">
                  <div className="text-center">
                    <p className="text-xs text-wedlock-gray mb-1">
                      Total Growth
                    </p>
                    <p className="text-lg font-semibold">₹8.64 Lakhs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
