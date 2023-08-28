// import { users } from "../UserData.js";
// import  Jwt  from "jsonwebtoken";
import { Router } from "express";
import {registerUser, authUser} from "../controllers/userController.js";


const router = Router();

router.route('/register').post(registerUser);
router.route('/login').post(authUser);


export default router;