export default defineEventHandler(async (event) => {
    const userId = getCookie(event, 'userId')

    if (!userId) return null

    const user = await prisma.brukere.findUnique({
        where: { id: Number(userId) },
        select: {
            id: true,
            navn: true,
            epost: true,
            rolle: true
        }
    })

    return user
})
