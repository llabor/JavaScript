function validar() {
	var v_user = document.getElementById("user").value;
	var v_pass = document.getElementById("password").value;
	if((v_user == "root") && (v_pass == "root")) {
		var message = "Welcome " + v_user + "!";
	} else {
		var message = "Try again!";
	}
	alert(message);
}