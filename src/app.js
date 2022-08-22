const path = require("path");
const express = require("express");
const hbs = require('hbs')

const app = express();

//Define paths for Express config
const htmlPath = path.join(__dirname, "./public");
const viewsPath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");

//Setup hbs engine and pont to views loaction('/templates')
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath)

//serve static directory
app.use(express.static(htmlPath));

//routes
app.get("/", (req, res) => {
    res.render("index", {
        name: "youssef",
        email: "youssef@mail.com",
    });
});
app.get("/about", (req, res) => {
    res.render("about", {
        name: "youssef",
        email: "youssef@mail.com",
    });
});
app.get('*',(req,res)=>[
    res.render('404')
])
app.listen(3000, () => {
    console.log("[Running] Server listening on port 3000");
    // console.log(htmlPath);
});
