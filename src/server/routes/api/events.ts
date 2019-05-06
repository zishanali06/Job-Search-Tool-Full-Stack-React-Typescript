import * as express from 'express';
import knex from '../../db';

const router = express.Router();

router.get('/:id', async (req, res, next) => {
    let id = req.params.id;
    try {
        let data = await knex('events').select('*').where('userid', '=', id).orderBy('date', 'asc');
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