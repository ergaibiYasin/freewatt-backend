import { pool } from '../db';



export default class Salesdb {
    public static addSale = (values) => {
        return new Promise ((resolve, reject) => {

            const sql = "INSERT INTO sales(client, product, unitPrice, quantity, total, saleDate, comment) VALUES ?";
            
            pool.query(sql ,[values] ,(err, results)=>{
                if(err){
                    return reject(err);
                }
                return resolve(results);
            });
        });
    };

    public static updateSale = (sale) => {
        return new Promise ((resolve, reject) => {

            const sql = "UPDATE sales SET client='" + sale.client + "',product='" + sale.product + "',unitPrice=" + sale.unitPrice + ",quantity="+ sale.quantity + ",total="+ sale.unitPrice*sale.quantity + ",saleDate='"+ sale.saleDate + "',comment='"+ sale.comment + "' WHERE saleID =" + sale.saleID;

            pool.query(sql, (err, results)=>{
                if(err){
                    return reject(err);
                }
                return resolve(results);
            });
        });
    };
    
    public static allSales = () => {
        return new Promise ((resolve, reject) => {

            const sql = "SELECT * FROM sales";

            pool.query(sql, (err, results)=>{
                if(err){
                    return reject(err);
                }
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
                return resolve(results);
            });
        });
    };
    
}

