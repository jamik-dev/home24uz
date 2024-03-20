<template>
  <a-layout>
    <TheHeader />
    <Nuxt/>
    <TheFooter />
  </a-layout>
</template>
<script>
import TheHeader from "@/components/global/TheHeader.vue";
import TheFooter from "@/components/global/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
<style>
  
</style>