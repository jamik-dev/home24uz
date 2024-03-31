<template>
  <section id="bestsellers" class="mt-[120px]">
    <div class="flex gap-6 items-end">
      <h2 class="text-4xl font-ttfirs">Хиты продаж</h2>
      <nuxt-link to="/popular" class="text-orange underline font-ttfirs text-xl">Все товары</nuxt-link>
    </div>
    <div class="w-full grid grid-cols-12 gap-6 mt-6">
      <customCartDefault v-for="product in bestseller_products" :key="product.id"
        :data="product" />
    </div>
  </section>
</template>
<script>
export default {
  props: ['bestseller_products']
}
</script>
<style lang="">

</style>