var puntos = []; //Lista de Hoteles


function cambiarPagina(page) {
        $.mobile.changePage("#" + page, {
            transition: "none"
        });
    }
    $(document).ready(function() {
        var marcadorRegistro;
        var mapaRegistro;
        var latlngInicial = new google.maps.LatLng(-34.891022, -56.1946607); 
        var latitudPunto;
        var longitudPunto;
        $(".btnVolver").click(function() {
            cambiarPagina("paginaPrincipal");
        });
        $("#btnVerHoteles").click(function() {
	cambiarPagina("paginaBusqueda");
    listarHoteles();
    mostrarMapa();
});
        $("#btnVerHoteles").click(function() {
	cambiarPagina("paginaBusqueda");
    listarHoteles();
});
        $("#btnRegistroPunto").click(function() {
            cambiarPagina("paginaRegistrarPunto");
                mostrarMapaRegistro();
        });
        $("#btnBuscarPunto").click(function() {
            convertirDireccion();
        });
        $("#btnGuardarPunto").click(function() {
        	registrarHotel();
            alert("Punto Registrado");
            console.log(puntos);
            limpiarCampos();
        });
        function registrarHotel(){
        	var punto = {            
                nombre: $("#nombre").val(),
                direccion: $("#direccion").val(),
                telefono: $("#telefono").val(),
                estrellas: $("#estrellas").val(),
                latitud: latitudPunto,
                longitud: longitudPunto        
            }

            puntos.push(punto);
        }
        function mostrarMapaRegistro() {          
            var opciones = {            
                zoom: 10,
                center: latlngInicial,
                mapTypeId: google.maps.MapTypeId.ROADMAP        
            };
             mapaRegistro = new google.maps.Map(document.getElementById("divMapaRegistro"), opciones);   
             marcadorRegistro = new google.maps.Marker({            
                position: latlngInicial,
                map: mapaRegistro,
                draggable: true,
                title: "Mi punto!!"        
            });
            google.maps.event.addListener(marcadorRegistro, 'dragend', function(event) {
                latitudPunto = event.latLng.lat();
                longitudPunto = event.latLng.lng();
            });
            alert("Debe arrastrar el marcador para elegir la ubicacion")                       
        }
        function mostrarMapa() {
            var opciones = {            
                zoom: 7,
                center: latlngInicial,
                mapTypeId: google.maps.MapTypeId.ROADMAP        
            };           
            var mapa = new google.maps.Map(document.getElementById("divMapa"), opciones);    
                  for (var i = 0; i < puntos.length; i++) {
            var latlngnN = new google.maps.LatLng(puntos[i].latitud, puntos[i].longitud);
            var marcador = new google.maps.Marker({            
                    position: latlngnN,
                    map: mapa,
                    title: puntos[i].nombre        
                }); 
            }               
        }
        function limpiarCampos() {
        	$("#nombre").val("")
            $("#direccion").val("")
            $("#telefono").val("")
            $("#estrellas").val("")
            marcadorRegistro.setPosition(latlngInicial);
            mapaRegistro.setCenter(latlngInicial);
        }
        function convertirDireccion(){
        	var direccion = $("#direccion").val();
        	var geocoder = new google.maps.Geocoder();
        	var marcador;
        	$.mobile.loading("show", {
        		text: "Buscando punto",
        		textVisible: true,
        		theme: "a",
        		textonly: false,
        	});
        	geocoder.geocode({
        		"address": direccion
        	}, function(resultados, estado){
        		if (estado==google.maps.GeocoderStatus.OK){
        			mapaRegistro.setCenter(resultados[0].geometry.location);
        			$.mobile.loading("hide");
        		} else{
        			$.mobile.loading("hide");
        			alert("Error - En el servicio"+estado);
        		}
        	});
        };
});

function listarHoteles(){
	var table = "";
	var form = $("#cuerpo");
	for(var i=0; i<puntos.length;i++){
		table += '<div data-role="collapsible">';
		table += '<h3>'+puntos[i].nombre+'</h3>';
		table += '<span>Direccion: '+puntos[i].direccion+'<br>';
		table += 'Telefono: '+puntos[i].telefono+'<br>';
		table += 'Estrellas: '+puntos[i].estrellas+'</span></div>';	
	}
	$(form).html(table).enhanceWithin();
}