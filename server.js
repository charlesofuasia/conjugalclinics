const express = require("express");
const app = express();
const env = require("dotenv").config();
const static = require("./routes/static");
const expressLayouts = require("express-ejs-layouts");



/**********************************
 * view engine template
 *********************************/
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/layout");

app.use(static);

/*****************
 * deliver home page view
 *******************/
app.get("/", function(req, res){
    res.render("index", {
        title: "home"
    })
});

/******************************
 * deliver about us page view
 *****************************/
app.get("/about", function(req, res){
    res.render("about", {
        title: "About Us"
    })
});

/*************************
 * deliver our services page
 **************************/
app.get("/services", function(req, res){
    res.render("services", {
        title: "Our Services"
    })
});

/**************************
 * deliver appointment page
 *************************/
app.get("/book-appointment", function(req, res){
    res.render("appointment", {
        title: "Appointment"
    })
});
/******************************************
 * deliver contact us page
 *******************************/
app.get("/contact", function(req, res){
    res.render("contact", {
        title: "Contact Us"
    })
})


const port = process.env.PORT
const host = process.env.HOST

app.listen(port, () => {
    console.log(`application listening on ${host}: ${port}`)
});