const homePage = require("../pageobjects/home.page");
const elementsPage = require("../pageobjects/elements.page");
const textBoxPage = require("../pageobjects/textBox.page");
const helper = require("../Helper/helper");
const faker = require("@faker-js/faker").faker;

describe('DemoQa', () => {
    it('should open the page', async () => {
        await homePage.open();
        await homePage.openElementsIcon();
        let path = helper.elmentsPagePath;
        let title = helper.elementsPageTitle;
        await expect(browser).toHaveUrlContaining(path);
        await expect(browser).toHaveTitle(title);
    });

    it("should open TextBox block", async () => {
        await elementsPage.clickOnTextBox();
        const title = await elementsPage.textBoxTitle;
        await expect(title).toHaveText(helper.textBoxTitleText);
    });

    it("should add new user", async () => {
        const fullName = faker.name.findName();
        const email = faker.internet.email();
        const address = faker.address.streetAddress();
        await textBoxPage.addUser(fullName, email, address); 

        const addedUserName = await textBoxPage.outputName;
        const addedUserEmail = await textBoxPage.outputEmail;
        const addedCurAdd = await textBoxPage.outputCurAdd;
        const addedPermAdd = await textBoxPage.outputPermAdd;
        await expect(addedUserName).toBeDisplayed();
        await expect(addedUserName).toHaveTextContaining(fullName);
        await expect(addedUserEmail).toHaveTextContaining(email);
        await expect(addedCurAdd).toHaveTextContaining(address);
        await expect(addedPermAdd).toHaveTextContaining(address);
    });
});


