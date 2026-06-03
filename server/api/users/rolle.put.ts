export default defineEventHandler(async (event) => {
  const { id } = await readBody(event)

  const user = await prisma.brukere.update({
    where: {
      id
    },
    data: {
      rolle: 'deltaker'
    }
  })

  return user
})
