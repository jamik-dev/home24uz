<template>
  <a-carousel arrows>
    <div v-if="arrows" slot="prevArrow" slot-scope="props" class="custom-arrow custom-arrow--left">
      <a-icon type="arrow-left" />
    </div>
    <div v-if="arrows" slot="nextArrow" slot-scope="props" class="custom-arrow custom-arrow--right">
      <a-icon type="arrow-right" />
    </div>
    <slot />
  </a-carousel>
</template>
<script>
export default {
  props: {
    arrows: Boolean,
    default: false
  }
}
</script>
<style>
.ant-carousel .slick-dots {
  height: auto;
}

.ant-carousel .slick-dots-bottom {
  bottom: -25px;
  z-index: 5;
  display: flex !important;
  align-items: center;
  justify-content: center;
}

.ant-carousel .slick-dots li {
  width: auto;
  height: auto;
  margin: 0 5px;
}

.ant-carousel .slick-dots li button {
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: #FF7E00;
  transition: all 0.2s ease;
}

.ant-carousel .slick-dots-bottom li.slick-active button {
  width: 12px;
  height: 12px;
  background: #FFA854;
}

.ant-carousel .custom-arrow {
  width: 48px;
  height: 48px;
  font-size: 24px;
  color: #000;
  background-color: #FFFFFF;
  border-radius: 100%;
  display: flex!important;
  margin: 0;
  transform: translateY(-50%);
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  z-index: 1;
}

.ant-carousel .custom-arrow:active, .ant-carousel .custom-arrow:focus, .ant-carousel .custom-arrow:hover {
  background-color: #fff;
  color: #000;
}

.ant-carousel .custom-arrow--left {
  left: 16px;
}

.ant-carousel .custom-arrow--right {
  right: 16px;
}

.ant-carousel .custom-arrow:before {
  display: none;
}

.ant-carousel .custom-arrow:hover {
  opacity: 0.5;
}

.ant-carousel .custom-arrow:before {
  display: none;
}
</style>