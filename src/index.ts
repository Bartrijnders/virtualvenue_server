import express from 'express';
import { templateRouter } from './Routing/templateRouter';
import serviceContainer from './Services/serviceContainer';

const app = express();
require('dotenv').config();

app.use('/template', templateRouter);



app.listen(3001, () => {
    console.log('listening')
})
