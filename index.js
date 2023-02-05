const express = require('express')
const mongoose = require('mongoose')
const app = express();
const tasksModel = require("./models/tasks");
require('dotenv').config();
const tasksRoutes = require('./routes/tasks');

const PORT = process.env.PORT || 3000;

//Connect app to MongoDB
const connectionString = process.env.DATABASE_URL
mongoose.connect(connectionString);

const database = mongoose.connection;

database.on('error', (error)=>{
    console.log(error);
});

database.on('connected', ()=>{
    console.log("Database Connected");
});


app.use(express.json());

app.use('/tasks',tasksRoutes)

//Views
app.set('view engine','ejs')

app.get('/', async function (req, res) {
    try {
        const data = await tasksModel.find();
        res.render('index', {title: 'My Tasks', tasks: data});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});


app.listen(PORT, () =>{
    console.log('Server is running');
});