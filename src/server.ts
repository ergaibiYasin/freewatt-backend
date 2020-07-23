import { PORT } from './config/constants';



var express = require('express');


const server = express();
server.use(express.json());



server.listen(PORT, () => {
    console.log('server is running on port: ${port}')
});