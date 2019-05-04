import * as express from 'express';
import eventRoutes from './events';
import jobRoutes from './jobs';
import twilioRoutes from './twilio';

const router = express.Router();

router.use('/events', eventRoutes);
router.use('/jobs', jobRoutes);
router.use('/twilio', twilioRoutes);

export default router;