"use strict";
const pg_1 = require("pg");
require('dotenv').config();
const POOL = new pg_1.Pool({
    user: String(process.env.PG_USER),
    host: String(process.env.PG_HOST),
    database: String(process.env.PG_DATBASE),
    password: process.env.PG_PASSWORD,
    port: parseInt(String(process.env.PG_PORT))
});
module.exports = POOL;
