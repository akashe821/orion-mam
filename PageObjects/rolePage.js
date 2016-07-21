/**
 * Created by STrigunayat on 6/1/2016.
 */
var ObRoles = require('../ElementRepo/ObRoles.json');

var RolePage;
RolePage = function() {


    this.AddRole = function() {

        element(by.buttonText(ObRoles.locators.RolesPage.AddRole)).click();
        element(by.model(ObRoles.locators.RolesPage.CreateNewRole)).sendKeys(ObRoles.locators.RolesPage.RoleName);
        element(by.model(ObRoles.locators.RolesPage.DescriptionBox)).sendKeys(ObRoles.locators.RolesPage.Description);
        element(by.css('.ng-scope')).getWebElement().then(function (text2) {
            //console.log(text2);
            //element(by.repeater("permission in roleCreate.newRole.permissions").row(1).column("Owner")).click();
            element(by.model("permission.isOwner")).click();
            element(by.model("permission.isShared")).click();
            element(by.buttonText("Save")).click();
            //expect(element.all(by.repeater('role in role.roles')).count()).toEqual(4);
            browser.sleep(5000);
            console.log("akash");

        });
    };

    this.EditRole = function() {
        element(by.repeater('role in role.roles').row(4)).click();
        var RoleName = element(by.repeater('role in role.roles').row(4).column('role.name'));
        RoleName.click();
        element(by.buttonText("Edit")).click();
        element(by.model("permission.isGroup")).click();
        element(by.buttonText("Save")).click();
        browser.sleep(5000);

    };

    this.DeleteRole = function() {
        element(by.repeater('role in role.roles').row(4)).click();
        var RoleName = element(by.repeater('role in role.roles').row(4).column('role.name'));
        RoleName.click();
        element(by.buttonText("Delete")).click();
        browser.sleep(5000);

    };


};
module.exports = new RolePage();