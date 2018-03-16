const express = require('express')
const hbs = require('hbs')
const port = process.env.port || 3000;

var app = express();

app.set('view engine', 'hbs')
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home page',
        currentYear: new Date().getFullYear(),
        welcomeMessage: 'This is my welcome message'
})
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About page',
        currentYear: new Date().getFullYear()
    })
})

app.get('/bad', (req, res) => {
    res.send( {
        errorMessage : 'Unable to handle request'
})
})

app.listen(3000, () => {
    console.log(`Server is up on port ${port}`)
});
