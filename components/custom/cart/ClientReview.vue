<template>
  <div class="flex flex-col justify-between gap-4 h-full">
    <div class="flex flex-col gap-3">
      <div class="flex gap-2 items-center"><img :src="feedback.logo || require(`~/assets/img/brands/2.png`)" class="w-14 h-14 rounded-full" :alt="feedback.company" /><p class="font-ttfirs font-medium text-lg">{{ feedback.company }}</p></div>
      <img class="w-full rounded-xl fit-content h-[240px]" :src="feedback.images[0]?.lg_img || require(`~/assets/img/default/1.png`)" :alt="feedback.company" />
      <p class="text-black-3 leading-snug text-lg h-[72px] line-clamp-3">{{ feedback.feedback }}</p>
    </div>
    <p class="text-orange cursor-pointer hover:underline font-ttfirs text-xl w-fit">Читать...</p>
  </div>
</template>
<script>
export default {
  props: {
    feedback: {
      type: Object,
    }
  }
}
</script>
<style>
  
</style>