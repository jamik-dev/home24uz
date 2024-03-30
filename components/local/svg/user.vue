<template>
  <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7.66373" cy="5.22282" r="3.82243" :stroke="fill" stroke-width="1.5" stroke-linecap="round"
      stroke-linejoin="round" />
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M1.6006 14.362C1.59957 14.0933 1.65967 13.8279 1.77634 13.5858C2.14248 12.8536 3.17497 12.4655 4.03172 12.2897C4.64961 12.1579 5.27603 12.0698 5.90632 12.0261C7.07326 11.9236 8.24693 11.9236 9.41387 12.0261C10.0441 12.0703 10.6705 12.1584 11.2885 12.2897C12.1452 12.4655 13.1777 12.8169 13.5438 13.5858C13.7785 14.0793 13.7785 14.6521 13.5438 15.1455C13.1777 15.9144 12.1452 16.2659 11.2885 16.4343C10.6713 16.5717 10.0447 16.6622 9.41387 16.7053C8.46408 16.7858 7.50986 16.8005 6.55804 16.7492C6.33836 16.7492 6.126 16.7492 5.90632 16.7053C5.27789 16.6628 4.65364 16.5722 4.03904 16.4343C3.17497 16.2659 2.1498 15.9144 1.77634 15.1455C1.66026 14.9007 1.60023 14.633 1.6006 14.362Z"
      :stroke="fill" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

</template>

<script>
export default {
  props: {
    fill: {
      type: String,
      default: '#727474',
    }
  }
}
</script>

<style scoped>
svg {
  transition: fill 0.3s ease;
}
</style>