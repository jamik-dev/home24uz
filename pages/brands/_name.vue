<template>
  <main>
    <section id="brands_name" class="w-full grid grid-cols-12 gap-6 items-start px-16 py-[60px]">
      <div class="col-span-2">

      </div>
      <div class="col-span-10">
        <customBreadCrumb :breadCrumb="breadCrumb" />
        <div class="flex justify-between">
          <div class="flex items-center gap-4">
            <h1 class="font-medium font-ttfirs text-4xl">Популярные бренды</h1>
            <p class="text-lg text-grey-text">100 товаров</p>
          </div>
          <div class="flex items-center gap-16">
            <div class="flex gap-2 items-center">
              <p class="text-lg text-grey-text">Сортировка</p>
              <a-select default-value="Подешевле">
                <a-select-option value="Подешевле">
                  Подешевле
                </a-select-option>
              </a-select>
            </div>
            <div class="flex gap-4">
              <img class="w-8" src="~/assets/icon/9_cubes.svg" alt="filter_9">
              <img class="w-8" src="~/assets/icon/4_cubes.svg" alt="filter_4">
            </div>
          </div>
        </div>
        <div class="w-full grid grid-cols-10 gap-6 mt-4">
          <customCartDefault v-for="item in 12" :key="item"
            :items="6"
            :data="{ img: require(`~/assets/img/electronics/1.png`), text: 'Электросамокат Xiaomi Mi Electric Scooter 3 до 100 кг, черный', discount: 0, price: '3 512 750', price_old: '', rating: '5.0' }" />
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  data: () => {
    return {
      breadCrumb: [
        { name: 'Главная', url: '/' },
        { name: 'Бренды', url: '/brands' },
      ],
    }
  },
  mounted() {
    console.log(this.$route.params.name)
    this.breadCrumb.push({ url: '/brands/' + this.$route.params.name, name: this.$route.params.name })
  },
}
</script>
<style lang="">

</style>