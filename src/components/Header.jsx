// app/components/Header.jsx (Server Component)

import Link from "next/link";
import MobileSidebar from "./MobileSidebar"; // import client sidebar

export default function Header() {
  const links = [
    { label: "Home",    href: "/" },
    { label: "About",   href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Recipes", href: "/recipes" },
  ];

  return (
    <header className="bg-white  shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="text-2xl font-bold text-green-600">
          RecipeBook
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-medium text-gray-700 hover:text-green-600 transition"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Sidebar */}
        <MobileSidebar />
      </nav>
    </header>
  );
}
