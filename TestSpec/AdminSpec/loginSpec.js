/**
 * Created by STrigunayat on 5/31/2016.
 */

var base = require('../../PageObjects/basePage.js');
var logger = require('../../Config/log.js');

describe("MAM Login Test", function () {

    var home = require('../../PageObjects/homePage.js');

    it("Login as User", function () {

        //base.navigateToURL("http://10.117.29.45:1337/#/");
        base.navigateToURL("http://localhost:1337/#/");
        //home.loginAsUser();

        var title = base.getPageTitle();
        expect(title).toBe("Media Asset Management");
        logger.log('info','validating the exact title');

        expect(title).not.toEqual("Media");
        logger.log('info','Validate title should not match');
        browser.sleep(3000);

    });


});


