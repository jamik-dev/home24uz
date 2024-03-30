<template>
  <div class="p-6 rounded-lg shadow-xl bg-white space-y-4">
    <div class="flex justify-between items-center">
      <div>
        <h4 class="text-xl">ID заказа 32839</h4>
        <p class="text-grey-text text-base">Обновлен 8 ноября 2022 г, 13:00</p>
      </div>
      <div class="py-2 px-5 rounded-lg bg-grey-2 text-lg">Ожидания</div>
    </div>
    <div class="h-[1px] bg-grey-3 w-full"></div>
    <div class="grid grid-cols-2 gap-y-6">
      <div>
        <p class="text-base text-grey-text">Дата заказа</p>
        <p class="text-lg">8 ноября 2022 г, 12:59</p>
      </div>
      <div>
        <p class="text-base text-grey-text">Способ доставки</p>
        <p class="text-lg">Доствака</p>
      </div>
      <div>
        <p class="text-base text-grey-text">Способ оплаты</p>
        <p class="text-lg">Payme</p>
      </div>
      <div>
        <p class="text-base text-grey-text">Сумма заказа</p>
        <p class="text-lg">250 000 сум</p>
      </div>
    </div>
    <div @click="toggleDropDown"
      :style="{ borderBottom: !showDropDown ? '0' : '', paddingBottom: !showDropDown ? '0' : '' }"
      class="cursor-pointer flex justify-between items-center py-4 border-y border-grey-3">
      <p class="text-lg">2 товара</p>
      <a-icon class="duration-200" :style="{ transform: showDropDown ? 'rotate(180deg)' : '' }" type="down" />
    </div>
    <ul :style="{ height: showDropDown ? 'fit-content' : '0', marginTop: !showDropDown ? '0' : '' }"
      class="duration-200 overflow-hidden">
      <li v-for="item in 3" :key="item" class="flex border-b border-grey-3 py-3 last:pb-0 first:pt-0 last:border-0">
        <div class="flex items-center gap-6 w-3/4">
          <div class="h-[80px] w-[80px] border border-grey-3 rounded-lg overflow-hidden">
            <img class="w-full h-full object-cover" src="~/assets/img/chair/1.png" alt="chair">
          </div>
          <div class="w-2/3">
            <p class="text-lg max-w-[80%]">Офисное кресло 6206a-2 офисное кресло 6206a-2</p>
            <p class="text-lg mt-2">1 x 1 000 000 сум</p>
          </div>
        </div>
        <div class="flex flex-col justify-between w-1/4 items-end">
          <nuxt-link to="/category/furniture/soft/sofa/1234312"
            class="text-orange font-ttfirs hover:text-orange hover:underline text-lg">Oставить отзыв</nuxt-link>
          <p class="text-lg">1 000 000 сум</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      showDropDown: false
    }
  },
  methods: {
    toggleDropDown() {
      this.showDropDown = !this.showDropDown;
    }
  }
}
</script>
<style lang="">

</style>