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


const port = process.env.PORT
const host = process.env.HOST

app.listen(port, () => {
    console.log(`application listening on ${host}: ${port}`)
});