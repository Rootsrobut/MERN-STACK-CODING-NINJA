// 1. Import Express
import express from 'express';
import productRoutes from './src/features/product/product.routes.js';
import bodyParser from 'body-parser';
import userRouter from './src/features/user/user.routes.js';
import authorizer from './middlewares/basicAuth.middleware.js';

// 2. Create Server
const app= express();
app.use(bodyParser.json());
app.use(express.json());

// 3. Default request handler
// for all requests related to product, redirect to product routes.
app.use(express.urlencoded({extended:false}));


app.use('/api/products',authorizer,productRoutes);

app.use('/api/users', userRouter);
// 4. Specify port
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
