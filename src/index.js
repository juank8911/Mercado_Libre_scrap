const express = require("express");
const ScrapingController = require("./controllers/scrapingHttp.controller");
const ConsultaController = require("./controllers/consultaHttp.controler");

const app = express();

//Configuraciones
app.set("port", process.env.PORT || 8080);
app.set("json spaces", 2);

app.post("/scraping", ScrapingController);
app.get("/scraping", ConsultaController);
//Iniciando el servidor, escuchando...
app.listen(app.get("port"), () => {
    console.log(`Server listening on port ${app.get("port")}`);
});