function cambiarPagina(page) {

        $.mobile.changePage("#" + page, {
            transition: "none"
        });
    }
    $(document).ready(function() {
        var mapa = null;
      var LatLngInicial = new google.maps.LatLng(-34.891022, -56.1946607); 
        var marcadores = [];
        $("#btnVerMapa").click(function() {
            cambiarPagina("paginaMapa");
             var opciones = {            
                zoom: 15,
                center: LatLngInicial,
                mapTypeId: google.maps.MapTypeId.ROADMAP        
            };
            mapa = new google.maps.Map(document.getElementById("divMapa"), opciones);

                  var marcador = new google.maps.Marker({            
                position: LatLngInicial,
                            map: mapa,
                            title: "Globant Montevideo"        
            });    
            marcadores[0]=marcador;
        });
        $("#btnAgregarMarcador").click(function() {
            var LatLng = new google.maps.LatLng(-34.8906525, -56.1917208);
            var marcadorNuevo = new google.maps.Marker({            
                position: LatLng,
                            map: mapa,
                            title: "Rotiseria Meu Amigo"        
            });   
             marcadores[1]=marcadorNuevo;
        });
        $("#btnEliminarMarcador").click(function() {
            marcadores[1].setMap(null);
        });
    })