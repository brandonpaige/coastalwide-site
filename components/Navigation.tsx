"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services", hasDropdown: true },
    { href: "/resources", label: "Resources" },
    { href: "/podcast", label: "Podcast" },
    { href: "/contact", label: "Contact" },
  ];

  const serviceDropdownItems = [
    { href: "/services/crs", label: "CRS" },
    { href: "/services/floodplain-management", label: "Floodplain Management" },
    { href: "/services/education", label: "Education" },
  ];

  // Ref to track the dropdown container
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle hover with delay
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null; // Initialize with null
    if (servicesOpen) {
      timer = setTimeout(() => {
        // Empty callback — just for delay
      }, 100); // 100ms delay to prevent flicker
    } else if (timer) {
      clearTimeout(timer); // Only clear if timer is set
    }
    return () => {
      if (timer) clearTimeout(timer); // Cleanup on unmount or dependency change
    };
  }, [servicesOpen]); // Dependency on servicesOpen

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/CW_Logo_Original_PlusWhiteBG.svg"
              alt="CoastalWide LLC"
              width={200}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  ref={dropdownRef} // Attach ref to the parent
                >
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-gray-700 hover:text-[hsl(var(--ocean-blue))] font-medium transition-colors rounded-md hover:bg-[hsl(var(--ocean-light))] duration-200 flex items-center gap-1"
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </Link>
                  {servicesOpen && (
                    <div
                      className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md border border-gray-100 py-2 min-w-[200px]"
                      onMouseEnter={() => setServicesOpen(true)} // Keep open when over dropdown
                      onMouseLeave={() => setServicesOpen(false)} // Close when leaving dropdown
                    >
                      {serviceDropdownItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-gray-700 hover:text-[hsl(var(--ocean-blue))] hover:bg-[hsl(var(--ocean-light))] transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-gray-700 hover:text-[hsl(var(--ocean-blue))] font-medium transition-colors rounded-md hover:bg-[hsl(var(--ocean-light))] duration-200"
                >
                  {link.href === "/podcast" ? (
                    <Image
                      src="/FFMM_Logo1.svg"
                      alt="Flood Facts Myth Monsters Podcast"
                      width={120}
                      height={30}
                      className="h-8 w-auto"
                    />
                  ) : (
                    link.label
                  )}
                </Link>
              )
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.href}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-[hsl(var(--ocean-blue))] font-medium hover:bg-[hsl(var(--ocean-light))] rounded-md transition-colors"
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 mt-2 space-y-1">
                      {serviceDropdownItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-gray-600 hover:text-[hsl(var(--ocean-blue))] hover:bg-[hsl(var(--ocean-light))] rounded-md transition-colors"
                          onClick={() => {
                            setIsOpen(false);
                            setServicesOpen(false);
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-gray-700 hover:text-[hsl(var(--ocean-blue))] font-medium hover:bg-[hsl(var(--ocean-light))] rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}