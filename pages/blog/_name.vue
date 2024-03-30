<template>
  <main>
    <section id="blog_name" class="px-16 py-[60px]">
      <customBreadCrumb :breadCrumbData="breadCrumb" />
      <h1 class="font-medium font-ttfirs text-4xl mt-4">Блог</h1>
      <div class="w-full grid grid-cols-5 gap-12 mt-10">
        <div class="col-span-4">
          <div>
            <h2 class="font-ttfirs font-medium text-3xl max-w-[90%] leading-10">Любовь к семье и верность университету -
              по
              наследству: два поколения преподавателей Грехнёвых в ННГУ</h2>
            <p class="text-grey-text mt-2">4 июля</p>
          </div>
          <div class="mt-6">
            <p class="text-grey-text text-lg">Ежегодному празднованию Международного женского дня положила начало Вторая
              Международная конференция
              социалисток, состоявшаяся в Копенгагене в 1910 году. Праздновать этот день предложила Клара Цеткин[3].
              Одной
              из целей была обозначена борьба за всеобщее избирательное право для женщин.
              <br />
              <br />
              Предложение получило единодушную поддержку более 100 женщин из 17 стран, однако дата празднования
              зафиксирована не была[2]. До 1914 года в разных странах этот день отмечали в различные числа марта[3].
            </p>
          </div>
          <div class="w-full h-[400px] rounded-3xl overflow-hidden mt-10">
            <img class="w-full h-full object-cover" src="~/assets/img/default/4.png" alt="blog img">
          </div>
          <div class="mt-10">
            <h3 class="font-ttfirs font-medium text-xl leading-8 max-w-[90%]">Теперь вернемся к теме подарка.</h3>
            <p class="text-grey-text mt-6 text-lg max-w-[90%]">Международному женскому дню предшествовал Национальный
              женский день, который отметили в США 28 февраля 1909 года в память о событиях предыдущего, 1908 года, —
              забастовке работниц текстильной промышленности в Нью-Йорке, которые требовали улучшения условий труда[2].
            </p>
          </div>
        </div>
        <div class="col-span-1">
          <h3 class="font-ttfirs font-medium text-3xl">Реклама</h3>
          <div class="space-y-6 mt-10 rounded-2xl overflow-hidden">
            <img v-for="item in 3" :key="item" :src="require(`~/assets/img/banner/sub/${item}.png`)" alt="ad">
          </div>
        </div>
      </div>
      <div class="mt-[120px]">
        <h2 class="text-4xl font-ttfirs">Другие блоги</h2>
        <div class="w-full grid grid-cols-12 gap-6 mt-10">
          <div v-for="item in 4" :key="item"
            class="h-[270px] col-span-3 relative rounded-xl overflow-hidden bg-center bg-no-repeat bg-cover group w-full fit-content bg-[url(~/assets/img/blog/1.png)]">
            <div
              class="absolute h-full w-full top-0 left-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0)] flex items-end p-4">
              <nuxt-link to="/blog/8-marta"
                class="font-semibold text-xl text-white max-w-[90%] group-hover:text-orange-2 duration-200 cursor-pointer">
                Поздравляем с ”8 марта” любимых женщин</nuxt-link>
            </div>
          </div>
        </div>
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
  mounted() {
    this.breadCrumb.push({ url: '/blog/' + this.$route.params.name, name: 'Блог 8 марта' })
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