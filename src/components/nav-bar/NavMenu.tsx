"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import OverviewDropdown from "./OverviewDropdown";
import LanguageDropdown from "./LanguageDropdown";

const overviewItems = [
  { label: "Car Models", img: "/images/car1.jpg" },
  { label: "Luxury Packages", img: "/images/car2.jpg" },
  { label: "Rental Offers", img: "/images/car3.jpg" },
];

const languages = ["EN", "FR", "DE"];

const NavMenu = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navRef = useRef<HTMLDivElement>(null);

  // Hide/show nav on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setShowNav(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      ref={navRef}
      className={`fixed top-0 z-50 w-full transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } ${
        lastScrollY > 50
          ? "backdrop-blur-2xl shadow-md bg-black/30"
          : "bg-transparent"
      }`}
    >
      <div className=" px-4 md:px-2 py-6 flex items-center justify-between">

      <OverviewDropdown />

        {/* CENTER: Logo */}
        <Link href="/" className="text-2xl md:text-3xl text-white font-bold">
          Rydex
        </Link>

        <LanguageDropdown />
      </div>
    </div>
  );
};

export default NavMenu;
