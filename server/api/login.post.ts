import { prisma } from '../utils/prisma'
import { verifyPassword } from '../utils/password'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { epost, password } = body

    if (!epost || !password) {
        throw createError({ statusCode: 400, statusMessage: 'Missing fields' })
    }

    const user = await prisma.brukere.findUnique({
        where: { epost }
    })

    if (!user) {
        throw createError({ statusCode: 401, statusMessage: 'Invalid credentials' })
    }

    const valid = await verifyPassword(password, user.passord_hash)

    if (!valid) {
        throw createError({ statusCode: 401, statusMessage: 'Invalid credentials' })
    }

    setCookie(event, 'userId', String(user.id), {
        httpOnly: true,
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 * 7 // 7 days
    })

    return { message: 'Logged in' }
})