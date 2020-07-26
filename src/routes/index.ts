import addproduct from "./products/products";


const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const server = express();



server.use(express.json());

server.use(bodyParser.json());




router.use('/product', addproduct);



export default router;