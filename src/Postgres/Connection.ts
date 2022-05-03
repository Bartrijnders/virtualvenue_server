import { Pool } from "pg";
require('dotenv').config();


const POOL: Pool = new Pool({
    user: String(process.env.PG_USER),
    host:   String(process.env.PG_HOST),
    database: String(process.env.PG_DATBASE),
    password: process.env.PG_PASSWORD,
    port: parseInt(String(process.env.PG_PORT))
});

export = POOL;