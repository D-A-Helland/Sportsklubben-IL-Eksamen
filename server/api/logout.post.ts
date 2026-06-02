export default defineEventHandler(async (event) => {
    deleteCookie(event, 'userId')
    return { message: 'Logged out' }
})