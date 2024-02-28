import { PrismaClient } from '@prisma/client'

export const databaseConn = new PrismaClient({
  log: ['query'],
})
