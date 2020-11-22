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

const users = [
    {
        username: 'john',
        password: 'password123admin',
        role: 'admin'
    }, {
        username: 'anna',
        password: 'password123member',
        role: 'member'
    }
];

// const accessTokenSecret = 'youraccesstokensecret';



const books = [
    {
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "language": "English",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958
    },
    {
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "language": "Danish",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836
    },
    {
        "author": "Dante Alighieri",
        "country": "Italy",
        "language": "Italian",
        "pages": 928,
        "title": "The Divine Comedy",
        "year": 1315
    },
];

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

server.get('/books', authenticateJWT, (req, res) => {
    res.json(books);
});


server.post('/books', authenticateJWT, (req, res)=> {
    const { role } = req.user;
    if (role !== 'admin') {
        return res.sendStatus(403);
    }

    const book = req.body;
    books.push(book);
    res.send('book added successfully');
    
})
//...........................................................


//run server
server.listen(PORT, () => {
    console.log('server is running on port: ${PORT}')
});