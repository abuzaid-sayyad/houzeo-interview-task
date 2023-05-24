<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
  export default {
    name: 'scheduleShowing',
    components: {Carousel, Slide, Pagination, Navigation},

    data() {
    return {
      openTab: 1,
      parentTab: 1,
      timeTab: 2,
      calenderSlides:[
        {day: "Mon", date:"09", month: "May"},
        {day: "Tue", date:"10", month: "May"},
        {day: "Wed", date:"11", month: "May"},
        {day: "Thurs", date:"12", month: "May"},
        {day: "Fri", date:"13", month: "May"},
        {day: "Sat", date:"14", month: "May"},
        {day: "Sun", date:"15", month: "May"},
        {day: "Mon", date:"16", month: "May"},
        {day: "Tue", date:"17", month: "May"},
      ],
      timeSlides:[
        {time: "09:30 AM"},
        {time: "10:00 AM"},
        {time: "10:30 AM"},
        {time: "11:00 AM"},
        {time: "11:30 AM"},
        {time: "12:00 PM"},
        {time: "12:30 PM"},
        {time: "13:00 PM"},
        {time: "13:30 PM"},
        {time: "14:00 PM"},
      ],
      settings: {
      itemsToShow: 3,
      snapAlign: 'center',
    },
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3,
        snapAlign: 'start',
      },
      // 1024 and up
      1024: {
        itemsToShow: 4,
        snapAlign: 'start',
      },
    },
    };
  },
  methods:{
        calenderToggleTabs: function(tabNumber){
            this.openTab = tabNumber
        },
        timeToggleTabs: function(tabNumber){
            this.timeTab = tabNumber
        },
        parentToggleTabs: function(tabNumber){
            this.parentTab = tabNumber
        },
    },
  }
</script>

<template>
  <div class="w-full rounded-lg border border-[#00000026] py-4.5 mb-7.5 schedule-showing">
    <div class="px-4">
      <h2 class="text-lg leading-27 font-semibold text-black mb-4">Schedule a Showing</h2>
      <div class="w-full flex items-center bg-ruby-pi rounded-lg p-1.5 mb-6">
        <button class="w-1/2 md:p-2.5 p-2 rounded-lg text-center text-sm md:text-base md:leading-25 text-black whitespace-nowrap md:whitespace-normal" v-on:click="parentToggleTabs(1)" :class="{'font-normal': parentTab !== 1, 'bg-white font-semibold': parentTab === 1}">In Person Showing</button>
        <button class="w-1/2 md:p-2.5 p-2 rounded-lg text-center text-sm md:text-base md:leading-25 text-black whitespace-nowrap md:whitespace-normal" v-on:click="parentToggleTabs(2)" :class="{'font-normal': parentTab !== 2, 'bg-white font-semibold': parentTab === 2}">Virtual Showing</button>
      </div>
    </div>
    <carousel ref="carousel" v-bind="settings" :breakpoints="breakpoints" :transition="300" class="mx-3 mb-4">
      <slide v-for="(slide, index) in calenderSlides" :key="index">
        <div class="rounded-lg p-2 text-center border w-full cursor-pointer" v-on:click="calenderToggleTabs(index)" :class="{'border-ruby-epsilon text-ruby-beta hover:bg-ruby-mu': openTab !== index, 'bg-ruby-mu border-black text-black': openTab === index}">
          <p class="text-xs leading-18 font-medium">{{slide.day}}</p>
          <strong class="text-28 leading-34 font-semibold">{{slide.date}}</strong>
          <p class="text-xs leading-18 font-medium">{{ slide.month }}</p>
        </div>
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
    
    <carousel ref="carousel" v-bind="settings" :breakpoints="breakpoints" :transition="300" class="mx-3 mb-5">
      <slide v-for="(slide, index) in timeSlides" :key="index">
        <div class="w-full rounded-lg border py-2 text-black cursor-pointer" v-on:click="timeToggleTabs(index)" :class="{'border-ruby-epsilon hover:bg-ruby-zeta': timeTab !== index, 'bg-ruby-zeta border-black': timeTab === index}">
          <p class="text-sm leading-21 font-normal text-center">{{ slide.time }}</p>
        </div>
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
    <div class="px-4">
      <button class="w-full rounded-lg p-3.5 text-base leading-25 font-medium text-white mb-3 transition-shadow duration-300 hover:shadow-3xl bg-grd-alpha">Schedule Showing</button>
      <p class="text-xs leading-18 font-normal text-ruby-gamma">It’s free, with no obligation - cancel anytime All times in EDT</p>
    </div>
  </div>
</template>

<style scoped>

</style>
