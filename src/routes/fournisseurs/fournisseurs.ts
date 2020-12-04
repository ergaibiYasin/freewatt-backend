import fournisseursController from '../../controllers/fournisseurs/fournisseurs'
const express = require('express');

const router = express.Router();

router.post('/addOrUpdate', async(req, res, next) => {
    try {
        
        let values = await fournisseursController.addOrUpdatefournisseur(req);
        await res.json(values);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.get('/allfournisseurs', async(req, res, next) => {
    try {
        let results = await fournisseursController.allfournisseurs();
        await res.json(results);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.delete('/del/:id', async(req, res, next) => {
    try {
        let productId = await fournisseursController.delFournisseur(req);
        await res.json(productId);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


export default router;
