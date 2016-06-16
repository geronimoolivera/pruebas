$(document).ready(function() {
        $("#boton1").click(function() {
            var nombre = $("#nombre").val();
            var apellido = $("#apellido").val();
            alert("Hola " + nombre + " " + apellido + " como estas?");
            $("#nombre").val("");
            $("#apellido").val("");
        });
    });