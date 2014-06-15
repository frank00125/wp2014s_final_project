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
						var s1='<h5>'+result[i].name+'</h5>';
						var s2="<img class='level' src='"+result[i].level+".jpg' alt='"+result[i].name+"' >";
						var s = "<div>"+s1+s2+"</div>";
						$('div.cards_start').append(s);
					}
				}
				else{
					var length = result.length;
					var round = length / 4;
					var last_round_number = length % 4;
					for(var i=0;i<round;i++){
						var s = "";
						for(var j=4*i;j<4*i+3;j++){
							var s1='<h5>'+result[i].name+'</h5>';
							var s2="<img class='level' src='"+result[i].level+".jpg' alt='"+result[i].name+"' >";
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
						var s1='<h5>'+result[i].name+'</h5>';
						var s2="<img class='level' src='"+result[i].level+".jpg' alt='"+result[i].name+"' >";
						s = "<div class='card'>"+s1+s2+"</div
						var ss = "<div class='cards'>"+s+"</div>"
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
		alert("½Ðµn¤J");
	}
});

$('#logout').click(function(){
	Parse.User.logOut();
	window.location.assign("LoginPage.html");
	FB.logout(function(response){});
});