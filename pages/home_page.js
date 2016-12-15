require ('../pages/login_page.js')
var home_page = function(){

	//go to the page
	this.goToPage = function(value){
		browser.get('https://www.wolframalpha.com/');
		browser.manage().window().maximize();
	};
	//click on sign-in link
	this.signInLink = function(){
		browser.ignoreSynchronization = true
		element(by.css('button.sign-in')).click();
		var eleUN = by.id('username');
		browser.wait(function() { return browser.isElementPresent(eleUN); }, 8000);
		return require ('./login_page.js');
	};
	
};

module.exports = new home_page();
