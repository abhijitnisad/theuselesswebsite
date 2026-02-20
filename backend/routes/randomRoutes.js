import express from 'express';
import { getRandomWebsite, addUselessWebsite } from '../controllers/randomController.js';

const router = express.Router();

router.get('/random', getRandomWebsite);
router.post('/random', addUselessWebsite);

export default router;
