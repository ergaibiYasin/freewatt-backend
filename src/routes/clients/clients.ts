import clientsController from '../../controllers/clients/clients'
const express = require('express');

const router = express.Router();

router.post('/addOrUpdate', async(req, res, next) => {
    try {
        
        let values = await clientsController.addOrUpdateClient(req);
        await res.json(values);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.get('/allclients', async(req, res, next) => {
    try {
        let results = await clientsController.allClients();
        await res.json(results);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.delete('/del/:id', async(req, res, next) => {
    try {
        let productId = await clientsController.delClient(req);
        await res.json(productId);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


export default router;
