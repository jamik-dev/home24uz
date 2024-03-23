<template>
  <div class="border border-grey-1">
    <div class="px-4 py-3">
      <div class="flex justify-center relative">
        <div class="absolute cursor-pointer top-3 right-3 h-6 w-6 flex items-center justify-center">
          <img class="w-full" src="~/assets/icon/cancel.svg" alt="product" />
        </div>
        <img class="w-40" src="~/assets/img/electronics/2.png" alt="product" />
      </div>
      <div class="mt-4">
        <div>
          <p class="font-lg text-base text-center">Холодильник Samsung RB 29 FERNDSA/WT</p>
          <p class="font-medium text-xl mt-4 text-center">7 300 000 сум</p>
        </div>
        <div class="mt-4 flex items-center justify-between">
          <p class="text-lg font-ttfirs flex items-center gap-2"><a-icon type="star" :style="{ color: '#F6C65C' }"
              theme="filled" /><span>5.0</span></p>
          <div class="flex">
            <div
              class="w-[40px] h-[40px] cursor-pointer border border-orange rounded-full flex justify-center items-center">
              <localSvgBuy class="w-5 h-5" fill="#FF6418" />
            </div>
            <div
              class="ml-4 w-[40px] h-[40px] cursor-pointer bg-grey-light rounded-full flex justify-center items-center">
              <img src="~/assets/icon/heart.svg" alt="heart">
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul role="list" class="border-t border-grey-1 p-4">
      <li v-for="item in 10" :key="item" class="border-b border-grey-1 last:border-0 py-4 first:pt-0 last:pb-0">
        <h5 class="font-ttfirs text-grey-text font-normal text-base">Фронтальная камера</h5>
        <p>20MP</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>
<style></style>