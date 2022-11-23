const path = require("path");
const express = require("express");
const hbs = require('hbs')
const { faker } = require('@faker-js/faker');
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
        id: index,
        name: faker.name.fullName(),
        email: faker.internet.email(),
        token: faker.datatype.number({ min: 5000, max: 9000, precision: 1 }),
        password:'123456'
    }
    
})
gnUsers?console.log('[FAKER] USERS GENERATED'):console.log('[FAKER] USERS NOT GENERATED')




//generate products

const gnProducts = Array.from({ length: 35 }, (item, index) => {
    return {
        id: index,
        name: faker.commerce.product(),
        desc: faker.commerce.productDescription(),
        company: faker.company.name(),
    }
})
gnProducts?console.log('[FAKER] PRODUCTS GENERATED'):console.log('[FAKER] PRODUCTS NOT GENERATED')


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
    console.log(`[Running] Node server listening on port ${port}`);
    // console.log(htmlPath);
});
