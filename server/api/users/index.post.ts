export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { navn, tlf, epost, password } = body

  if (!navn || !epost || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing fields'
    })
  }

  const existing = await prisma.brukere.findUnique({
    where: { epost }
  })

  if (existing) {
    throw createError({
      statusCode: 400,
      statusMessage: 'User already exists'
    })
  }

  const hashed = await hashPassword(password)

  const result = await prisma.$transaction(async (tx) => {
    const user = await tx.brukere.create({
      data: {
        navn,
        tlf,
        epost,
        passord_hash: hashed,
        rolle: 'bruker'
      }
    })

    return { user }
  })

  return result

})
