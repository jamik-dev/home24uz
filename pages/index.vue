<template>
  <main>
    <localHomeHero />
    <div class="w-full px-16 py-[120px]">
      <section id="category">
        <h2 class="text-4xl font-ttfirs">Категории</h2>
        <div class="w-full grid grid-cols-12 gap-8 mt-6">
          <div v-for="item in 12" :key="item"
            class="col-span-2 bg-grey-4 rounded-lg group flex flex-col cursor-pointer justify-between h-full w-full p-6">
            <img class="w-full" src="~/assets/img/techniques/1.png" alt="image">
            <h3 class="group-hover:text-orange font-ttfirs text-xl duration-200 text-center">Бытовая техника</h3>
          </div>
        </div>
      </section>
      <section id="bestsellers" class="mt-[120px]">
        <div class="flex gap-6 items-end">
          <h2 class="text-4xl font-ttfirs">Хиты продаж</h2>
          <nuxt-link to="/" class="text-orange underline font-ttfirs text-xl">Все товары</nuxt-link>
        </div>
        <div class="w-full grid grid-cols-12 gap-6 mt-6">
          <customCartDefault v-for="item in 6" :key="item"
            :data="{ img: require(`~/assets/img/chair/2.png`), text: 'Руководительское кресло Metta Комплект 5.1 (Чёрный)', discount: 30, price: '3 512 750', price_old: '3 512 750', rating: '5.0' }" />
        </div>
        <div class="w-full h-auto mt-[120px]">
          <client-only>
            <customCarousel :arrows="true" class="rounded-3xl">
              <img v-for="item in 3" :key="item" class="h-full" src="~/assets/img/banner/2.png" alt="banner">
            </customCarousel>
          </client-only>
        </div>
      </section>
      <section id="popular-products" class="mt-[120px]">
        <div class="flex gap-6 items-end">
          <h2 class="text-4xl font-ttfirs">Популярные товары</h2>
          <nuxt-link to="/" class="text-orange underline font-ttfirs text-xl">Все товары</nuxt-link>
        </div>
        <div class="w-full grid grid-cols-12 gap-6 mt-6">
          <customCartDefault v-for="item in 6" :key="item"
            :data="{ img: require(`~/assets/img/electronics/1.png`), text: 'Электросамокат Xiaomi Mi Electric Scooter 3 до 100 кг, черный', discount: 0, price: '3 512 750', price_old: '', rating: '5.0' }" />
        </div>
        <div class="w-full grid grid-cols-12 gap-6 mt-14">
          <div v-for="item in 4" :key="item" class="col-span-3">
            <img class="w-full" :src="require(`~/assets/img/banner/sub/${item}.png`)" alt="sub-banner">
          </div>
        </div>
        <div class="w-full grid grid-cols-12 gap-6 mt-14">
          <customCartDefault v-for="item in 6" :key="item"
            :data="{ img: require(`~/assets/img/electronics/2.png`), text: 'Смартфон Vivo V21e 8/128GB, черный', discount: 0, price: '812 750', price_old: '1 012 750', rating: '5.0' }" />
        </div>
      </section>
      <section id="popular-brands" class="mt-[140px]">
        
      </section>
    </div>
  </main>
</template>

<script>
export default {
}
</script>

<style scoped></style>
