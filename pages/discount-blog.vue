<template>
  <main>
    <section id="discount_blog" class="px-16 py-[60px]">
      <customBreadCrumb :breadCrumbData="breadCrumb" />
      <h1 class="font-medium font-ttfirs text-4xl mt-4">Блог</h1>
      <div class="w-full mt-8">
        <img src="~/assets/img/banner/3.png" alt="banner">
      </div>
      <div class="w-full grid grid-cols-12 gap-6 mt-14">
        <figure v-for="item in 7" :key="item" class="col-span-4 space-y-2 cursor-pointer group">
          <div class="rounded-2xl overflow-hidden w-full h-[330px]">
            <img class="w-full h-full object-cover group-hover:scale-110 duration-200"
              :src="require(`~/assets/img/default/${item}.png`)" alt="discount img">
          </div>
          <div class="p-4 rounded-2xl bg-grey-4">
            <figcaption class="font-ttfirs font-medium text-lg max-w-[90%]">Наши скидки и акции на кухонную технику и
              предметы интерьера.</figcaption>
            <p class="text-lg text-grey-text mt-4">Продлится до 31 декабря.</p>
          </div>
        </figure>
      </div>
      <div class="w-full mt-16">
        <img src="~/assets/img/banner/4.png" alt="banner">
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
        { name: 'Акции', url: '/discount-blog' }
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