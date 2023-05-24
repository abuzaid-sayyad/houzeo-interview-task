<script setup>
import layout from './components/layout.vue'
import scheduleShowing from './components/scheduleShowing.vue'
import realPeopleStories from './components/realPeopleStories.vue'
import propertyDetails from './components/propertyDetails.vue'
import productPictures from './components/productPictures.vue'
</script>

<template>
  <layout>
    <div class="md:w-67% w-full">
            <product-pictures></product-pictures>
            <!-- <div class="border-b border-black/15 pb-[18px] mb-[26px]">
              <div class="relative">
                <div class="flex gap-2 rounded-lg overflow-hidden mb-6 relative">
                  <div class="w-full">
                    <img class="w-full object-cover h-full" src="https://images.unsplash.com/photo-1610276099599-67d69ba55d1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDM3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="">
                  </div>
                  <div class="w-[216px] grid grid-cols-1 gap-2 flex-shrink-0">
                    <img class="w-full h-[200px] object-cover" src="https://images.unsplash.com/photo-1610276099599-67d69ba55d1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDM3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="">
                    <img class="w-full h-[200px] object-cover" src="https://images.unsplash.com/photo-1610276099599-67d69ba55d1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDM3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="">
                  </div>
                  <button class="bg-white rounded-lg border border-black text-black text-base leading-[25px] flex items-center py-1 px-2.5 absolute bottom-4 left-4">
                    <span class="bg-no-repeat bg-contain w-[18px] h-[18px] mr-1" style="background-image: url(/src/assets/icons/street-view.png)"></span>
                    <span>Street view</span>
                  </button>
                  <button class="bg-white rounded-lg border border-black text-black text-base leading-[25px] flex items-center py-1 px-2.5 absolute bottom-4 right-4">
                    <span class="bg-no-repeat bg-contain w-[18px] h-[18px] mr-1" style="background-image: url(/src/assets/icons/dots-menu.png)"></span>
                    <span>All photos (30)</span>
                  </button>
                </div>
                <span class="flex items-center text-white px-2 bg-black absolute top-3.5 -left-3.5 after:content-[''] after:border-r-[12px] after:border-r-transparent after:border-t-[14px] after:border-t-[#626262] after:absolute after:left-px after:-bottom-3 after:transform after:rotate-90">
                  <span class="bg-no-repeat bg-contain w-3.5 h-3.5 before:content-[''] before:w-px before:bg-white/60 before:h-full before:left-7 before:absolute before:top-0" style="background-image:url(/src/assets/icons/star-icon.svg)"></span>
                  <span class="text-xs leading-[18px] font-semibold ml-3.5">Houzeo Exclusive</span>
                </span>
              </div>
              <div class="flex justify-between items-center">
                <div class="flex gap-4">
                  <div class="p-2.5 bg-[#EBEBF0] rounded-lg">
                    <span class="bg-no-repeat bg-contain inline-block w-5 h-5 mr-2 align-text-top" style="background-image: url(/src/assets/icons/view.png)"></span>
                    <span class="text-base leading-[25px] font-normal text-black">2.3K</span>
                  </div>
                  <div class="p-2.5 bg-[#EBEBF0] rounded-lg">
                    <span class="bg-no-repeat bg-contain inline-block w-5 h-5 mr-2 align-text-top" style="background-image: url(/src/assets/icons/heart.png)"></span>
                    <span class="text-base leading-[25px] font-normal text-black">2.3K</span>
                  </div>
                </div>
                <div>
                  <span class="inline-block w-4 h-4 bg-[#00B67B] rounded mr-2 align-middle"></span>
                  <span class="text-base leading-[25px] font-medium text-black">For Sale</span>
                </div>
              </div>
            </div>
            <div class="border-b border-black/15 pb-10 mb-[30px]">
              <h2 class="text-xl leading-[30px] font-semibold text-black mb-4">Description</h2>
              <p class="text-base leading-[27px] font-normal text-black/80">Welcome home to this beautiful center hall Colonial located in desirable North Caldwell! This house is the epitome of old-world charm meets modern-day living. The first floor boasts an open floorplan, including a welcoming foyer and a spacious living room for entertaining. The eat-in kitchen exudes modern elegance with a marble backsplash, white cabinetry… <a href="#" class="text-sm leading-[21px] font-medium text-black underline">Continue Reading</a> </p>
            </div> -->

            <property-details></property-details>

            <!-- <div class="w-full mb-4">
              <h2 class="text-xl leading-[30px] font-semibold text-black mb-4">Property Details</h2>
              <div class="border-t border-black/15">
                <div class="flex">
                  <div class="w-[194px] flex-shrink-0 px-5 bg-[#FAFAFC] py-[9px]">
                    <p class="text-base leading-[25px] text-black font-medium">Type</p>
                  </div>
                  <div class="w-full py-[9px] pl-14">
                    <p class="text-base leading-[25px] text-black font-normal">Single Family</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="w-[194px] flex-shrink-0 px-5 bg-[#FAFAFC] py-[9px]">
                    <p class="text-base leading-[25px] text-black font-medium">Status</p>
                  </div>
                  <div class="w-full py-[9px] pl-14">
                    <p class="text-base leading-[25px] text-black font-normal">Active</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="w-[194px] flex-shrink-0 px-5 bg-[#FAFAFC] py-[9px]">
                    <p class="text-base leading-[25px] text-black font-medium">Days on Market</p>
                  </div>
                  <div class="w-full py-[9px] pl-14">
                    <p class="text-base leading-[25px] text-black font-normal">5</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="w-[194px] flex-shrink-0 px-5 bg-[#FAFAFC] py-[9px]">
                    <p class="text-base leading-[25px] text-black font-medium">Open House</p>
                  </div>
                  <div class="w-full py-[9px] pl-14">
                    <p class="text-base leading-[25px] text-black font-normal">Not Scheduled</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="w-[194px] flex-shrink-0 px-5 bg-[#FAFAFC] py-[9px]">
                    <p class="text-base leading-[25px] text-black font-medium">County</p>
                  </div>
                  <div class="w-full py-[9px] pl-14">
                    <p class="text-base leading-[25px] text-black font-normal">Lincoln</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="w-[194px] flex-shrink-0 px-5 bg-[#FAFAFC] py-[9px]">
                    <p class="text-base leading-[25px] text-black font-medium">MLS Name</p>
                  </div>
                  <div class="w-full py-[9px] pl-14">
                    <p class="text-base leading-[25px] text-black font-normal">Montana Regional MLS</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="w-[194px] flex-shrink-0 px-5 bg-[#FAFAFC] py-[9px]">
                    <p class="text-base leading-[25px] text-black font-medium">MLS Number</p>
                  </div>
                  <div class="w-full py-[9px] pl-14">
                    <p class="text-base leading-[25px] text-black font-normal">22208962</p>
                  </div>
                </div>
              </div>
              <div class="border-t border-black/15">
                <div class="flex">
                  <div class="w-[194px] flex-shrink-0 px-5 bg-[#FAFAFC] py-[9px]">
                    <p class="text-base leading-[25px] text-black font-medium">Year Built</p>
                  </div>
                  <div class="w-full py-[9px] pl-14">
                    <p class="text-base leading-[25px] text-black font-normal">2002</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="w-[194px] flex-shrink-0 px-5 bg-[#FAFAFC] py-[9px]">
                    <p class="text-base leading-[25px] text-black font-medium">Finished Area</p>
                  </div>
                  <div class="w-full py-[9px] pl-14">
                    <p class="text-base leading-[25px] text-black font-normal">1,837 sq.ft.</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="w-[194px] flex-shrink-0 px-5 bg-[#FAFAFC] py-[9px]">
                    <p class="text-base leading-[25px] text-black font-medium">Lot Size</p>
                  </div>
                  <div class="w-full py-[9px] pl-14">
                    <p class="text-base leading-[25px] text-black font-normal">0.18 acres</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="w-[194px] flex-shrink-0 px-5 bg-[#FAFAFC] py-[9px]">
                    <p class="text-base leading-[25px] text-black font-medium">Basement</p>
                  </div>
                  <div class="w-full py-[9px] pl-14">
                    <p class="text-base leading-[25px] text-black font-normal">600 sq.ft.</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="w-[194px] flex-shrink-0 px-5 bg-[#FAFAFC] py-[9px]">
                    <p class="text-base leading-[25px] text-black font-medium">No. of Stories</p>
                  </div>
                  <div class="w-full py-[9px] pl-14">
                    <p class="text-base leading-[25px] text-black font-normal">2</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="w-[194px] flex-shrink-0 px-5 bg-[#FAFAFC] py-[9px]">
                    <p class="text-base leading-[25px] text-black font-medium">HOA Fees</p>
                  </div>
                  <div class="w-full py-[9px] pl-14">
                    <p class="text-base leading-[25px] text-black font-normal">$110</p>
                  </div>
                </div>
                <div class="flex">
                  <div class="w-[194px] flex-shrink-0 px-5 bg-[#FAFAFC] py-[9px]">
                    <p class="text-base leading-[25px] text-black font-medium">Buyer Agent Commission</p>
                  </div>
                  <div class="w-full py-[9px] pl-14">
                    <p class="text-base leading-[25px] text-black font-normal">2%</p>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
          <div class="md:w-33% w-full">
            <!-- <div class="w-full rounded-lg border border-[#00000026] px-4 py-[18px] mb-[30px]">
              <h2 class="text-lg leading-[27px] font-semibold text-black mb-4">Schedule a Showing</h2>
              <div class="w-full flex items-center bg-[#F2F2F2] rounded-lg p-1.5 mb-6">
                <button class="w-1/2 bg-white p-2.5 rounded-lg text-center text-base leading-[25px] font-semibold text-black">In Person Showing</button>
                <button class="w-1/2 p-2.5 rounded-lg text-center text-base leading-[25px] font-normal text-black">Virtual Showing</button>
              </div>
              <div class="flex items-center gap-3 mb-4 relative">
                <button class="rounded-full bg-white w-5 h-5 border border-[#AFAFAF] absolute top-1/2 -translate-y-1/2 -left-2 flex">
                  <span class="bg-no-repeat bg-contain w-2.5 h-2.5 inline-block m-auto rotate-180 transform" style="background-image: url(/src/assets/icons/right-chevron.png);"></span>
                </button>
                <div class="w-1/4 bg-[#EBEBF0] rounded-lg p-2 text-center border border-black">
                  <p class="text-xs leading-[18px] text-black font-medium">Mon</p>
                  <strong class="text-[28px] leading-[34px] font-semibold text-black">09</strong>
                  <p class="text-xs leading-[18px] text-black font-medium">May</p>
                </div>
                <div class="w-1/4 rounded-lg border border-[#00000033] p-2 text-center">
                  <p class="text-xs leading-[18px] text-[#717171] font-medium">Mon</p>
                  <strong class="text-[28px] leading-[34px] font-semibold text-[#717171]">09</strong>
                  <p class="text-xs leading-[18px] text-[#717171] font-medium">May</p>
                </div>
                <div class="w-1/4 rounded-lg border border-[#00000033] p-2 text-center">
                  <p class="text-xs leading-[18px] text-[#717171] font-medium">Mon</p>
                  <strong class="text-[28px] leading-[34px] font-semibold text-[#717171]">09</strong>
                  <p class="text-xs leading-[18px] text-[#717171] font-medium">May</p>
                </div>
                <div class="w-1/4 rounded-lg border border-[#00000033] p-2 text-center">
                  <p class="text-xs leading-[18px] text-[#717171] font-medium">Mon</p>
                  <strong class="text-[28px] leading-[34px] font-semibold text-[#717171]">09</strong>
                  <p class="text-xs leading-[18px] text-[#717171] font-medium">May</p>
                </div>
                <button class="rounded-full bg-white w-5 h-5 border border-[#AFAFAF] absolute top-1/2 -translate-y-1/2 -right-2 flex">
                  <span class="bg-no-repeat bg-contain w-2.5 h-2.5 inline-block m-auto" style="background-image: url(/src/assets/icons/right-chevron.png);"></span>
                </button>
              </div>
              <div class="flex items-center gap-3 mb-5 relative">
                <div class="w-1/4 rounded-lg border border-[#AFAFAF] py-2">
                  <p class="text-sm leading-[21px] font-normal text-black text-center">09:30 AM</p>
                </div>
                <div class="w-1/4 bg-[#EBEBF0] rounded-lg border border-black py-2">
                  <p class="text-sm leading-[21px] font-normal text-black text-center">09:30 AM</p>
                </div>
                <div class="w-1/4 rounded-lg border border-[#AFAFAF] py-2">
                  <p class="text-sm leading-[21px] font-normal text-black text-center">09:30 AM</p>
                </div>
                <div class="w-1/4 rounded-lg border border-[#AFAFAF] py-2">
                  <p class="text-sm leading-[21px] font-normal text-black text-center">09:30 AM</p>
                </div>
                <button class="rounded-full bg-white w-5 h-5 border border-[#AFAFAF] absolute top-1/2 -translate-y-1/2 -right-2 flex">
                  <span class="bg-no-repeat bg-contain w-2.5 h-2.5 inline-block m-auto" style="background-image: url(/src/assets/icons/right-chevron.png);"></span>
                </button>
              </div>
              <button class="w-full rounded-lg p-3.5 text-base leading-[25px] font-medium text-white mb-3" style="background: transparent linear-gradient(270deg, #0E5293 0%, #2876C1 100%) 0% 0% no-repeat padding-box;">Schedule Showing</button>
              <p class="text-xs leading-[18x] font-normal text-[#707070]">It’s free, with no obligation - cancel anytime All times in EDT</p>
            </div> -->

            
            <schedule-showing></schedule-showing>
            <real-people-stories></real-people-stories>
          </div>
  </layout>
</template>

<style scoped>

</style>
