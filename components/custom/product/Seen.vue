<template>
  <section id="seen_products" class="mt-[120px]">
    <div class="flex gap-6 items-end">
      <h2 class="text-4xl font-ttfirs">Просмотренные товары</h2>
    </div>
    <div class="w-full grid grid-cols-12 gap-6 mt-6">
      <customCartDefault v-for="item in 6" :key="item"
        :data="{ img: require(`~/assets/img/chair/2.png`), text: 'Руководительское кресло Metta Комплект 5.1 (Чёрный)', discount: 0, price: '3 512 750', price_old: '3 512 750', rating: '5.0' }" />
    </div>
  </section>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>