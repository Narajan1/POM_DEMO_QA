const Page = require('./page');

class HomePage extends Page {

    async open () {
        await super.open();
        await browser.maximizeWindow();
    };
    
    get elementsIcon() {
        return $('.category-cards>div:nth-child(1)');
    };

    async openElementsIcon() {
        const link = await this.elementsIcon;
        await link.scrollIntoView();
        await link.click();
    };
};

module.exports = new HomePage();
