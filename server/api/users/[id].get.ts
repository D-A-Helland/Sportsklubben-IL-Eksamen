export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'))

  const user = await prisma.brukere.findUnique({
    where: { id },
    select: {
      id: true,
      navn: true,
      tlf: true,
      epost: true,
      rolle: true,
    },
  })

  if (!user) {
    throw createError({
      statusCode: 404,
      statusMessage: 'User not found',
    })
  }

  return user
})
