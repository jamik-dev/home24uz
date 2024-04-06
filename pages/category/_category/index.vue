<template>
  <main>
    <section id="category" class="w-full px-16 py-[60px]">
      <div class="grid grid-cols-12 gap-6">

        <div class="col-span-2 space-y-10">
          <div>
            <h3 class="font-ttfirs text-xl mb-2">Категории</h3>
            <a-tree class="!-ml-6" :tree-data="treeData" :replaceFields="replaceFields"
              :expandedKeys.sync="expandedKeysInParent">
              <template #title="{ name, slug, children, parent_id }">
                <a-dropdown :trigger="['contextmenu']">
                  <p class="text-grey-text" :style="{ color: category?.category.slug === slug ? '#FF6418' : '' }"
                    v-if="children.length && parent_id">{{ name }}</p>
                  <nuxt-link v-else :style="{ color: category?.category.slug === slug ? '#FF6418' : '' }"
                    class="text-grey-text hover:text-orange" :to="`/category/${slug}`">{{ name }}</nuxt-link>
                </a-dropdown>
              </template>
            </a-tree>
          </div>
          <div v-if="!isParentCategory">
            <h3 class="font-ttfirs text-xl mb-2">Сортировать</h3>
            <a-radio-group v-model="sortValue">
              <a-radio v-for="sort in sortingAttributes" :key="sort.value" :style="radioStyle" :value="sort.value">
                {{ sort.name }}
              </a-radio>
            </a-radio-group>
          </div>
          <div v-if="!isParentCategory">
            <h3 class="font-ttfirs text-xl">Цена</h3>
            <div class="mt-2">
              <div>
                <a-slider @afterChange="sliderAfterChange" v-model="price" range :min="category.product_min_price"
                  :max="category.product_max_price" />
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
          <div class="space-y-10" v-if="!isParentCategory">
            <div v-for="attribute in category.attributes" :key="attribute.id">
              <h3 class="font-ttfirs text-xl">{{ attribute.name }}</h3>
              <div class="mt-2">
                <localCategoryColorPickerFilter @selectedColor="selectedColorHandler"
                  v-if="attribute.name === 'Цвет' || attribute.name === 'Color'" :colors="attribute.options" />
                <a-checkbox-group v-model="attributes[`${attribute.name}`]" v-else>
                  <a-checkbox v-for="option in attribute.options" :key="option.id"
                    :value="option.id">{{ option.name }}</a-checkbox>
                </a-checkbox-group>
              </div>
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
                <a-select v-model="sortValue">
                  <a-select-option class="!text-lg hover:!bg-[rgb(255,100,24,0.7)] hover:!text-white"
                    v-for="sort in sortingAttributes" :key="sort.value" :value="sort.value">
                    {{ sort.name }}
                  </a-select-option>
                </a-select>
              </div>
              <div class="flex gap-4">
                <div @click="gridOrder = true">
                  <localSvgFourcubes :fill="gridOrder ? '#FF6418' : '#020105'" class="w-8 h-8 cursor-pointer" />
                </div>
                <div @click="gridOrder = false">
                  <localSvgNinecubes :fill="!gridOrder ? '#FF6418' : '#020105'" class="w-8 h-8 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <nuxt-child :gridOrder="gridOrder" />
        </div>
      </div>
      <div v-if="isParentCategory" class="w-full">
        <customProductShowcase :showcase="showcases[0]" />
        <customDescriptionDefault />
      </div>
    </section>
  </main>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  layout: 'userLayout',
  async asyncData({ store, params }) {
    await store.dispatch('showcases/getShowcases');
    await store.dispatch('categories/getCategories');
    await store.dispatch('categories/getCategory', params.category);
  },
  data: () => {
    return {
      sortValue: '',
      attributes: {},
      selectedColor: [],
      price: [],
      gridOrder: false,
      expandedKeysInParent: [],
      replaceFields: {
        title: 'name',
        key: 'id',
        children: 'children'
      },
      radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      },
      sortingAttributes: [
        {
          name: 'Популярности',
          value: "popular"
        },
        {
          name: 'Подешевле',
          value: "cheap_first"
        },
        {
          name: 'Подороже',
          value: "expensive_first"
        },
        {
          name: 'Высокий рейтинг',
          value: "high_rating"
        },
        // {
        //   name: 'Много заказов',
        //   value: ""
        // },
        {
          name: 'Добавлено недавно',
          value: "new"
        },
      ]
    }
  },
  computed: {
    ...mapGetters({
      categories: 'categories/categories',
      category: 'categories/category',
      treeData: 'categories/treeData',
      expandedKeys: 'categories/expandedKeys',
      showcases: 'showcases/showcases',
    }),
    isParentCategory() {
      return this.$route.fullPath === `/category/${this.$route.params.category}`
    }
  },
  watch: {
    $route() {
      this.routerCheck('/category');
      if (!this.isParentCategory) {
        this.getCategory(this.$route.params[Object.keys(this.$route.params)[Object.keys(this.$route.params).length - 1]]);
      }
    },
    expandedKeys(val) {
      this.expandedKeysInParent = val;
    },
    category(val) {
      this.sortValue = this.$route.query.sort;
      this.price = [val.product_min_price, val.product_max_price];
    },
    sortValue() {
      if (!this.isParentCategory) {
        this.queryHandler();
      }
    },
    attributes: {
      handler() {
        if (!this.isParentCategory) {
          this.queryHandler();
        }
      },
      deep: true
    },
  },
  mounted() {
    this.expandedKeysInParent = this.expandedKeys;
    if (!this.isParentCategory) {
      this.getCategory(this.$route.params[Object.keys(this.$route.params)[Object.keys(this.$route.params).length - 1]]);
    }
  },
  created() {
    this.routerCheck('/category');
  },
  methods: {
    ...mapActions({
      getCategory: 'categories/getCategory',
    }),
    queryHandler() {
      let attrs = this.attributes ? Object.values(this.attributes).flatMap(arr => arr).join(',') : '';
      attrs = this.selectedColor.length ? (attrs ? attrs + ',' : '') + this.selectedColor.join(',') : attrs;
      this.$router.push({
        query: {
          sort: this.sortValue,
          attributes: attrs,
          min_price: this.price[0],
          max_price: this.price[1]
        }
      });
    },
    sliderAfterChange(val) {
      this.price = val;
      this.queryHandler();
    },
    selectedColorHandler(val) {
      this.selectedColor = val;
      this.queryHandler();
    }
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

.ant-tree li .ant-tree-node-content-wrapper:hover {
  background-color: #fff;
}

.ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected {
  background-color: #fff;
}
</style>