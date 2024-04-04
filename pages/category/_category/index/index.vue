<template>
  <div class="w-full grid grid-cols-10 gap-8 mt-6">
    <nuxt-link :to="`/category/${$route.params.category}/${child.slug}`" v-for="child in category.category?.children" :key="child.id"
      class="col-span-2 bg-grey-4 rounded-lg group flex flex-col cursor-pointer justify-between h-full w-full p-6">
      <img class="w-full" :src="child.lg_img || require(`~/assets/img/techniques/1.png`)" :alt="child.name">
      <p
        class="group-hover:text-orange text-black font-ttfirs text-xl duration-200 text-center">{{ child.name }}</p>
    </nuxt-link>
  </div>
</template>
<script>
import {mapGetters, mapActions, mapMutations} from 'vuex';
export default {
  computed: {
    ...mapGetters('categories', ['category', 'categories'])
  },  
  mounted() {
    this.getCategory(this.$route.params.category);
    this.SET_TREE_DATA(this.categories);
  },
  methods: {
    ...mapActions('categories', ['getCategory', 'getCategories']),
    ...mapMutations('categories', ['SET_TREE_DATA'])
  }
}
</script>
<style>

</style>