export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'))

  const ticket = await prisma.tickets.findUnique({
    where: { id }
  })

  return ticket
})
