<template>
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M10.0518 12.2135C9.77049 12.2135 9.54182 12.4422 9.54182 12.7235C9.54182 13.0048 9.77049 13.2328 10.0518 13.2328C10.3332 13.2328 10.5612 13.0048 10.5612 12.7235C10.5612 12.4422 10.3332 12.2135 10.0518 12.2135Z"
      :stroke="fill" stroke-linecap="round" stroke-linejoin="round" />
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M2.55021 12.2135C2.26888 12.2135 2.04021 12.4422 2.04021 12.7235C2.04021 13.0048 2.26888 13.2328 2.55021 13.2328C2.83154 13.2328 3.06021 13.0048 3.06021 12.7235C3.06021 12.4422 2.83154 12.2135 2.55021 12.2135Z"
      :stroke="fill" stroke-linecap="round" stroke-linejoin="round" />
    <path
      d="M13.1667 1.16663L11.7801 1.40663L11.1381 9.05529C11.0861 9.67863 10.5654 10.1573 9.94008 10.1573H2.66541C2.06808 10.1573 1.56141 9.71863 1.47541 9.12663L0.842748 4.75463C0.764748 4.21529 1.18275 3.73263 1.72741 3.73263H11.5574"
      :stroke="fill" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5.58307 6.19661H3.7344" :stroke="fill" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>

<script>
export default {
  props: {
    fill: {
      type: String,
      default: '#fff',
    }
  }
}
</script>

<style scoped>
svg {
  transition: fill 0.3s ease;
}
</style>