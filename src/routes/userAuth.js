import express from 'express';
import { getAllUsers, getUserById } from '../controllers/userController.js';

const router = express.Router();

router.get('/', async (req, res) => {
    res.status(200).json(await getAllUsers());
});

router.get('/:id', async (req, res) => {
    const userId = req.params.id;
    
    res.status(200).json(await getUserById(userId));
});

export default router;