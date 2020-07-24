import { pool } from '../db';



export default class Productsdb {
    public static addProduct = (values) => {
        return new Promise ((resolve, reject) => {
            const sql = "INSERT INTO products(productID, productName, categoryID, price, description, commentaire) VALUES ?";
            
            pool.query(sql ,[values] ,(err, results)=>{
                if(err){
                    return reject(err);
                }
                return resolve(results);
            });
        });
    };
    
}

