import { pool } from '../db';

export default class clientsdb{
    public static addClient = (values) => {
        return new Promise ((resolve, reject) => {
            const sql = "INSERT INTO clients(fullname, email, num) VALUES ?";
            
            pool.query(sql ,[values] ,(err, results)=>{
                if(err){
                    return reject(err);
                }
                return resolve(results);
            });
        });
    };

    public static updateClient = (client) => {
        return new Promise ((resolve, reject) => {

            const sql = "UPDATE clients SET fullname='" + client.fullname + "',email='" + client.email + "',num='"+ client.num + "' WHERE clientID =" + client.clientID;

            pool.query(sql, (err, results)=>{
                if(err){
                    return reject(err);
                }
                return resolve(results);
            });
        });
    };

    public static allClients = () => {
        return new Promise ((resolve, reject) => {

            const sql = "SELECT * FROM clients";

            pool.query(sql, (err, results)=>{
                if(err){
                    return reject(err);
                }
                return resolve(results);
            });
        });
    };
    
    public static selectClientsFullname = () => {
        return new Promise ((resolve, reject) => {

            const sql = "SELECT fullname FROM clients";

            pool.query(sql, (err, results)=>{
                if(err){
                    return reject(err);
                }
                return resolve(results);
            });
        });
    };
    
    public static selectClientsNames = () => {
        return new Promise ((resolve, reject) => {

            const sql = "SELECT fullname FROM clients";

            pool.query(sql, (err, results)=>{
                if(err){
                    return reject(err);
                }
                return resolve(results);
            });
        });
    };

    public static delClient = (value) => {
        console.log(value);
        return new Promise ((resolve, reject) => {

            const sql = "DELETE FROM clients WHERE clientID = ?";
            
            pool.query(sql ,[value] ,(err, results)=>{
                if(err){
                    return reject(err);
                }
                return resolve(results);
            });
        });
    };
}