var isClickBattle = false;
var isClickFlow = false;

$(document).ready(function(){
	Parse.initialize("3zNjT9EGuUYzq0Ucqj9mrYOZBQQri1u40LqDGhiJ","FhvDpueqCRBp1bvNDRL7Scbb00J9f7KoyQMmlnvC");
	var current_user = Parse.User.current();
	if(current_user){
		var BattleCard = Parse.Object.extend('BattleCard');
		var query1 = new Parse.Query(BattleCard);
		query1.include('card');
		query1.equalTo('user',current_user);
		query1.ascending('flow');
		query1.find({
			success: function(data) {
				for(var i=0;i <data.length;i++){
					var card = data[i].get('card');
					var s = getElementStringByBattleCard(card.get('name'),card.get('level')
								,card.get('no'),data[i].get('flow'));
					$('div.BattleCard').append(s);
				}
			}
		});
		var ownCard = Parse.Object.extend('ownCard');
		var query2 = new Parse.Query(ownCard);
		query2.include('card');
		query2.equalTo('user',current_user);
		query2.find({
			success: function(data) {
				var s1 = "";
				for(var i=0;i <data.length;i++){
					var card = data[i].get('card');
					var s = getElementStringByownCard(card.get('name'),card.get('level'),card.get('no'));
					s1 += s;
					if((i + 1) % 5 == 0){
						var string = "<div class='cards'>"+s1+"</div>";
						$('div.cardbox').append(string);
						s1 = "";
					}
					else if(i == data.length - 1){
						var string = "<div class='cards'>"+s1+"</div>";
						$('div.cardbox').append(string);
						s1 = "";
					}
				}
			}
		});
		
		var isChangeFlow = false;
		$('#changeBattleCard').click(function(){
			if(isClickBattle==false){
				$('.checkbox').css('display','inline-block');
				isClickBattle = true;
			}
			else{
				$('.checkbox').css('display','none');
				isClickBattle = false;
			}
		});
		
		$('#changeFlow').click(function(){
			if(isClickFlow==false){
				$('.flow').prop('disabled',false);
				isClickFlow = true;
			}
			else{
				var x = $('.flow');
				var arr = new Array("","","","","");
				var isDuplicated = false
				for(var i=0;i<x.length;i++){
					if(x[i].value > 5){
						isDuplicated = true;
						break;
					}
					arr[x[i].value - 1] = x[i].id;
				}
				for(var i=0;i<arr.length;i++){
					if(arr[i]==""){
						isDuplicated = true;
						break;
					}
				}
				if(isDuplicated==true){
					for(var i=0;i<5;i++){
						x[i].value = i + 1;
					}
					isChangeFlow = false;
				}
				else
					isChangeFlow = true;
				x.prop('disabled',true);
				isClickFlow = false;
			}
		});
		
		if(isChangeFlow==true){
			
	}
	else{
		alert("請登入");
	}
});

function getElementStringByownCard(name, level, no){
	var s0 = "<input class='checkbox' type='checkbox' value='"+no+"'>"
	var s1 = "<h5>"+name+"</h5>";
	var s2 = "<img class='level' src='img/rank/"+level+".jpg' alt='"+name+"' >";
	var s = "<div class='card'>"+s0+s1+s2+"</div>";
	
	return s;
}

function getElementStringByBattleCard(name, level, no, number){
	var s0 = "<input type='text' id='"+no+"' class='flow' value='"+number+"' disabled>";
	var s1 = "<h5>"+name+"</h5>";
	var s2 = "<img class='level' src='img/rank/"+level+".jpg' alt='"+name+"' >";
	var s = "<div class='card'>"+s0+s1+s2+"</div>";
	
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
