import { Router } from "express";
import { users } from "../UserData.js";
import  Jwt  from "jsonwebtoken";


const router = Router();

router.post('/login',(req, res) => {
    const {email, password} = req.body;
    const user = users.find(
        user => user.email === email && user.password === password
    );

    if(user){
        res.send(generateUserToken(user));
        return;
    }

    res.status(400).send('Invalid Username or Password!');
});

// just checking api
router.get('/',(req, res) => {
    res.send(users)
}) 
// fazool code ends



const generateUserToken = (user) => {
    const token = Jwt.sign({
        id: user.id,
        email: user.email,
        isAdmin: user.isAdmin,
    }, 'The secret key', { expiresIn: '30d',}
    );
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        address: user.address,
        token : token,
    }
};

export default router;