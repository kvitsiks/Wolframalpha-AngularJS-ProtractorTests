var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('login positive testing', function(){
	this.timeout(25000);

		//import page object
		var home_page = require('../pages/home_page.js');

		it ("Username and title verification", function(){

			home_page.goToPage();

			var login_page = home_page.signInLink();

			login_page.typeCorrectEmail();

			login_page.typePassword();

			var account_page = login_page.signInButton();

			account_page.dropDownMenu();

			account_page.accountLink();

			expect(account_page.verifyName()).to.eventually.equal(account_page.correctUserName());

			account_page.printName();
		
			expect(account_page.verifyTitle()).to.eventually.contain(account_page.correctTitle());
			
			account_page.printTitle();
		});	
});