$(document).ready(function(){
	Parse.initialize("3zNjT9EGuUYzq0Ucqj9mrYOZBQQri1u40LqDGhiJ","FhvDpueqCRBp1bvNDRL7Scbb00J9f7KoyQMmlnvC");
	var current_user = Parse.User.current();
	if(current_user){
		var query = new Parse.Query(Parse.User);
		query.equalTo('canBattle',true);
		query.find({
			success: function(data){
				var member_number = data.length;
				//var random = member_number * rand();
				//var usr = data[random];
				var s = 1;
			}
		});
		/*var BattleCard = Parse.Object.extend('BattleCard');
		var query1 = new Parse.Query(BattleCard);
		query1.include('card');
		query1.equalTo('user',current_user);
		query1.find({
			success: function(data) {
				for(var i=0;i <data.length;i++){
					var card = data[i].get('card');
					var s = getElementString(card.get('name'),card.get('level'));
					$('div.BattleCard').append(s);
				}
			}
		});*/
		
		var randomuser = [];
		var BattleCard = Parse.Object.extend('BattleCard');
		var query = new Parse.Query(BattleCard);
		query.find({
			success: function(data) {
				for(var i=0;i <data.length;i++){
					console.log(data);
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


findbattleuser = function(){
	var randomuser = [];
	var BattleCard = Parse.Object.extend('BattleCard');
		var query = new Parse.Query(BattleCard);
		query.include('card','user','flow');
		query.find({
			success: function(data) {
				for(var i=0;i <data.length;i++){
					randomuser = data[i];
					console.log(data[i]);
				}
			}
		});
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
