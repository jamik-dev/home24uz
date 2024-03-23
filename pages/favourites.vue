<template>
  <main>
    <section id="favourites" class="w-full px-16 py-[60px]">
      <div class="flex justify-between items-center">
        <div class="flex flex-col gap-3">
          <customBreadCrumb :breadCrumb="breadCrumb" />
          <h1 class="font-medium font-ttfirs text-4xl">Список сравнения</h1>
          <p class="text-base font-ttfirs">Товаров: 5</p>
        </div>
        <div class="flex items-center gap-10">
          <nuxt-link to="/favourites" class="text-orange underline font-ttfirs text-xl">Очистить</nuxt-link>
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
      <div v-if="!isEmpty" class="w-full grid grid-cols-12 gap-6 mt-4">
        <customCartDefault v-for="item in 12" :key="item"
          :data="{ img: require(`~/assets/img/electronics/1.png`), text: 'Электросамокат Xiaomi Mi Electric Scooter 3 до 100 кг, черный', discount: 0, price: '3 512 750', price_old: '', rating: '5.0' }" />
      </div>
      <customEmptyDefault v-if="isEmpty">
        <template #image>
          <img src="~/assets/icon/empty-2.svg" alt="empty">
        </template>
        <template #title>
          В избранном пока ничего нет
        </template>
        <template #description>
          Вы можете добавлять товары кликая на сердечко, которое ноходитсяпрямо на карточке товара
        </template>
      </customEmptyDefault>
      <customProductBestSeller v-if="isEmpty" />
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
        { name: 'Избранное', url: '/favourites' },
      ],
      isEmpty: false,
    }
  }
}
</script>
<style>
#favourites .custom-arrow {
  border: 1px solid #EBEBEB;
  top: 0;
}

#favourites .custom-arrow.custom-arrow--left {
  left: 0;
  transform: translate(-50%, 250px);
}

#favourites .custom-arrow.custom-arrow--right {
  right: 0;
  transform: translate(50%, 250px);
}
</style>