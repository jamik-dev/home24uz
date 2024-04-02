<template>
  <main>
    <localHomeHero :day_products="day_products.data" :top_banners="top_banners.data" />
    <div class="w-full px-16 py-[120px]">
      <section id="home_category">
        <h2 class="text-4xl font-ttfirs">Категории</h2>
        <div class="w-full grid grid-cols-12 gap-8 mt-6">
          <div v-for="item in 12" :key="item"
            class="col-span-2 bg-grey-4 rounded-lg group flex flex-col cursor-pointer justify-between h-full w-full p-6">
            <img class="w-full" src="~/assets/img/techniques/1.png" alt="image">
            <h3 class="group-hover:text-orange font-ttfirs text-xl duration-200 text-center">Бытовая техника</h3>
          </div>
        </div>
      </section>
      <customProductShowcase :showcase="showcases[0]" />
      <section id="banner" class="mt-[120px]">
        <div class="w-full h-auto">
          <client-only>
            <customCarousel :arrows="true">
              <div v-for="banner in main_banners.data" :key="banner.id" class="rounded-3xl overflow-hidden h-[500px]">
                <img class="h-full w-full object-cover" :src="banner.lg_img || require(`~/assets/img/banner/2.png`)"
                  :alt="banner.link">
              </div>
            </customCarousel>
          </client-only>
        </div>
      </section>
      <customProductShowcase :showcase="showcases[1]" />
      <div class="w-full grid grid-cols-12 gap-6 mt-14">
        <div v-for="banner in promo_banners.data" :key="banner.id" class="col-span-3">
          <div class="w-full h-[250px] rounded-3xl overflow-hidden">
            <img class="w-full h-full object-cover"
              :src="banner.lg_img || require(`~/assets/img/banner/sub/${item}.png`)" alt="sub-banner">
          </div>
        </div>
      </div>
      <section id="popular-brands" class="mt-[140px]">
        <div class="flex gap-6 items-end">
          <h2 class="text-4xl font-ttfirs">Популярные бренды</h2>
          <nuxt-link to="/brands" class="text-orange underline font-ttfirs text-xl">Смотреть все</nuxt-link>
        </div>
        <div class="w-full grid grid-cols-12 gap-6 mt-6">
          <div v-for="brand in brands.slice(0, 12)" :key="brand.id" class="col-span-2">
            <nuxt-link :to="`/brands/${brand.slug}`"
              class="rounded-lg border overflow-hidden border-grey-3 flex justify-center items-center"><img
                class="object-cover h-[160px]" :src="brand.lg_logo || require(`~/assets/img/brands/1.png`)"
                :alt="brand.name"></nuxt-link>
          </div>
        </div>
      </section>
      <section id="clients-review" class="mt-[140px]">
        <h2 class="text-4xl font-ttfirs">Фото довольных клиентов</h2>
        <div class="w-full mt-6">
          <VueSlickCarousel :slidesPerRow="4" :slidesToScroll="1 / 4" :infinite="true" :arrows="true">
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
            <div v-for="feedback in feedbacks?.data" :key="feedback.id">
              <div class="p-3">
                <customCartClientReview :feedback="feedback" />
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </section>
      <customProductShowcase :showcase="showcases[2]" />
      <section id="blog" class="mt-[140px]">
        <div class="flex gap-6 items-end">
          <h2 class="text-4xl font-ttfirs">Блог</h2>
          <nuxt-link to="/blog" class="text-orange underline font-ttfirs text-xl">Все блоги</nuxt-link>
        </div>
        <div class="w-full grid grid-cols-12 gap-6 mt-14">
          <div v-for="post in posts.data" :key="post.id"
            :style="{ backgroundImage: `url(${post?.lg_img || require(`~/assets/img/blog/1.png`)})` }"
            class="h-[270px] col-span-3 relative rounded-xl overflow-hidden bg-center bg-no-repeat bg-cover group w-full fit-content">
            <div
              class="absolute h-full w-full top-0 left-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0)] flex items-end p-4">
              <nuxt-link :to="`/blog/${post.slug}`"
                class="font-semibold text-xl text-white max-w-[90%] group-hover:text-orange-2 duration-200 cursor-pointer line-clamp-2">
                {{ post.title }}</nuxt-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import VueSlickCarousel from 'vue-slick-carousel'
export default {
  components: {
    VueSlickCarousel,
  },
  async asyncData({ store }) {
    const day_products = await store.dispatch('products/getProducts', { type: 'products_of_the_day', limit: 3 });
    const top_banners = await store.dispatch('banners/getBanners', { type: '', limit: 3 });
    const main_banners = await store.dispatch('banners/getBanners', { type: 'main', limit: 3 });
    const promo_banners = await store.dispatch('banners/getBanners', { type: '', limit: 4 });
    
    await store.dispatch('showcases/getShowcases');
    await store.dispatch('posts/getPosts', { limit: 4 });
    await store.dispatch('feedbacks/getFeedbacks');
    await store.dispatch('brands/getBrands');
    return { day_products, top_banners, main_banners, promo_banners };
  },
  computed: {
    ...mapGetters({
      brands: 'brands/brands',
      posts: 'posts/posts',
      feedbacks: 'feedbacks/feedbacks',
      showcases: 'showcases/showcases',
    })
  }
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
</style>
