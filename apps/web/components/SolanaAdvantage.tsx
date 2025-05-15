import React from "react";

const SolanaAdvantage = () => {
  const advantages = [
    {
      title: "Ultra-Low Fees",
      value: "<$0.01",
      description:
        "Transaction costs are just pennies, saving you money on every deposit or withdrawal.",
    },
    {
      title: "Lightning Speed",
      value: "65,000+ TPS",
      description:
        "Transactions complete in seconds, not minutes or hours like other blockchains.",
    },
    {
      title: "Robust Ecosystem",
      value: "1,000+ dApps",
      description:
        "Access to a diverse DeFi ecosystem for optimized yield strategies.",
    },
  ];

  return (
    <section id="solana" className="section relative overflow-hidden">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      <div className="absolute -top-40 right-10 w-80 h-80 rounded-full bg-ShaadiVault-purple/5 blur-3xl"></div>
      <div className="absolute -bottom-40 left-10 w-80 h-80 rounded-full bg-ShaadiVault-teal/5 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="max-w-xl opacity-0 animate-fade-in">
              <h2 className="section-title mb-6">
                Why We Chose <span className="gradient-text">Solana</span>
              </h2>
              <p className="mb-8">
                Solana&apos;s blockchain technology provides the perfect foundation
                for Shaadi Vault, offering unmatched performance, security, and
                cost-efficiency for your wedding savings.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {advantages.map((advantage, index) => (
                  <div
                    key={index}
                    className={`bg-ShaadiVault-black p-4 rounded-xl border border-ShaadiVault-navy hover:border-ShaadiVault-purple/30 transition-all duration-300 opacity-0 animate-fade-in-delay-${index + 1}`}
                  >
                    <div className="text-center">
                      <p className="text-ShaadiVault-gray text-sm mb-1">
                        {advantage.title}
                      </p>
                      <p className="text-xl font-bold gradient-text mb-2">
                        {advantage.value}
                      </p>
                      <p className="text-xs text-ShaadiVault-gray">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-[#9945FF]/10 to-[#14F195]/10 p-5 rounded-xl border border-ShaadiVault-navy/50 opacity-0 animate-fade-in-delay-3">
                <div className="flex items-center">
                  <div>
                    <p className="text-sm font-medium text-ShaadiVault-white">
                      Shaadi Vault is built on Solana
                    </p>
                    <p className="text-xs text-ShaadiVault-gray">
                      The fastest blockchain infrastructure for DeFi
                      applications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 lg:pl-12">
            <div className="bg-ShaadiVault-black rounded-2xl p-6 sm:p-8 border border-ShaadiVault-navy card-shadow relative overflow-hidden opacity-0 animate-fade-in-delay-2">
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-ShaadiVault-purple/5 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-ShaadiVault-teal/5 blur-3xl"></div>

              <h3 className="text-2xl font-semibold mb-6">
                Solana vs. Traditional Banking
              </h3>

              <div className="space-y-5">
                {/* Comparison Row 1 */}
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3 mb-2 sm:mb-0">
                    <p className="text-sm text-ShaadiVault-gray">Feature</p>
                  </div>
                  <div className="sm:w-1/3 mb-2 sm:mb-0">
                    <p className="text-sm text-ShaadiVault-gray">
                      Traditional Banks
                    </p>
                  </div>
                  <div className="sm:w-1/3">
                    <p className="text-sm font-semibold gradient-text">
                      ShaadiVault (on Solana)
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-ShaadiVault-navy/50"></div>

                {/* Comparison Row 2 */}
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3 mb-2 sm:mb-0">
                    <p className="font-medium">Transaction Fees</p>
                  </div>
                  <div className="sm:w-1/3 mb-2 sm:mb-0">
                    <p className="text-red-400">₹100-500 per transfer</p>
                  </div>
                  <div className="sm:w-1/3">
                    <p className="text-green-400">Less than ₹1</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-ShaadiVault-navy/50"></div>

                {/* Comparison Row 3 */}
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3 mb-2 sm:mb-0">
                    <p className="font-medium">Processing Speed</p>
                  </div>
                  <div className="sm:w-1/3 mb-2 sm:mb-0">
                    <p className="text-red-400">1-3 business days</p>
                  </div>
                  <div className="sm:w-1/3">
                    <p className="text-green-400">Under 1 second</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-ShaadiVault-navy/50"></div>

                {/* Comparison Row 4 */}
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3 mb-2 sm:mb-0">
                    <p className="font-medium">Average APY</p>
                  </div>
                  <div className="sm:w-1/3 mb-2 sm:mb-0">
                    <p className="text-red-400">4-6%</p>
                  </div>
                  <div className="sm:w-1/3">
                    <p className="text-green-400">8-12%</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-ShaadiVault-navy/50"></div>

                {/* Comparison Row 5 */}
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3 mb-2 sm:mb-0">
                    <p className="font-medium">Withdrawal Process</p>
                  </div>
                  <div className="sm:w-1/3 mb-2 sm:mb-0">
                    <p className="text-red-400">
                      Branch visit or slow online process
                    </p>
                  </div>
                  <div className="sm:w-1/3">
                    <p className="text-green-400">Instant, anytime access</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-ShaadiVault-navy/50"></div>

                {/* Comparison Row 6 */}
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3 mb-2 sm:mb-0">
                    <p className="font-medium">Transparency</p>
                  </div>
                  <div className="sm:w-1/3 mb-2 sm:mb-0">
                    <p className="text-red-400">Limited visibility</p>
                  </div>
                  <div className="sm:w-1/3">
                    <p className="text-green-400">Full on-chain visibility</p>
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

export default SolanaAdvantage;
