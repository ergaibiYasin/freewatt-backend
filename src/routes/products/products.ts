import productsController from '../../controllers/products/products';

const express = require('express');


const router = express.Router();


router.post('/', async(req, res, next) => {
    // console.log(req);
    try {
        productsController.addProduct(req);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// router.post('/', async(req, res, next) => {
//     console.log(req.body);
    
// });

export default router;
