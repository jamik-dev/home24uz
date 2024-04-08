<template>
  <section class="w-full bg-grey-light px-16 py-8">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-9">
        <client-only>
          <customCarousel :arrows="true">
            <div v-for="banner in top_banners" :key="banner.id" class="w-full h-[400px] rounded-3xl overflow-hidden">
              <img class="w-full h-full object-cover" :src="banner.lg_img || require(`~/assets/img/banner/1.png`)"
                :alt="banner.link">
            </div>
          </customCarousel>
        </client-only>
      </div>
      <div class="col-span-3">
        <client-only>
          <customCarousel class="h-full bg-white rounded-3xl">
            <figure v-for="product in day_products" :key="product.products[0].id" class="px-8 py-7">
              <div class="flex justify-between items-center">
                <h3 class="uppercase font-ttfirs text-2xl">товар дня</h3>
                <div @click="saveLocalStorage({ id: product?.products[0]?.id, name: `favorites` })"
                  class="w-[40px] h-[40px] cursor-pointer bg-grey-light rounded-full flex justify-center items-center">
                  <localSvgHeart :fill="favorites.includes(product?.products[0]?.id) ? '#FF6418' : '#020105'" />
                </div>
              </div>
              <div class="flex gap-4 mt-8 items-center">
                <div class="w-1/2 h-[246px]">
                  <img class="h-full w-full object-cover"
                    :src="product.products[0].images[0].lg_img || `~/assets/img/chair/1_cropped.png`"
                    :alt="product.products[0].for_search">
                </div>
                <div class="w-1/2">
                  <div class="rounded-xl overflow-hidden relative w-[150px] px-[10px] py-1 bg-grey-light"><span
                      class="text-lg">Cкидка</span>
                    <div
                      class="absolute top-0 right-0 skidka bg-orange-2 h-full w-1/2 flex items-center justify-center">
                      <span v-if="product.products[0].discount" class="text-xl font-bold text-white">-{{
            product.products[0].discount }}%</span>
                      <span v-else class="text-xl font-bold text-white">0%</span>
                    </div>
                  </div>
                  <div class="mt-4">
                    <h3 class="text-xl font-md font-ttfirs">{{ product.products[0].price }} <span
                        class="ml-2 font-normal text-sm uppercase">сум</span></h3>
                    <p v-if="product.products[0].discount_price"
                      class="font-ttfirs line-through text-[16px] text-grey-text">{{ product.products[0].discount_price
                      }}</p>
                  </div>
                  <div class="mt-4 flex items-center gap-1">
                    <img class="w-4" src="~/assets/icon/star.svg" alt="star">
                    <span class="text-grey-text font-ttfirs text-base">Нет отзывов</span>
                  </div>
                  <div class="mt-3">
                    <nuxt-link :to="`/category/nimadir/nimadir/${product.products[0].slug}`"
                      class="text-lg text-grey-text hover:text-orange leading-tight line-clamp-3">{{
            product.products[0].name }}</nuxt-link>
                  </div>
                  <button @click="saveCart(product.products[0].id)"
                    class="px-6 mt-4 py-[10px] rounded-lg bg-orange text-white text-base font-ttfirs flex gap-2 items-center">
                    <localSvgBag fill="#fff" /> в карзину
                  </button>
                </div>
              </div>
            </figure>
          </customCarousel>
        </client-only>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  props: {
    day_products: {
      type: Array,
      default: () => []
    },
    top_banners: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapGetters(['favorites', 'carts']),
  },
  methods: {
    ...mapActions(['saveLocalStorage']),
    saveCart(id) {
      if (!this.carts.includes(id)) {
        this.saveLocalStorage({ id, name: `carts` })
        this.$notification.success({
          message: 'Успешно',
          description: 'Товар добавлен в корзину'
        })
      } else {
        this.$notification.error({
          message: 'Ошибка',
          description: 'Товар уже добавлен в корзину'
        })
      }
    }
  }
}
</script>
<style scoped>
.skidka {
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);
}
</style>