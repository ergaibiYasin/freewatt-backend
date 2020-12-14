import productRoute from "./products/products";
import saleRoute from "./sales/sales";
import loginRoute from "./auth/login";
import signupRoute from "./auth/signup";
import fournisseursRoute from "./fournisseurs/fournisseurs";
import clientsRoute from "./clients/clients";


const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const server = express();



server.use(express.json());

server.use(bodyParser.json());




router.use('/product', productRoute);
router.use('/sale', saleRoute);
router.use('/login', loginRoute);
router.use('/signup', signupRoute);
router.use('/fournisseurs', fournisseursRoute);
router.use('/clients', clientsRoute);



export default router;