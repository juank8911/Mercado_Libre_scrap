const { json } = require("express/lib/response");

// Busca los dispositivos en la pagina de mercado libre
const pruebaClick = {
    url: "https://listado.mercadolibre.com.ar/celular-smarphones#D[A:celular%20smarphones]",
    async scraper(browser, callback) {
        let page = await browser.newPage();
        // await page.setViewport({ width: 900, height: 800 });
        await page.goto(this.url, [(1000, { waitUntil: "domcontentloaded" })]);
        var elementToClick =
            "#root-app > div > div.ui-search-main.ui-search-main--exhibitor > section > div.ui-search-pagination > ul > li.andes-pagination__button.andes-pagination__button--next > a";
        var cookies =
            "body > div:nth-child(7) > div.cookie-consent-banner-opt-out > div.cookie-consent-banner-opt-out__actions > button.cookie-consent-banner-opt-out__action.cookie-consent-banner-opt-out__action--primary.cookie-consent-banner-opt-out__action--key-accept";
        let divaces = [];
        await page.waitForSelector(cookies, 150000);
        await page.click(cookies);
        await page.waitFor(2000);
        for (var index = 0; index <= 4; index++) {
            // const element = array[index];

            if (index != 0) {
                await page.waitForSelector(elementToClick, 150000);
                await page.click(elementToClick);
                await page.waitFor(2000);
            }
            console.log("vuelta al ciclo " + index);
            const parentRow =
                "#root-app > div > div.ui-search-main.ui-search-main--exhibitor > section > ol";
            await page.waitForSelector(parentRow);
            const elements = await page.$eval(
                parentRow,
                (el) => el.childElementCount
            );
            // console.log("el numero elementos es: " + elements);
            const result = await page.evaluate(() => {
                const $cards = document.querySelectorAll(
                    "#root-app > div > div.ui-search-main.ui-search-main--exhibitor > section > ol > li > div > div"
                );
                const data = [];

                //cilco para recorrer la lista de dispositivos
                $cards.forEach(($card) => {
                    //Condicional para obtener los Smartphone Samsung que estan Fulfillment (FULL)?
                    var titulo = $card
                        .querySelector(
                            "div.ui-search-result__content-wrapper > div.ui-search-item__group.ui-search-item__group--title > a.ui-search-item__group__element.ui-search-link > h2"
                        )
                        .textContent.trim();
                    if (
                        $card.querySelector('[aria-label*="full"]') &&
                        titulo.search("Samsung") != -1
                    ) {
                        data.push({
                            title: titulo,
                            link: $card
                                .querySelector(
                                    ".ui-search-result__content-wrapper .ui-search-item__group a"
                                )
                                .href.trim(),
                            img: $card
                                .querySelector(
                                    "div.ui-search-result__image > a > div > div > div > div > div > img"
                                )
                                .src.trim(),
                            full: "Full",
                        });
                    }
                });
                return data;
            });

            result.forEach((device) => {
                divaces.push(device);
            });
            console.log("numero total: " + Object.keys(divaces).length);
            // console.log(divaces);
        }
        console.log("final del ciclo");
        // console.log(divaces);
        return divaces;
    },
};

module.exports = pruebaClick;