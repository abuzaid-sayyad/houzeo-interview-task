<script>
  import webHeader from './webHeader.vue';
  import webFooter from './webFooter.vue';
  import ProductHeader from './productHeader.vue';
  export default {
    name: 'layout',
    components:{webHeader, webFooter, ProductHeader},
  }
</script>

<template>
  <web-header></web-header>
  <product-header></product-header>
  <main class="py-7.5 md:mt-41 mt-51">
    <div class="container">
      <div class="md:flex gap-8">
        <slot></slot>
      </div>
    </div>
  </main>
  <web-footer></web-footer>
</template>

<style scoped>

</style>
