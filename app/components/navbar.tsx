"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useScroll } from "framer-motion";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Innovation", href: "/innovation" },
  { name: "Health", href: "/health" },
  { name: "Animals", href: "/animals" },
  { name: "Agriculture", href: "/agriculture" },
  { name: "Contact", href: "/contact" },
];

interface NavBarProps {
  dark: boolean;
}

export default function NavBar(props: NavBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 z-50 w-full ${props.dark ? "dark" : ""}`}>
      <nav
        className="flex items-center justify-between border-stone-300 p-6 text-stone-100 transition-all dark:border-b dark:border-solid dark:bg-slate-100 dark:bg-opacity-70 dark:text-stone-800 dark:backdrop-blur-md lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Ik-Holcán</span>
            <img
              className="h-8 w-auto invert transition-all hover:scale-110 dark:invert-0"
              src="assets/images/iso.svg"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu principal</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="mr-4 text-sm font-semibold leading-6">
            <img
              src="assets/images/facebook.svg"
              alt=""
              className="w-8 opacity-70 invert transition-all hover:opacity-100 dark:invert-0"
            />
          </a>
          <a href="#" className="text-sm font-semibold leading-6">
            <img
              src="assets/images/instagram.svg"
              alt=""
              className="w-8 opacity-70 invert transition-all hover:opacity-100 dark:invert-0"
            />
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-100 px-6 py-6 text-stone-800 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Productos y servicios</span>
              <img
                className="h-8 w-auto invert"
                src="assets/images/air.svg"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-50"
                >
                  <div className="flex">
                    <a
                      href="#"
                      className="mr-4 text-sm font-semibold leading-6"
                    >
                      <img
                        src="assets/images/facebook.svg"
                        alt=""
                        className="w-8 opacity-70 transition-all hover:opacity-100"
                      />
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6">
                      <img
                        src="assets/images/instagram.svg"
                        alt=""
                        className="w-8 opacity-70 transition-all hover:opacity-100"
                      />
                    </a>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
