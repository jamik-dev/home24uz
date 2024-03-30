export default ({ $axios, redirect, error }, inject) => {
  const axiosURL = $axios.create({
    baseURL: process.env.BASE_URL || 'https://e-shop.ndc.uz/api',
  })

  axiosURL.interceptors.response.use(
    (response) => response,
    (err) => {
      if (err.response && err.response.status === 401) {
        redirect('/login')
      }
      return Promise.reject(err)
    }
  )

  inject('axiosURL', axiosURL)
}