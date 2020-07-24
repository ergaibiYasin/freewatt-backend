import { PORT } from './config/constants';
import router from './routes';
const bodyParser = require('body-parser');

var express = require('express');


const server = express();
server.use(express.json());

server.use(bodyParser.json());



// ROUTES

server.use('/', router);




//run server
server.listen(PORT, () => {
    console.log('server is running on port: ${port}')
});