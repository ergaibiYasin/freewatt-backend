import { pool } from '../db';


export default class Logindb {

    public static allUsers = () => {
        return new Promise ((resolve, reject) => {

            const sql = "SELECT * FROM user";

            pool.query(sql, (err, results)=>{
                if(err){
                    return reject(err);
                }
                console.log("found");
                
                
                return resolve(results);
            });
        });
    };

   
}