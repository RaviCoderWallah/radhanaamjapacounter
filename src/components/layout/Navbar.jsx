"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { PiFlowerLotusFill } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { IoLogOut } from "react-icons/io5";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { useAuth } from "@/hooks/useAuth";

const legalLinks = [
  { pathName: "About Us", pathSrc: "/about-us" },
  { pathName: "Contact Us", pathSrc: "/contact-us" },
  { pathName: "Privacy & Policy", pathSrc: "/privacy-policy" },
  { pathName: "Terms & Conditions", pathSrc: "/terms-and-conditions" },
  { pathName: "Disclaimer", pathSrc: "/disclaimer" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [isMobileLegalOpen, setIsMobileLegalOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const legalDropdownRef = useRef(null);

  const { signInWithGoogle, user, logout } = useAuth();

  const isLegalActive = legalLinks.some((l) => pathname === l.pathSrc);

  const navLinks = [
    { pathName: "Home", pathSrc: "/" },
    { pathName: "Statistics", pathSrc: "/statistics" },
    { pathName: "Leaderboard", pathSrc: "/leaderboard" },
    { pathName: "Mantra", pathSrc: "/mantra" },
  ];

  // Close menu on navigation
  useEffect(() => {
    setIsMenuOpen(false);
    setIsLegalOpen(false);
  }, [pathname]);

  // Close legal dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        legalDropdownRef.current &&
        !legalDropdownRef.current.contains(e.target)
      ) {
        setIsLegalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle Escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setIsLegalOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    if (isMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Focus trap implementation
  useEffect(() => {
    if (!isMenuOpen) return;
    const menuElement = menuRef.current;
    if (!menuElement) return;

    const focusableElements = menuElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTab = (e) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    const timer = setTimeout(() => {
      firstElement.focus();
    }, 100);

    menuElement.addEventListener("keydown", handleTab);
    return () => {
      clearTimeout(timer);
      menuElement.removeEventListener("keydown", handleTab);
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full px-4">
      <section className="max-w-4xl bg-gradient-to-r from-amber-50 via-gray-50 to-amber-50 outline-1 outline-amber-300 shadow-sm mx-auto my-2 rounded-md flex justify-between items-center px-4 py-2">
        {/* Logo / Home link */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1.5 focus:outline-2 focus:outline-offset-4 focus:outline-amber-600 rounded-sm"
            aria-label="Radhanaam Japa Counter - Go to Home"
          >
            <PiFlowerLotusFill
              aria-hidden="true"
              size={26}
              className="text-amber-700"
            />
            <span className="text-amber-900 font-bold text-base sm:text-lg tracking-wide">
              Radha Naam
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex gap-1 items-center"
          aria-label="Main navigation"
        >
          {navLinks.map(({ pathName, pathSrc }) => {
            const isActive = pathname === pathSrc;
            return (
              <Link
                href={pathSrc}
                key={pathSrc}
                className={`text-sm font-medium px-3 py-1.5 rounded-md transition-all ${
                  isActive
                    ? "bg-amber-100 text-amber-900 outline-1 outline-amber-300"
                    : "text-amber-800 hover:bg-amber-100/60 hover:text-amber-900"
                } focus:outline-2 focus:outline-offset-2 focus:outline-amber-500`}
                aria-current={isActive ? "page" : undefined}
              >
                {pathName}
              </Link>
            );
          })}

          {/* Legal Dropdown */}
          <div
            className="relative"
            ref={legalDropdownRef}
            onMouseEnter={() => setIsLegalOpen(true)}
            onMouseLeave={() => setIsLegalOpen(false)}
          >
            <button
              onClick={() => setIsLegalOpen((prev) => !prev)}
              aria-expanded={isLegalOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                isLegalActive
                  ? "bg-amber-100 text-amber-900 outline-1 outline-amber-300"
                  : "text-amber-800 hover:bg-amber-100/60 hover:text-amber-900"
              } focus:outline-2 focus:outline-offset-2 focus:outline-amber-500`}
            >
              Legal
              <FiChevronDown
                size={14}
                className={`transition-transform duration-200 ${isLegalOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>

            {/* Dropdown panel */}
            {isLegalOpen && (
              <div
                role="menu"
                aria-label="Legal pages"
                className="absolute top-full left-0 mt-1.5 w-52 bg-white rounded-xl shadow-lg border border-amber-200/60 py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
              >
                {legalLinks.map(({ pathName, pathSrc }) => {
                  const isActive = pathname === pathSrc;
                  return (
                    <Link
                      key={pathSrc}
                      href={pathSrc}
                      role="menuitem"
                      className={`flex items-center px-4 py-2 text-sm transition-colors ${
                        isActive
                          ? "bg-amber-50 text-amber-900 font-semibold"
                          : "text-amber-800 hover:bg-amber-50 hover:text-amber-900"
                      } focus:outline-none focus:bg-amber-50`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {pathName}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Actions (Sign In/Out + Hamburger) */}
        <div className="flex items-center gap-1 sm:gap-2">
          {!user ? (
            <button
              aria-label="Sign in with Google"
              onClick={signInWithGoogle}
              className="p-2 flex items-center gap-2 outline-1 rounded-md outline-amber-300 text-amber-900 font-semibold bg-amber-100 hover:bg-amber-100 transition-all cursor-pointer sm:text-sm text-xs focus:outline-2 focus:outline-offset-2 focus:outline-amber-500"
            >
              <FcGoogle className="sm:text-xl text-sm" /> Sign In
            </button>
          ) : (
            <button
              aria-label="Logout"
              onClick={logout}
              className="p-2 flex items-center gap-2 outline-1 rounded-md outline-red-300 text-amber-900 font-semibold bg-amber-100 hover:bg-amber-100 transition-all cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-amber-500 text-sm"
            >
              <IoLogOut className="text-xl" />
              Logout
            </button>
          )}

          {/* Hamburger button on mobile */}
          <button
            ref={hamburgerRef}
            onClick={() => setIsMenuOpen(true)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Open main menu"
            className="flex md:hidden p-2 text-amber-900 hover:bg-amber-100/60 active:bg-amber-100 rounded-md transition-all cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-amber-500"
          >
            <FiMenu size={22} aria-hidden="true" />
          </button>
        </div>
      </section>

      {/* Mobile Drawer Backdrop Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/45 backdrop-blur-xs transition-opacity duration-300 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Panel */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 z-50 h-full w-64 max-w-[80vw] bg-gradient-to-b from-amber-50 via-orange-50/50 to-amber-50/80 shadow-2xl p-6 transition-transform duration-300 ease-in-out transform md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center mb-8 border-b border-amber-900/10 pb-4">
          <span className="text-amber-900 font-bold text-lg">Menu</span>
          <button
            onClick={() => {
              setIsMenuOpen(false);
              hamburgerRef.current?.focus();
            }}
            aria-label="Close menu"
            className="p-1.5 text-amber-900 hover:bg-amber-100/60 rounded-md transition-all cursor-pointer focus:outline-2 focus:outline-amber-500"
          >
            <FiX size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
          {navLinks.map(({ pathName, pathSrc }) => {
            const isActive = pathname === pathSrc;
            return (
              <Link
                href={pathSrc}
                key={pathSrc}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-semibold px-4 py-2.5 rounded-lg transition-all ${
                  isActive
                    ? "bg-amber-100 text-amber-900 outline-1 outline-amber-300"
                    : "text-amber-800 hover:bg-amber-100/50 hover:text-amber-900"
                } focus:outline-2 focus:outline-amber-500`}
                aria-current={isActive ? "page" : undefined}
              >
                {pathName}
              </Link>
            );
          })}

          {/* Mobile Legal Section — Collapsible */}
          <div className="mt-1">
            <button
              onClick={() => setIsMobileLegalOpen((prev) => !prev)}
              aria-expanded={isMobileLegalOpen}
              className={`w-full flex items-center justify-between text-base font-semibold px-4 py-2.5 rounded-lg transition-all cursor-pointer ${
                isLegalActive
                  ? "bg-amber-100 text-amber-900 outline-1 outline-amber-300"
                  : "text-amber-800 hover:bg-amber-100/50 hover:text-amber-900"
              } focus:outline-2 focus:outline-amber-500`}
            >
              Legal
              <FiChevronDown
                size={16}
                className={`transition-transform duration-200 ${isMobileLegalOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>

            {/* Legal sub-links */}
            {isMobileLegalOpen && (
              <div className="mt-1 ml-3 flex flex-col gap-0.5 border-l-2 border-amber-200 pl-3">
                {legalLinks.map(({ pathName, pathSrc }) => {
                  const isActive = pathname === pathSrc;
                  return (
                    <Link
                      key={pathSrc}
                      href={pathSrc}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-sm font-medium px-3 py-2 rounded-lg transition-all ${
                        isActive
                          ? "bg-amber-100 text-amber-900 font-semibold"
                          : "text-amber-700 hover:bg-amber-100/50 hover:text-amber-900"
                      } focus:outline-2 focus:outline-amber-500`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {pathName}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
