import * as express from 'express';
import knex from '../../db';

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        let data = await knex('events').select('*').orderBy('date', 'asc');
        res.json(data);
    } catch (error) {
        console.log(error);
        res.json(500);
    }
});

router.post('/add', async (req, res, next) => {
    try {
        let data = await knex('events').insert(req.body);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.json(500);
    }
})

export default router;