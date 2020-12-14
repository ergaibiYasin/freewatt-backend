import { pool } from '../db';


export default class SignupDb {

    public static addUser = (values) => {
        return new Promise ((resolve, reject) => {

            const sql = "INSERT INTO user(username, email, password, role) VALUES ?";
            
            pool.query(sql ,[values] ,(err, results)=>{
                if(err){
                    return reject(err);
                }
                console.log("user added");
                return resolve(results);
            });
        });
    };

    

   
}