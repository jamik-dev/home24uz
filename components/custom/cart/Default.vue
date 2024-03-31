<template>
  <figure :class="`col-span-${12 / items}`" class="group flex flex-col gap-2 cursor-pointer h-full w-full">
    <div
      class="flex items-center justify-center rounded-2xl overflow-hidden h-[362px] border border-grey-3 p-4 relative">
      <div
        class="absolute z-[11] top-2 right-2 w-[40px] h-[40px] cursor-pointer bg-grey-light rounded-full flex justify-center items-center">
        <img src="~/assets/icon/heart.svg" alt="heart">
      </div>
      <div
        class="absolute z-[11] top-14 right-2 w-[40px] h-[40px] cursor-pointer bg-grey-light rounded-full flex justify-center items-center">
        <img src="~/assets/icon/swap.svg" alt="swap">
      </div>
      <div
        class="absolute h-full w-full top-0 left-0 z-10 text-base flex justify-center items-center transition-all ease translate-y-10 group-hover:translate-y-0 bg-[rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100">
        <button @click="SET_PRODUCT_MODAL_VISIBILITY(true)" class="px-5 py-4 bg-white rounded-full">Быстрый просмотр</button>
      </div>
      <img class="w-full h-hull object-cover" :src="data?.products[0].images[0].lg_img || require(`~/assets/img/chair/1.png`)" alt="image">
      <div v-if="data?.products[0].discount" class="absolute bottom-6 left-6 flex flex-col items-center justify-end">
        <svg class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[70%]" width="71" height="60"
          viewBox="0 0 71 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.39197 44.4974L31.5498 2.88616C33.9831 -0.471304 39.0073 -0.407333 41.3543 3.011L69.7678 44.3935C71.94 47.5571 70.617 51.933 67.0126 53.2503C42.5257 62.1992 26.8576 62.2496 3.93275 53.4015C0.350396 52.0189 -0.86143 47.6066 1.39197 44.4974Z"
            fill="#E90A0A" />
        </svg>
        <p class="font-ttfirs text-white text-xs leading-[0.8] z-10">скидки</p>
        <h4 class="text-base text-white font-semibold leading-tight font-ttfirs mb-1 z-10">--{{ data?.products[0].discount }}%</h4>
      </div>
    </div>
    <div class="bg-grey-4 h-[calc(100%-370px)] relative py-3 px-4 rounded-2xl">
      <button
        class="absolute top-3 right-3 border border-orange h-12 w-12 flex items-center justify-center rounded-full">
        <localSvgBuy class="w-5 h-5" fill="#FF6418" />
      </button>
      <div>
        <h3 class="font-ttfirs text-xl">{{ data?.products[0].price }} сум</h3>
        <h4 v-if="data?.products[0].discount_price" class="line-through text-grey-5 text-base mt-1">{{ data?.products[0].discount_price }} сум</h4>
        <p class="text-lg font-ttfirs flex items-center gap-2"><a-icon type="star" :style="{ color: '#F6C65C' }"
            theme="filled" /><span>{{ data?.stars || '5.0' }}</span></p>
      </div>
      <figcaption class="text-base leading-snug font-medium mt-2 line-clamp-2">
        <nuxt-link class="text-black hover:text-orange" :to="`/category/nimadir/nimadir/${data?.products[0].slug}`">
          {{ data?.name }}
        </nuxt-link>
      </figcaption>
    </div>

    <localProductModal v-if="isProductModalVisible" :slug="this.data.products[0].slug" />
  </figure>
</template>
<script>
import {mapMutations, mapGetters} from 'vuex'
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    items: {
      type: Number,
      default: 6
    },
  },
  computed: {
    ...mapGetters(['isProductModalVisible'])
  },
  methods: {
    ...mapMutations(['SET_PRODUCT_MODAL_VISIBILITY'])
  }
}
</script>
<style></style>