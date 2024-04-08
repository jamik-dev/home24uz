<template>
  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.1642 5.16045L3.54639 5.16045" :stroke="fill" stroke-width="1.5" stroke-linecap="round"
      stroke-linejoin="round" />
    <path d="M13.068 1.08278L17.1647 5.16056L13.068 9.23833" :stroke="fill" stroke-width="1.5" stroke-linecap="round"
      stroke-linejoin="round" />
    <path d="M0.832886 15.0889L14.4507 15.0889" :stroke="fill" stroke-width="1.5" stroke-linecap="round"
      stroke-linejoin="round" />
    <path d="M4.92894 19.1666L0.832275 15.0888L4.92894 11.011" :stroke="fill" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round" />
  </svg>

</template>

<script>
export default {
  props: {
    fill: {
      type: String,
      default: '#020105'
    }
  }
}
</script>

<style scoped>
svg {
  transition: all 0.3s ease;
}
</style>