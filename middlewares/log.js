const fs = require("fs");

function log(req, res, next){
    fs.appendFileSync("log.txt", "O usuario entrou na url: " + req.url +" ")
    next()
}

module.exports = log