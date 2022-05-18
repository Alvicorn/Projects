require("dotenv").config();
const express = require('express');
const { createEvent } = require('./notion')
const app = express();

app.set('views', './views');

app.use(express.urlencoded({extended: true}));
// app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.post("/", (req, res) => {
    let eventName = req.body.eventName;
    let description = req.body.description;
    let kayla = req.body.kayla; // returns a string "on" or "off"
    let alvin = req.body.alvin; // returns a string "on" or "off"
    let startDate = req.body.startDate; //returns a string with date in iso 8601
    let endDate = req.body.endDate; //returns a string with date in iso 8601


    if(eventName === "")
        eventName = "Untitled Event";
    if (startDate === "")
        startDate = new Date();
    if (endDate === "")
        endDate = new Date();

    createEvent({ eventName: eventName, 
                  description: description, 
                  kayla: kayla, 
                  alvin: alvin, 
                  startDate: startDate, 
                  endDate: endDate })

    // res.send("return: "+  startDate);
    res.redirect("/results");
})
app.get("/results", (req, res) => {
    res.sendFile(__dirname + "/views/results.html");
})

app.listen(process.env.PORT);
