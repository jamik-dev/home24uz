<template>
  <div class="w-full grid grid-cols-10 gap-8 mt-6">
    <div v-for="item in 7" :key="item"
      class="col-span-2 bg-grey-4 rounded-lg group flex flex-col cursor-pointer justify-between h-full w-full p-6">
      <img class="w-full" src="~/assets/img/techniques/1.png" alt="image">
      <nuxt-link :to="`/category/${$route.params.category}/office`"
        class="group-hover:text-orange text-black font-ttfirs text-xl duration-200 text-center">Бытовая
        техника</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style>

</style>