Parse.initialize("3zNjT9EGuUYzq0Ucqj9mrYOZBQQri1u40LqDGhiJ","FhvDpueqCRBp1bvNDRL7Scbb00J9f7KoyQMmlnvC");

      
$('#localLogin').submit(function(){
        var user = new Parse.User();
            user.set("username", document.getElementById('email').value);
            user.set("password", document.getElementById('password').value);
            user.signUp(null, {
                success: function(user){
                  window.location.assign("LoginPage.html");
                },
                error: function(user, error){
                  alert('fail');
                }
            });
});
