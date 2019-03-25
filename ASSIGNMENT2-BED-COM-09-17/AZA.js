//code for setting items in the local storage
function onsubmit(){

	if(var pname =""){
		alert('type something')
		return false
	} else{
		alert('continue')
		rertun true
	}
	confirm('are sure u dont want to save deatals below?');
	// set project input into local storage
	var proName = document.getElementById('pname').value;
	var prod = document.getElementById('pdescription').value;
	var proDate = document.getElementById('dateline').value;

	localStorage.setItem('pname',proName);
	localStorage.setItem('pdescription',prod);
	localStorage.setItem('dateline',proDate);
	alert('u have successfully saved ur data');
}
//code for getting item from local storage
function form(){

	var storedValue = localStorage.getItem('pname');
	var storedValue = localStorage.getItem('pdescription');
	var storedValue = localStorage.getItem('dateline');
}

function remove(){
	localStorage.removeItem('pname');
	localStorage.removeItem('pdescription');
	localStorage.removeItem('dateline');
}

 
 //getting items from local storage and display in the screen in html
<script type="text/javascript">
			 
			
			
			 document.write(" <p> <h2>NAME:</h2>  " + localStorage.pname + " </p> ");
             document.write(" <p> <h2>DESCRIPTION:</h2> " + localStorage.pdescription + " </p>");
             document.write(" <p> <h2>DATE:</h2>  " + localStorage.dateline + " </p> ");
             
            
	</script>