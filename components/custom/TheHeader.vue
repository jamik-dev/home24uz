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
        <localTheHeaderBurger @toggleModal="modalToggler" />
        <div class="w-2/5 h-fit relative overflow-hidden rounded-lg">
          <input type="text" placeholder="Искать"
            class="border text-grey-text py-2 px-4 pr-24 rounded-lg outline-none w-full text-lg border-grey-2 font-light overflow-hidden">
          <button class="absolute top-0 right-0 flex items-center justify-center h-full w-24 bg-grey-1"><img
              src="~/assets/icon/search.svg" alt="search"></button>
        </div>
        <ul class="flex items-center gap-[40px] relative list-none">
          <li class="flex items-center gap-2 text-[16px]"><img src="~/assets/icon/swap.svg" alt="swap">Сравнение</li>
          <a-dropdown placement="topCenter" :getPopupContainer="relativeDropdown">
            <li class="flex items-center gap-2 text-[16px] dropdown_heading cursor-pointer"><img src="~/assets/icon/heart.svg" alt="heart">Избранное
            </li>
            <div class="p-6 bg-white shadow-lg rounded-lg" slot="overlay">
              <ul class="list-none flex w-[400px] flex-col">
                <li v-for="item in 3" :key="item" class="flex items-center gap-4 cursor-pointer border-b border-grey-2 py-2 last:border-none">
                  <img class="w-16 border" src="~/assets/img/chair/1.png" alt="chair">
                  <div>
                    <h3 class="text-[16px]">Офисное кресло CM-F55AS(Muller)</h3>
                    <p class="mt-2">1 000 000 сум</p>
                  </div>
                  <img class="ml-auto" src="~/assets/icon/delete.svg" alt="delete">
                </li>
                <button class="py-4 w-full rounded-lg bg-orange mt-6 text-white text-lg">Перейти к оформлению</button>
              </ul>
            </div>
          </a-dropdown>
          <li class="flex items-center gap-2 text-[16px]"><a-badge count="4"><svg width="21" height="22"
                viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M14.5137 20.5H6.16592C3.09955 20.5 0.747152 19.3924 1.41534 14.9348L2.19338 8.89359C2.60528 6.66934 4.02404 5.81808 5.26889 5.81808H15.4474C16.7105 5.81808 18.0469 6.73341 18.5229 8.89359L19.3009 14.9348C19.8684 18.889 17.5801 20.5 14.5137 20.5Z"
                  stroke="#020105" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M14.651 5.5984C14.651 3.21232 12.7167 1.27803 10.3306 1.27803V1.27803C9.18162 1.27316 8.078 1.72619 7.26381 2.53695C6.44963 3.3477 5.99193 4.44939 5.99194 5.5984H5.99194"
                  stroke="#020105" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.2963 10.1018H13.2506" stroke="#020105" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M7.46566 10.1018H7.41989" stroke="#020105" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </a-badge>Корзина</li>
          <li class="flex items-center gap-2 text-[16px]"><img src="~/assets/icon/user.svg" alt="user">Войти</li>
        </ul>
      </div>
      <transition name="modal">
        <div v-if="headerModal" class="mt-5">
          <ul class="flex items-center justify-between list-none">
            <li class="flex items-center gap-2 text-lg">
              <localSvgCrown /> Подарки
            </li>
            <li class="flex items-center gap-2 text-lg">
              <localSvgSofa /> Мебель
            </li>
            <li class="flex items-center gap-2 text-lg">
              <localSvgMicrowave /> Техника
            </li>
            <li class="flex items-center gap-2 text-lg">
              <localSvgPot /> Текстиль
            </li>
            <li class="flex items-center gap-2 text-lg">
              <localSvgPot /> Посуда
            </li>
            <li class="flex items-center gap-2 text-lg">
              <localSvgInstruct /> Сантехника
            </li>
            <li class="flex items-center gap-2 text-lg">
              <localSvgDrill /> Стройматириалы
            </li>
            <li class="flex items-center gap-2 text-lg">
              <localSvgPenal /> Канцтовары
            </li>
            <li class="flex items-center gap-2 text-lg">
              <localSvgBag /> Акции
            </li>
            <li class="flex items-center gap-2 text-lg -mb-1">
              <a-select default-value="Ещё" class="w-[86px] text-orange header-2">
              </a-select>
            </li>
          </ul>
        </div>
        <localTheHeaderModal v-else />
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      headerModal: true,
    }
  },
  methods: {
    modalToggler(val) {
      this.headerModal = val;
    },
    relativeDropdown() {
      return document.querySelector('.dropdown_heading');
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