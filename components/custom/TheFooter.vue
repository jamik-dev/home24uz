<template>
  <div class="px-16 py-[60px]">
    <div class="w-full grid grid-cols-4 gap-12 border-b border-grey-1 pb-8">
      <div>
        <h2 class="text-xl">Информация</h2>
        <ul class="flex flex-col text-grey-text text-lg mt-6 gap-2">
          <li>О компании</li>
          <li>Наши партнеры</li>
          <li>Блог</li>
          <li>О наших акциях и скидках</li>
          <li>Пользовательское соглашение</li>
        </ul>
      </div>
      <div>
        <h2 class="text-xl">Поддержка и сервис</h2>
        <ul class="flex flex-col text-grey-text text-lg mt-6 gap-2">
          <li>Вопросы и ответы</li>
          <li>Отзывы</li>
          <li>Контакты</li>
          <li>Для партнеров</li>
        </ul>
      </div>
      <div>
        <h2 class="text-xl">Мой профиль</h2>
        <ul class="flex flex-col text-grey-text text-lg mt-6 gap-2">
          <li>Личный кабинет</li>
          <li>Избранные товары</li>
          <li>Список сравнения</li>
          <li>Мои заказы</li>
        </ul>
      </div>
      <div>
        <h2 class="text-xl">Контакты</h2>
        <ul class="flex flex-col text-grey-text text-lg mt-6 gap-2">
          <li>Телефон: +998 (71) 200-7-002</li>
          <li>Ташкент, ул. Коратош, 106</li>
        </ul>
        <div class="mt-12 flex items-center gap-6">
          <img class="w-24" src="~/assets/img/qr_code.png" alt="qr code">
          <p class="text-grey-text text-lg">Наведите камеру <br> на QR-код, чтобы найти местоположение</p>
        </div>
      </div>
    </div>
    <div class="mt-10 flex justify-between">
      <div>
        <div class="flex gap-3">
          <div class="h-[60px] w-[60px] bg-grey-4 flex justify-center items-center rounded-full"><img
              src="~/assets/icon/instagram_footer.svg" alt="instagram"></div>
          <div class="h-[60px] w-[60px] bg-grey-4 flex justify-center items-center rounded-full"><img
              src="~/assets/icon/telegram_footer.svg" alt="telegram"></div>
          <div class="h-[60px] w-[60px] bg-grey-4 flex justify-center items-center rounded-full"><img
              src="~/assets/icon/facebook_footer.svg" alt="facebook"></div>
        </div>
        <p class="text-grey-text text-lg mt-8">© 2022 ООО «Интернет магазин «Home24».</p>
      </div>
      <div class="flex gap-4 items-center">
        <p class="text-lg">Мобильное приложение:</p>
        <div class="h-[60px] w-[60px] bg-grey-4 flex justify-center items-center rounded-full"><img
            src="~/assets/icon/apple_footer.svg" alt="apple"></div>
        <div class="h-[60px] w-[60px] bg-grey-4 flex justify-center items-center rounded-full"><img
            src="~/assets/icon/android_footer.svg" alt="android"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style></style>