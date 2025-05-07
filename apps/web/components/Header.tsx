import React, { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Motion, Globe, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState<"en" | "hi">("en");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  const translations = {
    en: {
      home: "Home",
      features: "Features",
      whySolana: "Why Solana",
      about: "About",
      connectWallet: "Connect Wallet",
      solutions: "Solutions",
      forIndividuals: "For Individuals",
      forBusinesses: "For Businesses",
      resources: "Resources",
      documentation: "Documentation",
      tutorials: "Tutorials",
      blog: "Blog",
      new: "NEW",
    },
    hi: {
      home: "होम",
      features: "सुविधाएँ",
      whySolana: "सोलाना क्यों",
      about: "परिचय",
      connectWallet: "वॉलेट कनेक्ट करें",
      solutions: "समाधान",
      forIndividuals: "व्यक्तियों के लिए",
      forBusinesses: "व्यापारों के लिए",
      resources: "संसाधन",
      documentation: "दस्तावेज़ीकरण",
      tutorials: "ट्यूटोरियल",
      blog: "ब्लॉग",
      new: "नया",
    },
  };

  const t = translations[language];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 lg:py-4 px-4 lg:px-10",
        isScrolled ? "bg-black/85 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-400 to-purple-600 flex items-center justify-center mr-3 shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300">
              {/* <Motion className="text-white w-5 h-5" /> */}
            </div>
            <div>
              <span className="font-bold text-xl text-white">WedLock</span>
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-600">
                {" "}
                Wealth
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#"
                    className={navigationMenuTriggerStyle()}
                  >
                    {t.home}
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    {t.features}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                      <li className="col-span-2">
                        <NavigationMenuLink asChild>
                          <a
                            href="#features"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-800/50 to-purple-900/50 p-6 no-underline outline-none focus:shadow-md"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              {t.whySolana}
                            </div>
                            <p className="text-sm leading-tight text-white/70">
                              {language === "en"
                                ? "Leverage the power of Solana blockchain for secure and seamless financial management."
                                : "सुरक्षित और सहज वित्तीय प्रबंधन के लिए सोलाना ब्लॉकचेन की शक्ति का लाभ उठाएं।"}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-900/10 focus:bg-purple-900/10 group"
                            href="#features"
                          >
                            <div className="text-sm font-medium leading-none text-white group-hover:text-purple-400">
                              {t.forIndividuals}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-white/70 group-hover:text-white/90">
                              {language === "en"
                                ? "Personal finance solutions with blockchain security."
                                : "ब्लॉकचेन सुरक्षा के साथ व्यक्तिगत वित्त समाधान।"}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-900/10 focus:bg-purple-900/10 group"
                            href="#features"
                          >
                            <div className="text-sm font-medium leading-none text-white group-hover:text-purple-400">
                              {t.forBusinesses}
                              <Badge className="ml-2 bg-gradient-to-r from-teal-400 to-purple-600 text-xs">
                                {t.new}
                              </Badge>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-white/70 group-hover:text-white/90">
                              {language === "en"
                                ? "Enterprise solutions for modern businesses."
                                : "आधुनिक व्यवसायों के लिए एंटरप्राइज़ समाधान।"}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    {t.resources}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-900/10 focus:bg-purple-900/10"
                            href="#resources"
                          >
                            <div className="text-sm font-medium text-white">
                              {t.documentation}
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-900/10 focus:bg-purple-900/10"
                            href="#tutorials"
                          >
                            <div className="text-sm font-medium text-white">
                              {t.tutorials}
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-900/10 focus:bg-purple-900/10"
                            href="#blog"
                          >
                            <div className="text-sm font-medium text-white">
                              {t.blog}
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#about"
                    className={navigationMenuTriggerStyle()}
                  >
                    {t.about}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side Actions - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1 text-white/80 hover:text-white"
                >
                  <Globe className="h-4 w-4" />
                  <span>{language === "en" ? "EN" : "हिं"}</span>
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32">
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                  <span className={language === "en" ? "font-bold" : ""}>
                    English
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("hi")}>
                  <span className={language === "hi" ? "font-bold" : ""}>
                    हिंदी
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className="bg-gradient-to-r from-teal-400 to-purple-600 hover:opacity-90 transition-opacity">
              {t.connectWallet}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost">
                  <Menu className="h-5 w-5 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-black/95 border-l border-purple-600/20 backdrop-blur-xl"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-400 to-purple-600 flex items-center justify-center">
                      {/* <Motion className="text-white w-4 h-4" /> */}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleLanguage}
                      className="text-white"
                    >
                      {language === "en" ? "हिंदी" : "ENG"}
                    </Button>
                  </div>

                  <nav className="space-y-6">
                    <SheetClose asChild>
                      <a
                        href="#"
                        className="block text-lg font-medium text-white hover:text-purple-400 transition-colors"
                      >
                        {t.home}
                      </a>
                    </SheetClose>

                    <div className="space-y-3">
                      <div className="text-lg font-medium text-white">
                        {t.features}
                      </div>
                      <div className="pl-4 space-y-3 border-l border-purple-600/30">
                        <SheetClose asChild>
                          <a
                            href="#features"
                            className="block text-sm text-white/70 hover:text-purple-400 transition-colors"
                          >
                            {t.forIndividuals}
                          </a>
                        </SheetClose>
                        <SheetClose asChild>
                          <a
                            href="#features"
                            className="block text-sm text-white/70 hover:text-purple-400 transition-colors"
                          >
                            {t.forBusinesses}
                            <Badge className="ml-2 bg-gradient-to-r from-teal-400 to-purple-600 text-xs">
                              {t.new}
                            </Badge>
                          </a>
                        </SheetClose>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="text-lg font-medium text-white">
                        {t.resources}
                      </div>
                      <div className="pl-4 space-y-3 border-l border-purple-600/30">
                        <SheetClose asChild>
                          <a
                            href="#resources"
                            className="block text-sm text-white/70 hover:text-purple-400 transition-colors"
                          >
                            {t.documentation}
                          </a>
                        </SheetClose>
                        <SheetClose asChild>
                          <a
                            href="#tutorials"
                            className="block text-sm text-white/70 hover:text-purple-400 transition-colors"
                          >
                            {t.tutorials}
                          </a>
                        </SheetClose>
                        <SheetClose asChild>
                          <a
                            href="#blog"
                            className="block text-sm text-white/70 hover:text-purple-400 transition-colors"
                          >
                            {t.blog}
                          </a>
                        </SheetClose>
                      </div>
                    </div>

                    <SheetClose asChild>
                      <a
                        href="#about"
                        className="block text-lg font-medium text-white hover:text-purple-400 transition-colors"
                      >
                        {t.about}
                      </a>
                    </SheetClose>
                  </nav>

                  <div className="mt-auto pt-6">
                    <SheetClose asChild>
                      <Button className="w-full bg-gradient-to-r from-teal-400 to-purple-600 hover:opacity-90 transition-opacity">
                        {t.connectWallet}
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
