const express = require('express')
const mongoose = require('mongoose')
const app = express();

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

// CRUD OPERATIONS

app.get('/', function (req, res) {
  res.send('Hello World')
});
app.use('/tasks',tasksRoutes)

app.listen(PORT, () =>{
    console.log('Server is running');
});