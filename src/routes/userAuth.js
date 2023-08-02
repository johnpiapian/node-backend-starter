import express from 'express';
import { getAllUsers, getUserById } from '../services/userService.js';

const router = express.Router();

router.get('/', async (req, res) => {
    res.status(200).json(await getAllUsers());
});

router.get('/:id', async (req, res) => {
    const userId = req.params.id;
    const user = await getUserById(userId);

    if (!user) {
        res.status(404).json({ message: 'User not found!' });
        return;
    }

    res.status(200).json(await getUserById(userId));
});

export default router;