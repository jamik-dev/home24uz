<template>
  <aside>
    <div v-if="!editProfile" class="flex gap-6">
      <div class="border border-grey-3 rounded-lg w-1/2">
        <div class="px-5 py-3 flex items-center justify-between border-b border-grey-3">
          <h4 class="font-ttfirs font-medium text-lg">Персональные данные</h4>
          <button @click="editProfile = true"
            class="px-5 py-3 flex font-ttfirs text-base items-center duration-200 border group hover:bg-orange hover:text-white border-orenge text-orange bg-white rounded-lg gap-3">
            <svg class="group-hover:stroke-white stroke-orange duration-200" width="16" height="16" viewBox="0 0 16 16"
              fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.4165 14.5807H14.7307" stroke="inherit" stroke-width="1.2" stroke-linecap="round"
                stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M8.71259 2.12902C9.32675 1.34652 10.3193 1.38735 11.1026 2.00152L12.2609 2.90985C13.0443 3.52402 13.3218 4.47652 12.7076 5.26069L5.80009 14.0732C5.56925 14.3682 5.21676 14.5424 4.84176 14.5465L2.17759 14.5807L1.57426 11.9849C1.48926 11.6207 1.57426 11.2374 1.80509 10.9415L8.71259 2.12902Z"
                stroke="inherit" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7.41895 3.7793L11.4139 6.91096" stroke="inherit" stroke-width="1.2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
            Изменит
          </button>
        </div>
        <div class="p-5 grid grid-cols-2 gap-x-6 gap-y-10">
          <p class="text-lg"><span class="mr-2 text-grey-text">Имя:</span>Palonchayev Paloncha Palonchayevich</p>
          <p class="text-lg"><span class="mr-2 text-grey-text">Телефон:</span>+998 (93) 567 93 83</p>
          <p class="text-lg"><span class="mr-2 text-grey-text">E-mail:</span>info@home24.uz</p>
          <p class="text-lg"><span class="mr-2 text-grey-text">Адресс:</span>Toshkent sh, Maxtumquli ko'chasi, 24-uy</p>
          <p class="text-lg"><span class="mr-2 text-grey-text">Пароль:</span>**********3e</p>
        </div>
      </div>
      <div class="border border-grey-3 rounded-lg w-1/2">
        <div class="px-5 py-[23px] flex items-center justify-between border-b border-grey-3">
          <h4 class="font-ttfirs font-medium text-lg">Уведомления или новости</h4>
        </div>
        <div class="p-5">
          <p class="text-lg text-grey-text">Получайте информацию об акциях и скидках</p>
          <div class="mt-6 gap-3 flex items-center">
            <a-switch default-checked />
            <p class="text-lg">через СМС</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <button @click="editProfile = false"
        class="px-6 py-3 rounded-lg bg-[rgba(255,100,24,0.1)] text-orange flex items-center gap-3 text-lg">
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 15L1.5 8L8.5 1" stroke="#FF7E00" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
        Назад
      </button>
      <div class="space-y-6 mt-8">
        <div>
          <h4 class="font-ttfirs font-medium text-lg">Личные данные</h4>
          <div class="mt-6 flex gap-6">
            <div class="w-1/3">
              <label for="name" class="text-lg text-grey-text">Ф.И.О</label>
              <input type="text" id="name" placeholder="Ф.И.О"
                class="w-full mt-2 text-lg  border border-grey-3 rounded-lg p-4 focus:border-orange outline-none" />
            </div>
            <div class="w-1/3">
              <label for="phone" class="text-lg text-grey-text">Телефон</label>
              <input type="text" id="phone" placeholder="+998 (--) --- -- --"
                class="w-full mt-2 text-lg  border border-grey-3 rounded-lg p-4 focus:border-orange outline-none" />
            </div>
            <div class="w-1/3">
              <label for="e-mail" class="text-lg text-grey-text">E-mail</label>
              <input type="text" id="e-mail" placeholder="info@home24.uz"
                class="w-full mt-2 text-lg  border border-grey-3 rounded-lg p-4 focus:border-orange outline-none" />
            </div>
          </div>
        </div>
        <div class="h-[1px] w-full bg-grey-3"></div>
        <div>
          <h4 class="font-ttfirs font-medium text-lg">Адрес</h4>
          <div class="mt-6 flex gap-6">
            <div class="w-1/3">
              <label class="text-lg text-grey-text block">Область</label>
              <a-select v-model="regionId" @change="regionSelected" palceholder="Область" style="width: 100%; margin-top: 8px">
                <a-select-option class="!text-lg hover:!bg-[rgb(255,100,24,0.7)] hover:!text-white" v-for="region in regions" :key="region.id" :value="region.id">
                  {{ region.name}}
                </a-select-option>
              </a-select>
            </div>
            <div class="w-1/3" v-if="regionId">
              <label class="text-lg text-grey-text">Город / Район</label>
              <a-select v-model="districtId" palceholder="Город / Район" style="width: 100%; margin-top: 8px">
                <a-select-option class="!text-lg hover:!bg-[rgb(255,100,24,0.7)] hover:!text-white" v-for="district in regions[regionId-1]?.districts" :key="district.id" :value="district.id">
                  {{ district.name }}
                </a-select-option>
              </a-select>
            </div>
            <div class="w-1/3">
              <label for="address" class="text-lg text-grey-text">Адрес</label>
              <input type="text" id="address" placeholder="Адрес"
                class="w-full mt-2 text-lg  border border-grey-3 rounded-lg p-4 focus:border-orange outline-none" />
            </div>
          </div>
          <div class="mt-6 gap-6">
            <div class="w-[calc(33.333%-16px)]">
              <label for="index" class="text-lg text-grey-text">Индекс почты</label>
              <input type="text" id="index" placeholder="Индекс почты"
                class="w-full mt-2 text-lg  border border-grey-3 rounded-lg p-4 focus:border-orange outline-none" />
            </div>
          </div>
        </div>
        <div class="h-[1px] w-full bg-grey-3"></div>
        <div>
          <h4 class="font-ttfirs font-medium text-lg">Пароль</h4>
          <div class="mt-6 flex gap-6">
            <div class="w-1/3">
              <label for="password" class="text-lg text-grey-text">Пароль</label>
              <input type="text" id="password" placeholder="Пароль"
                class="w-full mt-2 text-lg  border border-grey-3 rounded-lg p-4 focus:border-orange outline-none" />
            </div>
            <div class="w-1/3">
              <label for="confirm_password" class="text-lg text-grey-text">Подтвердите пароль</label>
              <input type="text" id="confirm_password" placeholder="Подтвердите пароль"
                class="w-full mt-2 text-lg  border border-grey-3 rounded-lg p-4 focus:border-orange outline-none" />
            </div>
          </div>
        </div>
        <div class="flex gap-8">
          <button class="bg-grey-2 cursor-pointer py-4 px-16 text-lg rounded-lg font-medium">Отменить</button>
          <button
            class="bg-orange cursor-pointer py-4 px-16 text-lg rounded-lg text-white font-medium">Сохранить</button>
        </div>
      </div>
    </div>
  </aside>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  async asyncData({store}) {
    await store.dispatch('regions/getRegions');
  },
  data: () => {
    return {
      editProfile: false,
      regionId: null,
      districtId: null
    }
  },
  methods: {
    regionSelected() {
      this.districtId = undefined;
    }
  },
  computed: {
    ...mapGetters({
      regions: 'regions/regions'
    })
  }
}
</script>
<style>
.ant-switch-checked {
  background-color: #FF6418;
}

#profile .ant-select-selection {
  @apply p-4 w-full h-full hover:border-orange focus:!border-orange bg-white;
}
</style>