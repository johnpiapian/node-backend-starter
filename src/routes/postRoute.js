import express from 'express';
import * as postService from '../services/postService.js';

const router = express.Router();

router.get('/', async (req, res) => {
    res.status(200).json(await postService.getAllPosts());
});

export default router;