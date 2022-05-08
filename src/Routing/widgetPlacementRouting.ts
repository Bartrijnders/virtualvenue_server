import express from "express";
import { appendFile } from "fs";
import { WidgetPlacement } from "../entities/WidgetPlacement";
import serviceContainer from "../Services/serviceContainer";

export let widgetPlacementRouter = (config: {id: string}) => {
    let router = express.Router();

    router.get('/', async(req, res) => {
        try{
        let parent = await serviceContainer.getTemplateService().getById(config.id)
        if(parent !== undefined){
            let widgetPlacements = await serviceContainer.getWidgetPlacementService().getByParent(parent)
            res.status(200).json(widgetPlacements);
        } else{
            res.sendStatus(404);
        }
        } catch (error) {
            res.status(500).send(error);
        }
    });

    router.get('/:id', (req, res) =>{
        /*try {
            let widgetplacement = await  serviceContainer.getWidgetPlacementService().
        }*/
    });

    return router;
}


