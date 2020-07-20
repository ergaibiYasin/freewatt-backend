const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes');

const port = 3000;

const server = express();

server.use(bodyParser.json);

server.use('/', apiRoutes);



server.listen(port, () => {
    console.log('Server is runing and listening on port 3000');
});