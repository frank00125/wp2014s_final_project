$('#logout').click(function(){
	Parse.initialize("","");
	Parse.User.logOut();
	console.log(Parse.User.current()==null);
});

function signUp(username,password,email){
	var user = new Parse.User();
	user.set('username',username);
	user.set('password',password);
	user.set('email',email);
	user.set('score',score);
	
	user.signUp(null, {
		success: function(user) {
			window.location.assign("LoginPage.html");
		},
		error: function(user, error) {
			console.log("Error: " + error.code + " " + error.message);
		}
	});
}

function hasUser(){
	return Parse.User.current() != NULL;
}

function logIn(username,password){
	var usr = null;
	Parse.User.logIn(username,password,{
		success: function(user){
			window.location.assign("My_Card.html");
		},
		error: function(user, error){
			console.log("Error: " + error.code + " " + error.message);
		}
	});
}