<template>
  <main>
    <section id="brands" class="w-full px-16 py-[60px]">
      <div class="flex flex-col gap-3">
        <customBreadCrumb :breadCrumbData="breadCrumb" />
        <h1 class="font-medium font-ttfirs text-4xl">Популярные бренды</h1>
      </div>
      <div class="flex items-center justify-between">
        <div class="gap-6 flex items-center">
          <nuxt-link to="/brands" class="text-orange underline font-ttfirs text-xl">Все бренды</nuxt-link>
          <p class="text-base">A B C D E F G H I J K L M N O P R Q S T U V W X Y Z <span
              class="ml-2 font-medium">А-Я</span><span class="ml-2 font-medium">123</span></p>
        </div>
        <div class="w-4/12 h-fit relative overflow-hidden rounded-lg">
          <input type="text" placeholder="Искать"
            class="border text-grey-text py-2 px-4 pr-24 rounded-lg outline-none w-full text-lg border-grey-2 font-light overflow-hidden">
          <button class="absolute top-0 right-0 flex items-center justify-center h-full w-24 bg-grey-1"><img
              src="~/assets/icon/search.svg" alt="search"></button>
        </div>
      </div>
      <div class="w-full grid grid-cols-12 gap-6 mt-8">
        <nuxt-link v-for="brand in brands" :key="brand.id" :to="`/brands/${brand.slug}`" class="col-span-2 space-y-2 text-center group">
          <div class="rounded-lg  h-[160px] w-full border overflow-hidden border-grey-3 flex justify-center items-center"><img
              class="object-cover h-full w-full duration-200 group-hover:scale-105" :src="brand.lg_logo || require(`~/assets/img/brands/1.png`)" :alt="brand.name">
          </div>
          <p
            class="inline-block text-black text-lg cursor-pointer group-hover:text-orange duration-200">{{ brand.name }}</p>
        </nuxt-link>
      </div>
      <div class="w-full mt-16">
        <a-pagination :total="500" :item-render="itemRender" />
      </div>
    </section>
  </main>
</template>
<script>
import { mapGetters} from 'vuex';
export default {
  layout: 'userLayout',
  async asyncData({store}) {
    await store.dispatch('brands/getBrands');
  },
  data: () => {
    return {
      breadCrumb: [
        { name: 'Главная', url: '/' },
        { name: 'Бренды', url: '/brands' }
      ],
    }
  },
  methods: {
    itemRender(_, type, originalElement) {
      if (type === 'prev') {
        return;
      } else if (type === 'next') {
        return <a class="font-ttfirs hover:text-orange">Следующая страница &rarr;</a>;
      }
      return originalElement;
    },
  },
  computed: {
    ...mapGetters('brands', ['brands'])
  }
}
</script>
<style>
</style>