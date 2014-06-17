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
			
  			
					
			//console.log(Content);
	
					};


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