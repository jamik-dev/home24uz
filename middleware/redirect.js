export default function ({ route, redirect }) {
  if (route.fullPath === '/category') {
    return redirect('/')
  }
}