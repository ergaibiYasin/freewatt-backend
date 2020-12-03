
import { promises } from "fs";
import  signupDb  from "../../db/auth/signup";
import LoginController from "./Login";

const jwt = require("jsonwebtoken");
const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const config = require("../../config/constants");

server.use(express.json());

server.use(bodyParser.json());




export default class SignupController {

    public static async addUser(req : any){
        const user = req.body;
        var values = [];
        values.push([user.username, user.email, user.password, user.role]);
        // var bool = await this.checkDuplicatedUsername(user.username);
        // console.log(bool);
        
        if (await  this.checkDuplicatedUsername(user.username)) {
            console.log("username");
            return "username existe!! Please chose another one.";
            // return this.checkDuplicatedUsername(user.username);
        }
        if (await this.checkDuplicatedEmail(user.email)) {
            return "email existe!! Please chose another one.";
        }
        
        signupDb.addUser(values);
        return true;
    }

    private static async checkDuplicatedUsername(username: string){
        let users : any = await LoginController.allUsers();
        const user = users.find(u => { return u.username === username});
        // console.log(user);
        
        if (user) {
            // console.log(true);
            
            return true
        }
        // console.log(false);

        return false

        
    }
    
    private static async checkDuplicatedEmail(email: string){
        let users : any = await LoginController.allUsers();
        const user = users.find(u => { return u.email === email});
        // console.log(user);
        
        if (user) {
            return true
        }
        return false
    }
    

}
