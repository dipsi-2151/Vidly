const mongoose = require('mongoose');

const genres=require('./routes/genres');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/vidly')
    .then(() => console.log('Database connected successfully.....'))
    .catch(error => console.log('Couldnt able to connect with MongoDB' , error.message));

app.use(express.json());
app.use('/api/genres', genres);


const port = process.env.PORT || 3000
app.listen(port , () =>{
    console.log(`Listening on port ${port}`);
});