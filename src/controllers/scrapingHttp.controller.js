const browserObject = require("../core/interactors/browser.interactor");
const scraperController = require("../core/interactors/page.interactor");

const ScrapingController = async(req, res) => {
    let browserInstance = browserObject.startBrowser();

    // Pass the browser instance to the scraper controller
    var lista = await scraperController(browserInstance);
    console.log(lista);
    res.status(200).send(lista);
};

module.exports = ScrapingController;