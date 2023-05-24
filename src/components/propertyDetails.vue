<script>
  export default {
    name: 'propertyDetails',
    data() {
    return {
      items:[
        {itemsData:[
          {title: 'Type', info:'Single Family'},
          {title: 'Status', info:'Active'},
          {title: 'Days on Market', info:'5'},
          {title: 'Open House', info:'Not Scheduled'},
          {title: 'County', info:'Lincoln'},
          {title: 'MLS Name', info:'Montana Regional MLS'},
          {title: 'MLS Number', info:'22208962'},
        ]},
        {itemsData:[
          {title: 'Year Built', info:'2002'},
          {title: 'Finished Area', info:'1,837 sq.ft.'},
          {title: 'Lot Size', info:'0.18 acres'},
          {title: 'Basement', info:'600 sq.ft.'},
          {title: 'No. of Stories', info:'2'},
          {title: 'HOA Fees', info:'$110'},
          {title: 'Buyer Agent Commission', info:'2%'},
        ]}
      ]
    };
  },
  }
</script>

<template>
  <div class="w-full mb-4">
    <h2 class="text-xl leading-30 font-semibold text-black mb-4">Property Details</h2>
    <div v-for="item in items" :key="item" class="border-t border-black/15">
      <div v-for="ele in item.itemsData" :key="ele" class="flex">
        <div class="md:w-48.5 w-37.5 flex-shrink-0 px-5 bg-[#FAFAFC] py-[9px]">
          <p class="text-sm md:text-base md:leading-25 text-black font-medium">{{ ele.title }}</p>
        </div>
        <div class="w-full py-[9px] md:pl-14 pl-7">
          <p class="text-sm md:text-base md:leading-25 text-black font-normal">{{ ele.info }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
