import prisma from '@/server/utils/prisma'


export default defineEventHandler(async (event) => {
    return {
        user: await prisma.user.findFirst(),
    };
});