import express from 'express';
import cors from 'cors';
import router from './routes/index.js';
import './configs/db.js'; // connect to database

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', router);
app.get('/*', (req, res) => res.status(404).json({ message: 'Invalid route!' }));

app.listen(port, () => console.log(`Server running on port ${port}`));