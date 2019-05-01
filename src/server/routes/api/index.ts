import * as express from 'express';
import eventRoutes from './events';

const router = express.Router();

router.use('/events', eventRoutes);

export default router;