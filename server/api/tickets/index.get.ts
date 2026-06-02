export default defineEventHandler(async (event) => {
  const tickets = await prisma.tickets.findMany()

  return tickets
})
