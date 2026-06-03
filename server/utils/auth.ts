import { prisma } from '../utils/prisma'

export const requireAdmin = async (event: any) => {
    const userId = getCookie(event, 'userId')

    if (!userId) {
        throw createError({ statusCode: 401, statusMessage: 'Not logged in' })
    }

    const user = await prisma.brukere.findUnique({
        where: { id: Number(userId) }
    })

    if (!user || user.rolle !== 'admin') {
        throw createError({ statusCode: 403, statusMessage: 'Not admin' })
    }

    return user
}