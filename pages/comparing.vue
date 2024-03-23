<template>
  <main>
    <section id="comparing" class="w-full px-16 py-[60px]">
      <div class="flex justify-between items-center">
        <div class="flex flex-col gap-3">
          <customBreadCrumb :breadCrumb="breadCrumb" />
          <h1 class="font-medium font-ttfirs text-4xl">Список сравнения</h1>
          <p class="text-base font-ttfirs">Товаров: 5</p>
        </div>
        <div class="flex items-center gap-10">
          <nuxt-link to="/comparing" class="text-orange underline font-ttfirs text-xl">Очистить</nuxt-link>
          <a-select default-value="Техника">
            <a-select-option value="Техника">
              Техника
            </a-select-option>
            <a-select-option value="Подарки">
              Подарки
            </a-select-option>
            <a-select-option value="Мебель">
              Мебель
            </a-select-option>
          </a-select>
        </div>
      </div>
      <div class="mt-4">
        <VueSlickCarousel :slidesPerRow="5" :slidesToScroll="1 / 5" :infinite="true" :arrows="true">
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
          <div v-for="item in 10" :key="item">
            <customCartDescriptive />
          </div>
        </VueSlickCarousel>
      </div>
      <div class="w-full flex items-center justify-center py-7 gap-6 flex-col">
        <img src="~/assets/icon/empty-1.svg" alt="empty">
        <h2 class="font-ttfirs text-4xl">Сравнивать пока нечего</h2>
        <p class="text-center font-ttfirs text-grey-text text-lg max-w-[60%]">Добавляйте товары к сравнению характеристик и выбирайте самый подходящий вам товар</p>
      </div>
    </section>
  </main>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
export default {
  components: {
    VueSlickCarousel
  },
  data: () => {
    return {
      breadCrumb: [
        { name: 'Главная', url: '/' },
        { name: 'Сравнение', url: '/comparing' },
      ]
    }
  }
}
</script>
<style>
#comparing .custom-arrow {
  border: 1px solid #EBEBEB;
  top: 0;
}

#comparing .custom-arrow.custom-arrow--left {
  left: 0;
  transform: translate(-50%, 250px);
}

#comparing .custom-arrow.custom-arrow--right {
  right: 0;
  transform: translate(50%, 250px);
}
</style>