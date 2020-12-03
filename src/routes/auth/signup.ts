
import { json } from "sequelize/types";
import  SignupController  from "../../controllers/auth/signup";


const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');


router.post('/', async(req, res, next) => {
    try {
        let added = await SignupController.addUser(req);
        // await res.send(added);
        // res.json({
        //     "message": added
        // })
        if (added === true) {
            res.json({
                "success": 1,
                "message": "user added successfully"
            })
        } else {
            res.json({
                "success": 0,
                "message": added
            })
        }
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

export default router;
