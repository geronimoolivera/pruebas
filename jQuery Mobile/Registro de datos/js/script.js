function cambiarPagina(page){
	switch(page){
	case "paginaRegistro":
	$.mobile.changePage("#"+page,{
		transition: "slidedown"
	});
	break;
	case "paginaConsulta":
	$("#codigoB").val("");
	$("#datos").html("");
	$.mobile.changePage("#"+page,{
		transition: "slideup"
	});
	break;
	case "paginaInicio":
	$.mobile.changePage("#"+page,{
		transition: "flip"
	});
	break;
}
}

$(document).ready(function(){
	var productos = [];

	$("#boton1").click(function(){
	var codigo = $("#codigo").val();
	var nombre = $("#nombre").val();
	var precio = $("#precio").val();

	var producto = {
		codigo: codigo,
		nombre: nombre,
		precio: precio,
	}
	productos.push(producto);
	console.log(producto);
	alert("Producto Registrado!");
	limpiarCampos();
});
	$("#boton2").click(function(){
		var codigoB = $("#codigoB").val();
		var datos = "Producto: <br>";
		for (var i=0;i<productos.length;i++){
			if (codigoB==productos[i].codigo){
				datos+= "Codigo: "+productos[i].codigo+"<br>";
				datos+= "Nombre: "+productos[i].nombre+"<br>";
				datos+= "Precio: "+productos[i].precio+"<br>";
				$("#datos").html(datos);
				break;
			}
		};
	});
});

function limpiarCampos(){
	$("#codigo").val("");
	$("#nombre").val("");
	$("#precio").val("");
}