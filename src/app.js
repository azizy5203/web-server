const path = require("path");
const express = require("express");
const hbs = require("hbs");
const img = require("./assets/profile.jpg");
// const { faker } = require('@faker-js/faker');
// import chalk from "chalk";

const app = express();
const port = process.env.PORT || 5000;

//Define paths for Express config
const htmlPath = path.join(__dirname, "./public");
const viewsPath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");

//Setup hbs engine and pont to views loaction('/templates')
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//serve static directory
app.use(express.static(htmlPath));

//generate random users
/*const gnUsers = Array.from({ length: 10 }, (item, index) => {
    return {
        id: index,
        name: faker.name.fullName(),
        email: faker.internet.email(),
        token: faker.datatype.number({ min: 5000, max: 9000, precision: 1 }),
        password:'123456'
    }
    
})*/
//gnUsers?console.log('[FAKER] USERS GENERATED'):console.log('[FAKER] USERS NOT GENERATED')

//generate products

/*const gnProducts = Array.from({ length: 35 }, (item, index) => {
    return {
        id: index,
        name: faker.commerce.product(),
        desc: faker.commerce.productDescription(),
        company: faker.company.name(),
    }
})*/
//gnProducts?console.log('[FAKER] PRODUCTS GENERATED'):console.log('[FAKER] PRODUCTS NOT GENERATED')

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

app.get("/img", (req, res) => res.sendFile(img));

app.get("/users", (req, res) => {
 res.send([
  {
   id: 0,
   name: "Spencer Abbott",
   email: "Abigail_Hilll@yahoo.com",
   token: 5627,
   password: "123456",
  },
  {
   id: 1,
   name: "Felicia Smith Jr.",
   email: "Alice_Davis@hotmail.com",
   token: 6007,
   password: "123456",
  },
  {
   id: 2,
   name: "Judy Schmidt",
   email: "Nya55@yahoo.com",
   token: 5181,
   password: "123456",
  },
  {
   id: 3,
   name: "Gustavo Douglas",
   email: "Ashton_Moen@gmail.com",
   token: 6632,
   password: "123456",
  },
  {
   id: 4,
   name: "Mack Hauck",
   email: "Braeden4@yahoo.com",
   token: 6887,
   password: "123456",
  },
  {
   id: 5,
   name: "Mary Ratke",
   email: "Bennie_Krajcik@hotmail.com",
   token: 5055,
   password: "123456",
  },
  {
   id: 6,
   name: "Jessie Renner",
   email: "Obie_Lehner@hotmail.com",
   token: 5792,
   password: "123456",
  },
  {
   id: 7,
   name: "Norman Dicki",
   email: "Okey_Kshlerin@gmail.com",
   token: 6472,
   password: "123456",
  },
  {
   id: 8,
   name: "Gary Marks",
   email: "Braulio_Stoltenberg15@hotmail.com",
   token: 7618,
   password: "123456",
  },
  {
   id: 9,
   name: "Jean Mayer PhD",
   email: "Leilani_Welch81@hotmail.com",
   token: 5180,
   password: "123456",
  },
 ]);
});
app.get("/products", (req, res) => {
 res.send([
  {
   id: 0,
   name: "Chips",
   desc:
    "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
   company: "Kassulke - Shields",
  },
  {
   id: 1,
   name: "Ball",
   desc:
    "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
   company: "Hickle LLC",
  },
  {
   id: 2,
   name: "Car",
   desc:
    "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
   company: "Grimes - Schmidt",
  },
  {
   id: 3,
   name: "Mouse",
   desc:
    "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
   company: "Stroman, Schimmel and Lueilwitz",
  },
  {
   id: 4,
   name: "Hat",
   desc:
    "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
   company: "Spinka, Jerde and Ziemann",
  },
  {
   id: 5,
   name: "Chicken",
   desc:
    "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
   company: "Grant - Wehner",
  },
  {
   id: 6,
   name: "Gloves",
   desc:
    "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
   company: "Schaefer - Schowalter",
  },
  {
   id: 7,
   name: "Cheese",
   desc:
    "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
   company: "Kessler - Bailey",
  },
  {
   id: 8,
   name: "Salad",
   desc:
    "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
   company: "Kilback - Emard",
  },
  {
   id: 9,
   name: "Towels",
   desc:
    "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
   company: "Heaney and Sons",
  },
  {
   id: 10,
   name: "Soap",
   desc:
    "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
   company: "Brown, Flatley and Bogisich",
  },
  {
   id: 11,
   name: "Hat",
   desc:
    "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
   company: "Lang - Turner",
  },
  {
   id: 12,
   name: "Sausages",
   desc:
    "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
   company: "O'Kon, Harvey and Konopelski",
  },
  {
   id: 13,
   name: "Bike",
   desc:
    "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
   company: "Hamill - Bauch",
  },
  {
   id: 14,
   name: "Bacon",
   desc:
    "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
   company: "Hilll - Prohaska",
  },
  {
   id: 15,
   name: "Soap",
   desc:
    "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
   company: "Kulas - Cronin",
  },
  {
   id: 16,
   name: "Chair",
   desc:
    "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
   company: "Fisher Group",
  },
  {
   id: 17,
   name: "Towels",
   desc:
    "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
   company: "Schmeler LLC",
  },
  {
   id: 18,
   name: "Pizza",
   desc:
    "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
   company: "Satterfield, Schneider and Tremblay",
  },
  {
   id: 19,
   name: "Ball",
   desc:
    "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
   company: "Herman Group",
  },
  {
   id: 20,
   name: "Keyboard",
   desc:
    "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
   company: "Jerde, Leuschke and Moen",
  },
  {
   id: 21,
   name: "Cheese",
   desc:
    "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
   company: "Fahey, Conroy and Cormier",
  },
  {
   id: 22,
   name: "Chicken",
   desc:
    "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
   company: "Pfannerstill - Considine",
  },
  {
   id: 23,
   name: "Keyboard",
   desc:
    "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
   company: "Lebsack - Wunsch",
  },
  {
   id: 24,
   name: "Fish",
   desc:
    "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
   company: "Pagac - Franey",
  },
  {
   id: 25,
   name: "Bacon",
   desc:
    "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
   company: "Weimann - Harris",
  },
  {
   id: 26,
   name: "Soap",
   desc: "The Football Is Good For Training And Recreational Purposes",
   company: "Lowe - DuBuque",
  },
  {
   id: 27,
   name: "Keyboard",
   desc:
    "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
   company: "Wyman and Sons",
  },
  {
   id: 28,
   name: "Shirt",
   desc:
    "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
   company: "Schumm - Gutkowski",
  },
  {
   id: 29,
   name: "Pizza",
   desc: "The Football Is Good For Training And Recreational Purposes",
   company: "Kilback, Funk and Goyette",
  },
  {
   id: 30,
   name: "Bike",
   desc:
    "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
   company: "Funk - Mosciski",
  },
  {
   id: 31,
   name: "Chicken",
   desc:
    "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
   company: "Stroman, Emmerich and Bogisich",
  },
  {
   id: 32,
   name: "Hat",
   desc:
    "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
   company: "Tromp, Stiedemann and Emard",
  },
  {
   id: 33,
   name: "Sausages",
   desc:
    "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
   company: "Reilly, Farrell and Hamill",
  },
  {
   id: 34,
   name: "Fish",
   desc:
    "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
   company: "Murray, Boyle and Ryan",
  },
 ]);
});
app.get("*", (req, res) => [res.render("404")]);
app.listen(port, () => {
 console.log(`[Running] Node server listening on port ${port}`);
 // console.log(htmlPath);
});
