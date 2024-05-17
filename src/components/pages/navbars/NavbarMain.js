import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItems } from "../../cart/cartSlice";
import { selectLoggedInUser } from "../auth/authSlice";
import Logo from "./Logo1.jpg";

const navigation = [
  { name: "Fashion Forge", navigatorLink: "/mainpage", current: true },
  { name: "Create Product", navigatorLink: "/editor", current: false },
  { name: "All orders", navigatorLink: "/admin/orders", current: false },
];

const usernavigation = [
  { name: "Fashion Forge", navigatorLink: "/mainpage", current: true },
  { name: "Create Product", navigatorLink: "/editor", current: false },
];

const userProfile = [
  { name: "profile", navigatorLink: "/profile", current: true },
  { name: "My Orders", navigatorLink: "/orders", current: false },
  { name: "Sign out", navigatorLink: "/Logout", current: false },
];

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarMain({ children }) {
  const user = useSelector(selectLoggedInUser);
  const items = useSelector(selectItems);
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <div className="bg-gray-800 pb-32">
          <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
              <>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                  <div className="border-b border-gray-700">
                    <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <img className="h-8 w-8" src={Logo} alt="Workflow" />
                        </div>
                        <div className="hidden md:block">
                          <div className="ml-10 flex items-baseline space-x-4">
                            {user.role === "admin" ? (
                              <>
                                {navigation.map((item) => (
                                  <Link to={item.navigatorLink} key={item.name}>
                                    <div
                                      key={item.name}
                                      className={classNames(
                                        item.current
                                          ? "bg-gray-900 text-white"
                                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "px-3 py-2 rounded-md text-sm font-medium"
                                      )}
                                      aria-current={
                                        item.current ? "page" : undefined
                                      }
                                    >
                                      {item.name}
                                    </div>
                                  </Link>
                                ))}
                              </>
                            ) : (
                              <>
                                {usernavigation.map((item) => (
                                  <Link to={item.navigatorLink} key={item.name}>
                                    <div
                                      key={item.name}
                                      className={classNames(
                                        item.current
                                          ? "bg-gray-900 text-white"
                                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "px-3 py-2 rounded-md text-sm font-medium"
                                      )}
                                      aria-current={
                                        item.current ? "page" : undefined
                                      }
                                    >
                                      {item.name}
                                    </div>
                                  </Link>
                                ))}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                          <Link to="/cartpage">
                            <button
                              type="button"
                              className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                              <span className="sr-only">
                                View notifications
                              </span>
                              <ShoppingCartIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                            {items.length > 0 && (
                              <span className="inline-flex items-center rounded-md mb-7 -ml-3 bg-red-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-red-600/10">
                                {items.length}
                              </span>
                            )}
                          </Link>

                          {/* Profile dropdown */}
                          <Menu as="div" className="ml-3 relative">
                            <div>
                              <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">Open user menu</span>
                                <img
                                  className="h-8 w-8 rounded-full"
                                  // src={user.imageUrl}
                                  alt=""
                                />
                              </Menu.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {userProfile.map((item) => (
                                  <Link to={item.navigatorLink} key={item.name}>
                                    <Menu.Item key={item.name}>
                                      {({ active }) => (
                                        <div
                                          className={classNames(
                                            active ? "bg-gray-100" : "",
                                            "block px-4 py-2 text-sm text-gray-700"
                                          )}
                                        >
                                          {item.name}
                                        </div>
                                      )}
                                    </Menu.Item>
                                  </Link>
                                ))}
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </div>
                      <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <Link to={"/cartpage"}>
                          <button
                            type="button"
                            className="ml-auto bg-gray-800 flex-shrink-0 p-1 text-gray-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                          >
                            <span className="sr-only">View notifications</span>

                            <ShoppingCartIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </button>
                          {items.length > 0 && (
                            <span className="inline-flex items-center rounded-md bg-red-50 mb-7 -ml-3 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                              {items.length}
                            </span>
                          )}
                        </Link>

                        <Menu as="div" className="ml-3 relative">
                          <div>
                            <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                // src={user.imageUrl}
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {userProfile.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <Link to={item.navigatorLink}>
                                      <div
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-4 py-2 text-sm text-gray-700"
                                        )}
                                      >
                                        {item.name}
                                      </div>
                                    </Link>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>

                        <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XMarkIcon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <Bars3Icon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </Disclosure.Button>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="border-b border-gray-700 md:hidden">
                  <div className="px-2 py-3 space-y-1 sm:px-3">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block px-3 py-2 rounded-md text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <Link to={item.navigatorLink}>{item.name}</Link>
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <header className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link to={"/mainpage"}>
                {" "}
                <h1 className="text-3xl font-bold text-white">Fashion Forge</h1>
              </Link>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            {/* <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6"> */}
            {/* <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" /> */}
            {children}
            {/* </div> */}
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
}
