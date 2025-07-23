'use client';

import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';

const links = [
  { label: 'Home',    href: '/' },
  { label: 'About',   href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Recipes', href: '/recipes' },
];

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger icon (now at the left edge) */}
      <button
        className="text-3xl text-gray-700 mr-auto"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <HiMenu />
      </button>

      {/* Dark overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-[45]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Side drawer — anchored left */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50
                    transform transition-transform duration-300
                    ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-bold text-green-600">Menu</span>
          <button onClick={() => setOpen(false)} aria-label="Close menu">
            <HiX className="text-2xl text-gray-700" />
          </button>
        </div>

        <ul className="p-4 space-y-4">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="block font-medium text-gray-700 hover:text-green-600"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
