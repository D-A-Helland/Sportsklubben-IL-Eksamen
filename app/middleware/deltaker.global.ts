export default defineNuxtRouteMiddleware(async (to) => {
  if (!to.path.startsWith('/access')) return


  const user = await $fetch('/api/auth/me')

  if (user?.rolle === 'admin' || user?.rolle === 'deltaker') {
    return navigateTo('/')
  } else if (!user) {
    return navigateTo('/login')
  }
})
