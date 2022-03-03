const express = require('express');

const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
app.use(express.json())
// Import Routes
const postRoute = require('./routes/posts');

app.use('/posts', postRoute); // every time we use post "/post", is added itself


app.get('/', (req, res) => {
    res.send("We are on home!");
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("Connected to DB");
})

app.listen(3000);