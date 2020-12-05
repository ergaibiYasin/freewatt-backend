import { pool } from '../db';

export default class clientsdb{
    public static addClient = (values) => {
        return new Promise ((resolve, reject) => {
            const sql = "INSERT INTO clients(nom, prenom, email, num) VALUES ?";
            
            pool.query(sql ,[values] ,(err, results)=>{
                if(err){
                    return reject(err);
                }
                console.log("added");
                return resolve(results);
            });
        });
    };

    public static updateClient = (client) => {
        return new Promise ((resolve, reject) => {

            const sql = "UPDATE clients SET nom='" + client.nom + "',prenom='" + client.prenom + "',email='" + client.email + "',num='"+ client.num + "' WHERE clientID =" + client.clientID;

            pool.query(sql, (err, results)=>{
                if(err){
                    return reject(err);
                }
                console.log("updated");
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
                console.log("found");
                
                
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
                console.log("deleted");
                // console.log(value);
                return resolve(results);
            });
        });
    };
}