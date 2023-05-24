<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
  export default {
    name: 'productPictures',
    components: {Carousel, Slide, Pagination, Navigation},
    data() {
    return {
      openModal: false,
      currentSlide: 0,
      images: [
        { url: 'https://dtpwvruv8ddnl.cloudfront.net/seller/listing/uploads/listing_images/thumbnails/thumbnail_6816_1595373956_18_Sherwood_Crt_73.JPG' },
        { url: 'https://dtpwvruv8ddnl.cloudfront.net/seller/listing/uploads/listing_images/thumbnails/thumbnail_6816_1595374286_18_Sherwood_Crt_29.JPG' },
        { url: 'https://dtpwvruv8ddnl.cloudfront.net/seller/listing/uploads/listing_images/thumbnails/thumbnail_6816_1595374141_18_Sherwood_Crt_25.JPG' },
        { url: 'https://dtpwvruv8ddnl.cloudfront.net/seller/listing/uploads/listing_images/thumbnails/thumbnail_6816_1595374127_18_Sherwood_Crt_24.JPG' },
        { url: 'https://dtpwvruv8ddnl.cloudfront.net/seller/listing/uploads/listing_images/thumbnails/thumbnail_6816_1595374154_18_Sherwood_Crt_22.JPG' },
        { url: 'https://dtpwvruv8ddnl.cloudfront.net/seller/listing/uploads/listing_images/thumbnails/thumbnail_6816_1595374179_18_Sherwood_Crt_19.JPG' },
        { url: 'https://dtpwvruv8ddnl.cloudfront.net/seller/listing/uploads/listing_images/thumbnails/thumbnail_6816_1595374219_18_Sherwood_Crt_16.JPG' },
        { url: 'https://dtpwvruv8ddnl.cloudfront.net/seller/listing/uploads/listing_images/thumbnails/thumbnail_6816_1595374286_18_Sherwood_Crt_29.JPG' },
        { url: 'https://dtpwvruv8ddnl.cloudfront.net/seller/listing/uploads/listing_images/thumbnails/thumbnail_6816_1595374141_18_Sherwood_Crt_25.JPG' },
        { url: 'https://dtpwvruv8ddnl.cloudfront.net/seller/listing/uploads/listing_images/thumbnails/thumbnail_6816_1595374127_18_Sherwood_Crt_24.JPG' },
        { url: 'https://dtpwvruv8ddnl.cloudfront.net/seller/listing/uploads/listing_images/thumbnails/thumbnail_6816_1595374154_18_Sherwood_Crt_22.JPG' },
        { url: 'https://dtpwvruv8ddnl.cloudfront.net/seller/listing/uploads/listing_images/thumbnails/thumbnail_6816_1595374179_18_Sherwood_Crt_19.JPG' },
        { url: 'https://dtpwvruv8ddnl.cloudfront.net/seller/listing/uploads/listing_images/thumbnails/thumbnail_6816_1595374219_18_Sherwood_Crt_16.JPG' },
      ],
      showMore: false,
      trimmedText: '',
      fullText: 'Welcome home to this beautiful center hall Colonial located in desirable North Caldwell! This house is the epitome of old-world charm meets modern-day living. The first floor boasts an open floorplan, including a welcoming foyer and a spacious living room for entertaining. The eat-in kitchen exudes modern elegance with a marble backsplash, white cabinetry Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum mi vel felis aliquet, ut vehicula purus bibendum. Sed at venenatis dui. Nam consectetur enim id ipsum scelerisque venenatis. Quisque eget tristique massa. Mauris varius condimentum rutrum. Sed vel placerat risus. Vivamus sit amet neque arcu. Morbi a sollicitudin massa. Sed vitae fringilla risus. Nulla at dui eget mauris cursus iaculis. Proin hendrerit sapien quis dapibus viverra. Donec tincidunt interdum volutpat. In hac habitasse platea dictumst.',
    };
  },
  methods: {
    toggleText() {
      this.showMore = !this.showMore;
    },
  },
  mounted() {
    this.trimmedText = this.fullText.slice(0, 522) + '...';
    console.log(this.fullText.length);
  },
  }
</script>

