const express = require("express");
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))  //__dirnam AKA this dir name 
//(index.js) then moves into /views dir

app.get('/', (req, res) => {
    res.render('home') //could add .ejs but isn't needed
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})