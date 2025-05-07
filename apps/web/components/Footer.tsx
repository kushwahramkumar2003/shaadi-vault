import React from "react";
import { Twitter, Github, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-wedlock-black relative overflow-hidden">
      {/* Top border gradient */}
      <div className="h-px bg-gradient-to-r from-wedlock-teal via-wedlock-purple to-wedlock-teal"></div>

      {/* Subtle background patterns */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-wedlock-teal to-wedlock-purple flex items-center justify-center mr-3">
                <span className="font-bold text-white text-lg">W</span>
              </div>
              <div>
                <span className="font-bold text-xl text-white">WedLock</span>
                <span className="font-bold text-xl gradient-text"> Wealth</span>
              </div>
            </a>

            <p className="text-wedlock-gray text-sm mb-6">
              Secure, high-yield savings for Indian families, powered by
              Solana's DeFi technology.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-wedlock-gray hover:text-wedlock-teal transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-wedlock-gray hover:text-wedlock-teal transition-colors"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="#"
                className="text-wedlock-gray hover:text-wedlock-teal transition-colors"
              >
                <MessageCircle size={20} />
                <span className="sr-only">Discord</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-wedlock-gray hover:text-wedlock-white transition-colors text-sm"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-wedlock-gray hover:text-wedlock-white transition-colors text-sm"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-wedlock-gray hover:text-wedlock-white transition-colors text-sm"
                >
                  Roadmap
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-wedlock-gray hover:text-wedlock-white transition-colors text-sm"
                >
                  Fees
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-wedlock-gray hover:text-wedlock-white transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-wedlock-gray hover:text-wedlock-white transition-colors text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-wedlock-gray hover:text-wedlock-white transition-colors text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-wedlock-gray hover:text-wedlock-white transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-wedlock-gray hover:text-wedlock-white transition-colors text-sm"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-wedlock-gray hover:text-wedlock-white transition-colors text-sm"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-wedlock-gray hover:text-wedlock-white transition-colors text-sm"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-wedlock-gray hover:text-wedlock-white transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-wedlock-navy/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-wedlock-gray text-sm">
                © 2025 Shaadi Vault. All rights reserved.
              </p>
            </div>

            <div className="flex items-center">
              <span className="text-wedlock-gray text-sm mr-2">Powered by</span>
              <svg
                width="90"
                height="18"
                viewBox="0 0 100 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0002 16.0002L18.2 11.8002C18.9 11.1002 18.9 9.9002 18.2 9.2002L14.0002 5.0002"
                  stroke="url(#solana-gradient)"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.0002 19.0002L32.2002 8.8002C32.9002 8.1002 32.9002 6.9002 32.2002 6.2002L22.0002 -3.8147e-05"
                  stroke="url(#solana-gradient)"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35.0002 19.0002L45.2002 8.8002C45.9002 8.1002 45.9002 6.9002 45.2002 6.2002L35.0002 -3.8147e-05"
                  stroke="url(#solana-gradient)"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M52.884 4.68H56.292L60.972 14.94H57.348L56.616 13.116H52.452L51.708 14.94H48.204L52.884 4.68ZM55.86 10.836L54.552 7.632L53.196 10.836H55.86Z"
                  fill="url(#solana-text)"
                />
                <path
                  d="M69.4113 12.216L70.7193 14.004C69.6273 14.748 68.1993 15.18 66.6993 15.18C63.4113 15.18 60.9993 13.068 60.9993 9.84C60.9993 6.636 63.4113 4.488 66.5793 4.488C67.9673 4.488 69.1793 4.86 70.2113 5.604L68.9993 7.464C68.3193 7.008 67.5353 6.78 66.6753 6.78C64.9673 6.78 63.7673 8.028 63.7673 9.84C63.7673 11.652 64.9913 12.888 66.8353 12.888C67.9073 12.888 68.7953 12.66 69.4113 12.216Z"
                  fill="url(#solana-text)"
                />
                <path
                  d="M81.3775 14.94H78.8255V10.908H75.3055V14.94H72.7535V4.68H75.3055V8.64H78.8255V4.68H81.3775V14.94Z"
                  fill="url(#solana-text)"
                />
                <path
                  d="M90.9743 14.94H83.5983V4.68H90.8783V6.924H86.1503V8.604H90.4583V10.848H86.1503V12.696H90.9743V14.94Z"
                  fill="url(#solana-text)"
                />
                <path
                  d="M100 4.68V14.94H97.82L93.596 9.288V14.94H91.044V4.68H93.224L97.448 10.332V4.68H100Z"
                  fill="url(#solana-text)"
                />
                <defs>
                  <linearGradient
                    id="solana-gradient"
                    x1="14"
                    y1="10"
                    x2="45.2002"
                    y2="10"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00C4B4" />
                    <stop offset="1" stopColor="#6B5BFF" />
                  </linearGradient>
                  <linearGradient
                    id="solana-text"
                    x1="48.204"
                    y1="9.83403"
                    x2="100"
                    y2="9.83403"
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
      </div>
    </footer>
  );
};

export default Footer;
