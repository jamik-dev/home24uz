<template>
  <main>
    <section id="blog_name" class="px-16 py-[60px]">
      <customBreadCrumb :breadCrumbData="breadCrumb" />
      <h1 class="font-medium font-ttfirs text-4xl mt-4">Блог</h1>
      <div class="w-full grid grid-cols-5 gap-12 mt-10">
        <div class="col-span-4">
          <div>
            <h2 class="font-ttfirs font-medium text-3xl max-w-[90%] leading-10">{{ post.title }}</h2>
            <p class="text-grey-text mt-2">{{ datePosted }}</p>
          </div>
          <div class="mt-6">
            <p class="text-grey-text text-lg" v-html="post.desc"></p>
          </div>
          <div class="w-full h-[400px] rounded-3xl overflow-hidden mt-10">
            <img class="w-full h-full object-cover" :src="post.lg_img || require(`~/assets/img/default/4.png`)" :alt="post.title">
          </div>
        </div>
        <div class="col-span-1">
          <h3 class="font-ttfirs font-medium text-3xl">Реклама</h3>
          <div class="space-y-6 mt-10">
            <img class="rounded-2xl" v-for="(banner, index) in banners.data" :key="banner.id" :src="banner.lg_img || require(`~/assets/img/banner/sub/${index}.png`)" :alt="banner.type">
          </div>
        </div>
      </div>
      <div class="mt-[120px]">
        <h2 class="text-4xl font-ttfirs">Другие блоги</h2>
        <div class="w-full grid grid-cols-12 gap-6 mt-10">
          <div v-for="post in other_posts" :key="post.id"
            :style="{ backgroundImage: `url(${post?.lg_img || require(`~/assets/img/blog/1.png`)})` }"
            class="h-[270px] col-span-3 relative rounded-xl overflow-hidden bg-center bg-no-repeat bg-cover group w-full fit-content">
            <div
              class="absolute h-full w-full top-0 left-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0)] flex items-end p-4">
              <nuxt-link :to="`/blog/${post.slug}`"
                class="font-semibold text-xl text-white max-w-[90%] group-hover:text-orange-2 duration-200 cursor-pointer">
                {{ post.title }}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  async asyncData({store, params}) {
    await store.dispatch('posts/getPost', params.name);
    await store.dispatch('banners/getBanners', {type: '', limit: 3});
  },
  data: () => {
    return {
      breadCrumb: [
        { name: 'Главная', url: '/' },
        { name: 'Блог', url: '/blog' }
      ],
      months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    }
  },
  computed: {
    ...mapGetters({
      post: 'posts/post',
      other_posts: 'posts/other_posts',
      banners: 'banners/banners',
    }),
    datePosted() {
      const day = new Date(this.post.created_at).getDate();
      const month = this.months[new Date(this.post.created_at).getMonth()];
      return `${day} ${month}`;
    }
  },
  mounted() {
    this.breadCrumb.push({ url: '/blog/' + this.$route.params.name, name: this.post.title })
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
  }
}
</script>
<style></style>