const path = require("path");
const express = require("express");
const hbs = require('hbs')
const { faker } = require('@faker-js/faker');
const fs = require('fs')
// import chalk from "chalk";

const app = express();
const port = process.env.PORT || 5000

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

//generate random users
const gnUsers = Array.from({ length: 10 }, (item, index) => {
    return {
        id: Math.floor(Math.random() * 31),
        name: faker.name.fullName(),
        email: faker.internet.email(),
        token: faker.datatype.number({ min: 5000, max: 9000, precision: 1 }),
        password:'123456'
    }
})

//Overwrite db/users.json every time the app starts
fs.writeFile(`../db/users.json`, JSON.stringify(gnUsers, null, 2), 'utf-8', (err) => {
    if (err) console.log("[ERROR] Users not saved")
    else console.log("[SUCCESS] Users saved successfully");
})


//generate products

const gnProducts = Array.from({ length: 35 }, (item, index) => {
    return {
        id: Math.floor(Math.random() * 90),
        name: faker.commerce.product(),
        desc: faker.commerce.productDescription(),
        company: faker.company.name(),
    }
})

//Overwrite db/products.json every time the app starts
fs.writeFile(`../db/products.json`, JSON.stringify(gnProducts, null, 2), 'utf-8', (err) => {
    if (err) console.log("[ERROR] Products not saved")
    else console.log("[SUCCESS] Products saved successfully");
})

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
app.get('/users',(req,res)=>{
    res.send(gnUsers)
})
app.get('/products',(req,res)=>{
    res.send(gnProducts)
})
app.get('*',(req,res)=>[
    res.render('404')
])
app.listen(port, () => {
    console.log("[Running] Node server listening on port 3000");
    // console.log(htmlPath);
});
