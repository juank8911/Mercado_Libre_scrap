const puppeteer = require("puppeteer");

//maneja la aprtarua de el buscador
async function startBrowser() {
    let browser;
    try {
        console.log("Opening the browser......");
        browser = await puppeteer.launch({
            headless: false,
            args: ["--disable-setuid-sandbox"],
            ignoreHTTPSErrors: true,
        });
    } catch (err) {
        console.log("Could not create a browser instance => : ", err);
    }
    return browser;
}

function closeBrowser() {}

module.exports = {
    startBrowser,
};