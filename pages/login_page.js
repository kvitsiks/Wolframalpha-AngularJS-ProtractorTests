require ('../pages/account_page.js')
var login_page = function(){
	
	//type correct email
	this.typeCorrectEmail = function(){
		var login = 'kvitsinskiys@gmail.com';
		element(by.id('username')).sendKeys(login);
	};

		//type incorrect email
	this.typeIncorrectEmail = function(){
		var login = 'kvitsinskiys@gmail.co';
		element(by.id('username')).sendKeys(login);
	};

	//type password
	this.typePassword = function(){
		var password = 'password123';
		element(by.css('input#password')).sendKeys(password);
	};

//click on sign-in button
	this.signInButton = function(){
		element(by.id('submitSignIn')).click();
		return require ('./account_page.js');
	};

//Error message verification
	this.verifyErrorMessage = function(){
		var name1 = element(by.css(".alert.alert-danger p"));
		return name1.getText();
		
	};

	this.correctErrorMessage = function(){
		var errorMes = " The email address or password is not correct.";
		return errorMes;
	};

	this.printErrorMessage = function(){
		var name1 = element(by.css(".alert.alert-danger p"));
		return name1.getText().then(function(str){
			console.log("Displayed error message is:", str);
		});
	};

//title verification
	this.verifyTitle = function(){
		return browser.getTitle();
	};

	this.correctTitle = function(){
		var title = 'Sign in - Wolfram|Alpha';
		return title;
	};

	this.printTitle = function(){
		return browser.getTitle().then(function(str){
			console.log("Displayed webpage title is:", str);
		});
	};

};

module.exports = new login_page();
