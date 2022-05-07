import express from 'express';
import { templateRouter } from './Routing/templateRouter';
const app = express();
require('dotenv').config();

app.use('/template', templateRouter);

app.get('/', async(req, res, next) => {
    
})



app.listen(3001, () => {
})
