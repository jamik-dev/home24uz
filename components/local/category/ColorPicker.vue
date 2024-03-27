<template>
  <div :style="{width: fit ? 'fit-content' : '100%'}" class="grid grid-cols-10 gap-4">
    <button @click="handleColor(color)" :style="{borderColor: checkIfNotWhite(color) ? color : '#EBEBEB', background: checkIfNotWhite(color) ? '' : '#EBEBEB', borderRadius: rectangle ? '5px' : '100%'}" v-for="color in colors" :key="color" class="col-span-2 outline-none cursor-pointer border relative h-10 w-10 overflow-hidden">
      <div :style="{backgroundColor: color, borderRadius: rectangle ? '5px' : '100%'}" :class="{'scale-[70%]' : selectedColor.includes(color)}" class="absolute duration-200 top-0 left-0 w-full h-full rounded-full"></div>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    colors: {
      type: Array,
      default: ['#000'],
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
      selectedColor: [],
    }
  },
  methods: {
    handleColor(color) {
      if (this.selectedColor.includes(color)) {
        this.selectedColor = this.selectedColor.filter(item => item !== color)
      } else {
        this.selectedColor.push(color)
      }
    },
    checkIfNotWhite(color) {
      const white_list = ['#FFF', '#fff', '#FFFFFF', '#ffffff'];
      return !white_list.includes(color);
    }
  },
}
</script>

<style scoped>
</style>