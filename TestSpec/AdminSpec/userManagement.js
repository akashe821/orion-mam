/**
 * Created by Administrator on 6/1/2016.
 */
var userManagement = require('../../PageObjects/userManagement.js');
var Objects = require("../../ElementRepo/objects.json");
var logger = require("../../Config/log.js");


describe("To Test the UserName Filter functionality", function() {

   var usermanagement = new userManagement();

    beforeEach(function() {
        logger.log("info", "Opening the ORION MAM test URL");
        browser.get(Objects.testURL);
    });

    //TestCase to check the filter user functionality
    it('To Verify that Filter User functionality is working properly', function() {
        var userToSearch = "Sonal Jain";
        logger.log("info", "Entering the username in the filterbox");
        var filteredRow = usermanagement.filterUser(userToSearch);
        expect(filteredRow).toMatch(userToSearch);
    });

    //TestCase to check the role of filtered user
    it('To Verify that Filtered User Role is coming properly', function() {
        var userToSearch = "Sonal Jain";
        var roleToCheck = "Local";
        logger.log("info", "Entering the username in the filterbox");
        var filteredRow = usermanagement.filterUser(userToSearch);
        expect(filteredRow).toMatch(roleToCheck);
    });
});