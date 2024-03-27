<template>
  <section class="w-full bg-grey-light px-16 py-8">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-9">
        <div class="w-full h-full">
          <client-only>
            <customCarousel :arrows="true" class="rounded-3xl">
              <img v-for="item in 3" :key="item" class="h-full" src="~/assets/img/banner/1.png" alt="banner">
            </customCarousel>
          </client-only>
        </div>
      </div>
      <div class="col-span-3">
        <client-only>
          <customCarousel class="h-full bg-white rounded-3xl">
            <figure v-for="item in 3" :key="item" class="px-8 py-7">
              <div class="flex justify-between items-center">
                <h3 class="uppercase font-ttfirs text-2xl">товар дня</h3>
                <div
                  class="w-[40px] h-[40px] cursor-pointer bg-grey-light rounded-full flex justify-center items-center">
                  <img src="~/assets/icon/heart.svg" alt="heart">
                </div>
              </div>
              <div class="flex gap-4 mt-8 items-center">
                <img class="w-[139px] h-[246px] object-cover" src="~/assets/img/chair/1_cropped.png" alt="chair">
                <div>
                  <div class="rounded-xl overflow-hidden relative w-[150px] px-[10px] py-1 bg-grey-light"><span
                      class="text-lg">Cкидка</span>
                    <div
                      class="absolute top-0 right-0 skidka bg-orange-2 h-full w-1/2 flex items-center justify-center">
                      <span class="text-xl font-bold text-white">-90%</span>
                    </div>
                  </div>
                  <div class="mt-4">
                    <h3 class="text-xl font-md font-ttfirs">1.240.000 <span
                        class="ml-2 font-normal text-sm uppercase">сум</span></h3>
                    <p class="font-ttfirs line-through text-[16px] text-grey-text">1.500.000</p>
                  </div>
                  <div class="mt-4 flex items-center gap-1">
                    <img class="w-4" src="~/assets/icon/star.svg" alt="star">
                    <span class="text-grey-text font-ttfirs text-base">Нет отзывов</span>
                  </div>
                  <div class="mt-3">
                    <p class="text-lg leading-tight">Realme Pad Mini 32GB + 3GB LTE (синий)</p>
                  </div>
                  <button
                    class="px-6 mt-4 py-[10px] rounded-lg bg-orange text-white text-base font-ttfirs flex gap-2 items-center">
                    <localSvgBag fill="#fff" /> в карзину
                  </button>
                </div>
              </div>
            </figure>
          </customCarousel>
        </client-only>
      </div>
    </div>
  </section>
</template>
<script>
export default {

}
</script>
<style scoped>
.skidka {
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);
}
</style>