import * as express from 'express';
import knex from '../../db';
import * as twilio from 'twilio';
import config from '../../config';
import * as cron from 'node-cron';

const client = twilio(config.twilio.asid, config.twilio.authtoken);

const router = express.Router();

router.post('/alert/:id', async (req, res, next) => {
    try {
        cron.schedule("* * * * *", function () {
            client.messages
                .create({
                    body: req.params.id,
                    from: '+12056351609',
                    to: '+14693698035'
                })
                .then(message => console.log('This is the message: ' + message.body));
            console.log("running a task every minute");
        });
        res.json('crons started');
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

export default router;