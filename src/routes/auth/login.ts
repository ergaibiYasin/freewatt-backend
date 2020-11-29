import LoginController from "../../controllers/auth/Login"
import { accessTokenSecret } from '../../config/constants';

const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');


router.post('/', async function(req, res)  {

    try {
        let users : any = await LoginController.allUsers();
        const { username, password } = req.body;
        const user = users.find(u => { return u.username === username && u.password === password });
        // var success = 0;
        if (user) {
            
            const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret);
            res.json({
                "success": 1,
                "role": user.role,
                "message": "login successfully",
                accessToken,

                
            });
        }else{
            res.json({
                "success": 0,
                "message": "invalid username or password",

                
            });
        }
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

})

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


export default router;
