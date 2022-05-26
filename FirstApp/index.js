const express = require("express");
const app = express()


// app.use((req, res) => { //request, response
//     console.log("WE GOT A NEW REQUEST")
//     res.send("HELLO, WE GOT YOUR REQUEST") 
//     //(very veristile, can convert objects to json,
//     //can have html ie: "<h1> inner html</h1>", 
//     //or plain string)   
// })
app.get('/', (req, res) => { // '/' is the default/root request
    res.send('This is the home page!')
})

// :text   - sets a variable; text
app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    res.send(`<h1>Viewing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const {subreddit, postId} = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})

app.post('/cats', (req, res) => {
    res.send('Post request to /cats. This is different from a get request')
})

app.get('/cats', (req, res) => {
    res.send('meow')
})

app.get('/dogs', (req, res) => {
    res.send('woof')
})


app.get('/search', (req, res) => {
    const { q } = req.query;
    // query string found at the end of a url marked by a ?
    // ie: localhome/search?q='text'
    if(!q){
        res.send('Nothing could be found')
    }
    res.send(`<h1>Search results for: ${q}</h1>`)
})

app.get('*', (req, res) => { // '*' will select all requests, 
    // having '*' first in your code will override all of your
    // other requests bc the code is read in order
    res.send(`I don't know that path.`)
})

// /cats => 'meow'
// /dogs => 'woof'
// '/'


app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})