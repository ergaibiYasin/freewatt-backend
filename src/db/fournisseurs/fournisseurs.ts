import { pool } from '../db';

export default class Fournisseursdb{
    public static addFournisseur = (values) => {
        return new Promise ((resolve, reject) => {
            const sql = "INSERT INTO fournisseurs(nom, prenom, email, num) VALUES ?";
            
            pool.query(sql ,[values] ,(err, results)=>{
                if(err){
                    return reject(err);
                }
                return resolve(results);
            });
        });
    };

    public static updateFournisseur = (fournisseur) => {
        return new Promise ((resolve, reject) => {

            const sql = "UPDATE fournisseurs SET nom='" + fournisseur.nom + "',prenom='" + fournisseur.prenom + "',email='" + fournisseur.email + "',num='"+ fournisseur.num + "' WHERE fournisseurID =" + fournisseur.fournisseurID;

            pool.query(sql, (err, results)=>{
                if(err){
                    return reject(err);
                }
                return resolve(results);
            });
        });
    };

    public static allFourmisseurs = () => {
        return new Promise ((resolve, reject) => {

            const sql = "SELECT * FROM fournisseurs";

            pool.query(sql, (err, results)=>{
                if(err){
                    return reject(err);
                }
                return resolve(results);
            });
        });
    };

    public static selectFournisseurName = () => {
        return new Promise ((resolve, reject) => {

            const sql = "SELECT nom, prenom FROM fournisseurs";
            pool.query(sql, (err, results)=>{
                if(err){
                    return reject(err);
                }
                return resolve(results);
            });
        });
    };

    public static delFournisseur = (value) => {
        console.log(value);
        return new Promise ((resolve, reject) => {

            const sql = "DELETE FROM fournisseurs WHERE fournisseurID = ?";
            
            pool.query(sql ,[value] ,(err, results)=>{
                if(err){
                    return reject(err);
                }
                return resolve(results);
            });
        });
    };
}