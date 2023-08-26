import express from "express";
import cors from 'cors';
import foodRouter from './routers/foodRouter.js';
const app = express();

app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:3000'],
    })
);

app.use('/api/foods', foodRouter);

const PORT = 5000;

app.listen(PORT,()=>{
    console.log('Server is listening at port: ',PORT);
});
