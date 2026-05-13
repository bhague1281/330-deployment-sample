import express from 'express';
import itemsRoutes from './items';

const router = express.Router();

router.use('/items', itemsRoutes);

export default router;
