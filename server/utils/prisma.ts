
import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

declare const globalThis: {
  prisma: PrismaClient | undefined
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  // In development, reuse the existing client if it exists
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient()
  }
  prisma = globalThis.prisma
}

export { prisma }
