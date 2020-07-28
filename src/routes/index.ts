import productRoute from "./products/products";
import saleRoute from "./sales/sales";


const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const server = express();



server.use(express.json());

server.use(bodyParser.json());




router.use('/product', productRoute);
router.use('/sale', saleRoute);



export default router;