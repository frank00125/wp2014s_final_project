$(document).ready(function(){
	Parse.initialize("3zNjT9EGuUYzq0Ucqj9mrYOZBQQri1u40LqDGhiJ","FhvDpueqCRBp1bvNDRL7Scbb00J9f7KoyQMmlnvC");
	var current_user = Parse.User.current();
	if(current_user){
		var query = new Parse.Query(Parse.User);
		query.equalTo('canBattle',true);
		query.notEqualTo("objectId", current_user.id);
		query.find({
			success: function(users){
				var random = parseInt(Math.random() * users.length);
				var user = users[random];
				var bc = Parse.Object.extend('BattleCard');
				var query = new Parse.Query(bc);
				query.include('card');
				query.equalTo('user',user);
				query.ascending('flow');
				query.find({
					success: function(result){
						for(var i=0;i<result.length;i++){
							var card = result[i].get('card');
							var s = getElementStringOfEnemy(card.get('name'), card.get('level'));
							
							$('div.enemy_card').append(s);
						}
					},
					error: function(error){
						console.log(error);
					}
				});
			},
			error: function(user){
				console.log(error);
			}
		});
		
		var bc = Parse.Object.extend('BattleCard');
		var query = new Parse.Query(bc);
		query.include('card');
		query.equalTo('user',Parse.User.current());
		query.ascending('flow');
		query.find({
			success: function(result){
				for(var i=0;i<result.length;i++){
					var card = result[i].get('card');
					var s = getElementStringOfOur(card.get('name'), card.get('level'));
					
					$('div.our_card').append(s);
				}
			},
			error: function(error){
				console.log(error);
			}
		});
		

		$('.myButton').click(function(){
			var e = new Array();
			var o = new Array();
			$('.enemy').each(function(){
				var id = $(this).attr('id');
				e.push(id);
			});
			$('.our').each(function(){
				var id = $(this).attr('id');
				o.push(id);
			});
			var oscore = 0;


			for(var i = 0;i<e.length;i++){
				if(e[i] > o[i]){
					oscore -= 1;
				}
				else if(e[i] < o[i]) {
					oscore += 1;
				}
				else{
					oscore += 0;
				}
			}

			if(oscore > 0){
				alert("You win!");
				var bc = Parse.Object.extend('user');
				var query = new Parse.Query(bc);
					query.include('win');
					query.equalTo('user',Parse.User.current());
					query.find({
					success: function(result){
							console.log(result);
							result += 1;
							//window.location.assign('My_Card.html');
				
					},
					error: function(error){
						console.log(error);
					}
				});
					}
			else{
				alert("You lose!");
				window.location.assign('My_Card.html');
			}
		});




	}
	else{
		$('body').html("");
		$('body').css("background-color","black");
		alert('請登入。');
		window.location.assign('LoginPage.html');
	}
});

function getElementStringOfEnemy(name, level){
	var s1 = "<h5>"+name+"</h5>";
	var s2 = "<img class='level' src='img/rank/"+level+".jpg' alt='"+level+"' >";
	var s = "<div class='enemy' id='"+level+"' >"+s2+"</div>";
	
	return s;
}

function getElementStringOfOur(name, level){
	var s1 = "<h5>"+name+"</h5>";
	var s2 = "<img class='level' src='img/rank/"+level+".jpg' alt='"+level+"' >";
	var s = "<div class='our' id='"+level+"' >"+s2+"</div>";
	
	return s;
}

function changeClass1(){
	if(document.getElementById("block1").className == "block"){
		document.getElementById("block1").className += " rotated";
		document.getElementById("block2").className = " gone";
		document.getElementById("block3").className = " gone";
		document.getElementById("block4").className = " gone";
		document.getElementById("block5").className = " gone";
	}
	else{
		document.getElementById("block1").className = "block";
		document.getElementById("block2").className = "block";
		document.getElementById("block3").className = "block";
		document.getElementById("block4").className = "block";
		document.getElementById("block5").className = "block";
	}
}

function changeClass2(){
	if(document.getElementById("block2").className == "block"){
		document.getElementById("block2").className += " rotated";
		document.getElementById("block1").className += " gone";
		document.getElementById("block3").className += " gone";
		document.getElementById("block4").className += " gone";
		document.getElementById("block5").className += " gone";
	}
	else{
		document.getElementById("block2").className = "block";
		document.getElementById("block1").className = "block";
		document.getElementById("block3").className = "block";
		document.getElementById("block4").className = "block";
		document.getElementById("block5").className = "block";
	}
}			

function changeClass3(){
	if(document.getElementById("block3").className == "block"){
		document.getElementById("block3").className += " rotated";
		document.getElementById("block2").className += " gone";
		document.getElementById("block1").className += " gone";
		document.getElementById("block4").className += " gone";
		document.getElementById("block5").className += " gone";
	}
	else{
		document.getElementById("block3").className = "block";
		document.getElementById("block2").className = "block";
		document.getElementById("block1").className = "block";
		document.getElementById("block5").className = "block";
		document.getElementById("block4").className = "block";
	}
	
}

function changeClass4(){
	if(document.getElementById("block4").className == "block"){
		document.getElementById("block4").className += " rotated";
		document.getElementById("block2").className += " gone";
		document.getElementById("block1").className += " gone";
		document.getElementById("block3").className += " gone";
		document.getElementById("block5").className += " gone";
	}
	else{
		document.getElementById("block4").className = "block";
		document.getElementById("block2").className = "block";
		document.getElementById("block1").className = "block";
		document.getElementById("block3").className = "block";
		document.getElementById("block5").className = "block";
		
	}
	
}
function changeClass5(){
	if(document.getElementById("block5").className == "block"){
		document.getElementById("block5").className += " rotated";
		document.getElementById("block2").className += " gone";
		document.getElementById("block1").className += " gone";
		document.getElementById("block3").className += " gone";
		document.getElementById("block4").className += " gone";
	}
	else{
		document.getElementById("block5").className = "block";
		document.getElementById("block2").className = "block";
		document.getElementById("block1").className = "block";
		document.getElementById("block3").className = "block";
		document.getElementById("block4").className = "block";
	}
	
}
$('#logout').click(function(){
	Parse.User.logOut();
	var user = Parse.User.current();
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
