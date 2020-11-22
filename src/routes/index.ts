import productRoute from "./products/products";
import saleRoute from "./sales/sales";
import authRoute from "./auth/login";


const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const server = express();



server.use(express.json());

server.use(bodyParser.json());




router.use('/product', productRoute);
router.use('/sale', saleRoute);
router.use('/login', authRoute);



export default router;