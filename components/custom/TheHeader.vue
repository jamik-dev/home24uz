<template>
  <header id="header" class="w-full sticky top-0 duration-300 ease transition-all z-[1000]">
    <a-modal :width="'600px'" v-model="enterAccountModal" :footer="false" title="Войти или создать профиль" centered>
      <div class="p-4">
        <label :style="{ color: !isPhoneValid ? '#E90A0A' : '' }" for="phone_number" class="text-lg text-grey-text">Номер
          телефона</label>
        <div class="relative mt-2 mb-12">
          <input type="text" id="phone_number" v-model="form.modalNumber" v-mask="'+998 (##) ###-##-##'"
            placeholder="+998 (--) --- -- --" :style="{ borderColor: !isPhoneValid ? '#E90A0A' : '' }"
            class="w-full bg-white text-lg  border border-grey-3 rounded-lg p-4 focus:border-orange outline-none" />
          <p :style="{ transform: messageShow ? 'translateY(32px)' : 'translateY(0px)', opacity: messageShow ? '1' : '0', transition: 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out' }"
            class="absolute pointer-events-none bottom-0 left-0 text-red font-light text-lg italic">{{ this.form.message
            }}</p>
        </div>
        <button @click="formValidate"
          class="bg-orange cursor-pointer w-full py-4 text-lg rounded-lg text-white font-medium">Войти</button>
      </div>
    </a-modal>
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
        <a href="tel:+998712007002" class="text-orange font-ttfirs font-bold flex text-xl">+998 71 200 70 02</a>
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
        <localTheHeaderBurger :isHeaderModalOpen="headerModal" @toggleModal="modalToggler" />
        <div class="w-2/5 h-fit relative overflow-hidden rounded-lg">
          <input type="text" placeholder="Искать"
            class="border text-grey-text py-2 px-4 pr-24 rounded-lg outline-none w-full text-lg border-grey-2 font-light overflow-hidden">
          <button class="absolute top-0 right-0 flex items-center justify-center h-full w-24 bg-grey-1"><img
              src="~/assets/icon/search.svg" alt="search"></button>
        </div>
        <ul class="flex items-center gap-[40px] relative list-none">
          <li><nuxt-link class="flex items-center gap-2 text-base text-black hover:text-orange" to="/compare"><a-badge :count="compares.length"><localSvgCompare /></a-badge>Сравнение</nuxt-link></li>
          <a-dropdown placement="topCenter" :getPopupContainer="relativeDropdown">
            <li class="dropdown_heading">
              <nuxt-link class="flex items-center gap-2 text-base text-black hover:text-orange" to="/favourites">
                <a-badge :count="favorites.length"><localSvgHeart /></a-badge>Избранное
              </nuxt-link>
            </li>
            <div class="p-6 bg-white shadow-lg rounded-lg" slot="overlay">
              <ul role="list" class="list-none flex w-[400px] flex-col">
                <li v-for="item in 2" :key="item"
                  class="flex items-center gap-4 cursor-pointer border-b border-grey-2 py-2 last:border-0">
                  <img class="w-16 border" src="~/assets/img/chair/1.png" alt="chair">
                  <div>
                    <h3 class="text-[16px]">Офисное кресло CM-F55AS(Muller)</h3>
                    <p class="mt-2">1 000 000 сум</p>
                  </div>
                  <img class="ml-auto" src="~/assets/icon/delete.svg" alt="delete">
                </li>
                <button @click="$router.push('/cart')"
                  class="py-4 w-full rounded-lg bg-orange mt-6 text-white text-lg font-medium">Перейти к
                  оформлению</button>
              </ul>
            </div>
          </a-dropdown>
          <li><nuxt-link class="flex items-center gap-2 text-base text-black hover:text-orange" to="/cart"><a-badge
                :count="carts.length">
                <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              </a-badge>Корзина</nuxt-link></li>
          <li v-if="isUserLoggedIn">
            <nuxt-link to="/profile" class="flex items-center gap-2 text-base text-black hover:text-orange"><img
                src="~/assets/icon/user.svg" alt="user">Войти</nuxt-link>
          </li>
          <li v-else>
            <p @click="enterAccountModal = true"
              class="flex cursor-pointer duration-200 items-center gap-2 text-base text-black hover:text-orange"><img
                src="~/assets/icon/user.svg" alt="user">Войти</p>
          </li>

        </ul>
      </div>
      <transition name="modal">
        <div v-if="!headerModal" class="mt-5">
          <ul class="flex items-center justify-between list-none">
            <li v-for="category in categories?.slice(0, 8)" :key="category.id" class="text-nowrap text-lg">
              <nuxt-link :to="`/category/${category.slug}`" class="text-black hover:text-orange">
                {{ category.name }}
              </nuxt-link>
            </li>
            <li @click="modalToggler(true)" class="flex items-center gap-2 text-lg text-orange cursor-pointer">
              <span>Ещё</span>
              <a-icon type="down" />
            </li>
          </ul>
        </div>
        <localTheHeaderModal :categories="categories" v-else />
      </transition>
    </div>
  </header>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data: () => {
    return {
      headerModal: false,
      enterAccountModal: false,
      isUserLoggedIn: false,
      messageShow: false,
      isPhoneValid: true,
      form: {
        modalNumber: '',
        modalPassword: null,
        modalSMSCode: null,
        message: ''
      }
    }
  },
  methods: {
    ...mapActions({
      getCategories: 'categories/getCategories',
      loadFromLocalStorage: 'loadFromLocalStorage',
    }),
    modalToggler(val) {
      document.body.style.overflow = !val ? 'auto' : 'hidden';
      document.documentElement.style.scrollbarGutter = !val ? 'auto' : 'stable';
      document.body.style.scrollbarGutter = !val ? 'auto' : 'stable';
      this.headerModal = val;
    },
    relativeDropdown() {
      return document.querySelector('.dropdown_heading');
    },
    async formValidate() {
      if (this.form.modalNumber.length < 19) {
        this.form.message = 'Номер телефона должен содержать 12 символов';
        this.isPhoneValid = false;
        this.messageShow = true;
        return;
      }
      this.isPhoneValid = true;
      this.messageShow = false;
      this.loading = true;
      // await this.$store.dispatch('auth/authCheck', this.form.modalNumber);

    }
  },
  watch: {
    'form.modalNumber'(val) {
      this.form.message = 'Номер телефона должен содержать 12 символов';
      if (val.length < 19) {
        this.messageShow = true;
      } else {
        this.isPhoneValid = true;
        this.messageShow = false;
      }
    },
    $route() {
      this.headerModal = false;
    }
  },
  computed: {
    ...mapGetters({
      categories: 'categories/categories',
      compares: 'compares',
      favorites: 'favorites',
      carts: 'carts'
    })
  },
  mounted() {
    this.getCategories();
    this.loadFromLocalStorage('compares');
    this.loadFromLocalStorage('favorites');
    this.loadFromLocalStorage('carts');

    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        header.classList.add('shadow-lg');
      } else if (window.scrollY === 0) {
        header.classList.remove('shadow-lg');
      }
    });
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