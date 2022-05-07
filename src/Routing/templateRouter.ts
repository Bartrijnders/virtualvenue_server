import express from 'express';
import {body, validationResult} from 'express-validator'
import { json } from 'stream/consumers';
import { runInNewContext } from 'vm';
import { templateFactory } from '../entities/factory/templateFactory';
import { Template } from '../entities/Template';
import { TemplateConstructorType } from '../entities/types/templateConstructorType';
import serviceContainer from '../Services/serviceContainer';
import { TemplateService } from '../Services/templateService';

export const templateRouter = express.Router();

/**
 * Router method. Returns all templates.
 */
templateRouter.get('/', async(req, res, next) => {
    let result = await serviceContainer.getTemplateService().getAll();
   if(result) {
    res.status(200).json(result);
   } else {
    res.status(404).json([]);
   }
});

/**
 * Router method. Returns a template with the given id.
 */
templateRouter.get('/:id', async(req, res) => {
    try{
        let id = req.params.id;
        let result = await serviceContainer.getTemplateService().getById(id);
        console.log(result);
        if(result !== undefined) {
            res.status(200).json(result);
        } else {
            res.status(404).json({});
        }
    } catch (error) {
        console.log(error);
    }
});

templateRouter.post('/' , async(req, res) => {
    try{
        let query = req.query;
        if (query.hasOwnProperty('_name') && typeof query._name === 'string') {
            let result = serviceContainer.getTemplateService().create({_name: query._name})
            res.status(201).json(result);
        } else {
            res.status(400).json({});
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});

templateRouter.put('/:id', async(req, res) => {
    try{
        let id = req.params.id;
        let template = await serviceContainer.getTemplateService().getById(id);
        if(!template){
            res.sendStatus(404);
        } else {
            let query = req.query;
            if(query.hasOwnProperty('_name') && typeof query._name === 'string'){
                template.setName(query._name)
                serviceContainer.getTemplateService().update(template);
                res.status(201).json(template);
            }
        }
        res.sendStatus(400);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
