import SalesController from "../../controllers/sales/sales";
const express = require('express');

const router = express.Router();


router.post('/addOrUpdate', async(req, res, next) => {
    try {
        SalesController.addOrUpdateSale(req);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


router.delete('/del', async(req, res, next) => {
    try {
        SalesController.delSale(req);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


export default router;
