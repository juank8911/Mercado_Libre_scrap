const express = require("express");
const ScrapingController = require("./controllers/scrapingHttp.controller");

const app = express();

//Configuraciones
app.set("port", process.env.PORT || 8080);
app.set("json spaces", 2);

app.get("/scraping", ScrapingController);

//Iniciando el servidor, escuchando...
app.listen(app.get("port"), () => {
    console.log(`Server listening on port ${app.get("port")}`);
});