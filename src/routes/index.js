import express from 'express';
import userRoute from './userAuth.js';

const router = express.Router();

router.use('/users', userRoute);

export default router;