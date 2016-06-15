var tiempoInicial = 120000;
var tiempo = new Date(tiempoInicial);
var interv;


function done(){
    alert("tiempor reached 00:00!");
}
$(function(){
    mostrarTiempo();
    $(".iniciar").on("click", function(){
    interv = setInterval(function(){
        tiempo = new Date(tiempo - 1000);
        if(tiempo<=0){
            done();
            clearInterval(interv);
        }
        mostrarTiempo();
    }, 1000);
    });
    $(".finalizar").on("click", function(){
        clearInterval(interv);
        tiempo = new Date(tiempoInicial);
        mostrarTiempo();
    });
});

function mostrarTiempo(){
    $(".tiempo").text(unaCifra(tiempo.getMinutes()) + ":" + unaCifra(tiempo.getSeconds()));
}

function unaCifra(t){
    t = t+"";
    if(t.length==1)
        return "0" + t;
    else
        return t;
}
