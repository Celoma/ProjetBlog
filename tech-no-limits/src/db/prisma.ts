import {PrismaClient} from "@prisma/client";
declare global {
   var prisma: PrismaClient | undefined;
  }
export const prisma =
    global.prisma ??
    new PrismaClient({
               log:
                        process.env.NODE_ENV === 'development'
                                    ? ['query', 'error', 'warn'] : ['error'] });