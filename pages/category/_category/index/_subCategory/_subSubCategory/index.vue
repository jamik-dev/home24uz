<template>
  <div v-if="!isEmpty">
    <div class="w-full grid grid-cols-10 gap-6 mt-4">
      <customCartDefault v-for="item in 12" :key="item" :items="6"
      :data="{ img: require(`~/assets/img/chair/1.png`), text: 'Электросамокат Xiaomi Mi Electric Scooter 3 до 100 кг, черный', discount: 0, price: '3 512 750', price_old: '', rating: '5.0' }" />
    </div>
    <div class="w-full mt-16">
      <a-pagination :total="500" :item-render="itemRender" />
      <customDescriptionDefault />
    </div>
  </div>
  <div v-else>
    <customEmptyDefault v-if="isEmpty">
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
export default {
  data: () => ({
    isEmpty: false
  }),
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
<style lang="">

</style>