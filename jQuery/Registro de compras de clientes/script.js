$(document).ready(function(){
	var clientes = [];
	$("#boton1").click(function(){
		registrarCliente();
		$(document).trigger("descuento");
	});
	$(document).on("descuento", function(event, param1, param2){
		var totalCompra = parseFloat($("#cjtxt3").val());
		var nombre = $("#cjtxt2").val();
		if(totalCompra>50000){
			alert("El cliente "+nombre+" gano un bono de 5.000 pesos.");
		}
		limpiarCampos();
		listarClientes();
	});
	function registrarCliente(){
		var id=$("#cjtxt1").val();
		var nombre=$("#cjtxt2").val();
		var totalCompra=parseFloat($("#cjtxt3").val());
		var cliente = {
			id:id,
			nombre:nombre,
			totalCompra:totalCompra,
		}
		clientes.push(cliente);
		alert("Cliente Registrado.");
	}
	function listarClientes(){
		var lista = "<h1>Clientes</h1><br>";
		var id=$("#cjtxt1").val();
		var nombre=$("#cjtxt2").val();
		var totalCompra=parseFloat($("#cjtxt3").val());
		//Si no se ha registrado pero los valores estan en los input igual sera tomado.

		for(var i=0;i<clientes.length;i++){
			lista += "<b>ID: </b>"+clientes[i].id+" - Nombre: "+clientes[i].nombre+" - Total de Compra: $"+clientes[i].totalCompra+".<br>";
		}
		$("#clientes").html(lista);
	}
	function limpiarCampos(){
		$("#cjtxt1").val("");
		$("#cjtxt2").val("");
		$("#cjtxt3").val("");
	}
});