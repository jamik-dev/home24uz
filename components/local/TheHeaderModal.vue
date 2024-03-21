<template>
  <div
    class="mt-20 py-12 grid grid-cols-12 gap-4 px-16 bg-white absolute top-0 w-full h-[calc(100vh-128px)] -ml-16 z-10 overflow-y-auto">
    <div class="col-span-2 overflow-y-auto">
      <ul class="list-none flex flex-col gap-14">
        <li @click="SET_NAV_LINKS(1)" :class="{ 'text-orange': navLinks[0].active }"
          class="flex gap-2 items-center text-lg cursor-pointer">
          <localSvgCrown :fill="navLinks[0].active ? '#FF6418' : '#727474'" />Подарки
        </li>
        <li @click="SET_NAV_LINKS(2)" :class="{ 'text-orange': navLinks[1].active }"
          class="flex gap-2 items-center text-lg cursor-pointer">
          <localSvgSofa :fill="navLinks[1].active ? '#FF6418' : '#727474'" />Мебель
        </li>
        <li @click="SET_NAV_LINKS(3)" :class="{ 'text-orange': navLinks[2].active }"
          class="flex gap-2 items-center text-lg cursor-pointer">
          <localSvgMicrowave :fill="navLinks[2].active ? '#FF6418' : '#727474'" />Техника
        </li>
        <li @click="SET_NAV_LINKS(4)" :class="{ 'text-orange': navLinks[3].active }"
          class="flex gap-2 items-center text-lg cursor-pointer">
          <localSvgPot :fill="navLinks[3].active ? '#FF6418' : '#727474'" />Текстиль
        </li>
        <li @click="SET_NAV_LINKS(5)" :class="{ 'text-orange': navLinks[4].active }"
          class="flex gap-2 items-center text-lg cursor-pointer">
          <localSvgPot :fill="navLinks[4].active ? '#FF6418' : '#727474'" />Посуда
        </li>
        <li @click="SET_NAV_LINKS(6)" :class="{ 'text-orange': navLinks[5].active }"
          class="flex gap-2 items-center text-lg cursor-pointer">
          <localSvgInstruct :fill="navLinks[5].active ? '#FF6418' : '#727474'" />Сантехника
        </li>
        <li @click="SET_NAV_LINKS(7)" :class="{ 'text-orange': navLinks[6].active }"
          class="flex gap-2 items-center text-lg cursor-pointer">
          <localSvgDrill :fill="navLinks[6].active ? '#FF6418' : '#727474'" />Стройматириалы
        </li>
        <li @click="SET_NAV_LINKS(8)" :class="{ 'text-orange': navLinks[7].active }"
          class="flex gap-2 items-center text-lg cursor-pointer">
          <localSvgPenal :fill="navLinks[7].active ? '#FF6418' : '#727474'" />Канцтовары
        </li>
        <li @click="SET_NAV_LINKS(9)" :class="{ 'text-orange': navLinks[8].active }"
          class="flex gap-2 items-center text-lg cursor-pointer">
          <localSvgBag :fill="navLinks[8].active ? '#FF6418' : '#727474'" />Акции
        </li>
      </ul>
    </div>
    <div class="col-span-10 border-l border-grey-3 pl-8">
      <h1 class="text-4xl text-orange mb-6">Техника</h1>
      <div class="grid grid-cols-4 gap-8">
        <div v-for="item in 8" :keyi="item">
          <h2 class="font-semibold text-xl">Для красоты и здоровья</h2>
          <ul class="list-none flex flex-col text-black-2 gap-2 text-[16px]">
            <li>-Выпрямители</li>
            <li>-Машинки для стрижки волос</li>
            <li>-Плойки</li>
            <li>-Для педикюра и маникюра</li>
            <a-select default-value="Ещё 6" size="large" class="w-[86px] text-grey-text">
            </a-select>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
  data: () => {
    return {

    }
  },
  methods: {
    ...mapMutations(['SET_NAV_LINKS']),
  },
  computed: {
    ...mapGetters(['navLinks'])
  }
}
</script>
<style></style>