var lista = '{"alumnos":['+
'{"codigo":"001", "nombre":"Geronimo Olivera", "nota": 10},'+
'{"codigo":"002", "nombre":"Mauricio Priliac", "nota": 7},'+
'{"codigo":"003", "nombre":"Delfina Navarro", "nota": 4},'+
'{"codigo":"004", "nombre":"Belen Olivera", "nota": 7},'+
'{"codigo":"005", "nombre":"Facundo Priliac", "nota": 6},'+
'{"codigo":"006", "nombre":"Georgina Rocha", "nota": 10},'+
'{"codigo":"007", "nombre":"Albana Fernandez", "nota": 12},'+
'{"codigo":"008", "nombre":"Geremias Rocha", "nota": 9},'+
'{"codigo":"009", "nombre":"Serafin Olivera", "nota": 6},'+
'{"codigo":"010", "nombre":"Gerardo Baldivia", "nota": 5}'+']}';
var data = JSON.parse(lista);

function totalAlumnos(json) {
	var out = "Alumnos: <br>",
	i;
	for(i=0;i<json.alumnos.length;i++){
		out+="Codigo: "+json.alumnos[i].codigo+" - Nombre: "+json.alumnos[i].nombre+" - Nota: "+json.alumnos[i].nota+"<br>";
	}
	document.getElementById('alumnos').innerHTML = out;
}
function promNota(json) {
    var out = "Nota promedio entre todos los alumnos: <br>",
    prom = 0.0;
    for (i = 0; i < json.alumnos.length; i++) {
        var total = prom += json.alumnos[i].nota;
        var div = total/10;
    }
    document.getElementById("alumnos").innerHTML = out + div;
}
function menorNota(json) {
    var out = "El alumno con menor nota es: <br>",
    notaMenor = json.alumnos[0].nota1,
    pos = 0,
    aux = "";
    for (i = 0; i < json.alumnos.length; i++) {
    	if (json.alumnos[i].nota <= 4) {
    		notaMenor = json.alumnos[i].nota;
    		console.log(notaMenor); //Muestra la nota del Alumno
    		pos = i;
    		aux=aux+json.alumnos[pos].nombre+" con nota: "+ notaMenor +"<br>";
    	}
    }
    document.getElementById("alumnos").innerHTML = out + aux;
}
function mayorNota(json) {
	var out = "El alumno con mayor nota es: <br>",
	notaMayor = json.alumnos[0].nota1,
	pos = 0,
	aux = "";
	for (i = 0; i < json.alumnos.length; i++) {
		if (json.alumnos[i].nota >= 12) {
			notaMayor = json.alumnos[i].nota;
			console.log(notaMayor); //Muestra la nota del Alumno
			pos = i;
			aux=aux+json.alumnos[pos].nombre+" con nota: "+ notaMayor +"<br>";
		}
	}
	document.getElementById("alumnos").innerHTML = out + aux;
}