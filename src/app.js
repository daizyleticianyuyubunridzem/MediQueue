require('dotenv').config();

const express = require('express');
const path = require('path');
const connectDB = require('./config/db');


const PORT = process.env.PORT || 3000;

const app= express();
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

connectDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res)=> {
    res.render('Welcome to Mediqueue');
});

app.listen(PORT, ()=>{
    console.log(`Server is running at port: ${PORT}`);
})

