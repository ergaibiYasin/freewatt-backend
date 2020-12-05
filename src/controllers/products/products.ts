import  productsdb from '../../db/products/products';


const express = require('express');
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
            return this.addProduct(req);
            
        }
        
    };
    
    public static allProducts() {
        const results = productsdb.allProducts();
        return results;
        
    };
    
    
    public static delProduct(req) {
        var productId = req.params.id;
        productsdb.delProduct(productId);
        return productId;
    };

    private static addProduct(req : any){
        const product = req.body;
        var values = [];
        values.push([product.productName, product.price, product.description, product.commentaire, product.fournisseur]);
        productsdb.addProduct(values);
        return values;
    }
    
    
}
