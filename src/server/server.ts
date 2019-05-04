import * as path from 'path';
import * as express from 'express';
import Router from './routes';
import * as morgan from 'morgan';
import * as twilio from 'twilio';
import config from './config';

const app = express();
const client = twilio(config.twilio.asid, config.twilio.authtoken);

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
