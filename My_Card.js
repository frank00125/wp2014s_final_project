$(document).ready(function(){
	Parse.initialize("3zNjT9EGuUYzq0Ucqj9mrYOZBQQri1u40LqDGhiJ","FhvDpueqCRBp1bvNDRL7Scbb00J9f7KoyQMmlnvC");
	var current_user = Parse.User.current();
	if(current_user){
		var ownCard = Parse.Object.extend("ownCard");
		var query = new Parse.Query(ownCard);
		query.equalTo('user',current_user);
		query.find({
			success: function(result){
				if(result.length < 5){
					for(var i=0;i<result.length;i++){
						var s1='<h5>'+result[j].get('card').get('name')+'</h5>';
						var s2="<img class='level' src='"+result[j].get('card').get('level')
							+".jpg' alt='"+result[j].get('card').get('name')+"' >";
						s = "<div class='card'>"+s1+s2+"</div>";
						$('div.cards_start').append(s);
					}
				}
				else{
					var length = result.length;
					var round = parseInt(length / 4);
					var last_round_number = length % 4;
					for(var i=0;i<round;i++){
						var s = "";
						for(var j=4*i;j<4*i+3;j++){
							var s1='<h5>'+result[j].get('card').get('name')+'</h5>';
							var s2="<img class='level' src='"+result[j].get('card').get('level')
										+".jpg' alt='"+result[j].get('card').get('name')+"' >";
							s = "<div class='card'>"+s1+s2+"</div>";
						}
						
						if(i==0)
							$('div.cards_start').append(s);
						else{
							var ss = "<div class='cards'>"+s+"</div>"
							$('div.cardbox').append(ss);
						}
					}
					for(var i=length-last_round_number;i<length;i++){
						var s1='<h5>'+result[j].get('card').get('name')+'</h5>';
						var s2="<img class='level' src='"+result[j].get('card').get('level')
								+".jpg' alt='"+result[j].get('card').get('name')+"' >";
						var s = "<div class='card'>"+s1+s2+"</div>";
						$('div.cardbox').append(ss);
					}
				}
			},
			error: function(error){
				console.log("Error: " + error.code + " " + error.message);
			}
		});
	}
	else{
		alert("�еn�J");
	}
});


$('#logout').click(function(){
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
});
