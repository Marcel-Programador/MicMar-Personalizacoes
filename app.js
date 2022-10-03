const express = require("express");
const app = express();
const homeRoute = require("./src/routes/homeRoute");
const productsRoute = require("./src/routes/productsRoute");
const port = 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/src/views");
app.use(express.static(__dirname + "/public"));

app.use(homeRoute);
app.use(productsRoute);

app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})