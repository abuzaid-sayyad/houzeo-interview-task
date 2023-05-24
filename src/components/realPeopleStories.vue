<script>
  export default {
    name: 'realPeopleStories',
    data() {
    return {
      videos: [
        {
          userName: 'Jared Goldfarb',
          location: 'Crestone, CO',
          thumbnail: 'https://dtpwvruv8ddnl.cloudfront.net/home-page-static-assets/jared.webp',
          videoUrl: 'https://www.youtube.com/embed/-svYaiizCMY?rel=0&autoplay=1&enablejsapi=1',
          showModal: false,
        },
        {
          userName: 'Lori R',
          location: 'Melbourne, FL',
          thumbnail: 'https://dtpwvruv8ddnl.cloudfront.net/home-page-static-assets/lori.webp',
          videoUrl: 'https://www.youtube.com/embed/0n_w2k2GK0s?rel=0&autoplay=1&enablejsapi=1',
          showModal: false,
        },
        {
          userName: 'Daniel Woodrum',
          location: 'Panama City Beach',
          thumbnail: 'https://dtpwvruv8ddnl.cloudfront.net/home-page-static-assets/daniel.webp',
          videoUrl: 'https://www.youtube.com/embed/irDOGn3J30I?rel=0&autoplay=1&enablejsapi=1',
          showModal: false,
        },
        {
          userName: 'Ken Marsh',
          location: 'Williamsburg, VA',
          thumbnail: 'https://dtpwvruv8ddnl.cloudfront.net/home-page-static-assets/ken.webp',
          videoUrl: 'https://www.youtube.com/embed/Cp4jlgbXFAI?rel=0&amp;autoplay=1&amp;enablejsapi=1',
          showModal: false,
        },
        {
          userName: 'Susan Bish',
          location: 'Denver, NC',
          thumbnail: 'https://dtpwvruv8ddnl.cloudfront.net/home-page-static-assets/susan.webp',
          videoUrl: 'https://www.youtube.com/embed/v_q3pf0YfbA?rel=0&autoplay=1&enablejsapi=1',
          showModal: false,
        },
        {
          userName: 'Brandon Fletcher',
          location: 'Cincinnati, OH',
          thumbnail: 'https://dtpwvruv8ddnl.cloudfront.net/home-page-static-assets/brandon.webp',
          videoUrl: 'https://www.youtube.com/embed/4A4m6ssDOz8?rel=0&autoplay=1&enablejsapi=1',
          showModal: false,
        },
      ],
    };
  },
  methods: {
    openModal(index) {
      this.videos[index].showModal = true;
    },
    closeModal(index) {
      this.videos[index].showModal = false;
    },
  },
  }
</script>

<template>
  <div class="w-full rounded-lg border border-[#00000026] px-4 py-4.5">
    <h2 class="text-lg leading-27 font-semibold text-black mb-1">Real People. Real Stories.</h2>
    <p class="text-sm md:text-base md:leading-5 text-ruby-gamma font-normal mb-4">See how buyers & sellers across America are saving on commission using Houzeo technology</p>
    <div class="grid grid-cols-3 gap-3 mb-[21px]">
      <a v-for="(video, index) in videos" :key="index" @click="openModal(index)" class="w-full cursor-pointer p-1 transition-shadow duration-300 hover:shadow-lg rounded-lg">
        <div class="relative rounded-lg overflow-hidden mb-1">
          <img class="w-full h-auto" :src="video.thumbnail" width="99" height="70" :alt="video.userName">
          <div class="w-full h-full bg-black/30 absolute top-0 left-0"></div>
          <span class="bg-no-repeat bg-contain inline-block w-6 h-6 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" style="background-image: url(/src/assets/icons/play-button.png)"></span>
        </div>
        <p class="text-xs leading-18 font-semibold text-ruby-alpha">{{ video.userName }}</p>
        <p class="text-10 leading-4 text-black/50">{{ video.location }}</p>
      </a>
    </div>
    <div class="text-right">
      <a href="#" class="text-sm leading-21 font-medium text-black underline">View All Stories</a>
    </div>

    <div v-for="(video, index) in videos" :key="index">
      <div v-if="video.showModal" @click="closeModal(index)" class="w-full h-screen fixed top-0 left-0 bg-black/50 z-40"></div>
      <div v-if="video.showModal" class="w-full md:w-242.5 md:h-[600px] h-[400px] bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <iframe :src="video.videoUrl" autoplay frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-full h-full"></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>