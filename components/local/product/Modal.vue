<template>
  <a-modal :width="'1000px'" v-if="product" v-model="isProductModalVisible" :footer="false"
    :title="product?.name || 'default title'" centered @ok="isProductModalVisible = false">
    <div class="w-full flex gap-8">
      <div class="w-7/12">
        <div class="rounded-lg w-full border border-grey-4 p-2 relative">
          <div
            class="absolute bg-white overflow-hidden z-10 top-4 right-4 w-[75px] h-[75px] rounded-full border border-grey-4 flex items-center justify-center">
            <img class="w-full h-full object-cover"
              :src="product?.info.brand?.lg_logo || require(`~/assets/img/logos/1.png`)"
              :alt="product?.info.brand?.name">
          </div>
          <div v-if="product?.discount" class="z-10 absolute bottom-4 right-10 flex flex-col items-center justify-end">
            <svg class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[70%]" width="71" height="60"
              viewBox="0 0 71 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.39197 44.4974L31.5498 2.88616C33.9831 -0.471304 39.0073 -0.407333 41.3543 3.011L69.7678 44.3935C71.94 47.5571 70.617 51.933 67.0126 53.2503C42.5257 62.1992 26.8576 62.2496 3.93275 53.4015C0.350396 52.0189 -0.86143 47.6066 1.39197 44.4974Z"
                fill="#E90A0A" />
            </svg>
            <p class="font-ttfirs text-white text-xs leading-[0.8] z-10">скидки</p>
            <h4 class="text-base text-white font-semibold leading-tight font-ttfirs mb-1 z-10">--{{ product?.discount
              }}%
            </h4>
          </div>
          <VueSlickCarousel @beforeChange="syncSliders" v-if="product?.images" :arrows="false" :infinite="false"
            :ref="product?.id + 'c1'" :asNavFor="this.$refs[this.product?.id + 'c2']" :focusOnSelect="true">
            <div v-for="image in product?.images" :key="image.id" class="h-[450px] w-full">
              <img class="object-cover w-full h-full" :src="image.lg_img || require(`~/assets/img/chair/1.png`)"
                :alt="product?.for_search">
            </div>
          </VueSlickCarousel>
        </div>
        <div class="mt-6">
          <VueSlickCarousel @beforeChange="syncSliders" v-if="product?.images" :arrows="false" @afterChange="activeItem"
            :ref="product?.id + 'c2'" :asNavFor="this.$refs[this.product?.id + 'c1']" :slidesToShow="6"
            :focusOnSelect="true">
            <div v-for="(image, index) in product?.images" :key="image.id">
              <div :class="{ 'border-orange': index === activeSlider }"
                class="h-[80px] w-[80px] mx-auto border border-grey-4 rounded-xl cursor-pointer p-1">
                <img class="object-cover w-full h-full" :src="image.lg_img || require(`~/assets/img/chair/2.png`)"
                  :alt="product?.for_search">
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
      <div class="w-5/12 flex flex-col">
        <div class="space-y-8">
        <div class="flex items-center justify-between text-grey-text text-base">
          <p class="flex items-center gap-1"><a-icon type="star" :style="{ color: '#F6C65C' }" theme="filled" /><span
              class="text-black">{{ product?.info.stars || '5.0' }}</span></p>
          <p class="flex items-center gap-1"><a-icon type="message" /> {{ product?.info.comments.length }} Отзывов</p>
          <p>Код товара: {{ product?.info.default_product_id }}</p>
        </div>
        <div class="bg-grey-4 p-6 rounded-lg">
          <div class="flex justify-between mb-10">
            <div>
              <h3 class="font-ttfirs font-medium text-2xl">{{ product?.price }} СУМ</h3>
              <h4 v-if="product?.discount_price" class="font-ttfirs font-light text-lg text-grey-text line-through">{{
    product?.discount_price }}СУМ</h4>
            </div>
            <div class="flex items-center gap-6">
              <img class="w-6" src="~/assets/icon/swap.svg" alt="swap">
              <img class="w-6" src="~/assets/icon/heart.svg" alt="heart">
            </div>
          </div>
          <button
            class="flex w-full justify-center items-center py-4 bg-orange text-white gap-2 rounded-lg text-lg border-orange">
            <localSvgBuy class="w-6 h-6" />Добавить в корзину
          </button>
          <button
            class="flex w-full justify-center items-center text-center py-4 bg-white text-orange gap-2 border border-orange rounded-lg text-lg mt-3">
            <localSvgTap fill="#FF6418" />Купить в один клик
          </button>
        </div>
        <div class="space-y-3">
          <p v-for="attribute in attributes" :key="attribute.title" class="text-lg flex items-center gap-2"><span
              class="text-grey-text">{{ attribute.title }}:</span><span
              class="w-full mt-3 border-b border-grey-text border-dotted"></span><span class="text-black">{{
    attribute.options.filter(obj => obj.slug === product?.slug)[0].title }}</span>
          </p>
        </div>
      </div>
        <nuxt-link class="flex items-center mt-auto mb-2 gap-2 group hover:text-orange text-lg text-orange-2"
          :to="`/category/nimadir/nimadir/${product?.slug}`">Подробнее о
          товаре <a-icon type="arrow-right" :style="{ color: '#FF7E00' }" /></nuxt-link>
      </div>
    </div>
  </a-modal>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
export default {
  components: {
    VueSlickCarousel
  },
  props: {
    slug: {
      type: String,
    },
    modalVisible: {
      type: Boolean,
    }
  },
  data: () => {
    return {
      activeSlider: 0,
      isProductModalVisible: false,
    }
  },
  computed: {
    product() {
      return this.$store.getters['products/product'];
    },
    attributes() {
      return this.$store.getters['products/attributes'];
    },
  },
  created() {
    this.$store.dispatch('products/getProduct', this.slug);
    this.isProductModalVisible = this.modalVisible;
  },
  watch: {
    isProductModalVisible(val) {
      this.$emit('modalTrigger', val);
    }
  },
  methods: {
    activeItem(num) {
      this.activeSlider = num;
    },
    syncSliders(_, nextPosition) {
      this.$refs[this.product?.id + 'c1'].goTo(nextPosition)
      this.$refs[this.product?.id + 'c2'].goTo(nextPosition)
    },
    filterAttribute(slug) {
      return this.attributes.filter(obj => obj.slug === slug).title
    }
  }
}
</script>
<style lang="">

</style>