<template>
  <main>
    <section id="brands_name" class="w-full grid grid-cols-12 gap-6 items-start px-16 py-[60px]">
      <div class="col-span-2">
        <div class="space-y-10">
          <div class="border rounded-lg h-[200px] w-full border-grey-3 p-2 text-center overflow-hidden">
            <img class="w-full h-full object-cover" :src="brand?.lg_logo || require(`~/assets/img/brands/1.png`)"
              :alt="brand.name">
          </div>
          <ul class="space-y-4">
            <li v-for="category in categories" :key="category.id"><nuxt-link
                class="text-black hover:text-orange-2 font-ttfirs text-xl" :to="`/category/`">{{
              category.name
            }}</nuxt-link></li>
          </ul>
          <div>
            <h3 class="font-ttfirs text-xl">Цена</h3>
            <div class="mt-8">
              <div>
                <a-slider @afterChange="sliderAfterChange" v-model="price" range :min="10000" :max="50000000" />
              </div>
              <div class="flex gap-4 items-center mt-4">
                <div class="relative overflow-hidden">
                  <span class="absolute top-1/2 left-2 -translate-y-1/2 text-base">от</span>
                  <input v-model="price[0]"
                    class="w-full py-2 pl-7 outline-none focus:border-orange pr-2 border bg-grey-4 border-[#d9d9d9] rounded-xl text-grey-text text-base"
                    type="text" />
                </div>
                <div class="relative overflow-hidden">
                  <span class="absolute top-1/2 left-2 -translate-y-1/2 text-base">от</span>
                  <input v-model="price[1]"
                    class="w-full py-2 pl-7 pr-2 outline-none focus:border-orange border bg-grey-4 border-[#d9d9d9] rounded-xl text-grey-text text-base"
                    type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-10">
        <customBreadCrumb :breadCrumbData="breadCrumb" />
        <div class="flex justify-between">
          <div class="flex items-center gap-4">
            <h1 class="font-medium font-ttfirs text-4xl"><span class="capitalize">{{ this.$route.params.name }}</span>
              весь ассортимент</h1>
            <p class="text-lg text-grey-text">{{ products?.total }} товаров</p>
          </div>
          <div class="flex items-center gap-16">
            <div class="flex gap-2 items-center">
              <p class="text-lg text-grey-text">Сортировка</p>
              <a-select>
                <a-select-option v-for="attribute in sortingAttributes" :key="attribute.value" :value="attribute.value" class="!text-lg hover:!bg-[rgb(255,100,24,0.7)] hover:!text-white">
                  {{ attribute.name }}
                </a-select-option>
              </a-select>
            </div>
            <div class="flex gap-4">
              <div @click="gridOrder = true">
                <localSvgFourcubes :fill="gridOrder ? '#FF6418' : '#020105'" class="w-8 h-8 cursor-pointer" />
              </div>
              <div @click="gridOrder = false">
                <localSvgNinecubes :fill="!gridOrder ? '#FF6418' : '#020105'" class="w-8 h-8 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div v-if="products.total > 0" :style="{ gridTemplateColumns: `repeat(${gridOrder ? 6 : 10}, minmax(0, 1fr))` }" class="w-full grid gap-6 mt-4">
          <customCartDefault v-for="product in products.data" :key="product.id" :items="6"
            :data="product.products[0]" />
        </div>
        <customEmptyDefault v-if="!products.total">
          <template #image>
            <img src="~/assets/icon/empty-3.svg" alt="empty">
          </template>
          <template #title>
            В корзине пока нет товаров
          </template>
          <template #description>
            Но вы всегда можете ее наполнить
          </template>
        </customEmptyDefault>
        <div v-if="products.total" class="w-full mt-16">
          <a-pagination :total="products.last_page" :item-render="itemRender" />
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  layout: 'userLayout',
  data: () => {
    return {
      breadCrumb: [
        { name: 'Главная', url: '/' },
        { name: 'Бренды', url: '/brands' },
      ],
      price: [10000, 50000000],
      gridOrder: false,
      sortingAttributes: [
        {
          name: 'Популярности',
          value: "popular"
        },
        {
          name: 'Подешевле',
          value: "cheap_first"
        },
        {
          name: 'Подороже',
          value: "expensive_first"
        },
        {
          name: 'Высокий рейтинг',
          value: "high_rating"
        },
        // {
        //   name: 'Много заказов',
        //   value: ""
        // },
        {
          name: 'Добавлено недавно',
          value: "new"
        },
      ]
    }
  },
  computed: {
    ...mapGetters('brands', ['brand', 'products', 'categories'])
  },
  async asyncData({ store, params }) {
    await store.dispatch('brands/getBrand', params.name);
  },
  mounted() {
    this.breadCrumb.push({ url: '/brands/' + this.$route.params.name, name: this.brand.name });
  },
  methods: {
    ...mapActions('brands', ['getBrand']),
    itemRender(_, type, originalElement) {
      if (type === 'prev') {
        return;
      } else if (type === 'next') {
        return <a class="font-ttfirs hover:text-orange">Следующая страница &rarr;</a>;
      }
      return originalElement;
    },
    sliderAfterChange(value) {
      this.$router.push({
        query: {
          min_price: value[0],
          max_price: value[1]
        }
      });

      this.getBrand(this.$route.params.name);
    }
  }
}
</script>
<style></style>