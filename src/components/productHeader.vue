<script>
  export default {
    name: 'productHeader'
  }
</script>

<template>
  <div class="w-full fixed lp:top-18.5 top-17.75 py-3.5 z-30 bg-white shadow-bottom">
    <div class="container">
      <div class="flex justify-between items-center">
        <h1 class="text-lg md:text-xl font-semibold leading-30 text-black">2856 Meadow Park Ave, <br><span class="text-ruby-gamma font-normal">Henderson, NV 89052</span></h1>
        <ul class="flex items-center">
          <li>
            <p class="text-lg md:text-22 md:leading-33 font-semibold text-black md:mb-1 text-right md:text-left">$500,000</p>
            <div class="flex items-center">
              <p class="text-sm md:text-base md:leading-25 font-normal text-black">Est. $4,284/mo</p>
              <p class="text-base leading-25 font-semibold text-pearl-beta ml-2 hidden md:block"><span class="bg-no-repeat bg-contain w-5 h-5 inline-block align-text-bottom" style="background-image: url(/src/assets/icons/coin.png);"></span> Get Pre-Approved</p>
            </div>
          </li>
          <li class="ml-[39px] hidden md:block">
            <p class="text-22 leading-33 font-semibold text-black/80 mb-px">4</p>
            <p class="text-base leading-4 font-normal text-black/80">Beds</p>
          </li>
          <li class="ml-4 hidden md:block">
            <p class="text-22 leading-33 font-semibold text-black/80 mb-px">3</p>
            <p class="text-base leading-4 font-normal text-black/80">Bath</p>
          </li>
          <li class="ml-4 hidden md:block">
            <p class="text-22 leading-33 font-semibold text-black/80 mb-px">998</p>
            <p class="text-base leading-4 font-normal text-black/80">sqft.</p>
          </li>
          <li class="lp:ml-7 fixed bottom-0 left-0 lp:relative w-full lp:w-auto lp:left-auto lp:bottom-auto">
            <a href="#" class="bg-jasper-alpha py-[13px] px-[23px] rounded-t-lg block w-full md:rounded-lg text-white text-center text-base font-medium leading-25 transition-shadow duration-300 hover:shadow-4xl">Make an Offer</a>
          </li>
        </ul>
      </div>
      <ul class="flex justify-between md:hidden mt-2">
        <li>
            <p class="text-22 leading-33 font-semibold text-black/80 mb-px">4</p>
            <p class="text-base leading-4 font-normal text-black/80">Beds</p>
          </li>
          <li>
            <p class="text-22 leading-33 font-semibold text-black/80 mb-px">3</p>
            <p class="text-base leading-4 font-normal text-black/80">Bath</p>
          </li>
          <li>
            <p class="text-22 leading-33 font-semibold text-black/80 mb-px">998</p>
            <p class="text-base leading-4 font-normal text-black/80">sqft.</p>
          </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
