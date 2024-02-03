const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/contactChess');
const Contact = require("./contact");

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/home', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params);
})

app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params);
})

app.get('/contact', (req, res) => {
    const params = {}
    res.status(200).render('contact.pug', params);
})

app.post('/contact', (req, res) => {
    const mydata = new Contact(req.body);
    mydata
        .save()
        .then(() => {
            res.redirect('/check'); // Redirect to the check route after successful save.
        })
        .catch((err) => {
            res.status(400).render('error.pug', { error: err.message }); // Render the error view with the error message.
        });
});

app.get('/about', (req, res) => {
    const params = {}
    res.status(200).render('about.pug', params);
})

app.get('/course', (req, res) => {
    const params = {}
    res.status(200).render('course.pug', params);
})

app.get('/check', (req, res) => {
    const params = {}
    res.status(200).render('check.pug', params);
});

app.get('/error', (req, res) => {
    const params = {}
    res.status(200).render('error.pug', params);
});

// START THE SERVER
app.listen(3000, () => {
    console.log(`The application started successfully on port ${port}`);
});
