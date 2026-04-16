"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SunIcon, MoonIcon, XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

import useDarkMode from "@/app/hooks/useDarkMode";

const links = [
  { name: "Intro", href: "/" },
  {
    name: "Blogs",
    href: "/blogs",
  },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathName = usePathname();
  const { theme, toggleTheme } = useDarkMode();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function handleMobileToggleClick() {
    setShowMobileMenu((prev) => !prev);
  }

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between py-6 lg:py-10">
        <Link href="/" className="flex items-center">
          <span className="mr-2">
            <Image src="/logo.svg" width={60} height={60} alt="logo" />
          </span>
          <p className="hidden font-body text-2xl font-bold text-primary dark:text-white lg:block">
            John Dsse
          </p>
        </Link>
        <div
          className="flex items-center cursor-pointer lg:hidden"
          onClick={handleMobileToggleClick}
        >
          <i className="bx mr-8 cursor-pointer text-3xl text-primary dark:text-white"></i>

          <svg
            width="24"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-primary dark:text-white"
          >
            <g fillRule="evenodd">
              <rect width="24" height="3" rx="1.5" />
              <rect x="8" y="6" width="16" height="3" rx="1.5" />
              <rect x="4" y="12" width="20" height="3" rx="1.5" />
            </g>
          </svg>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center">
            {links.map((link) => {
              return (
                <li className="group relative mr-6 mb-1" key={link.name}>
                  <div
                    className={clsx(
                      "absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow",
                      {
                        "h-2 bg-yellow": pathName === link.href,
                      }
                    )}
                  ></div>

                  <Link
                    href={link.href}
                    className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}

            <li>
              <i
                className="bx cursor-pointer text-3xl text-primary dark:text-white"
                onClick={toggleTheme}
              >
                {theme === "dark" ? (
                  <SunIcon className="l-1 h-8 w-8 text-yellow-dark " />
                ) : (
                  <MoonIcon className="l-1 h-8 w-8 text-yellow-dark " />
                )}
              </i>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        <div
          className={clsx(
            "pointer-events-none fixed inset-0 z-50 flex bg-black bg-opacity-80 opacity-0 transition-opacity lg:hidde",
            {
              "opacity-100 pointer-events-auto": showMobileMenu === true,
            }
          )}
        >
          <div className="ml-auto w-2/3 bg-green p-4 md:w-1/3">
            <XMarkIcon
              onClick={handleMobileToggleClick}
              className="cursor-pointer w-10 h-10 bx bx-x absolute top-0 right-0 mt-4 mr-4 text-4xl text-white"
            />

            <ul className="mt-8 flex flex-col">
              {links.map((link) => {
                return (
                  <li className="" key={link.name} onClick={handleMobileToggleClick}>
                    <Link
                      href={link.href}
                      className={clsx(
                        "mb-3 block px-2 font-body text-lg font-medium text-white",
                        {
                          "text-yellow font-semibold": pathName === link.href,
                        }
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
