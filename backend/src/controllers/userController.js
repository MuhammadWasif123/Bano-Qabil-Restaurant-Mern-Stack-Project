import asyncHandler from "express-async-handler";
import  UserModel  from "../models/userModel.js";
import generateToken from "../../utils/tokenGenerator.js"


const registerUser = asyncHandler(async (req, res) =>{
    const {
        name, email, contact, address, password } = req.body;

    
    const userEmailExists = await UserModel.findOne({email});
    const userContactExists = await UserModel.findOne({contact});


    if(userEmailExists){
        res.status(400);
        throw Error('User with this Email already Exists');
    }
    if(userContactExists){
        res.status(400);
        throw new Error("User with this Contact already Exists")
    }

    const user = await UserModel.create({
        name, email, password, contact, address
    });

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            isAdmin: user.isAdmin,
            contact: user.contact,
            address: user.address,
            token: generateToken(user._id)
        })
    } else{
        res.status(400)
        throw new Error('Error Occured at userController!');
    }


});


const authUser = asyncHandler(async (req, res) =>{
    const { email, password } = req.body;

    const user = await UserModel.findOne({email});

    if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            contact: user.contact,
            address: user.address,
            // password: user.password,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
            
        });
    } else{
        res.status(400);
        throw Error('Invalid Email or Password!');
    }


});

export {registerUser, authUser };

