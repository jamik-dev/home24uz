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
      <customProductBestSeller />
      <section id="banner" class="mt-[120px]">
        <div class="w-full h-auto">
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
        <div class="flex gap-6 items-end">
          <h2 class="text-4xl font-ttfirs">Популярные бренды</h2>
          <nuxt-link to="/" class="text-orange underline font-ttfirs text-xl">Смотреть все</nuxt-link>
        </div>
        <div class="w-full grid grid-cols-12 gap-6 mt-6">
          <div v-for="item in 12" :key="item" class="col-span-2">
            <div class="rounded-lg border overflow-hidden border-grey-3 flex justify-center items-center"><img
                class="object-cover h-[160px]" src="~/assets/img/brands/1.png" alt="brands"></div>
          </div>
        </div>
      </section>
      <section id="clients-review" class="mt-[140px]">
        <h2 class="text-4xl font-ttfirs">Фото довольных клиентов</h2>
        <div class="w-full mt-6">
          <VueSlickCarousel class="gap-4" :slidesPerRow="4" :slidesToScroll="1 / 4" :infinite="true" :arrows="true">
            <template #prevArrow="arrowOption">
              <div class="custom-arrow custom-arrow--left">
                <a-icon type="arrow-left" />
              </div>
            </template>
            <template #nextArrow="arrowOption">
              <div class="custom-arrow custom-arrow--right">
                <a-icon type="arrow-right" />
              </div>
            </template>
            <div v-for="item in 8" :key="item">
              <customCartClientReview />
            </div>
          </VueSlickCarousel>
        </div>
      </section>
      <section id="televisions" class="mt-[140px]">
        <div class="flex gap-6 items-end">
          <h2 class="text-4xl font-ttfirs">Телевизоры</h2>
          <nuxt-link to="/" class="text-orange underline font-ttfirs text-xl">Все товары</nuxt-link>
        </div>
        <div class="w-full grid grid-cols-12 gap-6 mt-14">
          <customCartDefault v-for="item in 12" :key="item"
            :data="{ img: require(`~/assets/img/electronics/3.png`), text: 'Телевизор Artel UA32H4101 32&quot;, серебристый', discount: 0, price: '3 512 750', price_old: '4 012 750', rating: '5.0' }" />
        </div>
        <div class="w-full mt-[120px] px-[96px] py-[72px] bg-grey-4 rounded-2xl relative">
          <div class="w-2/3 flex flex-col gap-4">
            <h2 class="font-ttfirs font-medium text-5xl">Заказывайте в новом приложении Маркета и получайте бонусы</h2>
            <p class="font-ttfirs text-2xl">Home24.uz скачать мобильное приложение</p>
            <div class="flex gap-6 items-center">
              <img class="w-[152px]" src="~/assets/img/google_play.png" alt="google play">
              <img class="w-[152px]" src="~/assets/img/app_store.png" alt="app store">
              <div class="flex items-center gap-6 ml-8">
                <img class="w-24" src="~/assets/img/qr_code.png" alt="qr code">
                <p class="text-grey-text text-xl max-w-[70%] font-ttfirs">Наведите камеру <br> на QR-код, чтобы найти
                  местоположение</p>
              </div>
            </div>
            <img class="absolute w-[250px] -top-8 right-[335px]" src="~/assets/img/iphone-1.png" alt="iphone">
            <img class="absolute w-[250px] -top-8 right-[65px]" src="~/assets/img/iphone-2.png" alt="iphone">
          </div>
        </div>
      </section>
      <section id="blog" class="mt-[140px]">
        <div class="flex gap-6 items-end">
          <h2 class="text-4xl font-ttfirs">Блог</h2>
          <nuxt-link to="/" class="text-orange underline font-ttfirs text-xl">Все блоги</nuxt-link>
        </div>
        <div class="w-full grid grid-cols-12 gap-6 mt-14">
          <div v-for="item in 4" :key="item"
            class="h-[270px] col-span-3 relative rounded-xl overflow-hidden bg-center bg-no-repeat bg-cover group w-full fit-content bg-[url(~/assets/img/blog/1.png)]">
            <div
              class="absolute h-full w-full top-0 left-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0)] flex items-end p-4">
              <h3
                class="font-semibold text-xl text-white max-w-[90%] group-hover:text-orange-2 duration-200 cursor-pointer">
                Поздравляем с ”8 марта” любимых женщин</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
export default {
  components: {
    VueSlickCarousel,
  },
}
</script>

<style>
.custom-arrow {
  width: 48px;
  height: 48px;
  font-size: 24px;
  color: #000;
  background-color: #FFFFFF;
  border-radius: 100%;
  display: flex;
  margin: 0;
  transform: translateY(-50%);
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.custom-arrow--left {
  left: 16px;
}

.custom-arrow--right {
  right: 16px;
}

.custom-arrow:active,
.custom-arrow:focus,
.custom-arrow:hover {
  background-color: #fff;
  color: #000;
}

.custom-arrow:before {
  display: none;
}

.slick-dots li button:before {
  display: none !important;
}

#clients-review .slick-slide>div {
  display: flex;
  gap: 24px;
}

#clients-review .slick-slide>div>div:first-child {
  margin-left: 24px;
}
</style>
