const express = require("express");
const path = require("path");
const app = express();
// var mongoose = require("mongoose");
// const bodyparser =  require("body-parser");
// mongoose.connect('mongodb://local/host/spgymcontact', { useNewUrlParser: true },{ useUnifiedTopology: true });
const port = 8000;
const http = require('http');
const hostname = 'localhost';
// var contactSchema = new mongoose.Schema({
//     name: String,
//     address: String, 
//     phone: String,
//     email: String,
//     Textarea: String
// });
// var Contact = mongoose.model('Contact', contactSchema);

app.use('/static', express.static('static'));
app.use(express.urlencoded());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.status(200).render('home.pug');
});

app.listen(port, () => {
    console.log('started on ' + port)
});
