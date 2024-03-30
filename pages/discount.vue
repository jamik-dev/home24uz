<template>
  <main>
    <section id="discount" class="px-16 py-[60px]">
      <customBreadCrumb :breadCrumbData="breadCrumb" />
      <h1 class="font-medium font-ttfirs text-4xl mt-4">Акции</h1>
      <div class="w-full grid grid-cols-12 gap-6 items-start mt-12">
        <div class="col-span-2">
          <div class="space-y-10">
            <ul class="space-y-4">
              <li v-for="item in listOfCatalog" :key="item.name"><nuxt-link
                  class="text-black hover:text-orange-2 font-ttfirs text-xl"
                  :to="'/category/' + item.url">{{ item.name
                  }}</nuxt-link></li>
            </ul>
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
          <div class="w-full">
            <img src="~/assets/img/banner/3.png" alt="banner">
          </div>
          <div class="w-full grid grid-cols-10 gap-6 mt-4">
            <customCartDefault v-for="item in 12" :key="item" :items="6"
              :data="{ img: require(`~/assets/img/electronics/1.png`), text: 'Электросамокат Xiaomi Mi Electric Scooter 3 до 100 кг, черный', discount: 30, price: '3 512 750', price_old: '2 512 750', rating: '5.0' }" />
          </div>
          <div class="w-full mt-6">
            <img src="~/assets/img/banner/4.png" alt="banner">
          </div>
          <div class="w-full mt-16">
            <a-pagination :total="500" :item-render="itemRender" />
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
        { name: 'Акции', url: '/discount' }
      ],
      price: [10000, 10000000],
      listOfCatalog: [
        { name: 'Телевизоры', url: `tv` },
        { name: 'Холодильники', url: `fridge` },
        { name: 'Выключатели и порты', url: `ports` },
        { name: 'Стиральная машина', url: `washing-machine` },
        { name: 'Кондиционеры', url: `conditioner` },
      ]
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