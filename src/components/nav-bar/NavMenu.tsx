"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import BurgerToggle from "./BurgerToggle";
import Button from "../Button";
import { Search, ChevronDown } from "lucide-react";

const NavMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState("All");

  const menuRef = useRef<HTMLDivElement>(null);

  // Hide nav on scroll down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShowNav(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  // Nav links
  const menuLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Models", href: "/models" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  // Dropdown items (dynamic)
  const dropdownItems = [
    { label: "All", value: "all" },
    { label: "Cars", value: "cars" },
    { label: "Models", value: "models" },
    { label: "Blog", value: "blog" },
  ];

  const handleSelect = (item: { label: string; value: string }) => {
    setSelected(item.label);
    setDropdownOpen(false);
    console.log("Selected:", item.value); // you can handle filter/search here
  };

  return (
    <>
      {/* Top Nav (Logo + Burger) */}
      <div
        className={`fixed top-0 z-50 w-full transform transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        } ${
          lastScrollY > 50
            ? "backdrop-blur-2xl shadow-md bg-transparent"
            : "bg-transparent"
        }`}
      >
        <div className="pl-10 px-12 md:pl-14 lg:pl-20  md:px-14 lg:px-20 py-8 flex justify-between items-center relative">
                {/* Logo */}
                <Link href="/" className="text-2xl md:text-3xl text-white">
                 Rydex
                </Link>

          <div className="flex items-center gap-4" ref={menuRef}>
            {/* Dropdown + Search */}
            <div className="hidden md:flex items-center gap-3">
              {/* Dropdown */}
              <div className="relative hidden sm:block">
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-2 px-3 py-2 rounded-md border border-white/25 bg-white/5 text-white text-sm backdrop-blur-md hover:bg-white/10 transition"
                >
                  {selected}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <ul className="absolute mt-2 w-40 rounded-md bg-white/10 backdrop-blur-md border border-white/20 shadow-lg z-50">
                    {dropdownItems.map((item) => (
                      <li
                        key={item.value}
                        onClick={() => handleSelect(item)}
                        className="px-4 py-2 text-sm text-white hover:bg-white/20 cursor-pointer"
                      >
                        {item.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Search Bar */}
              <div className="relative hidden sm:block">
                <input
                  type="text"
                  placeholder="Search..."
                  className="rounded-md px-4 py-2 text-sm border border-white/25 bg-white/5 text-white placeholder-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white" />
              </div>
            </div>

            {/* Burger Menu */}
            <div className="relative">
              <BurgerToggle isOpen={mobileMenuOpen} toggle={toggleMobileMenu} />

              {/* Dropdown Menu */}
                <AnimatePresence>
                  {mobileMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="fixed top-20 right-11 md:right-6 w-64 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 p-4 space-y-4 z-[60]"
                    >
                      <ul className="space-y-3">
                        {menuLinks.map((link, index) => (
                          <li key={index} className="overflow-hidden">
                            <Link
                              href={link.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="group relative block text-lg font-medium text-white"
                            >
                              {/* Normal text */}
                              <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                                {link.name}
                              </span>

                              {/* Hover text (clone underneath) */}
                              <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:-translate-y-full">
                                {link.name}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <Button text="Book Now" variant="primary" href="/" />
                    </motion.div>
                  )}
                </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
  
    </>
  );
};

export default NavMenu;
