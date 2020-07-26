import productsController from '../../controllers/products/products';

const express = require('express');

const router = express.Router();


router.post('/addOrUpdate', async(req, res, next) => {
    try {
        productsController.addOrUpdateProduct(req);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


router.delete('/del', async(req, res, next) => {
    try {
        productsController.delProduct(req);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


export default router;
