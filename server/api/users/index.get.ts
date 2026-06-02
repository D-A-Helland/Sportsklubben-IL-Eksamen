export default defineEventHandler(async (event) => {
  return await prisma.users.findMany()
})
