import Salesdb from "../../db/sales/sales"

const express = require('express');
const bodyParser = require('body-parser');
const server = express();


server.use(express.json());

server.use(bodyParser.json());





export default class SalesController {
    public static addOrUpdateSale(req) {
        var saleId = req.body.saleID;
        if (saleId ) {
            const sale = req.body;
            Salesdb.updateSale(sale);
        } else {
            this.addSale(req);
        }
        
    };
    
    
    public static delSale(req) {
        var saleId = req.query.saleID;
        Salesdb.delSale(saleId);
    };

    private static addSale(req : any){
        const sale = req.body;
        console.log(sale);
        var values = [];
        values.push([sale.customerID, sale.productID, sale.unitPrice, sale.quantity, sale.saleDate, sale.comment]);
        Salesdb.addSale(values);
    }
    
    
}
