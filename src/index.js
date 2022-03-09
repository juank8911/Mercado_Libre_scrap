const express = require("express");
const ScrapingController = require("./controllers/scrapingHttp.controller");
const ConsultaController = require("./controllers/consultaHttp.controler");

const app = express();
app.use(morgan("dev"));
// app.use(express.static('src/public' ));
app.use(bodyparser.json({ limit: "50mb" }));
// app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyparser.urlencoded({ limit: "50mb", extended: true }));
// app.use(cors());
app.use(formidable.parse({ keepExtensions: true }));

//Configuraciones
app.set("port", process.env.PORT || 8080);
app.set("json spaces", 2);

app.post("/scraping", ScrapingController);
app.get("/scraping", ConsultaController.consultasGet);
app.get("/items", ConsultaController.itemsGet);
//Iniciando el servidor, escuchando...
app.listen(app.get("port"), () => {
    console.log(`Server listening on port ${app.get("port")}`);
});