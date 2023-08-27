import dotenv from 'dotenv';
import express from "express";
import foodRouter from './routers/foodRouter.js';
import userRouter from './routers/userRouter.js'
// import mongoose from "mongoose";
import connectDB from './config/db.js';
import {errorHandler, notFound} from "../middlewares/error.js";


const app = express();
dotenv.config();
connectDB();


app.use(express.json());


app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log('Server is listening at port: ',port);
});
