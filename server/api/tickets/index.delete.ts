export default defineEventHandler(async (event) => {
  const { id } = await readBody(event)

  await prisma.tickets.delete({
    where: { id }
  })

  return { success: true }
})
