<template>
  <div :style="{ width: fit ? 'fit-content' : '100%' }" class="grid grid-cols-10 gap-4">
    <button @click="color.available ? $router.push(color.slug) : notification('topRight')"
      :style="{ borderColor: checkIfNotWhite(color.title) ? color.title : '#EBEBEB', background: checkIfNotWhite(color.title) ? '' : '#EBEBEB', borderRadius: rectangle ? '5px' : '100%' }"
      v-for="color in colors" :key="color.slug"
      class="col-span-2 outline-none cursor-pointer border relative h-10 w-10 overflow-hidden">
      <div v-if="color.available" :style="{ backgroundColor: color.title, borderRadius: rectangle ? '5px' : '100%' }"
        :class="{ 'scale-[70%]': color.active }" class="absolute duration-200 top-0 left-0 w-full h-full rounded-full">
      </div>
      <div v-if="!color.available" :style="{ backgroundColor: color.title, borderRadius: rectangle ? '5px' : '100%' }"
        class="absolute z-[1] duration-200 top-0 left-0 w-full h-full rounded-full">
      </div>
      <div v-if="!color.available" :style="{ backgroundColor: '#ddd', borderRadius: rectangle ? '5px' : '100%' }"
          class="absolute z-[2] opacity-50 duration-200 top-0 left-0 w-full h-full rounded-full not_available">
        </div>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    colors: {
      type: Array
    },
    fit: {
      type: Boolean,
      default: false,
    },
    rectangle: {
      type: Boolean,
      default: false,
    }
  },
  data: () => {
    return {
      white_list: ['#FFF', '#fff', '#FFFFFF', '#ffffff']
    }
  },
  methods: {
    checkIfNotWhite(color) {
      return !this.white_list.includes(color);
    },
    notification(placement) {
      this.$notification.error({
        message: 'Notification Title',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        placement
      });
    }
  },
}
</script>

<style scoped>
.not_available {
  clip-path: polygon(0 0, 100% 100%, 0 100%);
}
</style>