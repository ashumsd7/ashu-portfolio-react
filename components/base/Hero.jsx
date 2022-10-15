import React from "react";

function Hero() {
  return (
    <>
      <div class="relative bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto">
          <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div>
              <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav
                  class="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div class="flex items-center justify-between w-full md:w-auto">
                      {/* // Logo */}
                      <a href="#">
                        <span class="sr-only">Workflow</span>
                        <img
                          class="h-8 w-auto sm:h-10"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        />
                      </a>
                      {/* //  urger */}
                      <div class="-mr-2 flex items-center md:hidden">
                        <button
                          type="button"
                          class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                          aria-expanded="false"
                        >
                          <span class="sr-only">Open main menu</span>

                          <svg
                            class="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4 6h16M4 12h16M4 18h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    {/* <a
                      href="#"
                      class="font-medium text-gray-500 hover:text-gray-900"
                    >
                      Stats
                    </a> */}
                  </div>
                </nav>
              </div>

              {/* <div class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        class="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                      />
                    </div>
                    <div class="-mr-2">
                      <button
                        type="button"
                        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      >
                        <span class="sr-only">Close main menu</span>

                        <svg
                          class="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="px-2 pt-2 pb-3 space-y-1">
                    <a
                      href="#"
                      class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      Product
                    </a>

                    <a
                      href="#"
                      class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      Features
                    </a>

                    <a
                      href="#"
                      class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      Marketplace
                    </a>

                    <a
                      href="#"
                      class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      Company
                    </a>
                  </div>
                  <a
                    href="#"
                    class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                  >
                    {" "}
                    Log in{" "}
                  </a>
                </div>
              </div> */}
            </div>

            <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div class="sm:text-center lg:text-left">
                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span class="block  text-indigo-600 xl:inline ">
                    &lt; Namaskar / &gt;{" "}
                  </span>{" "}
                  <br />
                  <span class="block text-black  mt-2">Kaise hain aap ?</span>
                </h1>
                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div class="rounded-md shadow">
                    <a
                      href="#"
                      class="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      {" "}
                      Resume{" "}
                    </a>
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      {" "}
                      Whatsapp{" "}
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://lh3.googleusercontent.com/VhQsYly0fp1ElafftNEhhXXG2T5u9qdMIqsH-Gh161HUYqALJbt3ZIz5r_KC7Bz0-hdu1HH1Uoph_GnmUtK5CzcamYBtFWUiwWRMgn36NXH1yPqx50JynpkfmkZvydJhFuhhU7Dn1rG6-9p4wk-7bpiAzkwW-uQaiqhjTqYKXnfvO9701bKBclFNeRFIV0ZQY2mqB1TsI01GXDqXcRn9s5B0UDnmUhhO-pGgls7fpXC2jcoSdwXixCtFISYBNXe_pHREHtjVEYh8a7aO0djZhSb8_0jr_vMOVnSzkO42XsAOozjc8SEkaDnBkvctLf56iYn_3WpE3cq5OE6Z4hAlyiGWZeEPhx1pj0SSgFAq14mmDeh7yJcft8eae-F1J3kx9UOEKuFmk78ODPHGcmEhCqifixgl-bZZX9jwm88TYjfxIH0rqIJnB2br4Ibxd3tKpKdLKuW2ecGcVD0cDx9Ny25EVXpeW5Wd20BTZsB0BuNpJMeSRtMBI8tC0PgS084KNc4cfKO-xf2QJHQ9GO3Xs_Hy8P3a6ogzqAut50dSLzrxr8GSlbPoaKkud6GFgVNIzUAhdP5kiBoJN4fVYR6MD129-1C0IdNOzX9eO4VXBLIpexvyhpSJpZSlbfKeWnUxqGP2JJJZCsBRvP5a5yt5B_04MbMUH6hpsxEiNlHmFGwPplUW8tjXRRk2kE_C-ndRsmkl517aax0jw7bCFfFZnOVvvJRv0cnaIDRnNkb3guR6Hj8wSLMUClhncOFIJFPaCeLLxPlKqMISAwpHqo_SI5xs8SECSWYbSKuV56si7tGtd0hmeFjs5FXaVHQdg-HhUOvve_eM36eu3o6IPIlkm6Z2b0tKOwbCh3hJCBQFIYRcbLNmk1mnuWgousxx0Mct9yjlMdSD8XJYg0dHO2QvTQ2_WwjZ-dFZteX-V7-RBvLuEIu_JJBzMOW3d3hdwCwrVHHoLHD71-KcNhrM=w1431-h954-no?authuser=0"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
