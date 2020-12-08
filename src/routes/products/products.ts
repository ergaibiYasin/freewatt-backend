import productsController from '../../controllers/products/products';

const express = require('express');

const router = express.Router();


router.post('/addOrUpdate', async(req, res, next) => {
    try {
        let values = await productsController.addOrUpdateProduct(req);
        await res.json(values);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.get('/allProducts', async(req, res, next) => {
    try {
        let results = await productsController.allProducts();
        await res.json(results);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.get('/productName', async(req, res, next) => {
    try {
        let results = await productsController.productName();
        await res.send(results);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


router.delete('/del/:id', async(req, res, next) => {
    try {
        let productId = await productsController.delProduct(req);
        await res.json(productId);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


export default router;
