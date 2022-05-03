import { rejects } from 'assert';
import { BADSTR } from 'dns';
import express from 'express';
import { resolve } from 'path';
import { Widget } from './entities/Widget';
import POOL from './Postgres/Connection'
import { daoAble } from './Postgres/interfaces/daoAble';
import { WidgetDao } from './Postgres/widgetDAO';
const app = express();
require('dotenv').config();
let widgetDao: daoAble<Widget> = new WidgetDao(POOL);

app.get('/boi', async(req, res, next) => {
    let widget = new Widget('save test');
    let result = await widgetDao.save(widget);
    console.log('hello');
    res.status(200).send();
})

app.listen(3001, () => {
    console.log(`server running on port: ${process.env.PG_PORT}`);
    //console.log(widgetDao.getAll);
})
