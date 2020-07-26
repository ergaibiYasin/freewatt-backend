const express = require('express');
import  productsdb from '../../db/products/products';
const bodyParser = require('body-parser');
const server = express();
server.use(express.json());

server.use(bodyParser.json());





export default class ProductsController {
    public static addOrUpdateProduct(req) {
        var productId = req.body.productID;
        if (productId ) {
            const product = req.body;
            productsdb.updateProduct(product);
        } else {
            this.addProduct(req);
        }
        
    };
    
    
    public static delProduct(req) {
        var productId = req.query.productId;

        productsdb.delProduct(productId);
    };

    private static addProduct(req : any){
        const product = req.body;
        var values = [];
        values.push([product.productName, product.categoryID, product.price, product.description, product.commentaire]);
        productsdb.addProduct(values);
    }
    
    
}
