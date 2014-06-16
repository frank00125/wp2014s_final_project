$(document).ready(function(){
	Parse.initialize("3zNjT9EGuUYzq0Ucqj9mrYOZBQQri1u40LqDGhiJ","FhvDpueqCRBp1bvNDRL7Scbb00J9f7KoyQMmlnvC");
	var current_user = Parse.User.current();
	if(current_user){
		var ownCard = Parse.Object.extend('ownCard');
		var query = new Parse.Query(ownCard);
		query.include('card');
		query.equalTo('user',current_user);
		query.find({
			success: function(data) {
				var s1 = "";
				for(var i=0;i <data.length;i++){
					var card = data[i].get('card');
					var s = getElementString(card.get('name'),card.get('level'));
					if(i < 4)
						$('div.cards_start').append(s);
					else{
						s1 += s;
						if((i + 1) % 4 == 0){
							var string = "<div class='cards'>"+s1+"</div>";
							$('div.cardbox').append(string);
							s1 = "";
						}
						if(i == data.length - 1){
							var string = "<div class='cards'>"+s1+"</div>";
							$('div.cardbox').append(string);
							s1 = "";
						}
					}
				}
			}
		});
	}
	else{
		alert("請登入");
	}
});

function getElementString(name, level){
	var s1 = "<h5>"+name+"</h5>";
	var s2 = "<img class='level' src='img/rank/"+level+".jpg' alt='"+name+"' >";
	var s = "<div class='card'>"+s1+s2+"</div>";
	
	return s;
}

$('#logout').click(function(){
	
	window.fbAsyncInit = function() {
  		FB.init({
		 appId      : '243758945748336',
		 cookie     : true,  // enable cookies to allow the server to access 
                        // the session
		 xfbml      : true,  // parse social plugins on this page
		 version    : 'v2.0' // use version 2.0
  		});
	
	FB.getLoginStatus(function (response){
		if(response.status === 'connected'){
			FB.logout(function(response){
				Parse.User.logOut();
				window.location.assign("LoginPage.html");
			});
		} else if(response.status === 'not_authorized'){
			FB.logout(function (response) {     
				alert("請重新登入！");
			});
		} else{    // 使用者沒有登入 Facebook
			alert("請重新登入！");
		}
	});
	};
	
	(function(d, s, id) {
		 var js, fjs = d.getElementsByTagName(s)[0];
    		if (d.getElementById(id)) return;
    		js = d.createElement(s); js.id = id;
    		js.src = "//connect.facebook.net/en_US/sdk.js";
		 fjs.parentNode.insertBefore(js, fjs);
  		}(document, 'script', 'facebook-jssdk'));
});
