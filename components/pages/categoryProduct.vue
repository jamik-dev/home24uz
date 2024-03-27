<template>
  <section id="category_product">
    <div class="w-full px-16 py-[60px]">
      <customBreadCrumb :breadCrumbData="breadCrumb" />
      <div class="flex gap-8 mt-10 items-start">
        <div class="w-1/3 flex">
          <div class="mr-2 first_slide">
            <VueSlickCarousel :vertical="true" :verticalSwiping="true" :arrows="false" @afterChange="activeItem"
              :ref="slideTwo" :asNavFor="c1" :slidesToShow="6" :focusOnSelect="true">
              <div v-for="(item, index) in 10" :key="item">
                <div :class="{ 'border-orange': index === activeSlider }"
                  class="h-[80px] w-[80px] mx-auto border border-grey-4 rounded-xl cursor-pointer p-1">
                  <img class="object-contain w-full h-full" src="~/assets/img/chair/2.png" alt="chair">
                </div>
              </div>
            </VueSlickCarousel>
          </div>
          <div class="rounded-lg w-[calc(100%-85px)] border border-grey-4 p-2 relative">
            <div
              class="absolute bg-white z-10 top-4 right-4 w-[70px] h-[70px] rounded-full border border-grey-4 flex items-center justify-center">
              <img class="w-4/5" src="~/assets/img/logos/1.png" alt="cougar">
            </div>
            <div class="z-10 absolute bottom-4 right-10 flex flex-col items-center justify-end">
              <svg class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[70%]" width="71" height="60"
                viewBox="0 0 71 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.39197 44.4974L31.5498 2.88616C33.9831 -0.471304 39.0073 -0.407333 41.3543 3.011L69.7678 44.3935C71.94 47.5571 70.617 51.933 67.0126 53.2503C42.5257 62.1992 26.8576 62.2496 3.93275 53.4015C0.350396 52.0189 -0.86143 47.6066 1.39197 44.4974Z"
                  fill="#E90A0A" />
              </svg>
              <p class="font-ttfirs text-white text-xs leading-[0.8] z-10">скидки</p>
              <h4 class="text-base text-white font-semibold leading-tight font-ttfirs mb-1 z-10">--30%
              </h4>
            </div>
            <VueSlickCarousel :arrows="false" :ref="slideOne" :asNavFor="c2" :focusOnSelect="true">
              <div v-for="item in 10" :key="item" class="h-[450px]">
                <img class="object-contain w-full h-full" src="~/assets/img/chair/1.png" alt="chair">
              </div>
            </VueSlickCarousel>
          </div>
        </div>
        <div class="w-5/12">
          <div class="flex items-center justify-between text-grey-text text-base">
            <p class="flex items-center gap-1"><a-icon type="star" :style="{ color: '#F6C65C' }" theme="filled" /><span
                class="text-black">5</span></p>
            <p class="flex items-center gap-1"><a-icon type="message" /> 10 Отзывов</p>
            <p>Код товара: 1375043</p>
            <p class="flex items-center gap-2"><img src="~/assets/icon/print.svg" alt="print"> Печатать</p>
          </div>
          <h2 class="text-3xl font-medium mt-4 font-ttfirs max-w-[80%]">ОФИСНОЕ КРЕСЛО 6206A-2</h2>
          <div class="mt-6">
            <div class="space-y-4">
              <p class="text-grey-6 text-lg">Производитель:<span
                  class="font-ttfirs ml-2 text-black font-semibold">Cougar</span></p>
              <p class="text-grey-6 text-lg">Модель:<span
                  class="font-ttfirs ml-2 text-black font-semibold">6206A-2</span></p>
            </div>
            <div class="mt-6">
              <p class="text-grey-6 text-lg mb-2">Цвет:</p>
              <localCategoryColorPicker :rectangle="true" :fit="true" :colors="['#000', '#E90A0A', '#F6C65C']" />
            </div>
            <div class="mt-6">
              <p class="text-grey-6 text-lg mb-2">Размер:</p>
              <a-radio-group v-model="sizeValues">
                <a-radio-button value="a">
                  32 gb
                </a-radio-button>
                <a-radio-button value="b">
                  64 gb
                </a-radio-button>
                <a-radio-button value="c">
                  128 gb
                </a-radio-button>
                <a-radio-button value="d">
                  256 gb
                </a-radio-button>
                <a-radio-button value="e">
                  512 gb
                </a-radio-button>
              </a-radio-group>
            </div>
            <div class="mt-6">
              <p class="text-grey-6 text-lg mb-2">Размер RAM:</p>
              <a-radio-group v-model="sizeValues">
                <a-radio-button value="a">
                  4 gb
                </a-radio-button>
                <a-radio-button value="b">
                  8 gb
                </a-radio-button>
                <a-radio-button value="c">
                  12 gb
                </a-radio-button>
                <a-radio-button value="d">
                  16 gb
                </a-radio-button>
                <a-radio-button value="e">
                  32 gb
                </a-radio-button>
              </a-radio-group>
            </div>
            <div class="mt-6">
              <p class="text-grey-6 text-lg mb-2">Количество:</p>
              <div class="flex items-center gap-4">
                <div class="border border-grey-3 w-fit rounded-lg flex">
                  <button @click="count--" class="w-12 h-12 flex items-center justify-center cursor-pointer"><a-icon
                      type="minus" /></button>
                  <p class="w-12 h-12 text-lg font-ttfirs flex items-center justify-center">{{ count }}</p>
                  <button @click="count++" class="w-12 h-12 flex items-center justify-center cursor-pointer"><a-icon
                      type="plus" /></button>
                </div>
                <p class="text-grey-text text-base">Осталось всего 4</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/4">
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
            <button
              class="flex w-full justify-center items-center py-4 bg-orange text-white gap-2 rounded-lg text-lg border-orange">
              <localSvgBuy class="w-6 h-6" />Добавить в корзину
            </button>
            <button
              class="flex w-full justify-center items-center text-center py-4 bg-white text-orange gap-2 border border-orange rounded-lg text-lg mt-3">
              <localSvgTap fill="#FF6418" />Купить в один клик
            </button>
          </div>
          <div class="border border-grey-3 rounded-lg p-6 w-full relative mt-8">
            <div class="w-2/3 flex flex-col justify-between">
              <h4 class="text-xl font-ttfirs font-medium">Доставка</h4>
              <p class="text-lg font-ttfirs text-grey-text">Доставка к курьером на дом</p>
            </div>
            <img class="absolute bottom-4 right-1 w-[175px] scale-x-[-1]" src="~/assets/img/default/2.png" alt="delivery">
          </div>
          <div class="border border-grey-3 rounded-lg p-6 w-full relative mt-6">
            <div class="w-full flex flex-col justify-between">
              <h4 class="text-xl font-ttfirs font-medium capitalize">Обратитесь к специалисту!</h4>
              <p class="text-lg font-ttfirs text-grey-text">Служба поддержки: <br /> (998-71) 200-7-002</p>
            </div>
            <img class="absolute bottom-0 -right-4 w-[140px]" src="~/assets/img/default/3.png" alt="delivery">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
