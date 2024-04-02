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

  axiosURL.interceptors.request.use((config) => {
    config.headers.common['Authorization'] = `Bearer ${process.server ? '' : localStorage.getItem('token') ? localStorage.getItem('token') : ''}`
    return config
  })

  inject('axiosURL', axiosURL)
}