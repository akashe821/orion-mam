/**
 * Created by STrigunayat on 5/31/2016.
 */
//var User_Details = require('../Data/User_Details.json.json');
var HomePage = function() {

    //var logger = require('./log');
    this.loginAsUser = function () {

        element(by.model("login.userName")).sendKeys("test");
        element(by.model("login.password")).sendKeys("test");
        element(by.buttonText("Login")).click();
        //logger.log('info', 'Navigating through the website'); //writing logs

    };


};

module.exports = new HomePage();
