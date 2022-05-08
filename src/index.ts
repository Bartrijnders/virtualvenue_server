import express from 'express';
import { nextTick } from 'process';
import { templateRouter } from './Routing/templateRouter';
import {widgetPlacementRouter}  from './Routing/widgetPlacementRouting';

const app = express();
require('dotenv').config();

app.use('/template', templateRouter);
app.use('/template/:id/widgetplacement', (req, res, next) => widgetPlacementRouter(req.params))



app.listen(3001, () => {
    console.log('listening')
})
