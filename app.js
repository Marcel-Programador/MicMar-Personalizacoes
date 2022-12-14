const express = require("express");
const app = express();
const storeRoute = require("./src/routes/storeRoute");
const homeRoute = require("./src/routes/homeRoute");
const productsRoute = require("./src/routes/productsRoute");
const port = 3000;
const logMiddleware = require("./middlewares/log")
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", __dirname + "/src/views");
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/uploads"));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(logMiddleware)
app.use(express.json());

app.use(storeRoute);
app.use(homeRoute);
app.use(productsRoute);

app.use((req, res) => {
    return res.status(404).send({message: "Solicitação não encontrada"})
})

app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})