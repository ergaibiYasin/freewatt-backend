const express = require('express');
import  productsdb from '../../db/products/products';
const bodyParser = require('body-parser');
const server = express();
server.use(express.json());

server.use(bodyParser.json());





export default class ProductsController {
    public static addProduct(req) {
        console.log("1");
        var jsondata = req.body;
        console.log("2");
        var values = [];
    
        for(var i=0; i< jsondata.length; i++){
            values.push([jsondata[i].productID, jsondata[i].productName, jsondata[i].categoryID, jsondata[i].price, jsondata[i].description, jsondata[i].commentaire]);
        }
        console.log("3");
        productsdb.addProduct(values);
        console.log("4");
    };
    
    
}
