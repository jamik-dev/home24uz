<template>
  <main>
    <section id="comparing" class="w-full px-16 py-[60px]">
      <div class="flex justify-between items-center">
        <div class="flex flex-col gap-3">
          <customBreadCrumb :breadCrumbData="breadCrumb" />
          <h1 class="font-medium font-ttfirs text-4xl">Список сравнения</h1>
          <p class="text-base font-ttfirs">Товаров: 5</p>
        </div>
        <div class="flex items-center gap-10">
          <p @click="removeCompares" class="text-orange cursor-pointer hover:text-orange-2 underline font-ttfirs text-xl">Очистить</p>
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
      <div v-if="!isEmpty" class="mt-4">
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
      <customEmptyDefault v-if="isEmpty">
        <template #image>
          <img src="~/assets/icon/empty-1.svg" alt="empty">
        </template>
        <template #title>
          Сравнивать пока нечего
        </template>
        <template #description>
          Добавляйте товары к сравнению характеристики выбирайте самый подходящий вам товар
        </template> 
      </customEmptyDefault>
      <customProductShowcase v-if="isEmpty" :showcase="showcases[0]" />
    </section>
  </main>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import {mapGetters, mapActions} from 'vuex';
export default {
  components: {
    VueSlickCarousel
  },
  async asyncData({store}) {
    await store.dispatch('showcases/getShowcases');
  },
  data: () => {
    return {
      breadCrumb: [
        { name: 'Главная', url: '/' },
        { name: 'Сравнение', url: '/compare' },
      ],
      isEmpty: false,
    }
  },
  mounted() {
    if(this.compares.length < 2 ) {
      this.$notification.error({
        message: 'Ошибка',
        description: 'Добавьте товары для сравнения'
      });
      this.isEmpty = true;
    } else {
      this.isEmpty = false;
      this.getComparison(this.compares);
    }
  },
  computed: {
    ...mapGetters({
      comparison: 'comparison/comparison',
      compares: 'compares',
      showcases: 'showcases/showcases'
    })
  },
  methods: {
    ...mapActions({
      getComparison: 'comparison/getComparison',
    }),
    removeCompares() {
      this.$notification.success({
        message: 'Успешно',
        description: 'Список сравнения очищен'
      });
      this.isEmpty = true;
    }
  },
}
</script>
<style>
</style>