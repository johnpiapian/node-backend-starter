import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    // Clear all data before seeding
    await prisma.user.deleteMany();

    // Seed users
    await prisma.user.create({ data: { name: 'Alice', email: 'alice@uwm.edu' } });
    await prisma.user.create({ data: { name: 'James', email: 'james@uwm.edu' } });
    await prisma.user.create({ data: { name: 'John', email: 'john@uwm.edu' } });
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

export default prisma;