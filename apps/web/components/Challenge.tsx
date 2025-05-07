import React from "react";

const Challenge = () => {
  return (
    <section
      id="challenge"
      className="section bg-wedlock-black relative overflow-hidden"
    >
      {/* Subtle background patterns */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-gradient-to-b from-wedlock-navy to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 opacity-0 animate-fade-in">
            <h2 className="mb-6">
              Why Saving for{" "}
              <span className="gradient-text">Weddings Is Tough</span>
            </h2>
            <p className="text-wedlock-gray max-w-2xl mx-auto">
              Indian weddings are celebrations of culture and tradition, but
              they also come with significant financial challenges. Traditional
              savings methods often fall short in keeping pace with rising costs
              and inflation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="feature-card opacity-0 animate-fade-in-delay-1">
              <div className="mb-6 h-14 w-14 rounded-full bg-gradient-to-br from-wedlock-purple/20 to-wedlock-purple/10 flex items-center justify-center">
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">High Costs</h3>
              <p className="mb-6">
                The average Indian wedding costs between ₹15-50 lakh, consuming
                20-50% of a family's annual household income.
              </p>
              <div className="bg-wedlock-navy/30 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-wedlock-gray">
                    Average Wedding Cost
                  </span>
                  <span className="text-wedlock-teal font-semibold">
                    ₹25 Lakh
                  </span>
                </div>
                <div className="w-full bg-wedlock-navy/50 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-wedlock-teal to-wedlock-purple h-2 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-wedlock-gray">
                    Annual Income
                  </span>
                  <span className="text-xs text-wedlock-gray">
                    Wedding Cost
                  </span>
                </div>
              </div>
            </div>

            <div className="feature-card opacity-0 animate-fade-in-delay-2">
              <div className="mb-6 h-14 w-14 rounded-full bg-gradient-to-br from-wedlock-teal/20 to-wedlock-teal/10 flex items-center justify-center">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">
                Traditional Savings Limitations
              </h3>
              <p className="mb-6">
                Traditional banking and fixed deposits offer low returns of 4-6%
                APY, which often fail to beat inflation rates of 6-7%.
              </p>
              <div className="bg-wedlock-navy/30 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-wedlock-gray">
                    Traditional Returns
                  </span>
                  <span className="text-red-400 font-semibold">4-6% APY</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-wedlock-gray">
                    Inflation Rate
                  </span>
                  <span className="text-orange-400 font-semibold">6-7%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-wedlock-gray">
                    WedLock Yield
                  </span>
                  <span className="text-green-400 font-semibold">
                    8-12% APY
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gradient-to-br from-wedlock-navy to-wedlock-black rounded-xl border border-wedlock-purple/10 card-shadow opacity-0 animate-fade-in-delay-3">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-6 h-16 w-16 rounded-full bg-wedlock-purple/20 flex items-center justify-center flex-shrink-0">
                <svg
                  className="h-8 w-8 text-wedlock-purple"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  The Challenge Is Real
                </h3>
                <p>
                  Weddings cost{" "}
                  <span className="text-wedlock-white">
                    20-50% of annual household income
                  </span>
                  , forcing families to compromise on dreams or take on debt.
                  Traditional savings methods fail to keep pace with rising
                  costs, leaving families financially strained during what
                  should be a joyful time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
