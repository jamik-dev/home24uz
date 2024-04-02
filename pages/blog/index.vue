<template>
  <main>
    <section id="blog" class="px-16 py-[60px]">
      <customBreadCrumb :breadCrumbData="breadCrumb" />
      <h1 class="font-medium font-ttfirs text-4xl mt-4">Блог</h1>
      <div class="w-full grid grid-cols-12 gap-6 mt-14">
        <div v-for="post in posts.data" :key="post.id"
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
      <div v-if="posts.last_page > 0" class="w-full mt-16">
        <a-pagination :total="posts.last_page" :item-render="itemRender" />
      </div>
    </section>
  </main>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  async asyncData({store}) {
    await store.dispatch('posts/getPosts', {limit: 0});
  },
  data: () => {
    return {
      breadCrumb: [
        { name: 'Главная', url: '/' },
        { name: 'Блог', url: '/blog' }
      ],
    }
  },
  computed: {
    ...mapGetters({
      posts: 'posts/posts',
    })
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