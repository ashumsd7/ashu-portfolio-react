import React from "react";

function HeadingDivider() {
  return (
    <div class="md:flex md:items-center md:justify-between">
      <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
        Trending products
      </h2>
      <a
        href="#"
        class="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
      >
        Shop the collection<span aria-hidden="true"> &rarr;</span>
      </a>
    </div>
  );
}

export default HeadingDivider;
