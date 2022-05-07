import express from 'express';
import { TemplateService } from '../Services/templateService';
export const templateRouter = express.Router();

/**
 * Router method. Returns all templates.
 */
templateRouter.get('/', (req, res, next) => {
    res.status(200).send({name: "hello"});
    console.log('test get');
    
});

/**
 * Router method. Returns a template with the given id.
 */
templateRouter.get('/:id', (res, req, next) => {
    console.log('id;')
});