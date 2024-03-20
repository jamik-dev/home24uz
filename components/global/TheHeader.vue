<template>
  <div class="sticky top-0 w-full bg-blue-400">
    <div class="bg-grey-light w-full px-16 py-2 flex justify-between items-center">
      <div class="flex gap-1">
        <p class="flex gap-1 items-center text-grey-text"><img class="w-[12px] h-[16px]"
            src="~/assets/icon/location.svg" alt="location">Город:</p>
        <a href="#" class="text-black underline hover:text-black">Ташкент</a>
      </div>
      <div class="flex gap-8 items-center">
        <a href="instagram.com/home24.uz" class="flex text-grey-text hover:text-grey-text gap-1"><img
            class="w-[20px] h-[20px]" src="~/assets/icon/instagram.svg" alt="instagram"><span>home24.uz</span></a>
        <a href="t.me/home24uz" class="flex items-center text-grey-text hover:text-grey-text gap-2"><img
            class="w-[16px] h-[16px]" src="~/assets/icon/telegram.svg" alt="telegram"><span>t.me/home24uz</span></a>
        <a href="tel:+998712007002" class="text-orange font-bold flex text-xl">+998 71 200 70 02</a>
        <a-select default-value="rus" class="w-[74px] text-grey-text">
          <a-select-option value="rus">
            Рус
          </a-select-option>
          <a-select-option value="eng">
            Eng
          </a-select-option>
        </a-select>
      </div>
    </div>
    <div class="px-16 py-4 w-full relative bg-white">
      <div class="flex justify-between items-center">
        <nuxt-link to="/">
          <img src="~/assets/img/logo.png" class="w-[178px]" alt="logo">
        </nuxt-link>
        <TheHeaderBurger @toggleModal="modalToggler" />
        <div class="w-2/5 h-fit relative overflow-hidden rounded-lg">
          <input type="text" placeholder="Искать"
            class="border text-grey-text py-2 px-4 pr-24 rounded-lg outline-none w-full text-lg border-grey-2 font-light overflow-hidden">
          <button class="absolute top-0 right-0 flex items-center justify-center h-full w-24 bg-grey-1"><img
              src="~/assets/icon/search.svg" alt="search"></button>
        </div>
        <ul class="flex items-center gap-[40px] list-none">
          <li class="flex items-center gap-2 text-[16px]"><img src="~/assets/icon/swap.svg" alt="swap">Сравнение</li>
          <li class="flex items-center gap-2 text-[16px]"><img src="~/assets/icon/heart.svg" alt="heart">Избранное</li>
          <li class="flex items-center gap-2 text-[16px]"><img src="~/assets/icon/bag.svg" alt="bag">Корзина</li>
          <li class="flex items-center gap-2 text-[16px]"><img src="~/assets/icon/user.svg" alt="user">Войти</li>
        </ul>
      </div>
      <transition name="modal">
        <div v-if="headerModal" class="mt-5">
          <ul class="flex items-center justify-between list-none">
            <li class="flex items-center gap-2 text-lg">
              <crown /> Подарки
            </li>
            <li class="flex items-center gap-2 text-lg">
              <sofa /> Мебель
            </li>
            <li class="flex items-center gap-2 text-lg">
              <microwave /> Техника
            </li>
            <li class="flex items-center gap-2 text-lg">
              <pot /> Текстиль
            </li>
            <li class="flex items-center gap-2 text-lg">
              <pot /> Посуда
            </li>
            <li class="flex items-center gap-2 text-lg">
              <instruct /> Сантехника
            </li>
            <li class="flex items-center gap-2 text-lg">
              <drill /> Стройматириалы
            </li>
            <li class="flex items-center gap-2 text-lg">
              <penal /> Канцтовары
            </li>
            <li class="flex items-center gap-2 text-lg">
              <bag /> Акции
            </li>
            <li class="flex items-center gap-2 text-lg -mb-1">
              <a-select default-value="Ещё" class="w-[86px] text-orange header-2">
              </a-select>
            </li>
          </ul>
        </div>
        <TheHeaderModal v-if="!headerModal" />
      </transition>
    </div>
  </div>
</template>
<script>
import bag from '@/components/local/svg/bag.vue';
import sofa from '@/components/local/svg/sofa.vue';
import drill from '@/components/local/svg/drill.vue';
import instruct from '@/components/local/svg/instruct.vue';
import pot from '@/components/local/svg/pot.vue';
import microwave from '@/components/local/svg/microwave.vue';
import penal from '@/components/local/svg/penal.vue';
import crown from '@/components/local/svg/crown.vue';

import TheHeaderBurger from '@/components/local/TheHeaderBurger.vue';
import TheHeaderModal from '@/components/local/TheHeaderModal.vue';
export default {
  components: {
    TheHeaderBurger,
    TheHeaderModal,
    bag,
    sofa,
    drill,
    instruct,
    pot,
    microwave,
    penal,
    crown
  },
  data: () => {
    return {
      headerModal: true,
    }
  },
  methods: {
    modalToggler(val) {
      this.headerModal = val;
    }
  }
}
</script>
<style>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
}
</style>