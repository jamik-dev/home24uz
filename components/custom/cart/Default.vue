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
        <button @click="isModalVisible = true" class="px-5 py-4 bg-white rounded-full">Быстрый просмотр</button>
      </div>
      <img class="w-full object-cover scale-x-[-1]" :src="data.img" alt="image">
      <div v-if="data.discount" class="absolute bottom-6 left-6 flex flex-col items-center justify-end">
        <svg class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[70%]" width="71" height="60"
          viewBox="0 0 71 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.39197 44.4974L31.5498 2.88616C33.9831 -0.471304 39.0073 -0.407333 41.3543 3.011L69.7678 44.3935C71.94 47.5571 70.617 51.933 67.0126 53.2503C42.5257 62.1992 26.8576 62.2496 3.93275 53.4015C0.350396 52.0189 -0.86143 47.6066 1.39197 44.4974Z"
            fill="#E90A0A" />
        </svg>
        <p class="font-ttfirs text-white text-xs leading-[0.8] z-10">скидки</p>
        <h4 class="text-base text-white font-semibold leading-tight font-ttfirs mb-1 z-10">--{{ data.discount }}%</h4>
      </div>
    </div>
    <div class="bg-grey-4 h-[calc(100%-370px)] relative py-3 px-4 rounded-2xl">
      <button
        class="absolute top-3 right-3 border border-orange h-12 w-12 flex items-center justify-center rounded-full">
        <localSvgBuy class="w-5 h-5" fill="#FF6418" />
      </button>
      <div>
        <h3 class="font-ttfirs text-xl">{{ data.price }} сум</h3>
        <h4 v-if="data.price_old" class="line-through text-grey-5 text-base mt-1">{{ data.price_old }} сум</h4>
        <p class="text-lg font-ttfirs flex items-center gap-2"><a-icon type="star" :style="{ color: '#F6C65C' }" theme="filled" /><span>5.0</span></p>
      </div>
      <figcaption class="text-base leading-snug font-medium mt-2 line-clamp-2">{{ data.text }}
      </figcaption>
    </div>

    <a-modal :width="'auto'" v-model="isModalVisible" :footer="false" title="Vertically centered modal dialog" centered
      @ok="() => (isModalVisible = false)">
      <div class="w-full flex items-center gap-8">
        <div></div>
        <div class="space-y-8 w-full">
          <div class="flex items-center justify-between text-grey-text text-base">
            <p class="flex items-center gap-1"><a-icon type="star" :style="{ color: '#F6C65C' }" theme="filled" /><span class="text-black">5</span></p>
            <p class="flex items-center gap-1"><a-icon type="message" /> 10 Отзывов</p>
            <p>Код товара: 1375043</p>
          </div>
          <div class="bg-grey-4 p-6 rounded-lg">
            <div class="flex justify-between mb-10">
              <div>
                <h3 class="font-ttfirs font-medium text-2xl">25 880 000 СУМ</h3>
                <h4 class="font-ttfirs font-light text-lg text-grey-text line-through">25 880 000 СУМ</h4>
              </div>
              <div class="flex items-center gap-6">
                <img class="w-6" src="~/assets/icon/swap.svg" alt="swap">
                <img class="w-6" src="~/assets/icon/heart.svg" alt="heart"> 
              </div>
            </div>
            <button class="flex w-full justify-center items-center py-4 bg-orange text-white gap-2 rounded-lg text-lg border-orange"><localSvgBuy class="w-6 h-6" />Добавить в корзину</button>
            <button class="flex w-full justify-center items-center text-center py-4 bg-white text-orange gap-2 border border-orange rounded-lg text-lg mt-3"><localSvgTap fill="#FF6418"/>Купить в один клик</button>
          </div>
          <div class="space-y-3">
            <p class="text-lg flex items-center gap-2"><span class="text-grey-text">Производитель:</span><span class="w-full mt-3 border-b border-grey-text border-dotted"></span><span class="text-black">Китай</span></p>
            <p class="text-lg flex items-center gap-2"><span class="text-grey-text">bla:</span><span class="w-full mt-3 border-b border-grey-text border-dotted"></span><span class="text-black">blabla</span></p>
            <p class="text-lg flex items-center gap-2"><span class="text-grey-text">blabla:</span><span class="w-full mt-3 border-b border-grey-text border-dotted"></span><span class="text-black">blablabla</span></p>
            <p class="text-lg flex items-center gap-2"><span class="text-grey-text">Производитель:</span><span class="w-full mt-3 border-b border-grey-text border-dotted"></span><span class="text-black">Китай</span></p>
          </div>
          <nuxt-link class="flex items-center gap-2 group hover:text-orange text-lg text-orange-2" to="/">Подробнее о товаре <a-icon type="arrow-right" :style="{ color: '#FF7E00'}" /></nuxt-link>
        </div>
      </div>
    </a-modal>
  </figure>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    items: {
      type: Number,
      default: 6
    },
  },
  data: () => {
    return {
      isModalVisible: false
    }
  }
}
</script>
<style>
</style>