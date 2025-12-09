import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import img from "../assets/img/Logo.png";

const navigation = [
  { name: "home", href: "home", current: true },
  { name: "about", href: "about", current: false },
  { name: "blogs", href: "blogs", current: false },
  { name: "log in", href: "login", current: false },
];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Navbar() {
  const [background, setBackground] = useState(false);
  const [opacity, setOpacity] = useState(0);
  function handleBackground() {
    setBackground(background ? false : true);
  }

  const navButtons = navigation.map((element, index) => {
    return (
      <a
        key={index}
        className={`capitalize fs-3 md:px-5 py-2 py-sm-3 ${
          index === 0
            ? "text-green-400 hover:text-green-400"
            : index === 3
            ? "bg-white hover:text-black text-black font-bold rounded-3xl"
            : "text-white hover:text-gray-300"
        }`}
        href={element.href}
      >
        {element.name}
      </a>
    );
  });

  const dropdownButtons = navigation.map((element, index) => {
    return (
      <a
        key={index}
        className={`block ms-4 capitalize hover:text-gray-300 fs-3 py-2 py-sm-3 ${
          index === 0
            ? "text-emerald-300 hover:text-emerald-300"
            : index === 3
            ? "bg-white hover:text-black text-black font-bold rounded-3xl w-fit px-5"
            : "text-white"
        }`}
        href={element.href}
      >
        {element.name}
      </a>
    );
  });

  useEffect(() => {
    function calculate() {
      if (window.scrollY <= 120) {
        const newOpacity = window.scrollY / 120;
        setOpacity(newOpacity);
      } else {
        const newOpacity = 1;
        setOpacity(newOpacity);
      }
      console.log(opacity);
    }
    window.addEventListener("scroll", calculate);
    return () => window.removeEventListener("scroll", calculate);
  }, []);

  return (
    <Disclosure
      as="nav"
      className=" fixed top-0 left-0 w-full transition-all duration-300 z-50"
      // style={{ backgroundColor: background ? "rgb(10,38,64)" : "transparent" }}
      style={{
        backgroundColor: `rgba(10,38,64,${opacity})`,
      }}
    >
      <div className="mx-auto py-7 max-w-7xl px-8 z-10">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-between opacity-100">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src={img}

                className="h-auto w-40 cursor-pointer"
              />
            </div>
            <div className="hidden sm:ml-6 md:block">
              <div className="flex space-x-4">
                {/* {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={`capitalize ${classNames(
                      item.current
                        ? "text-[rgb(101,228,163)]"
                        : "text-white hover:text-gray-300",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}`}
                  >
                    {item.name}
                  </a>
                ))} */}
                {navButtons}
              </div>
            </div>
          </div>
          <div
            className="absolute inset-y-0 right-0 flex items-center md:hidden"
            onClick={handleBackground}
          >
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-9 text-2xl text-white font-bold group-data-open:block"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden animate-dropdown">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {/* {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-950/50 text-white"
                  : "text-gray-300 hover:bg-white/5 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))} */}

          {dropdownButtons}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
