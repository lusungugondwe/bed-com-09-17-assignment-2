// project details
function save(){

	
    
 // check for blank input value
    var errormessage = "";
    
    if (document.getElementById('pname').value=="") {
    	errormessage += "Enter the project name...\n";
    	document.getElementById('pname').style.borderColor = "red";
    }
    if (document.getElementById('pdescription').value=="") {
    	errormessage += "Enter the project description...\n";
    	document.getElementById('pdescription').style.borderColor = "red";
    }
    if (document.getElementById('dateline').value=="") {
    	errormessage += "Enter the project date...\n";
    	document.getElementById('dateline').style.borderColor = "red";
    }
    if (errormessage != "") {
    	alert(errormessage);
    	return false;
    }

    confirm('you are about to save your project details. Are you sure you fill the form as you desire? if so press OK!!');

// set project input into local storage
	var proName = document.getElementById('pname').value;
	var prod = document.getElementById('pdescription').value;
	var proDate = document.getElementById('dateline').value;

	localStorage.setItem('pname',proName);
	localStorage.setItem('pdescription',prod);
	localStorage.setItem('dateline',proDate);

alert('you have successfully to save your project details if you want to access it press on the link CLICK HERE TO SEE THE DETAILS');
 
}

// get the stored project inputs
function load(){
	var storedValue = localStorage.getItem('pname');
	var storedValue = localStorage.getItem('pdescription');
	var storedValue = localStorage.getItem('dateline');
}
function clean(){

    confirm('This action will going to clear projects details you stored;  Do u want to continue?');

	localStorage.removeItem('pname');
	localStorage.removeItem('pdescription');
	localStorage.removeItem('dateline');
}

//exprience details
function show(){

// check for blank input   
   var emptyinputvalue = "";
    
    if (document.getElementById('wname').value=="") {
    	emptyinputvalue += "Enter the your exprience...\n";
    	document.getElementById('wname').style.borderColor = "red";
    }
    if (document.getElementById('wdescription').value=="") {
    	emptyinputvalue += "Enter the work description...\n";
    	document.getElementById('wdescription').style.borderColor = "red";
    }
    if (document.getElementById('wdateline').value=="") {
    	emptyinputvalue += "Enter the working date...\n";
    	document.getElementById('wdateline').style.borderColor = "red";
    }
    if (emptyinputvalue != "") {
    	alert(emptyinputvalue);
    	return false;
    	
    }

   confirm('you are about to save your work exprience details. Are you sure you fill it as you desire? if so press OK!!');

//set work exprience input	
    var workT = document.getElementById('wname').value;
	var workd = document.getElementById('wdescription').value;
	var workDate = document.getElementById('wdateline').value;

    localStorage.setItem('wname',workT);
	localStorage.setItem('wdescription', workd);
	localStorage.setItem('wdateline',workDate);
alert('you have successfully to save your work exprience details if you want to access it press on the link CLICK HERE TO SEE THE DETAILS');

}
//get the work exprience input
function work(){
	var storedValue = localStorage.getItem('wname');
	var storedValue = localStorage.getItem('wdescription');
	var storedValue = localStorage.getItem('wdateline');
}
//it will going to clear all work exprience localstorage
function cleared(){
     confirm('This action will going to clear your work exprience you stored;  Do u want to continue?')

	localStorage.removeItem('wname');
	localStorage.removeItem('wdescription');
	localStorage.removeItem('wdateline');
}