function AgregarCookie(nombre,valor) {
	document.cookie= nombre+"="+valor;
}
function obtenerCookie(nombre){
	var name = nombre + "=";
	var ca = document.cookie.split(";");
	for (var i=0; i<ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==" ") c = c.substring(1);
		if (c.indexOf(name) != -1) {
			return c.substring(name.length, c.length);
		}	
	}
	return "";
}
function VerificarCookie(){
	var usuario = obtenerCookie("edad");
	if (usuario != "") {
		document.getElementById("mensaje").innerHTML = "Las cookies tienen almacenado el dato de 'edad' con el valor: "+usuario;
		console.log("Cookies del Sitio: "+document.cookie)
	} else {
		usuario = prompt("Por favor ingresa tu edad:","");
		if (usuario !="" && usuario != null){
			AgregarCookie("edad", usuario);
			console.log("Cookies del Sitio: "+document.cookie)
		}
	}
}