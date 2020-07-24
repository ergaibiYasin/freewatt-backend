const express = require('express');
import  productsdb from '../../db/products/products';

export default class ProductsController {
    public static addProduct(req) {
        var jsondata = req.body;
        var values = [];
    
        for(var i=0; i< jsondata.length; i++)
            values.push([jsondata[i].productID, jsondata[i].productName, jsondata[i].categoryID, jsondata[i].price, jsondata[i].description, jsondata[i].commentaire]);
    
    
        productsdb.addProduct(values);
    };
    
    
}
