function validateConfirmPassword(passWord, passWord2, errormessage){
		var error = "";
		document.getElementById(passWord2.id).nextSibling.innerHTML="";
		if (passWord.value != passWord2.value){
			error = errormessage;
			document.getElementById(passWord2.id).nextSibling.innerHTML=errormessage;
			document.getElementById(passWord2.id).nextSibling.style.color="red"
			document.getElementById(passWord2.id).focus();
		  }
		return error;
	}

function validateMinimumLength(control, length, errormessage){
	var error = "";
	document.getElementById(control.id).nextSibling.innerHTML="";
	if (control.value.length < length) {
		error = errormessage;
		document.getElementById(control.id).nextSibling.innerHTML=errormessage;
		document.getElementById(control.id).nextSibling.style.color="red"
		document.getElementById(control.id).focus();
	}
	return error
}
