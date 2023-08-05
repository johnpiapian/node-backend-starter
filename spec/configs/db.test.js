import db from '../../src/configs/db';

describe('Database connection', () => {
    beforeAll(async () => {
        await db.$connect();
    });

    afterAll(async () => {
        await db.$disconnect();
    });

    it('should populate user data', async () => {
        const users = await db.user.findMany();
        expect(users.length).toEqual(3);
    });

    it('should populate post data', async () => {
        const posts = await db.post.findMany();
        expect(posts.length).toEqual(5);
    });
});