var account_page = function(){

	//click on dropdown menu
	this.dropDownMenu = function(){
		browser.sleep(5000);
		element(by.xpath(".//*[@id='dropdown-wrap']/button")).click();
	};

	//click on Account link in the dropdown menu
	this.accountLink = function(){
		element(by.css("#auth-account")).click();
		//browser.sleep(2000);
	};

//username verification
	this.verifyName = function(){
		var ele = by.xpath(".//*[@id='accountbox-profileright']/p");
		browser.wait(function() { return browser.isElementPresent(ele); }, 8000);
		var name = element(by.xpath(".//*[@id='accountbox-profileright']/p"));
		return name.getText();
		
	};

	this.correctUserName = function(){
		var username = 'Sergio Kvits';
		return username;
	};

	this.printName = function(){
		var name = element(by.xpath(".//*[@id='accountbox-profileright']/p"));
		return name.getText().then(function(str){
			console.log("Displayed name is:", str);
		});
	};

//title verification
	this.verifyTitle = function(){
		return browser.getTitle();
	};

	this.correctTitle = function(){
		var title = 'Wolfram|Alpha: Computational Knowledge Engin';
		return title;
	};

	this.printTitle = function(){
		return browser.getTitle().then(function(str){
			console.log("Displayed webpage title is:", str);
		});
	};


};

module.exports = new account_page();
