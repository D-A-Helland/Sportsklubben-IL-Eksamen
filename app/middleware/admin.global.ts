export default defineNuxtRouteMiddleware(async (to) => {
  if (!to.path.startsWith('/admin')) return


  try {
    const user = await $fetch('/api/auth/me')

    if (user.rolle !== 'admin') {
      return navigateTo('/')
    }
  } catch (e) {
    console.error(e)
    return navigateTo('/login')
  }
})
