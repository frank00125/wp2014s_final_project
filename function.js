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
	user.set('score',0);
	
	user.signUp(null, {
		success: function(user) {
			window.location.assign("LoginPage.html");
		},
		error: function(user, error) {
			console.log("Error: " + error.code + " " + error.message);
		}
	});
}

function logIn(username,password){
	Parse.User.logIn(username,password,{
		success: function(user){
		},
		error: function(user, error){
			return false;
		}
	});
	
	var current_user = Parse.User.current();
	if(current_user)
		return current_user;
	else
		return false;
		
}
