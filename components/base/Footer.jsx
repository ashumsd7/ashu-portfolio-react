import React from "react";

function Footer() {
  return (
    <div>
      <footer className="h-[50vh] flex items-end mt-28  ">
        <div className="mx-auto bg-gray-900  relative h-[70%] w-full ">
          <div className="container flex flex-col justify-end h-full p-4 mx-auto text-center lg:justify-between lg:items-end lg:flex-row">
            <div className="flex justify-center my-3 lg:justify-start lg:my-0">
              <img
                className="w-10 h-10 cursor-pointer"
                src={"https://stylishnames.in/sncontent/uploads/names/ashu.jpg"}
                alt=""
              />
            </div>
            <div className="text-sm text-white">
              ©️2022 Rhythm UI. All rights reserved.
            </div>
          </div>

          <div className="h-full w-11/12 left-[50%] -translate-x-[50%] p-5 flex justify-center items-center  mt-2 rounded-lg bg-blue-600 lg:p-0 absolute  -top-[45%] ">
            <div>
              <div className="grid gap-2 grid-col-1 md:grid-cols-2">
                <div>
                  <h1 className="mb-2 text-lg font-bold text-center text-white lg:text-2xl ">
                    Sign up for our newsletter
                  </h1>

                  <h4 className="text-sm text-center text-gray-200 lg:text-md lg:text-left">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis, porro.
                  </h4>
                </div>

                <div className="mx-2">
                  <div className="flex flex-col items-center justify-center mx-2 mb-2 lg:flex-row lg:mb-3 gap-y-2 ">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="shadow-sm p-3 focus:ring-indigo-500w-full lg:w-auto focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="you@example.com"
                    />
                    <button type="button" class="inline-flex nw-full mx-2  border-white lg:w-auto whitespace-nowrap items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">


  Button text
</button>
                  </div>
                  <div className="text-sm text-center text-gray-200 ">
                    <span>We care about the protection of your data.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
