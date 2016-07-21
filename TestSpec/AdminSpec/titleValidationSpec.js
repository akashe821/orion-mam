/**
 * Created by strigunayat on 6/3/2016.
 */
var logger = require('../../Config/log.js');

describe("Validating the MAM title",function(){

    var title;

    beforeEach(function(){

        browser.get("http://localhost:1337/#/");
        logger.log('info','Navigating to the Website');
        title = browser.getTitle();
    });


    it("Validate exact title",function(){

        title.then(function(text){

            console.log(text);
            expect(title).toEqual("Media Asset Management");
            logger.log('info','validating the exact title');
        });



    });


    it("Validate title should not match",function(){

        title.then(function(text){

            console.log(text);
            expect(title).not.toEqual("1111111MAMA");
            logger.log('info','Validate title should not match');
        });



    });


    it("Validate incorrect title",function(){

        title.then(function(text){

            console.log(text);
            expect(title).toEqual("ORION Management");
            logger.log('info','validating the exact title');
        });



    });




});

