const express = require('express');
//connect to port for local host
const PORT = process.env.PORT || 3001;
//connects to js in db folder
const db = require('./db/connection');
const app = express();

//express middleware added below
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//created for any request that is not found
app.use((req, res) => {
    res.status(404).end();
});






