'use strict'
const express = require('express')
    , bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())
app.listen('4567')
app.get('/', function (req, res) {
res.send('helo')
})
app.post('/', function (req, res) {
console.log(req.body)
let response = "This is a sample response from your webhook!" //Default response from the webhook to show it's working
res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
res.send(JSON.stringify({ "speech": response, "displayText": response
        //"speech" is the spoken version of the response, "displayText" is the visual version
}));
})
