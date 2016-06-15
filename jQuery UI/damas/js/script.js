$('.azul, .rojo').draggable({ containment: "#juego", revert: 'invalid' });

$('td').droppable({
    drop: function(ev, ui) {
        var dropped = ui.draggable;
        var droppedOn = $(this);
        $(droppedOn).droppable("disable");
        $(dropped).parent().droppable("enable");
        $(dropped).detach().css({top: 0, left: 0}).appendTo(droppedOn);
    }
});   

$('td').not('td:empty').droppable("disable");

$('#deposito').droppable({
    tolerance: 'fit'
});
$(document).ready(function(){
  $("#deposito").show("shake", 4000);
  $("#textoDepo").delay(4000).show("fade", 3000);
});