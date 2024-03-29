import { pool } from '../db';



export default class Productsdb {
    public static addProduct = (values) => {
        return new Promise ((resolve, reject) => {

            const sql = "INSERT INTO products(productName, fournisseur, price, description, commentaire) VALUES ?";
            
            pool.query(sql ,[values] ,(err, results)=>{
                if(err){
                    return reject(err);
                }
                return resolve(results);
            });
        });
    };

    public static updateProduct = (product) => {
        return new Promise ((resolve, reject) => {

            const sql = "UPDATE products SET productName='" + product.productName + "',fournisseur='" + product.fournisseur + "',price=" + product.price + ",description='"+ product.description + "',commentaire='" + product.commentaire + "' WHERE productID =" + product.productID;

            pool.query(sql, (err, results)=>{
                if(err){
                    return reject(err);
                }
                return resolve(results);
            });
        });
    };
    
    
    public static allProducts = () => {
        return new Promise ((resolve, reject) => {

            const sql = "SELECT * FROM products";

            pool.query(sql, (err, results)=>{
                if(err){
                    return reject(err);
                }
                return resolve(results);
            });
        });
    };

    public static selectProductName = () => {
        return new Promise ((resolve, reject) => {

            const sql = "SELECT productName FROM products";
            pool.query(sql, (err, results)=>{
                if(err){
                    return reject(err);
                }
                return resolve(results);
            });
        });
    };
    
    
    public static delProduct = (value) => {
        console.log(value);
        return new Promise ((resolve, reject) => {

            const sql = "DELETE FROM products WHERE productID = ?";
            
            pool.query(sql ,[value] ,(err, results)=>{
                if(err){
                    return reject(err);
                }
                return resolve(results);
            });
        });
    };
    
}

