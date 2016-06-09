var codigo=new Array();
var nombres=new Array();
var notas=new Array();

function newTable(){ 

    var codigoValue = parseInt(document.getElementById('codigo').value);
    var nombreValue = document.getElementById('nombre').value;
    var notaValue = parseInt(document.getElementById('nota').value); //Obtiene los datos ingresados en los input con las id definidas.
    codigo[codigo.length]=codigoValue;
    nombres[nombres.length]=nombreValue;
    notas[notas.length]=notaValue; //Agrega los datos de los input a las arrays correspondientes.

for (var i = 0; i < 1; i++){
    var tr = document.createElement('tr'),
    td1 = document.createElement('td'),
    td2 = document.createElement('td'),
    td3 = document.createElement('td'),
    celda1 = document.createTextNode(codigoValue),
    celda2 = document.createTextNode(nombreValue),
    celda3 = document.createTextNode(notaValue);

    td1.appendChild(celda1);
    td2.appendChild(celda2);
    td3.appendChild(celda3);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    document.getElementById("tabla").appendChild(tr); //Agrega los nodos correspondientes a la tabla de Alumnos.
}
}

function notaPromedio(){ // Suma todos los datos del array "notas" y luego lo divide entre la cantidad de datos sumados.
    var sum = 0;
    notas.forEach(
        function addNumber(value){ sum += value/notas.length;}
        );
    alert("La nota promedio es: "+sum.toFixed(1)); //Hace redondeo en el primer decimal
}

function menorNota(){ //Usa los datos de la array "notas" e imprime el primer dato (el menor valor).
    var b = notas.sort(CompareForSort);
    alert("El alumno con menor nota tiene: "+b[0]);
}

function mayorNota(){ //Usa los datos de la array "notas" e imprime el ultimo dato (el mayor valor).
    var b = notas.sort(CompareForSort);
    alert("El alumno con mayor nota tiene: "+b.pop());
}

function CompareForSort(first, second) //Compara y ordena todos los datos de menor a mayor.
{
    if (first == second)
        return 0;
    if (first < second)
        return -1;
    else
        return 1; 
}