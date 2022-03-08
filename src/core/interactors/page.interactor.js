// const pageScraper = require("./pageScraper");
const pageScraper = require("./pageScraper.interactor");
// const pruebaClick = require("./pageScraper.interactor");

async function scrapeAll(browserInstance) {
    let browser;
    try {
        browser = await browserInstance;
        var lista = await pageScraper.scraper(browser);
    } catch (err) {
        console.log("Could not resolve the browser instance => ", err);
    }
    return lista;
}

module.exports = (browserInstance) => scrapeAll(browserInstance);