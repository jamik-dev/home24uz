<template>
  <aside id="order">
    <div class="space-y-8">
      <div class="flex items-center justify-between">
        <ul class="text-lg flex gap-6">
          <li class="text-grey-text cursor-pointer" @click="changeActiveHeader(index)"
            v-for="(header, index) in headers" :key="header"
            :style="{ borderBottom: header.isActive ? '1px solid #FF6418' : '0', color: header.isActive ? '#FF6418' : '' }">
            {{
              header.name }}</li>
        </ul>
        <a-select palceholder="Область" default-value="Tashkent" style="width: 250px;">
          <a-select-option value="Tashkent">
            Tashkent
          </a-select-option>
          <a-select-option value="Samarkand">
            Samarkand
          </a-select-option>
          <a-select-option value="Bukhara">
            Bukhara
          </a-select-option>
        </a-select>
      </div>
      <div v-if="!isEmpty" class="grid grid-cols-2 gap-x-6 gap-y-8 mt-10 items-start">
        <customCartOrder v-for="item in 5" :key="item" />
      </div>
      <customEmptyDefault v-if="isEmpty" class="mt-10">
        <template #image>
          <img src="~/assets/icon/empty-3.svg" alt="empty">
        </template>
        <template #title>
          Ещё не успели заказать?
        </template>
        <template #description>
          У вас отсутствуют активные заказы!
          Воспользуйтесь поиском, чтобы найти всё что нужно.
        </template>
      </customEmptyDefault>
    </div>
  </aside>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        { name: 'Все заказы', isActive: true },
        { name: 'Неоплаченные', isActive: false },
      ],
      isEmpty: false,
    }
  },
  methods: {
    changeActiveHeader(index) {
      this.headers.forEach((item, i) => {
        if (i === index) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
      });
    },
  }
}
</script>
<style>
#profile #order .ant-select-selection {
  background-color: #F2F2FA;
  padding: 8px;
}
</style>