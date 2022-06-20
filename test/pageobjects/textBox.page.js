const Page = require("../pageobjects/page");

class TextBoxPage extends Page {
    get fullName() {
        return $("#userName");
    };

    async inputfullName(name) {
        const fullname = await this.fullName;
        await fullname.click();
        await fullname.clearValue();
        await fullname.setValue(name);
    };

    get email() {
        return $("#userEmail");
    };

    async inputEmail(email) {
        const em = await this.email;
        await em.click();
        await em.clearValue();
        await em.setValue(email);
    };

    get currentAddress() {
        return $("#currentAddress");
    };

    async inputCurrentAddress(address) {
        const add = await this.currentAddress;
        await add.click();
        await add.clearValue();
        await add.setValue(address);
    };

    get permanentAddress() {
        return $("#permanentAddress");
    };

    async inputPermanentAddress(address) {
        const add = await this.permanentAddress;
        await add.scrollIntoView();
        await add.click();
        await add.clearValue();
        await add.setValue(address);
    };

    get submitBtn() {
        return $("#submit");
    };

    async clickOnSubmitBtn() {
        const btn = await this.submitBtn;
        await btn.click();
    };

    async addUser(fullName, email, address) {
        await this.inputfullName(fullName);
        await this.inputEmail(email);
        await this.inputCurrentAddress(address);
        await this.inputPermanentAddress(address);
        await this.clickOnSubmitBtn();
    };

    get outputName() {
        return $("#name");
    };

    get outputEmail() {
        return $("#email");
    };

    get outputCurAdd() {
        return $("p#currentAddress");
    };

    get outputPermAdd() {
        return $("p#permanentAddress");
    };

};

module.exports = new TextBoxPage();