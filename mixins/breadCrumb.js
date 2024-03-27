export default {
  data: () => {
    return {
      breadCrumb: []
    }
  },
  methods: {
    routerCheck(path = '') {
      const params = this.$route.params;
      const crumbs = [{ name: 'Главная', url: '/' }];

      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          path += `/${params[key]}`;
          crumbs.push({ name: params[key], url: path });
        }
      }

      this.breadCrumb = crumbs;
    }
  }
}