var notas = new Array();

function registrarAlumno(id){
	var newAlumno;
	for(var i=0; i<localStorage.length;i++){
		var clave = localStorage.key(i);
		if(clave == id){
			newAlumno = $.parseJSON(localStorage.getItem(clave));
			$("#id").val(newAlumno.id);
			$("#nombre").val(newAlumno.nombre);
			$("#nota").val(newAlumno.nota);
		}
	}
}
/*
*A tener en cuenta:
*Si se tiene 3 alumnos y se borra el que tiene ID:2,
*Se debe registrar otro alumno con esa misma ID,
*Ya que sino el contador tomara la id "3" y remplazara el ID ya existente,
*Esto se debe a que el contador aumenta automaticamente tomando en cuenta el total de alumnos registrados (se puede modificar de forma manual).
*/
function listarAlumnos(){
	var table = "";
	var parrafo1 = $("#p1");

	table += '<table>';
	table += '<tr>';
	table += '<th>ID</th>';
	table += '<th>Nombre</th>';
	table += '<th>Nota</th>';
	table += '<th>Editar</th>';
	table += '<th>Eliminar</th>';
	table += '</tr>';
	for(var i=0; i<localStorage.length;i++){
		var clave = localStorage.key(i);
		var newAlumno = $.parseJSON(localStorage.getItem(clave));
		table += '<tr>';
		table += '<td>'+newAlumno.id+'</td>';
		table += '<td>'+newAlumno.nombre+'</td>';
		table += '<td>'+newAlumno.nota+'</td>';
		table += '<td><button class="editores" onclick="editarNota(\''+newAlumno.id+'\');">Editar</button></td>'; //usa la funcion editarNota
		table += '<td><button class="editores" onclick="eliminarAlumno(\''+newAlumno.id+'\');">Eliminar</button></td>'; //usa la funcion eliminarAlumno
		table += '</tr>';
		var notaValue = newAlumno.nota;
		notas[notas.length]=notaValue; //Toma todos los valores de las notas de la tabla y los guerda en el array.
	}
	
	table +='</table>';
	$(parrafo1).html(table);
	console.log(notas); //Muestra los actuales valores del array "notas".
}
function eliminarAlumno(id){
	localStorage.removeItem(id);
	listarAlumnos();
}

$(document).ready(function(){
	var contador;
	if(localStorage.length>0){
		contador = localStorage.length+1;
	} else {
		contador = 1;
	}
	$("#id").val(contador);
	$("#boton1").click(function(){ //Al hacer click en "Registrar", toma los valores de los input y los registra en su debido lugar en el localStorage.
		var id = $("#id").val();
		var nombre = $("#nombre").val();
		var notas = $("#nota").val();

		var alumno = {
			id:id,
			nombre:nombre,
			nota:notas
		};
		
		localStorage.setItem(id,JSON.stringify(alumno));
		contador = localStorage.length+1;
		console.log(notas);
		listarAlumnos();
		restablecer;
	});

$("#boton2").click(function(){ //Al hacer click en "Limpiar" llama a la funcion restablecer: limpia los campos del formulario.
	restablecer(9);
});

function restablecer(){
	$("#id").val(contador);
	$("#nombre").val("");
	$("#nota").val("");
}
listarAlumnos();
$("nota").val();
});

function editarNota(id) {
	var newAlumno;
	for (var i = 0; i < localStorage.length; i++) {
	var clave = localStorage.key(i);
		if (clave == id) {
		newAlumno = $.parseJSON(localStorage.getItem(clave));
		$("#id").val(newAlumno.id);
		$("#nombre").val(newAlumno.nombre);
		$("#nota").val(newAlumno.nota);
		}
	}
}

$("#boton3").click(function(){ //Al hacer click en "Promediar notas" llama a la funcion notaPromedio: suma y divide las notas de todos los estudiantes.
	notaPromedio();
});
function notaPromedio(){
    var sum = 0;
    notas.forEach(
        function addNumber(value){ sum += value/notas.length;}
        );
    alert("La nota promedio es: "+sum.toFixed(1)); //Hace redondeo en el primer decimal
};

$("#boton4").click(function(){ //Al hacer click en "Menor nota" llama a la funcion menorNota: muestra la menor nota entre todos los estudiantes.
	menorNota();
});
function menorNota(){
    var b = notas.sort(CompareForSort);
    alert("El alumno con menor nota tiene: "+b[0]);
};

$("#boton5").click(function(){ //Al hacer click en "Mayor nota" llama a la funcion menorNota: muestra la mayor nota entre todos los estudiantes.
	mayorNota();
});
function mayorNota(){
    var b = notas.sort(CompareForSort);
    alert("El alumno con mayor nota tiene: "+b.pop());
};

function CompareForSort(first, second) //Compara y ordena todos los datos de menor a mayor.
{
    if (first == second)
        return 0;
    if (first < second)
        return -1;
    else
        return 1; 
};