<template>
  <div class="w-full flex items-center justify-center py-7">
    <div class="flex items-center gap-6 flex-col">
      <slot name="image"></slot>
      <h2 class="font-ttfirs text-4xl max-w-[80%] text-center">
        <slot name="title"></slot>
      </h2>
      <p class="text-center font-ttfirs text-grey-text text-lg max-w-[80%]">
        <slot name="description"></slot>
      </p>
      <button v-if="button" @click="$router.push('/')"
        class="py-4 hover:text-white hover:bg-orange duration-200 w-[350px] rounded-lg border border-orange text-orange font-medium text-lg">На главную</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    button: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style></style>