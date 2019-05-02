import * as express from 'express';
import knex from '../../db';

const router = express.Router();

router.get('/applied/:id', async (req, res, next) => {
    try {
        let data = await knex('jobapps').select('*').where('status', '=', 'Applied').where('userid', '=', req.params.id);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.json(500);
    }
});

export default router;