export default {
  layout: 'userLayout',
  components: {
    VueSlickCarousel
  },
  data: () => {
    return {
      c1: null,
      c2: null,
      activeSlider: 0,
      sizeValues: [],
      count: 0,
    }
  },
  created() {
    this.routerCheck('/category');
  },
  methods: {
    slideOne(el) {
      this.c1 = el;
    },
    slideTwo(el) {
      this.c2 = el;
    },
    activeItem(num) {
      this.activeSlider = num;
    }
  }
}
</script>
<style>
#category_product .first_slide .slick-slide {
  width: auto !important;
}

.ant-radio-button-wrapper:not(:first-child)::before {
  width: 0;
}

.ant-radio-group {
  @apply flex gap-2;
}

.ant-radio-button-wrapper {
  @apply text-lg font-ttfirs h-auto px-4 py-1 rounded-lg;
  border-left: 1px solid #E0E0E0;
}

.ant-radio-button-wrapper:first-child {
  @apply rounded-lg;
}

.ant-radio-button-wrapper:last-child {
  @apply rounded-lg;
}

.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):first-child {
  border-color: #FF6418;
  color: #FF6418;
}

.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
  border-color: #FF6418;
}

.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
  border-color: #FF6418;
  color: #FF6418;
}

.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
  color: #FF6418;
}

.ant-radio-button-wrapper:hover {
  color: #FF6418;
}

.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before {
  background-color: #FF6418;
}

.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover::before {
  background-color: #FF6418;
}
</style>