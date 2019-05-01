import * as knex from 'knex';
import config from '../config';

let connection = knex(config.knex);

export default connection;