$(document).ready(function(){
	var arr = ["Carlos", "Juan", "Maria"];
	var objeto = {
		nombre: "Juan",
		apellido: "Perez",
		edad: "25"
	};
	var objeto2 = {
		nombre: "Carlos",
		apellido: "Ruiz",
		edad: "40"
	};
	$("#boton1").click(function(){
		var elementos = "Elementos del arreglo:<br>";
		var parrafo1 = $("#p1");

		$.each(arr, function(indice, valor){
			elementos += "Indice es: "+indice+" su valor es: "+valor+"<br>";
		});
		$(parrafo1).html(elementos);
	});
	$("#boton2").click(function(){
		var elementos = "Elementos del objeto:<br>";
		var parrafo2 = $("#p2");
		$.each(objeto, function(propiedad, valor){
			elementos += propiedad + " : " + valor + "<br>";
		});
		$(parrafo2).html(elementos);
	});
	$("#boton3").click(function(){
		var elementos = "";
		var parrafo3 = $("#p3");
		if ($.inArray("Maria", arr) !== -1) {
			$(parrafo3).html("Maria existe en el arreglo!");
		} else {
			$(parrafo3).html("Maria no existe en el arreglo!");
		}
	});
	$("#boton4").click(function(){
		var elementos = "Propiedades del objeto cambiadas:<br>";
		var parrafo4 = $("#p4");
		var objeto3 = $.extend(objeto, objeto2);
		$.each(objeto3, function(propiedad, valor){
			elementos += propiedad + " : " + valor + "<br>";
		});
		$(parrafo4).html(elementos);
	});
});