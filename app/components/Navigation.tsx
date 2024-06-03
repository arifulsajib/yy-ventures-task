"use client";

import Image from "next/image";
import Link from "next/link";
import rightArrow from "../../public/right-arrow.png";
import { useState } from "react";

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuItems = ["Home", "Product", "Pricing", "Contact"];
  return (
    <header className="mx-8 lg:mx-[195px]">
      <nav className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center my-7">
          {/* BrandName */}
          <div className="me-20">
            <Link href="/" className="flex gap-1 font-bold text-deepblue-color items-center text-2xl">
              <span>Brandname</span>
            </Link>
          </div>

          {/* Menu */}
          <div className={`flex-1 lg:flex justify-between items-center lg:flex-row lg:static hidden`}>
            {/* menu items */}
            <div className="flex gap-8 text-sm font-bold text-lightgrey-color">
              {menuItems.map((item) => (
                <Link href="#" key={item}>
                  {item}
                </Link>
              ))}
            </div>
            {/* Login and signup */}
            <div className="flex gap-8 items-center">
              <Link href="#" className="text-lightgreen-color font-bold text-sm">
                Login
              </Link>
              <Link href="#" className="flex items-center bg-lightgreen-color uppercase text-sm font-bold text-white py-2 px-3">
                <div className="me-2">Join Us</div>
                <Image src={rightArrow} alt="arrow" width={10} height={10} />
              </Link>
            </div>
          </div>

          {/* Hamburger */}
          <div className="lg:hidden">
            <button onClick={() => setToggleMenu(!toggleMenu)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed z-40 w-full  bg-light-color overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${!toggleMenu ? "h-0" : "h-full"}`}>
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider text-lightgrey-color text-sm">
              {menuItems.map((item) => (
                <Link href="#" key={item}>
                  {item}
                </Link>
              ))}
              <Link href="#" className="text-lightgreen-color font-bold text-sm">
                Login
              </Link>
              <div className="inline-flex items-center">
                <Link href="#" className="inline-flex w-auto items-center bg-lightgreen-color uppercase text-sm font-bold text-white py-2 px-3">
                  <div className="me-2">Join Us</div>
                  <Image src={rightArrow} alt="arrow" width={10} height={10} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
