/**
 * Created by STrigunayat on 5/31/2016.
 */
var base = require('../../PageObjects/basePage.js');
var role = require('../../PageObjects/rolePage.js');
var logger = require('../../Config/log.js');
var ObRoles = require('../../ElementRepo/ObRoles.json');


describe("MAM Roles Page", function () {
    
    beforeEach(function() {
        base.navigateToURL(ObRoles.TestSiteUrl);
        logger.log('info','Navigating to the Website');
        title = browser.getTitle();

    });

    it("Add new role", function () {

        role.AddRole();

    });
    
    xit("Edit existing  role", function () {

        role.EditRole();

    });
    xit("Delete existing  role", function () {

        role.DeleteRole();

    });
    xit("Validate exact title",function(){

        title.then(function(text){

            console.log(text);
            expect(title).toEqual("Media Asset Management");
            logger.log('info','validating the exact title');
        });



    });
    xit("Validate incorrect title",function(){

        title.then(function(text){

            console.log(text);
            expect(title).toEqual("ORION Management");
            logger.log('info','validating the exact title');
        });



    });




});

