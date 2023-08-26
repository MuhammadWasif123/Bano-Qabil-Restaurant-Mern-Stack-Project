import express from "express";
import cors from 'cors';
import foodRouter from './routers/foodRouter.js';
import userRouter from './routers/userRouter.js'


const app = express();

app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:3000'],
    })
);

// app.use('/', console.log("Server is live"));
app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);



const PORT = 5000;

app.listen(PORT,()=>{
    console.log('Server is listening at port: ',PORT);
});
