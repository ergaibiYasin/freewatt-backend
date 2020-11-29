
import  SignupController  from "../../controllers/auth/signup";


const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');


router.post('/', async(req, res, next) => {
    try {
        let added = await SignupController.addUser(req);
        await res.send(added);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

export default router;
