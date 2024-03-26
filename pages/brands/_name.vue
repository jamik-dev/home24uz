<template>
  <main>
    <section id="brands_name" class="w-full grid grid-cols-12 gap-6 items-start px-16 py-[60px]">
      <div class="col-span-2">
        <div class="space-y-10">
          <div class="border rounded-lg border-grey-3 p-2 text-center overflow-hidden">
            <img src="~/assets/img/brands/1.png" alt="brand">
          </div>
          <ul class="space-y-4">
            <li v-for="item in listOfCatalog" :key="item.name"><nuxt-link
                class="text-black hover:text-orange-2 font-ttfirs text-xl"
                :to="'/brands/' + $route.params.name + '/' + item.url">{{ item.name
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
        <customBreadCrumb :breadCrumb="breadCrumb" />
        <div class="flex justify-between">
          <div class="flex items-center gap-4">
            <h1 class="font-medium font-ttfirs text-4xl"><span class="capitalize">{{ this.$route.params.name }}</span>
              весь ассортимент</h1>
            <p class="text-lg text-grey-text">100 товаров</p>
          </div>
          <div class="flex items-center gap-16">
            <div class="flex gap-2 items-center">
              <p class="text-lg text-grey-text">Сортировка</p>
              <a-select default-value="Подешевле">
                <a-select-option value="Подешевле">
                  Подешевле
                </a-select-option>
              </a-select>
            </div>
            <div class="flex gap-4">
              <img class="w-8" src="~/assets/icon/9_cubes.svg" alt="filter_9">
              <img class="w-8" src="~/assets/icon/4_cubes.svg" alt="filter_4">
            </div>
          </div>
        </div>
        <div class="w-full grid grid-cols-10 gap-6 mt-4">
          <customCartDefault v-for="item in 12" :key="item" :items="6"
            :data="{ img: require(`~/assets/img/electronics/1.png`), text: 'Электросамокат Xiaomi Mi Electric Scooter 3 до 100 кг, черный', discount: 0, price: '3 512 750', price_old: '', rating: '5.0' }" />
        </div>
        <div class="w-full mt-16">
          <a-pagination :total="500" :item-render="itemRender" />
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
        { name: 'Бренды', url: '/brands' },
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
  mounted() {
    this.breadCrumb.push({ url: '/brands/' + this.$route.params.name, name: this.$route.params.name })
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
<style>
.ant-slider-handle {
  border-color: #FF6418;
  width: 20px;
  height: 20px;
  margin: 0;
  top: 50%;
  transform: translate(-50%, -50%) !important;
}

.ant-slider-handle.ant-tooltip-open {
  border-color: #FF6418;
}

.ant-slider:hover .ant-slider-track {
  background-color: rgba(255, 100, 24, 0.5);
}

.ant-slider-rail {
  height: 3px;
}

.ant-slider-track {
  height: 3px;
  background-color: #FF6418;
}

.ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open) {
  border-color: rgba(255, 100, 24, 0.5);
}

.ant-slider-handle:focus {
  border-color: #FF6418;
  outline: none;
  box-shadow: 0 0 0 5px rgba(255, 100, 24, 0.2);
}
</style>