import * as path from 'path';
import * as express from 'express';
import Router from './routes';
import * as morgan from 'morgan';
import * as twilio from 'twilio';
import config from './config';
import * as cron from 'node-cron';
import knex from './db';
import * as moment from 'moment';
import './middleware/localstrategy';
import './middleware/bearerstrategy';
import * as passport from 'passport';

const app = express();
app.use(passport.initialize());
const client = twilio(config.twilio.asid, config.twilio.authtoken);

// cron.schedule("* * * * *", async function () {
//     try {
//         let data = await knex('jobapps').select('*');
//         let newdata = data.map((newdata: any) => {
//             return {
//                 date: moment(newdata.date).format(),
//                 userid: newdata.userid,
//                 status: newdata.status,
//                 id: newdata.id
//             };
//         });
//         let jdate = moment().add(1, 'days').format();
//         let todaydate = moment().format();
//         for (let i = 0; i < newdata.length; i++) {
//             let boom = moment(newdata[i].date).isBetween(todaydate, jdate);
//             if (boom === true) {
//                 let [data] = await knex('jobapps').select('*').where('id', '=', newdata[i].id);
//                 client.messages
//                     .create({
//                         body: (`You have an Interview today at ${data.company}, for ${data.jobtitle}!`),
//                         from: '+12056351609',
//                         to: '+14693698035'
//                     })
//                     .then(message => console.log('This is the message: ' + message.body));
//             }
//         };
//         console.log("running a task every minute");
//     } catch (error) {
//         console.log(error);
//     };
// });

app.use(express.json());
app.use(morgan('dev'));

let p = path.join(__dirname, '../public');
console.log(p);

app.use(express.static(p));
app.use(Router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
