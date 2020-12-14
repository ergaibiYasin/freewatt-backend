import { PORT } from './config/constants';
import { accessTokenSecret } from './config/constants';
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

//...........................................................


const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};


//...........................................................


//run server
server.listen(PORT, () => {
    console.log('server is running on port: ' + PORT)
});