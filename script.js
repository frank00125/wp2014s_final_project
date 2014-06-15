Parse.initialize("3zNjT9EGuUYzq0Ucqj9mrYOZBQQri1u40LqDGhiJ","FhvDpueqCRBp1bvNDRL7Scbb00J9f7KoyQMmlnvC");

window.fbAsyncInit = function() {
  FB.init({
    appId      : '243758945748336',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.0' // use version 2.0
  });
  
  function statusChangeCallback(response) {
          console.log('statusChangeCallback');
          console.log(response);

          if (response.status === 'connected') {
      // Logged into your app and Facebook.
            FB.api('/me', function(response) {
            console.log(response);
	      
	     Parse.User.logIn(response.id,"0000",{
		success: function(user){
			window.location.assign("My_Card.html");
		},
		error: function(user, error){
			var usr = new Parse.User();
	            		usr.set('username',response.id);
	            		usr.set('password',"0000");
	            		usr.set('email',response.email);
	            		usr.set('score',0);

	            usr.signUp(null, {
		            success: function(user) {
		            	window.location.assign("LoginPage.html");
	            	},
		            error: function(user, error) {
			            console.log("Error: " + error.code + " " + error.message);
		            }
	            });
		}
	});

            
    });
            //window.location.assign("My_Card.html");
         } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
            FB.login(function (response) {
                        // FB.api('/me/feed', 'post', {message: 'I\'m started using FB API'});
                        if (response.authResponse) { // if user login to your apps right after handle an event
                            window.location.reload();
                        };
                    }, {
                        scope: 'publish_actions', 
                        return_scopes: true
                    });
         } else {
          FB.login(function (response) {
                        // FB.api('/me/feed', 'post', {message: 'I\'m started using FB API'});
                        if (response.authResponse) { // if user login to your apps right after handle an event
                            window.location.reload();
                        };
                    }, {
                        scope: 'publish_actions',  
                        return_scopes: true
                    });
    }
  }


  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }




  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));


$('div.fb-login-button').click(function() {
  checkLoginState();
});


  
  function signinCallback(authResult) {
  if (authResult['access_token']) {
    // Successfully authorized
    // Hide the sign-in button now that the user is authorized, for example:
    document.getElementById('signinButton').setAttribute('style', 'display: none');
  } else if (authResult['error']) {
    // There was an error.
    // Possible error codes:
    //   "access_denied" - User denied access to your app
    //   "immediate_failed" - Could not automatically log in the user
    // console.log('There was an error: ' + authResult['error']);
  }
}

function disconnectUser(access_token) {
  var revokeUrl = 'https://accounts.google.com/o/oauth2/revoke?token=' +
      access_token;

  // Perform an asynchronous GET request.
  $.ajax({
    type: 'GET',
    url: revokeUrl,
    async: false,
    contentType: "application/json",
    dataType: 'jsonp',
    success: function(nullResponse) {
      // Do something now that user is disconnected
      // The response is always undefined.
    },
    error: function(e) {
      // Handle the error
      // console.log(e);
      // You could point users to manually disconnect if unsuccessful
      // https://plus.google.com/apps
    }
  });
}
// Could trigger the disconnect on a button click
$('#revokeButton').click(disconnectUser);

