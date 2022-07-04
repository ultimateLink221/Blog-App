import React from 'react';
import { Disclosure } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import useSearch from './hooks/useSearch';

function NavBar(props) {
  const { setSearch } = useSearch();

  return (
    <Disclosure as="nav" className="bg-white shadow mb-10">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex px-2 lg:px-0">
              <Link href="/">
                <div className="flex-shrink-0 flex items-center cursor-pointer">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                    alt="Workflow"
                  />
                </div>
                </Link>

                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  <Link href="/">
                    <a
                      className="border-transparent focus:border-indigo-500 focus:text-gray-900 text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      All
                    </a>
                  </Link>
                  <Link href="/category/food">
                    <a
                      className="border-transparent focus:border-indigo-500 focus:text-gray-900 text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Food
                    </a>
                  </Link>
                  <Link href="/category/drinks">
                    <a
                      href="#"
                      className="border-transparent focus:border-indigo-500 focus:text-gray-900 text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Drinks
                    </a>
                  </Link>
                  <Link href="/category/desserts">
                    <a
                      href="#"
                      className="border-transparent focus:border-indigo-500 focus:text-gray-900 text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Desserts
                    </a>
                  </Link>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Search"
                      type="search"
                      onChange={(e) => {setSearch(e.target.value)}}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Disclosure.Button
                as="a"
                href="/"
                className="border-transparent text-gray-600 focus:bg-indigo-50 focus:border-indigo-500 focus:text-indigo-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                All
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/category/food"
                className="border-transparent text-gray-600 focus:bg-indigo-50 focus:border-indigo-500 focus:text-indigo-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Food
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/category/food"
                className="border-transparent text-gray-600 focus:bg-indigo-50 focus:border-indigo-500 focus:text-indigo-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Drinks
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/category/desserts"
                className="border-transparent text-gray-600 focus:bg-indigo-50 focus:border-indigo-500 focus:text-indigo-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Desserts
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default NavBar;