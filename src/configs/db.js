import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
let initialized = false;

async function connect() {
    try {
        await prisma.$connect();
        console.log('Database connected!');
    } catch (e) {
        console.error(e);
        throw e;
    } finally {
        await prisma.$disconnect();
    }
}

async function populate() {
    // reset data
    await prisma.user.deleteMany();
    await prisma.post.deleteMany();

    // seed users
    await prisma.user.create({ data: { name: 'Alice', email: 'alice@uwm.edu' } });
    await prisma.user.create({ data: { name: 'James', email: 'james@uwm.edu' } });
    await prisma.user.create({ data: { name: 'John', email: 'john@uwm.edu' } });

    // seed posts
    await prisma.post.create({ data: { title: 'Post 1', content: 'Content 1', published: true } });
    await prisma.post.create({ data: { title: 'Post 2', content: 'Content 2', published: true } });
    await prisma.post.create({ data: { title: 'Post 3', content: 'Content 3', published: true } });
    await prisma.post.create({ data: { title: 'Post 4', content: 'Content 4', published: true } });
    await prisma.post.create({ data: { title: 'Post 5', content: 'Content 5', published: true } });
}

async function main() {
    if (!initialized) {
        await connect();
        await populate();
        initialized = true;
    }
}

await main();

export default prisma;