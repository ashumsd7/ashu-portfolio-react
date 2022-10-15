import React from 'react'

function ProjectCard() {
  return (
    <div class="bg-white">
  <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="md:flex md:items-center md:justify-between">
      <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Trending products</h2>
      <a href="#" class="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">Shop the collection<span aria-hidden="true"> &rarr;</span></a>
    </div>

    <div class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
      <div class="group relative">
        <div class="w-full h-56 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80">
          <img src="https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg" alt="Hand stitched, orange leather long wallet." class="w-full h-full object-center object-cover"/>
        </div>
        <h3 class="mt-4 text-sm text-gray-700">
          <a href="#">
            <span class="absolute inset-0"></span>
            Leather Long Wallet
          </a>
        </h3>
        <p class="mt-1 text-sm text-gray-500">Natural</p>
        <p class="mt-1 text-sm font-medium text-gray-900">$75</p>
      </div>

   
    </div>

    <div class="mt-8 text-sm md:hidden">
      <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Shop the collection<span aria-hidden="true"> &rarr;</span></a>
    </div>
  </div>
</div>

  )
}

export default ProjectCard