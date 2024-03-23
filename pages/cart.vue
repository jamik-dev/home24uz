<template>
  <main>
    <section id="favourites" class="">
      <div v-if="!isEmpty" class="w-full bg-grey-light px-16 py-[60px]">
        <div class="flex flex-col gap-3">
          <customBreadCrumb :breadCrumb="breadCrumb" />
          <h1 class="font-medium font-ttfirs text-4xl">Корзина</h1>
          <p class="text-base font-ttfirs">Товаров: 5</p>
        </div>
        <div class="w-full grid grid-cols-12 mt-8 gap-6 items-start">
          <div class="col-span-8 bg-white rounded-lg px-12 py-8">
            <div class="w-full pb-2 border-b border-[#ddd]">
              <a-checkbox>
                Выбрать для заказа
              </a-checkbox>
            </div>
            <ul>
              <li v-for="item in 3" :key="item"
                class="py-6 border-b border-[#ddd] last:border-0 grid gap-2 grid-cols-12 items-center">
                <div class="col-span-6 flex items-center">
                  <a-checkbox></a-checkbox>
                  <div
                    class="border overflow-hidden border-grey-light rounded-xl h-[120px] w-[120px] flex items-center justify-center ml-5">
                    <img class="fit-cover w-full h-auto" src="~/assets/img/chair/1.png" alt="chair">
                  </div>
                  <div class="flex flex-col gap-1 ml-7">
                    <h3 class="text-lg">ОФИСНОЕ КРЕСЛО 6206A-2</h3>
                    <p class="text-base"><span class="text-grey-text">Размер:</span><span class="ml-1">M</span></p>
                    <p class="text-base"><span class="text-grey-text">Цвет:</span><span class="ml-1">Сине-чёрное</span>
                    </p>
                  </div>
                </div>
                <div class="col-span-3 justify-self-center">
                  <div class="border border-grey-3 rounded-lg flex">
                    <button @click="count--" class="w-12 h-12 flex items-center justify-center cursor-pointer"><a-icon
                        type="minus" /></button>
                    <p class="w-12 h-12 text-base flex items-center justify-center">{{ count }}</p>
                    <button @click="count++" class="w-12 h-12 flex items-center justify-center cursor-pointer"><a-icon
                        type="plus" /></button>
                  </div>
                </div>
                <div class="col-span-3 justify-self-end">
                  <div class="flex flex-col gap-2 items-end">
                    <div class="flex gap-3">
                      <img src="~/assets/icon/heart.svg" alt="heart">
                      <img src="~/assets/icon/delete.svg" alt="delete">
                    </div>
                    <h3 class="font-ttfirs text-2xl">2 000 000 сум</h3>
                    <h4 class="line-through text-grey-5 text-lg -mt-2 font-normal">2 200 000 сум</h4>
                  </div>
                </div>
              </li>
            </ul>

          </div>
          <div class="col-span-4 bg-white rounded-lg px-12 py-8">
            <h3 class="text-2xl font-semibold mb-2">Ваш заказ</h3>
            <div class="py-4 border-t border-grey-4">
              <div class="flex justify-between">
                <p class="text-xl font-medium">Товары, 2 шт</p>
                <p class="text-xl font-medium">4 000 000 сум</p>
              </div>
              <div class="flex justify-between mt-2">
                <p class="text-lg text-grey-text">Доставка:</p>
                <p class="text-lg text-grey-text font-ttfirs">бесплатно</p>
              </div>
            </div>
            <div class="py-4 border-t border-grey-4 flex justify-between">
              <p class="text-xl font-medium">Итого</p>
              <p class="text-2xl font-ttfirs font-medium">4 000 000 сум</p>
            </div>
            <button class="py-4 w-full rounded-lg bg-orange mt-2 text-white text-lg font-medium">Перейти к оформлению</button>
          </div>
        </div>
      </div>
      <div class="w-full px-16 py-[60px]">
        <customEmptyDefault v-if="isEmpty">
          <template #image>
            <img src="~/assets/icon/empty-3.svg" alt="empty">
          </template>
          <template #title>
            В корзине пока нет товаров
          </template>
          <template #description>
            Но вы всегда можете ее наполнить
          </template>
        </customEmptyDefault>
        <customProductBestSeller :class="{ 'mt-0': !isEmpty }" />
        <customProductSeen v-if="isEmpty" />
      </div>
    </section>
  </main>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
export default {
  components: {
    VueSlickCarousel
  },
  data: () => {
    return {
      breadCrumb: [
        { name: 'Главная', url: '/' },
        { name: 'Корзина', url: '/cart' },
      ],
      isEmpty: false,
      count: 0
    }
  }
}
</script>
<style>
.ant-checkbox-wrapper {
  display: flex;
  align-items: center;
  width: fit-content;

}

.ant-checkbox-checked .ant-checkbox-inner {
  background-color: #FF6418;
  border-color: #FF6418;
}

.ant-checkbox-wrapper:hover .ant-checkbox-inner,
.ant-checkbox:hover .ant-checkbox-inner,
.ant-checkbox-input:focus+.ant-checkbox-inner {
  border-color: #FF6418;
}



.ant-checkbox-checked::after {
  border-color: #FF6418;
}

.ant-checkbox-wrapper span:last-child {
  color: #020105;
  font-size: 18px;
}
</style>