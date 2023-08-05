import express from 'express';
import userRoute from './userRoute.js';
import postRoute from './postRoute.js';
import * as auth from '../middlewares/auth.js';

const router = express.Router();

router.use('/users', userRoute);
router.use('/posts', auth.checkAuth, postRoute);

export default router;