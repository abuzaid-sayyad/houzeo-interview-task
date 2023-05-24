<script>
  export default {
    name: 'webHeader',
    data(){
      return{
        openMenu:'',
        Dropdown:false,
        Dropdown2:false,
        Dropdown3:false,
        Dropdown4:false,
      }
    }
  }
</script>

<template>
  <header class="w-full fixed top-0 z-30 bg-white border-b border-gray-100 py-4.5">
    <div class="container">
      <div class="flex items-center justify-between">
        <a href="#" class="bg-no-repeat bg-contain w-29.5 h-8.5" style="background-image: url(/src/assets/logo/new-logo.svg)"></a>
        <nav>
          <ul class="lp:flex items-center hidden">
            <li>
              <a href="#" class="text-sm leading-21 text-black font-normal group hover:text-pearl-beta">
                Product
                <i class="border-l-5 border-r-5 border-transparent border-t-5 border-t-black group-hover:border-t-pearl-beta inline-block ml-0.5 align-middle"></i>
              </a>
            </li>
            <li class="ml-3.5">
              <a href="#" class="text-sm leading-21 text-black hover:text-pearl-beta font-normal">How Houzeo Works</a>
            </li>
            <li class="ml-3.5">
              <a href="#" class="text-sm leading-21 text-black hover:text-pearl-beta font-normal">Reviews</a>
            </li>
            <li class="ml-3.5">
              <a href="#" class="text-sm leading-21 text-black font-normal group hover:text-pearl-beta">
                Buy
                <i class="border-l-5 border-r-5 border-transparent border-t-5 border-t-black group-hover:border-t-pearl-beta inline-block ml-0.5 align-middle"></i>
              </a>
            </li>
            <li class="ml-3.5">
              <a href="#" class="text-sm leading-21 text-black font-normal group hover:text-pearl-beta">
                Sell
                <i class="border-l-5 border-r-5 border-transparent border-t-5 border-t-black group-hover:border-t-pearl-beta inline-block ml-0.5 align-middle"></i>
              </a>
            </li>
            <li class="ml-3.5">
              <a href="#" class="text-sm leading-21 text-black hover:text-pearl-beta font-normal">Pricing</a>
            </li>
            <li class="ml-3.5">
              <a href="#" class="text-sm leading-21 text-black font-normal group hover:text-pearl-beta">
                Resources
                <i class="border-l-5 border-r-5 border-transparent border-t-5 border-t-black group-hover:border-t-pearl-beta inline-block ml-0.5 align-middle"></i>
              </a>
            </li>
            <li class="ml-3.5">
              <a href="#" class="text-sm leading-21 text-black hover:text-pearl-beta font-normal">Sign In</a>
            </li>
            <li class="ml-5 hidden xl:block">
              <a href="#" class="text-sm leading-18 text-black hover:text-pearl-beta font-normal">
                <p class="mb-px">(844) 448-0110 </p>
                <p>(9am to 6pm CST, Mon-Sat)</p>
              </a>
            </li>
            <li class="ml-7.5">
              <a href="#" class="text-sm leading-21 text-white font-medium py-2.5 px-4 rounded-lg transition-shadow duration-300 hover:shadow-3xl" style="background: transparent linear-gradient(270deg, #0E5293 0%, #2876C1 100%) 0% 0% no-repeat padding-box;">Start Free Listing</a>
            </li>
          </ul>

          <!-- for mobile view menu icon  -->
          <button @click="openMenu = true" class="lp:hidden">
            <span class="bg-no-repeat bg-contain w-5 h-5 inline-block" style="background-image: url(/src/assets/icons/menu.png)"></span>
          </button>
        </nav>
      </div>
    </div>
  </header>

  <!-- for mobile view side bar menu  -->
  <div v-if="openMenu" @click="openMenu = false" class="w-full h-screen fixed top-0 left-0 bg-black/50 z-40 lp:hidden"></div>
  <div :class="openMenu ? 'translate-x-0 ease-out' : 'translate-x-full ease-in'" class="fixed right-0 top-0 max-w-xs w-full h-screen px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300 z-50 lp:hidden">
    <button @click="openMenu = !openMenu" class="text-gray-600 focus:outline-none" aria-label="close" name="svg_button">
        <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
    </button>
    <ul class="mt-14">
      <li class="border-b">
        <div @click="Dropdown = !Dropdown" class="flex py-3 justify-between">
          <span class="text-sm font-medium text-gray-800">Product</span>
          <svg class="h-4 w-4 text-gray-600 transform duration-300" :class="{'rotate-90' : Dropdown, 'rotate-0' : !dropdown}" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M9.163 4.516c.418.408 4.502 4.695 4.502 4.695a1.095 1.095 0 010 1.576s-4.084 4.289-4.502 4.695c-.418.408-1.17.436-1.615 0-.446-.434-.481-1.041 0-1.574L11.295 10 7.548 6.092c-.481-.533-.446-1.141 0-1.576.445-.436 1.197-.409 1.615 0z"/></svg>
        </div>
        <ul v-if="Dropdown" class="pl-5">
          <li><a href="#" target="_self" class="text-xs font-normal py-2.5 block">IntelliList Listing Management</a></li>
          <li><a href="#" target="_self" class="text-xs font-normal py-2.5 block">Houzeo Showings</a></li>
          <li><a href="#" target="_self" class="text-xs font-normal py-2.5 block">Digital Transaction Management</a></li>
          <li><a href="#" target="_self" class="text-xs font-normal py-2.5 block">Lead Management</a></li>
          <li><a href="#" target="_self" class="text-xs font-normal py-2.5 block">Houzeo Mobile App</a></li>
        </ul>
      </li>
      <li>
        <a href="#" target="_self" class="block text-sm font-medium text-gray-800 py-3 border-b">How Houzeo Works</a>
      </li>
      <li>
        <a href="#" target="_self" class="block text-sm font-medium text-gray-800 py-3 border-b">Reviews</a>
      </li>
      <li class="border-b">
        <div @click="Dropdown2 = !Dropdown2" class="flex py-3 justify-between">
          <span class="text-sm font-medium text-gray-800">Buy</span>
          <svg class="h-4 w-4 text-gray-600 transform duration-300" :class="{'rotate-90' : Dropdown2, 'rotate-0' : !dropdown2}" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M9.163 4.516c.418.408 4.502 4.695 4.502 4.695a1.095 1.095 0 010 1.576s-4.084 4.289-4.502 4.695c-.418.408-1.17.436-1.615 0-.446-.434-.481-1.041 0-1.574L11.295 10 7.548 6.092c-.481-.533-.446-1.141 0-1.576.445-.436 1.197-.409 1.615 0z"/></svg>
        </div>
        <ul v-if="Dropdown2" class="pl-5">
          <li><a href="#" target="_self" class="text-xs font-normal py-2.5 block">Homes For Sale</a></li>
          <li><a href="#" target="_self" class="text-xs font-normal py-2.5 block">For Sale By Owner Homes</a></li>
        </ul>
      </li>
      <li class="border-b">
        <div @click="Dropdown3 = !Dropdown3" class="flex py-3 justify-between">
          <span class="text-sm font-medium text-gray-800">Sell</span>
          <svg class="h-4 w-4 text-gray-600 transform duration-300" :class="{'rotate-90' : Dropdown3, 'rotate-0' : !dropdown3}" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M9.163 4.516c.418.408 4.502 4.695 4.502 4.695a1.095 1.095 0 010 1.576s-4.084 4.289-4.502 4.695c-.418.408-1.17.436-1.615 0-.446-.434-.481-1.041 0-1.574L11.295 10 7.548 6.092c-.481-.533-.446-1.141 0-1.576.445-.436 1.197-.409 1.615 0z"/></svg>
        </div>
        <ul v-if="Dropdown3" class="pl-5">
          <li><a href="#" target="_self" class="text-xs font-normal py-2.5 block">Flat Fee MLS</a></li>
          <li><a href="#" target="_self" class="text-xs font-normal py-2.5 block">Reviews</a></li>
        </ul>
      </li>
      <li>
        <a href="#" target="_self" class="block text-sm font-medium text-gray-800 py-3 border-b">Pricing</a>
      </li>
      <li class="border-b">
        <div @click="Dropdown4 = !Dropdown4" class="flex py-3 justify-between">
          <span class="text-sm font-medium text-gray-800">Resource</span>
          <svg class="h-4 w-4 text-gray-600 transform duration-300" :class="{'rotate-90' : Dropdown4, 'rotate-0' : !dropdown4}" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M9.163 4.516c.418.408 4.502 4.695 4.502 4.695a1.095 1.095 0 010 1.576s-4.084 4.289-4.502 4.695c-.418.408-1.17.436-1.615 0-.446-.434-.481-1.041 0-1.574L11.295 10 7.548 6.092c-.481-.533-.446-1.141 0-1.576.445-.436 1.197-.409 1.615 0z"/></svg>
        </div>
        <ul v-if="Dropdown4" class="pl-5">
          <li><a href="#" target="_self" class="text-xs font-normal py-2.5 block">Closing Cost Calculator </a></li>
          <li><a href="#" target="_self" class="text-xs font-normal py-2.5 block">Blog</a></li>
          <li><a href="#" target="_self" class="text-xs font-normal py-2.5 block">FAQ's</a></li>
        </ul>
      </li>
      <li>
        <a href="#" target="_self" class="block text-sm font-medium text-gray-800 py-3 border-b">Sign in</a>
      </li>
      <li>
        <a href="#" target="_self" class="block text-sm font-medium text-gray-800 p-3 bg-gray-100">
          <p class="mb-px">(844) 448-0110 </p>
          <p>(9am to 6pm CST, Mon-Sat)</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
