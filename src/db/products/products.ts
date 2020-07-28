import { pool } from '../db';



export default class Productsdb {
    public static addProduct = (values) => {
        return new Promise ((resolve, reject) => {

            const sql = "INSERT INTO products(productName, categoryID, price, description, commentaire) VALUES ?";
            
            pool.query(sql ,[values] ,(err, results)=>{
                if(err){
                    return reject(err);
                }
                console.log("added");
                return resolve(results);
            });
        });
    };

    public static updateProduct = (product) => {
        return new Promise ((resolve, reject) => {

            const sql = "UPDATE products SET productName='" + product.productName + "',categoryID=" + product.categoryID + ",price=" + product.price + ",description='"+ product.description + "',commentaire='"+ product.commentaire + "' WHERE productID =" + product.productID;

            pool.query(sql, (err, results)=>{
                if(err){
                    return reject(err);
                }
                console.log("updated");
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
                console.log("deleted");
                // console.log(value);
                return resolve(results);
            });
        });
    };
    
}

