<template>
  <section id="product">
    <a-modal :width="'600px'" @cancel="closeModal" v-model="isModalOpen" :footer="false"
      :title="isOneClickBuy && !isOneClickBuySuccessful ? 'Купить в один клик' : isOneClickBuySuccessful || isRatingSuccessful ? 'Отзыв принят' : 'Новый отзыв'"
      centered>
      <div v-if="!isRatingSuccessful && !isOneClickBuy && !isOneClickBuySuccessful" class="space-y-8 w-full p-2">
        <div class="gap-3 flex items-center">
          <h4 class="font-medium text-lg">Ваша оценка:</h4>
          <a-rate style="font-size: 24px;" :default-value="0" />
        </div>
        <div>
          <h4 class="font-medium text-grey-text text-lg">Отзыв</h4>
          <textarea rows="6"
            class="border mt-2 w-full outline-none text-black focus:border-orange border-grey-3 rounded-lg text-base placeholder:text-grey-text p-4"
            placeholder="Опишите общее впечателение: срок использования, критерии при выборе"></textarea>
        </div>
        <button @click="isRatingSuccessful = true"
          class="rounded-lg border border-orange bg-orange text-white hover:bg-white hover:text-orange duration-200 py-3 w-full font-medium text-lg">Оставить
          отзыв</button>
      </div>
      <div v-if="!isRatingSuccessful && isOneClickBuy && !isOneClickBuySuccessful" class="space-y-6 w-full p-2">
        <div class="flex gap-3 w-full">
          <div class="h-[80px] w-[80px] rounded-lg overflow-hidden border-grey-3 border">
            <img class="w-full h-full object-contain" src="~/assets/img/chair/1.png" alt="chair">
          </div>
          <div class="w-[calc(100%-92px)]">
            <h5 class="font-medium text-base">ОФИСНОЕ КРЕСЛО 6206A-2
              ОФИСНОЕ КРЕСЛО 6206A-2
              ОФИСНОЕ КРЕСЛО 6206A-2</h5>
            <div class="flex items-center justify-between mt-2">
              <p class="text-base">1 200 000 сум</p>
              <div class="border border-grey-3 w-fit rounded-lg flex">
                <button @click="count--" class="w-12 h-12 flex items-center justify-center cursor-pointer"><a-icon
                    type="minus" /></button>
                <p class="w-12 h-12 text-lg font-ttfirs flex items-center justify-center">{{ count }}</p>
                <button @click="count++" class="w-12 h-12 flex items-center justify-center cursor-pointer"><a-icon
                    type="plus" /></button>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-grey-3 h-[1px] w-full"></div>
        <div>
          <label class="text-black text-lg font-medium" for="oneClickFullName">Ф.И.О<span class="text-red">
              *</span></label>
          <input
            class="mt-2 w-full text-black placeholder:text-grey-text p-4 border border-grey-3 rounded-lg text-lg focus:border-orange outline-none"
            placeholder="Ф.И.О" type="text" id="oneClickFullName" />
        </div>
        <div>
          <label class="text-black text-lg font-medium" for="oneClickFullName">Телефон<span class="text-red">
              *</span></label>
          <input
            class="mt-2 w-full text-black placeholder:text-grey-text p-4 border border-grey-3 rounded-lg text-lg focus:border-orange outline-none"
            placeholder="+998 (--)--- -- --" type="text" id="oneClickFullName" />
        </div>
        <button @click="isOneClickBuySuccessful = true"
          class="rounded-lg border border-orange bg-orange text-white hover:bg-white hover:text-orange duration-200 py-3 w-full font-medium text-lg">Оформить</button>
      </div>
      <div v-if="isRatingSuccessful || isOneClickBuySuccessful" class="space-y-8 w-full p-2 flex flex-col items-center">
        <div class="w-20 h-20 rounded-full bg-green-2 flex items-center justify-center">
          <img src="~/assets/icon/check.svg" alt="check">
        </div>
        <h3 v-if="isRatingSuccessful && !isOneClickBuySuccessful" class="text-xl font-medium text-center">
          Ваш отзыв успешно добавлен!<br />
          Он появится на сайте после проверки.
        </h3>
        <h3 v-else class="text-xl font-medium text-center max-w-[80%]">
          Заказ оформлен. Мы свяжемся
          с вами в ближайшее время
        </h3>
        <button @click="closeModal"
          class="rounded-lg border border-orange bg-orange text-white hover:bg-white hover:text-orange duration-200 py-3 w-full font-medium text-lg">Хорошо
        </button>
      </div>
    </a-modal>
    <div class="w-full px-16 py-[60px]">
      <customBreadCrumb :breadCrumbData="breadCrumb" />
      <div class="flex gap-8 mt-10 items-start">
        <div class="w-5/12 flex items-start">
          <div class="mr-2 first_slide">
            <VueSlickCarousel :vertical="true" :verticalSwiping="true" :arrows="false" @afterChange="activeItem"
              :ref="slideTwo" :asNavFor="c1" :slidesToShow="6" :focusOnSelect="true">
              <div v-for="(img, index) in product.images" :key="img.id">
                <div :class="{ 'border-orange': index === activeSlider }"
                  class="h-[80px] w-[80px] mx-auto border border-grey-4 rounded-xl cursor-pointer p-1">
                  <img class="object-contain w-full h-full" :src="img.lg_img || require(`~/assets/img/chair/2.png`)"
                    :alt="product.for_search">
                </div>
              </div>
            </VueSlickCarousel>
          </div>
          <div class="rounded-lg w-[calc(100%-85px)] border border-grey-4 p-2 relative">
            <div
              @click="product?.info.brand?.slug ? $router.push(`/brands/${product?.info.brand?.slug}`) : $router.push(`/brands`)"
              class="absolute cursor-pointer bg-white z-10 top-4 right-4 w-[70px] h-[70px] rounded-full overflow-hidden border border-grey-4 flex items-center justify-center">
              <img class="h-full w-full object-cover"
                :src="product?.info.brand?.lg_logo || require(`~/assets/img/logos/1.png`)"
                :alt="product?.info.brand?.name">
            </div>
            <div v-if="product.discount" class="z-10 absolute bottom-4 right-10 flex flex-col items-center justify-end">
              <svg class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[70%]" width="71" height="60"
                viewBox="0 0 71 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.39197 44.4974L31.5498 2.88616C33.9831 -0.471304 39.0073 -0.407333 41.3543 3.011L69.7678 44.3935C71.94 47.5571 70.617 51.933 67.0126 53.2503C42.5257 62.1992 26.8576 62.2496 3.93275 53.4015C0.350396 52.0189 -0.86143 47.6066 1.39197 44.4974Z"
                  fill="#E90A0A" />
              </svg>
              <p class="font-ttfirs text-white text-xs leading-[0.8] z-10">скидки</p>
              <h4 class="text-base text-white font-semibold leading-tight font-ttfirs mb-1 z-10">{{ product.discount }}%
              </h4>
            </div>
            <VueSlickCarousel :arrows="false" :ref="slideOne" :asNavFor="c2" :focusOnSelect="true">
              <div v-for="img in product.images" :key="img.id" class="h-[450px]">
                <img class="object-contain w-full h-full" :src="img.lg_img || require(`~/assets/img/chair/1.png`)"
                  :alt="product.for_search">
              </div>
            </VueSlickCarousel>
          </div>
        </div>
        <div class="w-4/12">
          <div class="flex items-center justify-between text-grey-text text-base">
            <p class="flex items-center gap-1"><a-icon type="star" :style="{ color: '#F6C65C' }" theme="filled" /><span
                class="text-black">{{ product.info.stars ? product.info.stars : '5.0' }}</span></p>
            <p class="flex items-center gap-1"><a-icon type="message" /> {{ product.info.comments.length }} Отзывов</p>
            <p>Код товара: {{ product.id }}</p>
            <p class="flex items-center gap-2"><img src="~/assets/icon/print.svg" alt="print"> Печатать</p>
          </div>
          <h2 class="text-3xl font-medium mt-4 font-ttfirs max-w-[80%]">{{ product.name }}</h2>
          <div class="mt-6">
            <div class="space-y-4">
              <p v-if="product?.info.brand?.name" class="text-grey-6 text-lg">Производитель:<span
                  class="font-ttfirs ml-2 text-black font-medium">{{ product?.info.brand?.name }}</span></p>
              <p v-if="product.model" class="text-grey-6 text-lg">Модель:<span
                  class="font-ttfirs ml-2 text-black font-medium">{{ product.model }}</span>
              </p>
            </div>
            <div class="space-y-6 mt-6">
              <div v-for="attribute in attributes" :key="attribute.title">
                <p class="text-grey-6 text-lg mb-2">{{ attribute.title }}:</p>
                <localCategoryColorPicker v-if="attribute.title == 'Color' || attribute.title == 'Цвет'"
                  :rectangle="true" :fit="true" :colors="attribute.options" />
                <div v-else class="flex gap-3">
                  <div v-for="option in attribute.options" :key="option.slug"
                    @click="option.available ? $router.push(option.slug) : ''"
                    :style="{ borderColor: option.active ? '#FF6418' : '', color: option.active ? '#FF6418' : '' }"
                    class="border cursor-pointer border-grey-3 rounded-lg py-1 px-2 text-grey-text font-ttfirs text-lg">
                    {{ option.title }}</div>
                </div>
              </div>
              <div>
                <p class="text-grey-6 text-lg mb-2">Количество:</p>
                <div class="flex items-center gap-4">
                  <div class="border border-grey-3 w-fit rounded-lg flex">
                    <button @click="count--" class="w-12 h-12 flex items-center justify-center cursor-pointer"><a-icon
                        type="minus" /></button>
                    <p class="w-12 h-12 text-lg font-ttfirs flex items-center justify-center">{{ count }}</p>
                    <button @click="count++" class="w-12 h-12 flex items-center justify-center cursor-pointer"><a-icon
                        type="plus" /></button>
                  </div>
                  <p class="text-grey-text text-base">Осталось всего {{ product.stock }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-3/12">
          <div class="bg-grey-4 p-6 rounded-lg">
            <div class="flex justify-between mb-10">
              <div>
                <h3 class="font-ttfirs font-medium text-2xl">{{ product.price }} СУМ</h3>
                <h4 v-if="product.discount_price" class="font-ttfirs font-light text-lg text-grey-text line-through">{{
      product.discount_price }} СУМ</h4>
              </div>
              <div class="flex items-center gap-6">
                <div @click="saveLocalStorage({id: product.id, name: `compares`})">
                  <localSvgCompare class="w-6 h-6 cursor-pointer"
                  :fill="compares.includes(product?.id) ? '#FF6418' : '#020105'" />
                </div>
                <div @click="saveLocalStorage({id: product.id, name: 'favorites'})">
                  <localSvgHeart class="w-6 h-6 cursor-pointer"
                  :fill="favorites.includes(product?.id) ? '#FF6418' : '#020105'" />
                </div>
              </div>
            </div>
            <button @click="saveCart"
              class="flex w-full justify-center items-center py-4 bg-orange text-white gap-2 rounded-lg text-lg border-orange">
              <localSvgBuy class="w-6 h-6" />Добавить в корзину
            </button>
            <button @click="openIsOneClickBuy"
              class="flex w-full justify-center items-center text-center py-4 bg-white text-orange gap-2 border border-orange rounded-lg text-lg mt-3">
              <localSvgTap fill="#FF6418" />Купить в один клик
            </button>
          </div>
          <div class="border border-grey-3 rounded-lg p-6 w-full relative mt-8">
            <div class="w-2/3 flex flex-col justify-between">
              <h4 class="text-xl font-ttfirs font-medium">Доставка</h4>
              <p class="text-lg font-ttfirs text-grey-text">Доставка к курьером на дом</p>
            </div>
            <img class="absolute bottom-4 right-1 w-[175px] scale-x-[-1]" src="~/assets/img/default/2.png"
              alt="delivery">
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
      <div class="w-full mt-10">
        <ul class="font-ttfirs list-none flex gap-8 text-grey-6 text-lg">
          <li v-for="(item, index) in navigationMenus" :key="index" @click="navigateMenu(index)"
            :style="{ borderColor: item.isActive ? '#020105' : 'transparent' }"
            class="z-[1] duration-200 cursor-pointer py-2 border-b-[3px]">{{ item.title }}</li>
        </ul>
        <div class="w-full grid grid-cols-12 -mt-[1px]">
          <div v-if="navigationMenus[0].isActive" class="col-span-9 border-t border-grey-3 py-8">
            <div v-if="!!product.info?.desc" class="font-ttfirs text-base text-grey-text" v-html="product.info.desc">
            </div>
            <div v-else class="w-1/2 mx-auto">
              <customEmptyDefault :button="false">
                <template #image>
                  <img src="~/assets/icon/empty-4.svg" alt="comments page not found">
                </template>
                <template #title>
                  Описание не найдено
                </template>
                <template #description>
                  Описание данного товара не найдено
                </template>
              </customEmptyDefault>
            </div>
          </div>
          <div v-if="navigationMenus[1].isActive" class="col-span-9 border-t border-grey-3 py-8">
            <div v-if="product.info.comments.length > 0" class="w-4/5">
              <div v-for="item in product.info.comments.length" :key="item"
                class="border-b border-grey-3 py-8 first:pt-0 last:pb-0 last:border-0">
                <h4 class="text-base font-medium">Shaxram G’iyosov</h4>
                <div class="flex items-center mt-2 gap-8"><a-rate style="font-size: 16px" :default-value="5" disabled />
                  <p class="text-grey-text">16 октября 2022 г.</p>
                </div>
                <p class="text-grey-text text-base mt-4">Очень крутой кресло, качество на высшем уровне. Рекомендую
                  другим.
                  Очень крутой кресло, качество на высшем уровне. Рекомендую другим.Очень крутой кресло, качество на
                  высшем уровне. Рекомендую другим.Очень крутой кресло, качество на высшем уровне. Рекомендую
                  другим.Очень крутой кресло, качество на высшем уровне. Рекомендую другим.</p>
              </div>
            </div>
            <div v-else class="w-1/2 mx-auto">
              <customEmptyDefault :button="false">
                <template #image>
                  <img src="~/assets/icon/empty-5.svg" alt="comments page not found">
                </template>
                <template #title>
                  Ваш отзыв будет первым!
                </template>
                <template #description>
                  Оставьте отзыв, и другие пользователи будут вам благодарны.
                </template>
              </customEmptyDefault>
            </div>
          </div>
          <div v-if="navigationMenus[1].isActive" class="col-span-3 border-t border-grey-3 py-8 pl-8">
            <div class="w-full space-y-6">
              <div class="flex justify-between">
                <div class="flex items-center gap-4"><a-rate style="font-size: 20px" :default-value="5" disabled />
                  <p class="text-grey-text">5 оценок</p>
                </div>
                <p class="text-lg"><span class="font-medium">5/</span><span class="text-grey-text">5</span></p>
              </div>
              <div class="text-grey-text space-y-4">
                <div v-for="item in reverseKeys(5)" :key="item" class="flex items-center gap-4"><a-rate
                    style="font-size: 14px; width: 50%" :default-value="item + 1" disabled /><a-progress
                    :strokeWidth="4" :showInfo="false" :percent="(item + 1) * 20" size="small"
                    strokeColor="#FF7E00" /><span>{{ item + 1
                    }}</span></div>
              </div>
              <button @click="openRatingModal"
                class="rounded-lg border border-orange text-orange hover:bg-orange hover:text-white duration-200 py-3 w-full font-medium text-lg">Оставить
                первый отзыв</button>
            </div>
          </div>
          <div v-if="navigationMenus[2].isActive" class="col-span-9 border-t border-grey-3 py-8 space-y-10">
            <div v-if="characteristics.length" class="w-full space-y-10">
              <div v-for="characteristic in characteristics" :key="characteristic.id">
                <h3 class="font-medium text-lg">{{ characteristic.name }}</h3>
                <div class="w-full grid grid-cols-2 gap-x-[160px] gap-y-8 mt-5">
                  <p v-for="item in characteristic.characteristics" :key="item.id"
                    class="text-lg flex items-center gap-2"><span class="text-grey-text font-ttfirs text-nowrap">{{
      item.name }}:</span><span class="w-full mt-3 border-b border-grey-text border-dotted"></span><span
                      v-for="i in item.options" :key="i.id" class="text-black text-nowrap">{{ i.name }}</span>
                  </p>
                </div>
              </div>
            </div>
            <div v-else class="w-1/2 mx-auto">
              <customEmptyDefault :button="false">
                <template #image>
                  <img src="~/assets/icon/empty-4.svg" alt="comments page not found">
                </template>
                <template #title>
                  Характеристики не найдены
                </template>
                <template #description>
                  Характеристики данного товара не найдены
                </template>
              </customEmptyDefault>
            </div>
          </div>
        </div>
      </div>
      <customProductShowcase :showcase="showcases[0]" />
    </div>
  </section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import VueSlickCarousel from 'vue-slick-carousel'
export default {
  layout: 'userLayout',
  components: {
    VueSlickCarousel
  },
  async asyncData({ store, params }) {
    await store.dispatch('products/getProduct', params.slug);
    await store.dispatch('showcases/getShowcases');
  },
  data: () => {
    return {
      c1: null,
      c2: null,
      activeSlider: 0,
      sizeValues: {},
      count: 0,
      isModalOpen: false,
      isRatingSuccessful: false,
      isOneClickBuy: false,
      isOneClickBuySuccessful: false,
      breadCrumb: [
        { name: 'Главная', url: '/' },
      ],
      navigationMenus: [
        {
          title: 'Описание товара',
          isActive: true
        },
        {
          title: ``,
          isActive: false
        },
        {
          title: 'Характеристики',
          isActive: false
        }
      ],
    }
  },
  watch: {
    count(val) {
      if (val < 0) this.count = 0;
      if (val > this.product.stock) this.count = this.product.stock;
    }
  },
  computed: {
    ...mapGetters({
      product: 'products/product',
      attributes: 'products/attributes',
      characteristics: 'products/characteristics',
      showcases: 'showcases/showcases',
      carts: 'carts',
      compares: 'compares',
      favorites: 'favorites'
    }),
  },
  mounted() {
    this.breadCrumb.push({ name: this.product.name, url: `/product/${this.product.slug}` });
    this.navigationMenus[1].title = `Отзывы (${this.product.info.comments.length})`;
  },
  methods: {
    ...mapActions(['saveLocalStorage']),
    slideOne(el) {
      this.c1 = el;
    },
    slideTwo(el) {
      this.c2 = el;
    },
    activeItem(num) {
      this.activeSlider = num;
    },
    navigateMenu(index) {
      this.navigationMenus.forEach((item, i) => {
        if (i === index) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
      });
    },
    reverseKeys(n) {
      return [...Array(n).keys()].slice().reverse()
    },
    openRatingModal() {
      this.isModalOpen = true;
      this.isRatingSuccessful = false;
      this.isOneClickBuySuccessful = false;
      this.isOneClickBuy = false;
    },
    openIsOneClickBuy() {
      this.isOneClickBuySuccessful = false;
      this.isRatingSuccessful = false;
      this.isOneClickBuy = true;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    saveCart() {
      if (!this.carts.includes(this.product.id)) {
        this.saveLocalStorage({ id: this.product.id, name: `carts` })
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
<style>
#product .first_slide .slick-slide {
  width: auto !important;
}

#product .ant-rate {
  color: #FF7E00;
}

#product .slick-list {
  height: 528px;
}

/* .ant-rate .ant-rate-star-full .anticon-star {
} */
</style>