import { PORT } from './config/constants';
import router from './routes';


var express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const jwt = require('jsonwebtoken');

const server = express();

var corsOptions = {
    origin : "http://localhost:4200"
}

server.use(cors(corsOptions));
server.use(express.json());
server.use(bodyParser.json());



// ROUTES

server.use('/', router);



//run server
server.listen(PORT, () => {
    console.log('server is running on port: ' + PORT)
});