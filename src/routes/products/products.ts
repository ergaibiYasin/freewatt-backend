import router from '../index';
import productsController from '../../controllers/products/products';

const express = require('express');


router.post('/addproduct', async(req, res, next) => {
    try {
        productsController.addProduct(req);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});