import express from 'express';
import * as userService from '../services/userService.js';
import * as jwt from '../utils/jwt.js';

const router = express.Router();

router.get('/', async (req, res) => {
    res.status(200).json(await userService.getAllUsers());
});

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) throw new Error('email and password are required');

        const user = await userService.authenticateUser(email, password);

        if (user) {
            const token = jwt.generateToken(user, '24h');
            res.status(201).json({ message: 'user authenticated', token });
            return;
        }

        throw new Error('authentication error');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    const userId = req.params.id;
    const user = await userService.getUserById(userId);

    if (!user) {
        res.status(404).json({ message: 'user not found' });
        return;
    }

    res.status(200).json(await userService.getUserById(userId));
});

export default router;