var fs = require('fs');
var md5 = require('md5');

exports.saveUser = function(user, password) {
	return new Promise(function(resolve, reject) {
		fs.appendFile("password.txt", "\n"+ user +" "+md5(password), function(err) {
			if(err) {
				reject(err);
			}else {
				resolve("salvo com sucesso");
			}
		}); 
	});
};

exports.login = function(user, password) {
	return new Promise(function(resolve, reject) {
		fs.readFile("password.txt", 'utf8', function(err, data) {
			console.log(data);

			user = data.split(' ');

			console.log(JSON.stringify(user));
			
			/*if(err) {
				reject(err);
			}else {
				resolve("salvo com sucesso");
			}*/
		}); 
	});
};