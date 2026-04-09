import { PrismaClient } from '../generated/prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: any | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient({} as any)

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
