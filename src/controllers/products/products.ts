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
        values.push([product.productName, product.fournisseur, product.price, product.description, product.commentaire]);
        productsdb.addProduct(values);
        return values;
    }
    
    public static async productName() {
        const results = await productsdb.selectProductName();
        var table = [];
        var string = JSON.stringify(results);
        var json = JSON.parse(string);
        for (var i = 0; i<json.length; i++){
            table.push(json[i].productName)
        };
        console.log(table);

        return table;
        
    };
}
