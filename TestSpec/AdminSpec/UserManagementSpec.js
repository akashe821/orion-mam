/**
 * Created by STrigunayat on 6/1/2016.
 */

var base = require('../../PageObjects/basePage.js');
//var role = require('../../PageObjects/rolePage.js');

var userManagement = require('../../PageObjects/userManagement.js');
var Objects = require("../../ElementRepo/objects.json");
var logger = require("../../Config/log.js");


describe("MAM UserManagement Page", function () {

    beforeEach(function() {
        //base.navigateToURL("http://localhost:1337/#/settings/users");
        base.navigateToURL("https://10.117.52.19/#/");
        var title = base.getPageTitle().then(function (text) {

            console.log(text);

            expect(text).toBe("Media Asset Management");
            logger.log('info','validating the exact title');
            expect(title).not.toEqual("Media");
            logger.log('info','Validate title should not match');
        });

    });

    xit("Add new User", function () {
        browser.get("http://localhost:1337/#/settings/users");
        browser.sleep(3000);

        element(by.buttonText("Create new local user")).click();
        element(by.model("user.userDetails.userName")).sendKeys("NEW-Orion");
        element(by.model("user.userDetails.fullName")).sendKeys("Shruti trigunayat");
        element(by.model("user.userDetails.displayName")).sendKeys("Shruti trigunayat");
        element(by.model("user.userDetails.email")).sendKeys("test@gmail.com");
        element(by.model("user.userDetails.phoneNumber")).sendKeys("0000000000");
        element(by.model("user.userDetails.description")).sendKeys("creating user for Admin role");
        element(by.model("user.userDetails.description")).sendKeys("Creating User for Admin role");
        element(by.model("user.userDetails.password")).sendKeys("test123");
        //element(by.model("user.userDetails.password")).sendKeys("test123");
        //browser.sleep(3000);
        element(by.model("user.userDetails.title")).sendKeys("Ms");
        /!*element(by.model("user.userDetails.userStatus")).$("[value='2']").click();*!/
        element(by.buttonText("Next")).click();
        //browser.sleep(3000);
        element(by.model("user.userDetails.role.name")).click();
        element(by.buttonText("Next")).click();
        element(by.model("user.userDetails.applicationGroup.MAM")).click();
        element(by.model("user.userDetails.sharingGroup.Neuro")).click();
        element(by.buttonText("Next")).click();
        element(by.model("user.userDetails.userPreference.language")).$("[value='1']").click();
        element(by.model("user.userDetails.userPreference.landingPage")).$("[value='1']").click();
        element(by.buttonText("Complete")).click();
        browser.sleep(5000);
    });

    xit("Add existing User", function () {
        browser.get("http://localhost:1337/#/settings/users");
        browser.sleep(3000);

        element(by.buttonText("Create new local user")).click();
        element(by.model("user.userDetails.userName")).sendKeys("NEW-Orion");
        element(by.model("user.userDetails.fullName")).sendKeys("Shruti trigunayat");
        element(by.model("user.userDetails.displayName")).sendKeys("Shruti trigunayat");
        element(by.model("user.userDetails.email")).sendKeys("test@gmail.com");
        element(by.model("user.userDetails.phoneNumber")).sendKeys("0000000000");
        element(by.model("user.userDetails.description")).sendKeys("creating user for Admin role");
        element(by.model("user.userDetails.description")).sendKeys("Creating User for Admin role");
        element(by.model("user.userDetails.password")).sendKeys("test123");
        //element(by.model("user.userDetails.password")).sendKeys("test123");
        //browser.sleep(3000);
        element(by.model("user.userDetails.title")).sendKeys("Ms");
        /!*element(by.model("user.userDetails.userStatus")).$("[value='2']").click();*!/
        element(by.buttonText("Next")).click();
        //browser.sleep(3000);
        element(by.model("user.userDetails.role.name")).click();
        element(by.buttonText("Next")).click();
        element(by.model("user.userDetails.applicationGroup.MAM")).click();
        element(by.model("user.userDetails.sharingGroup.Neuro")).click();
        element(by.buttonText("Next")).click();
        element(by.model("user.userDetails.userPreference.language")).$("[value='1']").click();
        element(by.model("user.userDetails.userPreference.landingPage")).$("[value='1']").click();
        element(by.buttonText("Complete")).click();
        browser.sleep(5000);
        logger.log('debug','User already Present so "Complete" button is not clickable');
    });

   /* xit("Edit User", function () {
        browser.get("http://localhost:1337/#/settings/users")
        element(by.repeater('user in user.users | filter:user.Search').row(5)).click();
        element(by.repeater("user in user.users | filter:user.Search").row(5).column("Username")).click();
        browser.sleep(5000);

    });*/
});

xdescribe("To Test the UserName Filter functionality", function() {

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


