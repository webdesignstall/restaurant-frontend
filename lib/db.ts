import {PrismaClient} from '@prisma/client';

const globalForPrisma = global;

// @ts-ignore
const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
    // @ts-ignore
    globalForPrisma.prisma = prisma;
}

export default prisma
