import * as express from 'express';
import knex from '../../db';

const router = express.Router();

router.get('/:id', async (req, res, next) => {
    let id = req.params.id;
    if (id) {
        try {
            let data = await knex('jobapps').select('*').where('userid', '=', id);
            res.json(data);
        } catch (error) {
            console.log(error);
            res.json(500);
        }
    };
});

router.get('/single/:id', async (req, res, next) => {
    let id = req.params.id;
    if (id) {
        try {
            let [data] = await knex('jobapps').select('*').where('id', '=', id);
            console.log(data);
            res.json(data);
        } catch (error) {
            console.log(error);
            res.json(500);
        }
    };
});

router.get('/applied/:id', async (req, res, next) => {
    try {
        let data = await knex('jobapps').select('*').where('status', '=', 'Applied').where('userid', '=', req.params.id);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.json(500);
    };
});

router.post('/add', async (req, res, next) => {
    try {
        let data = await knex('jobapps').insert(req.body);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.json(500);
    }
});

export default router;