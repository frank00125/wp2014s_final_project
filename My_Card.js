$(document).ready(function(){
	Parse.initialize("3zNjT9EGuUYzq0Ucqj9mrYOZBQQri1u40LqDGhiJ","FhvDpueqCRBp1bvNDRL7Scbb00J9f7KoyQMmlnvC");
	var current_user = Parse.User.current();
	if(current_user){
		var ownCard = Parse.Object.extend("ownCard");
		var query = Parse.Query(ownCard);
		query.equalTo('user',current_user);
		query.find({
			success: function(results){
				for(var i=0;i<results.length;i++){
					var card = results[i].card;
					var name = card.name;
					var level = card.level;
					
					console.log(name);
					console.log(level);
				}
			},
			error: function(error){
			}
		});
	}
	else{
		alert("½Ðµn¤J");
		window.location.assign("LoginPage.html"); 
	}
});
