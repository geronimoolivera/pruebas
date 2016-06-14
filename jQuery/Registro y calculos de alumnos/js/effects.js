//Cambia el background del input al seleccionarlo.
$("input[name='nombre'], input[name='nota'], input[name='id']").focus(function(){
	$(this).toggleClass('highlight');
}).blur(function(){
	$(this).toggleClass('highlight');
});

//Aparece la ayuda para id.
$("input[name='id']").focus(function(){
	$("#ayuda-id").fadeIn(0);
}).blur(function(){
	$("#ayuda-id").fadeOut(0);
});
//Aparece la ayuda para nombre.
$("input[name='nombre']").focus(function(){
	$("#ayuda-nombre").fadeIn(0);
}).blur(function(){
	$("#ayuda-nombre").fadeOut(0);
});
//Aparece la ayuda para nota.
$("input[name='nota']").focus(function(){
	$("#ayuda-nota").fadeIn(0);
}).blur(function(){
	$("#ayuda-nota").fadeOut(0);
});
//Muestra los botones de calculos
$("#boton6").click(function() {
  $("#calculos").fadeIn(0);
  $("#boton6").fadeOut(0);
  $("#boton7").fadeIn(0);
});
//Esconde los botones de calculos
$("#boton7").click(function() {
  $("#calculos").fadeOut(0);
  $("#boton7").fadeOut(0);
  $("#boton6").fadeIn(0);
});