<template>
  <div
    class="mt-20 py-12 grid grid-cols-12 gap-4 px-16 bg-white absolute top-0 w-full h-[calc(100vh-128px)] -ml-16 z-10 overflow-y-auto">
    <div class="col-span-2 overflow-y-auto">
      <ul class="list-none flex flex-col gap-14">
        <li @click="id = category_item.id" v-for="category_item in categories" :key="category_item.id"
          :style="{ color: category_item.id === category?.id ? '#FF6418' : '' }"
          class="flex gap-2 items-center text-lg cursor-pointer">
          {{ category_item.name }}
        </li>
      </ul>
    </div>
    <div class="col-span-10 border-l border-grey-3 pl-8">
      <nuxt-link :to="`/category/${category?.slug}`"
        class="text-4xl font-semibold w-fit text-black hover:text-orange block mb-10">{{ category?.name }}</nuxt-link>
      <div class="grid grid-cols-4 gap-8">
        <div v-for="subCategory in category?.children" :key="subCategory.id">
          <nuxt-link :to="`/category/${category?.slug}/${subCategory.slug}`"
            class="w-fit font-medium text-black hover:text-orange block text-xl mb-6">{{ subCategory.name }}</nuxt-link>
          <ul class="list-none ml-2 flex flex-col text-black-2 gap-2 text-base">
            <li v-for="subSubCategory in subCategory?.children" :key="subSubCategory.id"><nuxt-link
                class="text-grey-text hover:text-orange"
                :to="`/category/${category?.slug}/${subCategory.slug}/${subSubCategory.slug}`">-{{ subSubCategory.name
                }}</nuxt-link></li>
            <li v-if="subCategory?.children?.length > 5" class="flex items-center gap-2 text-grey-text cursor-pointer">
              <span>Ещё</span>
              <a-icon type="down" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    categories: {
      type: Array,
    }
  },
  data: () => {
    return {
      id: 6
    }
  },
  computed: {
    category() {
      return this.categories.find(obj => obj.id === this.id);
    },
  },
}
</script>
<style></style>