$(document).ready(function(){
			var persona = {
				nombre:null,
				edad:null,
				estatura:null,
				peso:null,
				
				init:function(propiedades){
					persona.propiedades = propiedades;
				},
				leerPropiedades: function(){
					return persona.propiedades;
				}
			};

			$("#boton1").click(function(){
				var nombre = $("#cjtxt1").val();
				var edad = $("#cjtxt2").val();
				var estatura = $("#cjtxt3").val();
				var peso = $("#cjtxt4").val();

				var propiedades = {
					nombre:nombre,
					edad:edad,
					estatura:estatura,
					peso:peso,
				}

				persona.init(propiedades);
				limpiarCampos();

				alert("Persona Guardada.");
			});
			$("#boton2").click(function(){
				var mensaje = "<h1>Persona</h1>";
				var propiedades = persona.leerPropiedades();
				mensaje += "Nombre: "+propiedades.nombre+"<br>";
				mensaje += "Edad: "+propiedades.edad+"<br>";
				mensaje += "Estatura: "+propiedades.estatura+"<br>";
				mensaje += "Peso: "+propiedades.peso+"<br>";
				console.log(propiedades);

				$("#mensaje1").html(mensaje);
			});
				$("#boton3").click(function(){
					var mensaje = "<h1>IMC</h1>";
					var propiedades = persona.leerPropiedades();
					var estatura = propiedades.estatura;
					var peso = propiedades.peso;
					var imc = peso/Math.pow(estatura,2);
					var imcFix = imc.toFixed(2);
					var estado="";

					if(imc<18.5){
						estado = "Demasiado delgado(a).";
					}else if(imc>=18.5 && imc<25){
						estado = "Normal."
					} else if(imc>=25 && imc<30){
						estado = "Ligero Sobrepeso."
					} else {
						estado = "Obesidad."
					}
					mensaje += "El indice de Masa Corporal de:"+propiedades.nombres+" es: "+imcFix+" por tal razon su estado es: <b>" +estado+"</b><br>";
				$("#mensaje2").html(mensaje);
				});

				function limpiarCampos(){
					$("#cjtxt1").val("");
					$("#cjtxt2").val("");
					$("#cjtxt3").val("");
					$("#cjtxt4").val("");
				}
});