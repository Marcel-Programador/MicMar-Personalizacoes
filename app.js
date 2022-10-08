const express = require("express");
const app = express();
const homeRoute = require("./src/routes/homeRoute");
const productsRoute = require("./src/routes/productsRoute");
const port = 3000;
const logMiddleware = require("./middlewares/log")

app.set("view engine", "ejs");
app.set("views", __dirname + "/src/views");
app.use(express.static(__dirname + "/public"));
app.use(logMiddleware)

app.use(homeRoute);
app.use(productsRoute);

app.use((req, res) => {
    return res.status(404).send({message: "Solicitação não encontrada"})
})

app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})