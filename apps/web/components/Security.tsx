import React from "react";
import { Shield, Lock, Eye } from "lucide-react";

const Security = () => {
  const securityFeatures = [
    {
      icon: <Shield className="h-6 w-6 text-wedlock-teal" />,
      title: "Audited Smart Contracts",
      description:
        "Our code is thoroughly audited by leading blockchain security firms to ensure maximum protection of your funds.",
    },
    {
      icon: <Lock className="h-6 w-6 text-wedlock-purple" />,
      title: "Optional Insurance",
      description:
        "Add an extra layer of protection with our optional DeFi insurance coverage for your deposits.",
    },
    {
      icon: <Eye className="h-6 w-6 text-wedlock-teal" />,
      title: "Transparent Yield Strategies",
      description:
        "We openly share which DeFi protocols your funds utilize, with full on-chain verification.",
    },
  ];

  return (
    <section
      id="security"
      className="section bg-wedlock-black relative overflow-hidden"
    >
      {/* Subtle background patterns */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-wedlock-navy/20 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="mb-6">
            Your Savings, <span className="gradient-text">Secured</span>
          </h2>
          <p>
            Security is our highest priority at Shaadi Vault. We implement
            multiple layers of protection to ensure your wedding fund grows
            safely and remains accessible when you need it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className={`feature-card opacity-0 animate-fade-in-delay-${index + 1}`}
            >
              <div className="mb-6 h-14 w-14 rounded-full bg-wedlock-navy/50 flex items-center justify-center">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-wedlock-navy to-wedlock-black rounded-2xl p-6 sm:p-10 border border-wedlock-purple/10 card-shadow relative overflow-hidden opacity-0 animate-fade-in-delay-3">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 mandala-pattern opacity-5"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-wedlock-purple/10 blur-3xl"></div>

          <div className="flex flex-col md:flex-row items-center relative z-10">
            <div className="md:w-2/5 mb-8 md:mb-0">
              <div className="bg-wedlock-navy p-6 rounded-xl border border-wedlock-purple/10">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-wedlock-navy to-wedlock-black p-1 shadow-lg">
                    <div className="w-full h-full rounded-full bg-wedlock-black flex items-center justify-center overflow-hidden">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="url(#shield-gradient)"
                          strokeWidth="2"
                        />
                        <path
                          d="M12 6L12.5303 6.53033C11.5979 7.46268 11.5979 9.03733 12.5303 9.96967L12 10.5L11.4697 9.96967C12.4021 9.03733 12.4021 7.46268 11.4697 6.53033L12 6Z"
                          fill="url(#shield-gradient)"
                        />
                        <path
                          d="M16 10L16.5303 10.5303C15.5979 11.4627 15.5979 13.0373 16.5303 13.9697L16 14.5L15.4697 13.9697C16.4021 13.0373 16.4021 11.4627 15.4697 10.5303L16 10Z"
                          fill="url(#shield-gradient)"
                        />
                        <path
                          d="M8 10L8.53033 10.5303C7.59799 11.4627 7.59799 13.0373 8.53033 13.9697L8 14.5L7.46967 13.9697C8.40201 13.0373 8.40201 11.4627 7.46967 10.5303L8 10Z"
                          fill="url(#shield-gradient)"
                        />
                        <path
                          d="M12 14L12.5303 14.5303C11.5979 15.4627 11.5979 17.0373 12.5303 17.9697L12 18.5L11.4697 17.9697C12.4021 17.0373 12.4021 15.4627 11.4697 14.5303L12 14Z"
                          fill="url(#shield-gradient)"
                        />
                        <defs>
                          <linearGradient
                            id="shield-gradient"
                            x1="2"
                            y1="12"
                            x2="22"
                            y2="12"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#00C4B4" />
                            <stop offset="1" stopColor="#6B5BFF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-center">
                  Security Rating
                </h3>
                <div className="flex justify-center mb-4">
                  <div className="flex">
                    <span className="text-wedlock-teal">★</span>
                    <span className="text-wedlock-teal">★</span>
                    <span className="text-wedlock-teal">★</span>
                    <span className="text-wedlock-teal">★</span>
                    <span className="text-wedlock-teal">★</span>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm text-wedlock-gray">Verified by</p>
                  <p className="font-medium">CertiK & Hacken</p>
                </div>
              </div>
            </div>

            <div className="md:w-3/5 md:pl-10">
              <h3 className="text-2xl font-semibold mb-6">
                Our Security Commitment
              </h3>

              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-4 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="h-3 w-3 text-green-500"
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
                  <div>
                    <p className="font-medium text-wedlock-white">
                      Multi-signature wallets
                    </p>
                    <p className="text-sm text-wedlock-gray">
                      Multiple authorization keys required for any fund
                      movements
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <div className="mr-4 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="h-3 w-3 text-green-500"
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
                  <div>
                    <p className="font-medium text-wedlock-white">
                      Timelock mechanisms
                    </p>
                    <p className="text-sm text-wedlock-gray">
                      Protocol changes require a 48-hour waiting period
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <div className="mr-4 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="h-3 w-3 text-green-500"
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
                  <div>
                    <p className="font-medium text-wedlock-white">
                      Regular security audits
                    </p>
                    <p className="text-sm text-wedlock-gray">
                      Continuous testing and independent verification of code
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <div className="mr-4 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="h-3 w-3 text-green-500"
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
                  <div>
                    <p className="font-medium text-wedlock-white">
                      Bug bounty program
                    </p>
                    <p className="text-sm text-wedlock-gray">
                      Rewards up to $250,000 for identifying security issues
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
