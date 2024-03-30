<template>
  <main>
    <section id="profile" class="w-full px-16 py-[60px]">
      <a-modal :width="'600px'" v-model="leaveAccountModal" :footer="false" title="Хотите выйти из аккаунта?" centered>
        <div class="flex w-full gap-6 p-4">
          <button @click="leaveAccountModal = false" class="bg-grey-2 cursor-pointer w-1/2 py-4 text-lg rounded-lg font-medium">Нет</button>
          <button @click="leaveAccountModal = false" class="bg-orange cursor-pointer w-1/2 py-4 text-lg rounded-lg text-white font-medium">Да</button>
        </div>
      </a-modal>
      <div class="space-y-3">
        <customBreadCrumb :breadCrumbData="breadCrumb" />
        <h1 class="font-medium font-ttfirs text-4xl">Список сравнения</h1>
      </div>
      <div class="grid grid-cols-12 gap-6 mt-10">
        <div class="col-span-2">
          <ul class="list-none space-y-6 border-r border-grey-3">
            <li>
              <nuxt-link class="flex items-center gap-3 hover:text-black" to="/profile/orders">
                <div :style="{ backgroundColor: $route.fullPath === '/profile/orders' ? '#FF6418' : '#F2F2FA' }"
                  class="flex duration-200 items-center justify-center h-12 w-12 rounded-full">
                  <localSvgBuy class="w-5 h-5 scale-x-[-1]"
                    :fill="$route.fullPath === '/profile/orders' ? '#fff' : '#020105'" />
                </div>
                <p :style="{ color: $route.fullPath === '/profile/orders' ? '#FF6418' : '#020105' }"
                  class="duration-200 font-ttfirs text-lg">Мои заказы</p>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="flex items-center gap-3 hover:text-black" to="/profile">
                <div :style="{ backgroundColor: $route.fullPath === '/profile' ? '#FF6418' : '#F2F2FA' }"
                  class="flex duration-200 items-center justify-center h-12 w-12 rounded-full">
                  <localSvgUser class="w-5 h-5" :fill="$route.fullPath === '/profile' ? '#fff' : '#020105'" />
                </div>
                <p :style="{ color: $route.fullPath === '/profile' ? '#FF6418' : '#020105' }"
                  class="duration-200 font-ttfirs text-lg">Профиль</p>
              </nuxt-link>
            </li>
            <li @click="leaveAccountModal = true" class="flex items-center gap-3 cursor-pointer">
              <div class="flex duration-200 bg-grey-3 items-center justify-center h-12 w-12 rounded-full">
                <img src="~/assets/icon/logout.svg" alt="logout" />
              </div>
              <p class="duration-200 font-ttfirs text-lg">Выйти</p>
            </li>
          </ul>
        </div>
        <div class="col-span-10">
          <nuxt-child />
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  layout: 'userLayout',
  data: () => {
    return {
      breadCrumb: [
        {
          name: 'Главная',
          url: '/',
        },
        {
          name: 'Личный кабинет',
          url: '/profile',
        },
      ],
      leaveAccountModal: false
    }
  },
  watch: {
    $route(to) {
      if (to.fullPath === '/profile/orders') {
        this.breadCrumb.push({
          name: 'Мои заказы',
          url: '/profile/orders',
        })
      } else {
        this.breadCrumb = this.breadCrumb.filter((item) => item.url !== '/profile/orders')
      }
    }
  },
  created() {
    if (this.$route.fullPath === '/profile/orders') {
      this.breadCrumb.push({
        name: 'Мои заказы',
        url: '/profile/orders',
      })
    }
  }
}
</script>
<style></style>