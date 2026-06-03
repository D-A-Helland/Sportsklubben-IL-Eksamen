export default defineEventHandler(async (event) => {
  const id = Number(event.context.params?.id)

  await prisma.brukere.delete({
    where: { id }
  })

  return { success: true }
})
