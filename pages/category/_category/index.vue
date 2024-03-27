<template>
  <main>
    <section id="category" class="w-full px-16 py-[60px]">
      <div class="grid grid-cols-12 gap-6">

        <div class="col-span-2 space-y-10">
          <div>
            <h3 class="font-ttfirs text-xl mb-2">Категории</h3>
            <a-tree class="!-ml-6" :tree-data="treeData" :expandedKeys.sync="expandedKeys">
              <template #title="{ title }">
                <a-dropdown :trigger="['contextmenu']">
                  <span>{{ title }}</span>
                </a-dropdown>
              </template>
            </a-tree>
          </div>
          <div v-if="!isParentCategory">
            <h3 class="font-ttfirs text-xl mb-2">Сортировать</h3>
            <a-radio-group v-model="value">
              <a-radio :style="radioStyle" :value="1">
                по популярности
              </a-radio>
              <a-radio :style="radioStyle" :value="2">
                добавлено недавно
              </a-radio>
              <a-radio :style="radioStyle" :value="3">
                цена
              </a-radio>
            </a-radio-group>
          </div>
          <div v-if="!isParentCategory">
            <h3 class="font-ttfirs text-xl">Цена</h3>
            <div class="mt-2">
              <div>
                <a-slider v-model="price" range :min="10000" :max="10000000" />
              </div>
              <div class="flex gap-4 items-center mt-4">
                <div class="relative overflow-hidden">
                  <span class="absolute top-1/2 left-2 -translate-y-1/2 text-base">от</span>
                  <input v-model.number="price[0]"
                    class="w-full py-2 pl-7 outline-none focus:border-orange pr-2 border bg-grey-4 border-[#d9d9d9] rounded-xl text-grey-text text-base"
                    type="text" />
                </div>
                <div class="relative overflow-hidden">
                  <span class="absolute top-1/2 left-2 -translate-y-1/2 text-base">от</span>
                  <input v-model.number="price[1]"
                    class="w-full py-2 pl-7 pr-2 outline-none focus:border-orange border bg-grey-4 border-[#d9d9d9] rounded-xl text-grey-text text-base"
                    type="text" />
                </div>
              </div>
            </div>
          </div>
          <div v-if="!isParentCategory">
            <h3 class="font-ttfirs text-xl">Материал корпуса</h3>
            <div class="mt-2">
              <a-checkbox-group>
                <a-checkbox value="dcp">ДСП</a-checkbox>
                <a-checkbox value="mdf">МДФ</a-checkbox>
                <a-checkbox value="shpon">Шпон</a-checkbox>
              </a-checkbox-group>
            </div>
          </div>
          <div v-if="!isParentCategory">
            <h3 class="font-ttfirs text-xl">Цвет</h3>
            <div class="mt-2">
              <localCategoryColorPicker
                :colors="['#000', '#E90A0A', '#F6C65C', '#fff', '#64c108', '#667b8c', '#55ffaa', '#781ecd']" />
            </div>
          </div>
          <div v-if="!isParentCategory">
            <h3 class="font-ttfirs text-xl">Обслуживаемая площадь</h3>
            <div class="mt-2">
              <a-checkbox-group>
                <a-checkbox value="to25">до 25 м2</a-checkbox>
                <a-checkbox value="from25">от 25 м2</a-checkbox>
              </a-checkbox-group>
            </div>
          </div>
        </div>
        <div class="col-span-10">
          <customBreadCrumb :breadCrumbData="breadCrumb" />
          <div class="flex justify-between mt-4">
            <div class="flex items-center gap-4">
              <h1 class="font-medium font-ttfirs text-4xl"><span class="capitalize">{{
              this.$route.params[Object.keys(this.$route.params)[Object.keys(this.$route.params).length - 1]]
            }}</span>
              </h1>
            </div>
            <div v-if="!isParentCategory" class="flex items-center gap-16">
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
          <nuxt-child />
        </div>
      </div>
      <div v-if="isParentCategory" class="w-full">
        <customProductBestSeller />
        <customDescriptionDefault />
      </div>
    </section>
  </main>
</template>
<script>
const treeData = [
  {
    title: 'Офисная мебель',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' },
        ],
      },
    ],
  },
  {
    title: 'Мебель для гостинной',
    key: '0-1'
  },
  {
    title: 'Мебель для кухни',
    key: '0-2'
  },
  {
    title: 'Мебель для прихожей',
    key: '0-3'
  },
  {
    title: 'Мебель для спальни',
    key: '0-4'
  },
  {
    title: 'Мягкая мебель',
    key: '0-5'
  },
  {
    title: 'Садовая и прочее',
    key: '0-6'
  },
];

export default {
  layout: 'userLayout',
  data: () => {
    return {
      treeData,
      expandedKeys: ['0-0'],
      value: 1,
      price: [500000, 5000000],
      radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      },
    }
  },
  computed: {
    isParentCategory() {
      return this.$route.fullPath === `/category/${this.$route.params.category}`
    }
  },
  watch: {
    $route() {
      this.routerCheck('/category');
    }
  },
  created() {
    this.routerCheck('/category');
  }
}
</script>
<style>
#category .ant-checkbox-wrapper {
  @apply space-x-1;
}

#category .ant-checkbox-wrapper span:last-child {
  font-size: 16px;
}

#category .ant-checkbox-group {
  @apply space-y-2;
}
</style>