<template>
  <div v-if="category?.products.data.length">
    <div :style="{ gridTemplateColumns: `repeat(${gridOrder ? 6 : 10}, minmax(0, 1fr))` }"
      class="w-full grid gap-6 mt-4">
      <customCartDefault v-for="product in category.products.data" :key="product.id" :items="6" :data="product.products[0]" />
    </div>
    <div v-if="category.products.total" class="w-full mt-16">
      <a-pagination :total="category.products.last_page" :item-render="itemRender" />
      <customDescriptionDefault />
    </div>
  </div>
  <div v-else>
    <customEmptyDefault>
      <template #image>
        <img src="~/assets/icon/empty-4.svg" alt="empty">
      </template>
      <template #title>
        Товар не найдена
      </template>
      <template #description>
        Но вы всегда можете ее наполнить
      </template>
    </customEmptyDefault>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  props: ['gridOrder'],
  computed: {
    ...mapGetters('categories', ['category'])
  },
  methods: {
    ...mapMutations('categories', ['SET_TREE_DATA']),
    itemRender(_, type, originalElement) {
      if (type === 'prev') {
        return;
      } else if (type === 'next') {
        return <a class="font-ttfirs hover:text-orange">Следующая страница &rarr;</a>;
      }
      return originalElement;
    },
  },
  watch: {
    category(val) {
      this.SET_TREE_DATA([{ name: val.category.parent?.name, slug: val.category.parent?.slug, id: val.category.parent?.id, saveChild: true, children: [val.category]}]);
    }
  },
}
</script>
<style lang="">

</style>