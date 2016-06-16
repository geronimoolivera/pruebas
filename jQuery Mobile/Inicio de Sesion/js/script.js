function cambiarPagina(page){
	$.mobile.changePage("#"+page);
};

$(document).on("mobileinit", function(){
	$.mobile.loader.prototype.option.text = "Conectando...";
	$.mobile.loader.prototype.option.textVisible = true;
	$.mobile.loader.prototype.option.textonly = false;
	$.mobile.loader.prototype.option.theme = "a";
	$.mobile.loader.prototype.option.html = "";
});

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