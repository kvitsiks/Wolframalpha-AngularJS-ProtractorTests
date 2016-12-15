var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('login negative testing', function(){
	this.timeout(25000);

		//import page object
		var home_page = require('../pages/home_page.js');

		it ("Error message verification", function(){

			home_page.goToPage();

			var login_page = home_page.signInLink();

			login_page.typeIncorrectEmail();

			login_page.typePassword();

			login_page.signInButton();

			expect(login_page.verifyErrorMessage()).to.eventually.equal(login_page.correctErrorMessage());

			login_page.printErrorMessage();
		
			expect(login_page.verifyTitle()).to.eventually.contain(login_page.correctTitle());
			
			login_page.printTitle();
		});
			
});
