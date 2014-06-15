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
		},
		error: function(user, error) {
			 console.log("Error: " + error.code + " " + error.message);
		}
	});
	
	var current_user = Parse.User.current();
	return current_user;
}

function hasUser(){
	return Parse.User.current() != NULL;
}