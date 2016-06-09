function sumar(){
	var num1 = parseFloat(document.getElementById('num1').value);
	var num2 = parseFloat(document.getElementById('num2').value);

	if (validar(num1, num2)) {
		var res = num1 + num2;
		alert("La suma es: " + res);
	} else {
		alert("Uno o ambos datos no son numeros.");
	}
}
function restar(){
	var num1 = parseFloat(document.getElementById('num1').value);
	var num2 = parseFloat(document.getElementById('num2').value);

	if (validar(num1, num2)) {
		var res = num1 - num2;
		alert("La resta es: " + res);
	} else {
		alert("Uno o ambos datos no son numeros.");
	}
}
function multiplicar(){
	var num1 = parseFloat(document.getElementById('num1').value);
	var num2 = parseFloat(document.getElementById('num2').value);

	if (validar(num1, num2)) {
		var res = num1 * num2;
		alert("La multiplicacion es: " + res);
	} else {
		alert("Uno o ambos datos no son numeros.");
	}
}
function dividir(){
	var num1 = parseFloat(document.getElementById('num1').value);
	var num2 = parseFloat(document.getElementById('num2').value);

	if (validar(num1, num2)){
		var res = num1 / num2;

		if (res == Infinity) {
			alert("Division entre cero!");
			document.getElementById("res").value= "";
		} else {
			alert("La division es: " + res);
		}
	} else {
	alert("Uno o ambos datos no son numeros.");
	}
}
function validar(num1, num2) {
	if (isNaN(num1) || isNaN(num2)) {
		return false;
	} else {
		return true;
	}
}
function tabla() {
	var tabla = "";
	var num = parseFloat(document.getElementById("num").value);

	if (isNaN(num) == false) {
		tabla += "Tabla del " + num + "<br>";
		for (var i = 0; i <=10; i++) {
			tabla += num + " x " + i + " = " + num * i + "<br>";
		}
		document.getElementById("tabla").innerHTML = tabla;
	} else {
		alert("El dato ingresado no es un numero.");
	}
}
