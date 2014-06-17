Parse.initialize("3zNjT9EGuUYzq0Ucqj9mrYOZBQQri1u40LqDGhiJ","FhvDpueqCRBp1bvNDRL7Scbb00J9f7KoyQMmlnvC");

      signup = function(){
      
      if(document.getElementById('password').value != document.getElementById('confirmpassword').value){
            alert('密碼不一樣，請確認密碼是一樣的！！');
      }
      
      
        var user = new Parse.User();
            user.set("username", document.getElementById('email').value);
            user.set("password", document.getElementById('password').value);
            user.set("canBattle",null);
            user.set("win",0);
            user.signUp(null, {
                success: function(user){
                  alert('success!!')
                  window.location.assign("LoginPage.html");
                },
                error: function(user, error){
                  alert('fail');
                }
            });
      };
