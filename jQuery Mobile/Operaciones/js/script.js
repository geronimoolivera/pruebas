function cambiarPagina(page){
	$.mobile.changePage("#"+page);
};

$(document).ready(function(){
	$("#boton1").click(function(){
		var numero1S = parseFloat($("#numero1S").val());
		var numero2S = parseFloat($("#numero2S").val());
		var resultado = numero1S+numero2S;
		alert("El resultado de la suma es: "+resultado);

		$("#numero1S").val("");
		$("#numero2S").val("");
	});
	$("#boton2").click(function(){
		var numero1R = parseFloat($("#numero1R").val());
		var numero2R = parseFloat($("#numero2R").val());
		var resultado = numero1R-numero2R;
		alert("El resultado de la resta es: "+resultado);

		$("#numero1R").val("");
		$("#numero2R").val("");
	});
	$("#boton3").click(function(){
		var numero1M = parseFloat($("#numero1M").val());
		var numero2M = parseFloat($("#numero2M").val());
		var resultado = numero1M*numero2M;
		alert("El resultado de la multiplicación es: "+resultado);

		$("#numero1M").val("");
		$("#numero2M").val("");
	});
	$("#boton4").click(function(){
		var numero1D = parseFloat($("#numero1D").val());
		var numero2D = parseFloat($("#numero2D").val());
		var resultado = numero1D/numero2D;
		alert("El resultado de la división es: "+resultado);

		$("#numero1D").val("");
		$("#numero2D").val("");
	});
});