<template>
  <main>
    <section id="blog" class="px-16 py-[60px]">
      <customBreadCrumb :breadCrumbData="breadCrumb" />
      <h1 class="font-medium font-ttfirs text-4xl mt-4">Блог</h1>
      <div class="w-full grid grid-cols-12 gap-6 mt-14">
        <div v-for="item in 16" :key="item"
          class="h-[270px] col-span-3 relative rounded-xl overflow-hidden bg-center bg-no-repeat bg-cover group w-full fit-content bg-[url(~/assets/img/blog/1.png)]">
          <div
            class="absolute h-full w-full top-0 left-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0)] flex items-end p-4">
            <nuxt-link to="/blog/8-marta"
              class="font-semibold text-xl text-white max-w-[90%] group-hover:text-orange-2 duration-200 cursor-pointer">
              Поздравляем с ”8 марта” любимых женщин</nuxt-link>
          </div>
        </div>
      </div>
      <div class="w-full mt-16">
        <a-pagination :total="500" :item-render="itemRender" />
      </div>
    </section>
  </main>
</template>
<script>
export default {
  data: () => {
    return {
      breadCrumb: [
        { name: 'Главная', url: '/' },
        { name: 'Блог', url: '/blog' }
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
  }
}
</script>
<style></style>