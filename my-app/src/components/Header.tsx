"use client"

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
// import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import ThemeToggle from "./ThemeToggle";
import MobileNavigation from "./MobMenu";


// SVG components for better reusability and performance
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z" />
  </svg>
);

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z" />
  </svg>
);

const BlogIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M19.875 3H4.125C2.953 3 2 3.897 2 5v14c0 1.103.953 2 2.125 2h15.75C21.047 21 22 20.103 22 19V5c0-1.103-.953-2-2.125-2zm0 16H4.125c-.057 0-.096-.016-.113-.016-.007 0-.011.002-.012.008L3.988 5.046c.007-.01.052-.046.137-.046h15.75c.079.001.122.028.125.008l.012 13.946c-.007.01-.052.046-.137.046z" />
    <path d="M6 7h6v6H6zm7 8H6v2h12v-2h-4zm1-4h4v2h-4zm0-4h4v2h-4z" />
  </svg>
);

const ContactIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M20.563 3.34a1.002 1.002 0 0 0-.989-.079l-17 8a1 1 0 0 0 .026 1.821L8 15.445v6.722l5.836-4.168 4.764 2.084a1 1 0 0 0 1.399-.85l1-15a1.005 1.005 0 0 0-.436-.893zm-2.466 14.34-5.269-2.306L16 9.167l-7.649 4.25-2.932-1.283 13.471-6.34-.793 11.886z" />
  </svg>
)

// Navigation links data with component references instead of inline SVGs
export const navItems = [
  {
    url: "/about",
    icon: <UserIcon />,
    text: "Who am i?",
  },
  {
    url: "/projects",
    icon: <CodeIcon />,
    text: "Projects",
  },
  {
    url: "/skills",
    text: "Skills",
  },
  {
    url: "/education",
    text: "Education",
  },
  {
    url: "/blog",
    icon: <BlogIcon />,
    text: "Blog",
  },
  // {
  //   url: "/contact",
  //   icon: <ContactIcon />,
  //   text: "Contact",
  // },
];

// Type definitions for better TypeScript support
// interface NavLink {
//   url: string;
//   icon: React.ReactNode;
//   text: string;
// }

// interface HeaderProps {
//   navItems: { url: string; text: string }[];
// }


export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);


  // useEffect for handling scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Add a shadow to the header when the user scrolls down
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array means this runs once on mount


  return (
    <header
      className={clsx(
        "fixed top-0 h-16 w-full z-50 transition-all duration-400",
        "shadow-xl",
        isScrolled && "bg-white/5 backdrop-blur-md bg-gray-100/50 backdrop-blur-md"
      )}
    >
      <div className="container mx-auto px-6 max-w-6xl h-full flex justify-between items-center">
        <Link
          href="/"
          className="text-3xl theme-text hover_on"
        >
          Tahir
          <span className="text-green-700">.dev</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => {
              const isActive = pathname === item.url;

              return (
                <li key={item.url}>
                  <Link
                    href={item.url}
                    className={clsx(
                      "transition-colors",
                      isActive
                        ? "text-gray-500 font-bold"
                        : "theme-text"
                    )}
                  >
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-3">
            <MobileNavigation />

            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}