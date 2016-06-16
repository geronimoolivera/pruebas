function cambiarPagina(page){
	$.mobile.changePage("#"+page);
};

$(document).ready(function(){
	$("#boton1").click(function(){
	$.mobile.loading("show");
	setTimeout(function(){
		$.mobile.loading("hide");
		var usuario = $("#usuario").val();
		var mensaje = "Bienvenido " + usuario + " al sistema!";
		$("#mensaje").html(mensaje);
		$.mobile.changePage("#paginaPerfil");
	}, 4000);
});
});