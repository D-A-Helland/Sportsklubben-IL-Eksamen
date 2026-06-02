export default defineEventHandler(async (event) => {
  const tickets = await prisma.tickets.findMany({
    include: {
      brukere: true
    }
  })

  return tickets
})
