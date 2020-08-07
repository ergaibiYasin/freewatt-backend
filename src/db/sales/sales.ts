import { pool } from '../db';



export default class Salesdb {
    public static addSale = (values) => {
        return new Promise ((resolve, reject) => {

            const sql = "INSERT INTO sales(customerID, productID, unitPrice, quantity, saleDate, comment) VALUES ?";
            
            pool.query(sql ,[values] ,(err, results)=>{
                if(err){
                    return reject(err);
                }
                console.log("added");
                return resolve(results);
            });
        });
    };

    public static updateSale = (sale) => {
        return new Promise ((resolve, reject) => {

            const sql = "UPDATE sales SET customerID=" + sale.customerID + ",productID=" + sale.productID + ",unitPrice=" + sale.unitPrice + ",quantity="+ sale.quantity + ",saleDate='"+ sale.saleDate + "',comment='"+ sale.comment + "' WHERE saleID =" + sale.saleID;

            pool.query(sql, (err, results)=>{
                if(err){
                    return reject(err);
                }
                console.log("updated");
                return resolve(results);
            });
        });
    };
    
    
    public static delSale = (value) => {
        
        return new Promise ((resolve, reject) => {
            const sql = "DELETE FROM sales WHERE saleID = ?";
            
            pool.query(sql ,[value] ,(err, results)=>{
                if(err){
                    return reject(err);
                }
                console.log("deleted");
                return resolve(results);
            });
        });
    };
    
}

