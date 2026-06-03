export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const ticket = await prisma.tickets.create({
    data: {
      bruker_id: body.bruker_id
    }
  })

  return ticket
})
