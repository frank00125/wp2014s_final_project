Parse.initialize("3zNjT9EGuUYzq0Ucqj9mrYOZBQQri1u40LqDGhiJ", "FhvDpueqCRBp1bvNDRL7Scbb00J9f7KoyQMmlnvC");

var Content;
var Title;
var Url;
function ramdomNum(){
 
var vmaxNum = 3;  
var vminNum = 0;  
var n = Math.floor(Math.random() * (vmaxNum - vminNum + 1)) + vminNum;
var vac;

 switch(n) {
    case 0:
        vac = 'a';
        break;
    case 1:
        vac = 'b';
        break;
    case 2:
    	vac = 'c';
    	break;
    case 3:
    	vac = 'd';
    	break;
}
var maxNum = 200;  
var minNum = 0;  
var num = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum; 
var no = vac + num;

return(no);
  }
function getData(){
var card = Parse.Object.extend("card");
var query = new Parse.Query(card);
var No = ramdomNum();
query.equalTo("no", No);
query.first({
  success: function(results) {
    //alert("Successfully retrieved No." + results);
    // Do something with the returned Parse.Object values
    
      var object = results;
      //alert(object.id + ' - ' + object.get('no'));
      Content = object.get('content');
      Title = object.get('name');
      Url=object.get('url');

      if (Content.length>500){
      var	moreup = "...";
      }
      else moreup = "";
      Content = Content.substr(0,500)+moreup;
      $('div#result1').html(Content).fadeIn('slow');
      $('div#result2').html(Content);
      $('div#result3').html(Content);
  			//$('div#result1').hide().fadeIn('slow');
  		$('h2#title').html(Title);
  		

  		//window.location.href(Url);
  		$('.readmore').attr('href',Url);
  	
  			//$('div#result1').hide().fadeIn('slow');
      //console.log(Content);
      var owncard = Parse.Object.extend("owncard");
		var own = new owncard();
 
		//own.set("objectId", object.id);
		own.set("card", object);
		//own.set("user", object.user);
		
		own.save(null, {
  success: function(own) {
    // Execute any logic that should take place after the object is saved.
    //alert('New object created with objectId: ' + own.id );
  },
  error: function(own, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and description.
    alert('Failed to create new object, with error code: ' + error.description);
  }
	});


        /*var TestObject = Parse.Object.extend("owncard");
		var testObject = new TestObject();
		testObject.save({foo: "bar"}).then(function(object) {
 		alert("點選愛心把卡片納入卡片庫");
 		})*/
    
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }

});

}
function changeClass1(){
		
			if(document.getElementById("block1").className == "block"){
				document.getElementById("block1").className += " rotated";
				document.getElementById("block2").className += " gone";
				document.getElementById("block3").className += " gone";
			}
			else
				document.getElementById("block").className = "block";
		
			getData();
		
			
  			$('div#result1').html(Content);
  			$('div#result1').hide().fadeIn('slow');
  			
					
			//console.log(Content);
	
					};


		function changeClass2(){
			if(document.getElementById("block2").className == "block"){
				document.getElementById("block2").className += " rotated";
				document.getElementById("block1").className += " gone";
				document.getElementById("block3").className += " gone";
			}
			else
				document.getElementById("block").className = "block";
		
			getData();
		
		
 		}
					
					
		function changeClass3(){
			if(document.getElementById("block3").className == "block"){
				document.getElementById("block3").className += " rotated";
				document.getElementById("block2").className += " gone";
				document.getElementById("block1").className += " gone";
			}
			else
				document.getElementById("block").className = "block";
			
			getData();
		}


 window.fbAsyncInit = function() {
  FB.init({
    appId      : '243758945748336',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.0' // use version 2.0
  });
  

  fbLogin = function() {  
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        // Logged into your app and Facebook.
              FB.api('/me', function(response) {

         Parse.User.logIn(response.id,"0000",{
          success: function(user){
        window.location.href("Url");
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
    });
    };
    
  };