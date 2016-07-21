/**
 * Created by Administrator on 6/1/2016.
 */
var Objects = require("../ElementRepo/objects.json");
var logger = require("../Config/log.js");
var userManagement = function() {
    this.usersearchBox = element(by.model(Objects.locators.UserManagementPage.userNameSearchBox));
    this.userManagementTab = element(by.binding(Objects.locators.UserManagementPage.userManagementTab));
    this.userTable = element.all(by.css(Objects.locators.UserManagementPage.userTable));

    this.filterUser = function(userName) {
        //this.userManagementTab.click();

        logger.log("info", "entering username in the search box");
        this.usersearchBox.sendKeys(userName);
        var rows = element.all(by.repeater(Objects.locators.UserManagementPage.userTable));
        var filteredUser = rows.getText().then(function(text){
            return text;
        });
        return filteredUser;
    }
};
module.exports = userManagement;