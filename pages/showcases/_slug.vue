<template>
  <main>
    <section id="popular" class="px-16 py-[60px]">
      <customBreadCrumb :breadCrumbData="breadCrumb" />
      <h1 class="font-medium font-ttfirs text-4xl mt-4">{{ showcase.name }}</h1>
      <div class="w-full grid grid-cols-12 gap-6 items-start mt-12">
        <div class="col-span-2">
          <div class="space-y-10">
            <a-tree class="!-ml-6" :tree-data="categories" :replaceFields="replaceFields" :expandedKeys.sync="expandedKeysInParent"
              >
              <template #title="{ name, id }">
                <a-dropdown :trigger="['contextmenu']">
                  <p @click="$router.push({query: {category: id}})" :style="{ color: $route.query?.category == id ? '#FF6418' : '' }"
                    class="text-grey-text hover:text-orange">{{ name }}</p>
                </a-dropdown>
              </template>
            </a-tree>
            <div>
              <h3 class="font-ttfirs text-xl">Цена</h3>
              <div class="mt-8">
                <div>
                  <a-slider v-model="price" range :min="10000" :max="10000000" />
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
          <div class="flex justify-end items-center gap-16">
            <div class="flex gap-2 items-center">
              <p class="text-lg text-grey-text">Сортировка</p>
              <a-select default-value="Подешевле">
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
          <div v-if="showcase.products.length"
            :style="{ gridTemplateColumns: `repeat(${gridOrder ? 6 : 10}, minmax(0, 1fr))` }"
            class="w-full grid gap-6 mt-4">
            <customCartDefault v-for="product in showcase.products" :key="product.id" :items="6" :data="product" />
          </div>
          <div v-else>
            <customEmptyDefault>
              <template #image>
                <img src="~/assets/icon/empty-4.svg" alt="empty">
              </template>
              <template #title>
                Товар не найдена
              </template>
              <template #description>
                Но вы всегда можете ее наполнить
              </template>
            </customEmptyDefault>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  async asyncData({ store, params }) {
    await store.dispatch('showcases/getShowcase', params.slug);
  },
  data: () => {
    return {
      breadCrumb: [
        { name: 'Главная', url: '/' },
      ],
      price: [10000, 10000000],
      replaceFields: {
        title: 'name',
        key: 'id',
      },
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
      ],
      gridOrder: false,
      expandedKeysInParent: [],
    }
  },
  watch: {
    $route() {
      this.getShowcase(this.$route.params.slug);
    },
    expandedKeys() {
      this.expandedKeysInParent = this.expandedKeys;
    }
  },
  mounted() {
    this.breadCrumb.push({ name: this.showcase.name, url: `/showcases/${this.showcase.slug}` });
    this.expandedKeysInParent = this.expandedKeys;
  },
  computed: {
    ...mapGetters({
      showcase: 'showcases/showcase',
      categories: 'showcases/categories',
      expandedKeys: 'showcases/expandedKeys',
    })
  },
  methods: {
    ...mapActions({
      getShowcase: 'showcases/getShowcase',
    }),
    itemRender(_, type, originalElement) {
      if (type === 'prev') {
        return;
      } else if (type === 'next') {
        return <a class="font-ttfirs hover:text-orange">Следующая страница &rarr;</a>;
      }
      return originalElement;
    },
  }
}
</script>
<style></style>