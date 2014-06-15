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