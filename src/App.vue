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
        <property-details></property-details>
      </div>
      <div class="md:w-33% w-full">            
        <schedule-showing></schedule-showing>
        <real-people-stories></real-people-stories>
      </div>
    </layout>
</template>

<style scoped>

</style>
