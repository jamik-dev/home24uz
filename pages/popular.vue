<template>
  <main>
    <section id="popular" class="px-16 py-[60px]">
      <customBreadCrumb :breadCrumbData="breadCrumb" />
      <h1 class="font-medium font-ttfirs text-4xl mt-4">Xит товары</h1>
      <div class="w-full grid grid-cols-12 gap-6 items-start mt-12">
        <div class="col-span-2">
          <div class="space-y-10">
            <ul class="space-y-4">
              <li v-for="item in listOfCatalog" :key="item.name"><nuxt-link
                  class="text-black hover:text-orange-2 font-ttfirs text-xl"
                  :to="'/category/' + item.url">{{ item.name
                  }}</nuxt-link></li>
            </ul>
            <div>
              <h3 class="font-ttfirs text-xl">Цена</h3>
              <div class="mt-8">
                <div>
                  <a-slider v-model="price" range :min="10000" :max="10000000" />
                </div>
                <div class="flex gap-4 items-center mt-4">
                  <div class="relative overflow-hidden">
                    <span class="absolute top-1/2 left-2 -translate-y-1/2 text-base">от</span>
                    <input v-model="price[0]"
                      class="w-full py-2 pl-7 outline-none focus:border-orange pr-2 border bg-grey-4 border-[#d9d9d9] rounded-xl text-grey-text text-base"
                      type="text" />
                  </div>
                  <div class="relative overflow-hidden">
                    <span class="absolute top-1/2 left-2 -translate-y-1/2 text-base">от</span>
                    <input v-model="price[1]"
                      class="w-full py-2 pl-7 pr-2 outline-none focus:border-orange border bg-grey-4 border-[#d9d9d9] rounded-xl text-grey-text text-base"
                      type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-10">
          <div class="flex justify-end items-center gap-16">
            <div class="flex gap-2 items-center">
              <p class="text-lg text-grey-text">Сортировка</p>
              <a-select default-value="Подешевле">
                <a-select-option value="Подешевле">
                  Подешевле
                </a-select-option>
              </a-select>
            </div>
            <div class="flex gap-4">
              <div @click="gridOrder = true">
                <localSvgFourcubes :fill="gridOrder ? '#FF6418' : '#020105'" class="w-8 h-8 cursor-pointer" />
              </div>
              <div @click="gridOrder = false">
                <localSvgNinecubes :fill="!gridOrder ? '#FF6418' : '#020105'" class="w-8 h-8 cursor-pointer" />
              </div>
            </div>
          </div>
          <div :style="{gridTemplateColumns: `repeat(${gridOrder ? 6 : 10}, minmax(0, 1fr))`}" class="w-full grid gap-6 mt-4">
            <customCartDefault v-for="product in products?.data" :key="product.id" :items="6"
              :data="product" />
          </div>
          <div v-if="products?.total" class="w-full mt-16">
            <a-pagination :total="products.last_page" :item-render="itemRender" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  async asyncData({store}) {
    await store.dispatch('products/getProducts', {type: 'popular', limit: 0});
  },
  data: () => {
    return {
      breadCrumb: [
        { name: 'Главная', url: '/' },
        { name: 'Xит товары', url: '/popular' }
      ],
      price: [10000, 10000000],
      listOfCatalog: [
        { name: 'Телевизоры', url: `tv` },
        { name: 'Холодильники', url: `fridge` },
        { name: 'Выключатели и порты', url: `ports` },
        { name: 'Стиральная машина', url: `washing-machine` },
        { name: 'Кондиционеры', url: `conditioner` },
      ],
      gridOrder: false,
    }
  },
  computed: {
    ...mapGetters('products', ['products']),
  },
  methods: {
    itemRender(_, type, originalElement) {
      if (type === 'prev') {
        return;
      } else if (type === 'next') {
        return <a class="font-ttfirs hover:text-orange">Следующая страница &rarr;</a>;
      }
      return originalElement;
    },
  }
}
</script>
<style></style>