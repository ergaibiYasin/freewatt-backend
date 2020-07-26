import { pool } from '../db';



export default class Productsdb {
    public static addProduct = (values) => {
        return new Promise ((resolve, reject) => {
            console.log("5");

            const sql = "INSERT INTO products(productID, productName, categoryID, price, description, commentaire) VALUES ?";
            
            pool.query(sql ,[values] ,(err, results)=>{
                if(err){
                    console.log("here");
                    return reject(err);
                }
                console.log("added");
                return resolve(results);
            });
            console.log("6");
        });
    };
    
}

