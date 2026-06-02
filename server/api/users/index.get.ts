export default defineEventHandler(async (event) => {
  return await prisma.brukere.findMany()
})
