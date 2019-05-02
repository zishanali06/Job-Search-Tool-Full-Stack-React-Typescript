import * as express from 'express';
import eventRoutes from './events';
import jobRoutes from './jobs';

const router = express.Router();

router.use('/events', eventRoutes);
router.use('/jobs', jobRoutes);

export default router;