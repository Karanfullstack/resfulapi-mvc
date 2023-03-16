const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// @Routes
const ProductRoutes = require('./routers/product.js');

//@Initiallizer 
const app = express();
dotenv.config();

//@Middlewares
app.use(express.json());

// @Connect to database
mongoose.connect(process.env.DB_CONNECT,
{useUnifiedTopology:true,useNewUrlParser: true} ).then(()=>{
    console.log('Databse is Connected Sucessfully');
}).catch((err)=>{
    console.log(err);
});
// ============================


//@Routers
app.use('/api/products', ProductRoutes);


app.listen(4000,()=>{
    console.log('Server is running on 4000');
});





