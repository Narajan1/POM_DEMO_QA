const Page = require('./page');

class ElementsPage extends Page {

    get textBoxField() {
        return $("//span[contains(text(),'Text Box')]");
    };

    async clickOnTextBox() {
        const link = await this.textBoxField;
        await link.click();
    };

    get textBoxTitle() {
        return $("//div[contains(text(),'Text Box')]");
    };


};

module.exports = new ElementsPage();
