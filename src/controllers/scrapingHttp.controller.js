const browserObject = require("../core/interactors/browser.interactor");
const scraperController = require("../core/interactors/page.interactor");
const consDAO = require("../dataSources/consultas.datasource");

const ScrapingController = async(req, res) => {
    let browserInstance = browserObject.startBrowser();

    // Pass the browser instance to the scraper controller
    var lista = await scraperController(browserInstance);
    // console.log(lista);
    await consDAO.saveConsul(lista, (err, retur) => {
        if (err) {
            throw err;
        } else {
            res.status(200).send(retur);
        }
    });
};

module.exports = ScrapingController;