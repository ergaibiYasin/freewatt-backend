import SalesController from "../../controllers/sales/sales";
const express = require('express');

const router = express.Router();




router.post('/addOrUpdate', async(req, res, next) => {
    try {
        let values = await SalesController.addOrUpdateSale(req);
        await res.json(values);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.get('/allSales', async(req, res, next) => {
    try {
        let results = await SalesController.allSales();
        await res.json(results);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


router.delete('/del/:id', async(req, res, next) => {
    console.log(req.params.id)
    try {
        let saleId = await SalesController.delSale(req);
        await res.json(saleId);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


export default router;
