import Logindb from "../../db/auth/login";

const express = require("express");
const bodyParser = require("body-parser");
const server = express();

server.use(express.json());

server.use(bodyParser.json());




export default class LoginController {

  public static allUsers() {
    const Users = Logindb.allUsers();
    return Users;
    
  };


}
