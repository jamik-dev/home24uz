<template>
  <a-breadcrumb :routes="breadCrumb" separator=">">
    <template slot="itemRender" slot-scope="{ route, params, routes, paths }">
      <span class="text-orange font-ttfirs text-xl" v-if="routes.indexOf(route) === routes.length - 1">
        {{ route.name }}
      </span>
      <nuxt-link class="font-ttfirs hover:!text-orange text-xl" v-else :to="route.url">
        {{ route.name }}
      </nuxt-link>
    </template>
  </a-breadcrumb>
</template>
<script>
export default {
  props: {
    breadCrumb: {
      type: Array,
      default: [{ name: 'Home', url: '/' }]
    },
  }
}
</script>
<style lang="">

</style>