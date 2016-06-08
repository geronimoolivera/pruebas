var funcionReloj;
function iniciarReloj(){
	var reloj = new Date(),
	horas = reloj.getHours(),
	minutos = reloj.getMinutes(),
	segundos = reloj.getSeconds();

	if(horas<10){
		horas = "0"+horas;
	}
	if(minutos<10){
		minutos = "0"+minutos;
	}
	if(segundos<10){
		segundos = "0"+segundos;
	}
	document.getElementById('miReloj').innerHTML=horas+":"+minutos+":"+segundos;
	functionReloj = setTimeout(iniciarReloj,1000);
}
function pararReloj(){
	clearInterval(functionReloj);
}