<template>
  <div class="border-b border-black/15 pb-4.5 mb-6.5">
    <div class="relative">
      <div class="flex gap-2 rounded-lg overflow-hidden mb-6">
        <div class="w-full">
          <img :src="images[0].url" class="w-full object-cover h-full" alt="">
        </div>
        <div class="w-54 md:grid grid-cols-1 gap-2 flex-shrink-0 hidden">
          <img v-for="(image, index) in images.slice(1, 3)" :key="index" :src="image.url" class="w-full h-50 object-cover" alt="First Home Image">
        </div>
      </div>
      <button class="bg-white hover:bg-gray-100 transition-shadow hover:shadow-3xl rounded-lg border border-black text-black text-sm md:text-base md:leading-25 flex items-center py-1 px-2.5 absolute bottom-4 left-4">
        <span class="bg-no-repeat bg-contain w-4 h-4 md:w-4.5 md:h-4.5 mr-1" style="background-image: url(/src/assets/icons/street-view.png)"></span>
        <span>Street view</span>
      </button>
      <button @click="openModal = !openModal" class="bg-white hover:bg-gray-100 transition-shadow hover:shadow-3xl rounded-lg border border-black text-black text-sm md:text-base md:leading-25 flex items-center py-1 px-2.5 absolute bottom-4 right-4">
        <span class="bg-no-repeat bg-contain w-4 h-4 md:w-4.5 md:h-4.5 mr-1" style="background-image: url(/src/assets/icons/dots-menu.png)"></span>
        <span>All photos (30)</span>
      </button>
      <span class="flex items-center text-white px-2 bg-black absolute top-3.5 -left-3.5 after:content-[''] after:border-r-[12px] after:border-r-transparent after:border-t-[14px] after:border-t-ruby-delta after:absolute after:left-px after:-bottom-3 after:transform after:rotate-90">
        <span class="bg-no-repeat bg-contain w-3.5 h-3.5 before:content-[''] before:w-px before:bg-white/60 before:h-full before:left-7 before:absolute before:top-0" style="background-image:url(/src/assets/icons/star-icon.svg)"></span>
        <span class="text-xs leading-18 font-semibold ml-3.5">Houzeo Exclusive</span>
      </span>
    </div>
    <div class="flex justify-between items-center">
      <div class="flex gap-4">
        <div class="p-2.5 bg-ruby-mu rounded-lg">
          <span class="bg-no-repeat bg-contain inline-block w-5 h-5 mr-2 align-text-top" style="background-image: url(/src/assets/icons/view.png)"></span>
          <span class="text-base leading-25 font-normal text-black">2.3K</span>
        </div>
        <div class="p-2.5 bg-ruby-mu rounded-lg">
          <span class="bg-no-repeat bg-contain inline-block w-5 h-5 mr-2 align-text-top" style="background-image: url(/src/assets/icons/heart.png)"></span>
          <span class="text-base leading-25 font-normal text-black">2.3K</span>
        </div>
      </div>
      <div>
        <span class="inline-block w-4 h-4 bg-amber-alpha rounded mr-2 align-middle"></span>
        <span class="text-base leading-25 font-medium text-black">For Sale</span>
      </div>
    </div>
  </div>
  <div class="border-b border-black/15 pb-10 mb-7.5">
    <h2 class="text-xl leading-30 font-semibold text-black mb-2 md:mb-4">Description</h2>
    <p class="text-sm md:text-base md:leading-27 font-normal text-black/80">
      <span v-if="!showMore">{{ trimmedText }}</span>
      <span v-else>{{ fullText }}</span>
      <button @click="toggleText" class="text-sm leading-21 font-medium text-black underline">{{ showMore ? 'Collapse Reading' : 'Continue Reading' }}</button>
    </p>
  </div>
  <div v-if="openModal" @click="openModal = false" class="w-full h-screen fixed top-0 left-0 bg-black/80 z-40"></div>
  <div v-if="openModal" class="md:w-242.5 w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
    <div class="relative">
      <carousel ref="carousel" :transition="300" v-model="currentSlide">
        <slide v-for="(image, index) in images" :key="index" class="md:h-136.5">
          <img class="w-full h-full object-cover rounded-lg" :src="image.url" alt="">
        </slide>
        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
  </div>
  <div v-if="openModal" class="w-full fixed top-7 left-0 z-50">
    <div class="container">
      <div class="flex justify-between relative">
        <button @click="openModal = false">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <p class="text-white text-base font-normal absolute top-0 left-1/2 -translate-x-1/2">1 of {{ currentSlide+1 }}</p>
        <a href="#" class="text-white underline text-base leading-5 font-medium">Make an offer</a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
