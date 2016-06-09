function calcularSubtotales () {
	var cantidad1 = parseInt(document.getElementById('cantidad1').value);
	var precio1 = parseInt(document.getElementById('precio1').value);
	var subtotal1 = precio1*cantidad1;
	document.getElementById('subtotal1').value=subtotal1;

	var cantidad2 = parseInt(document.getElementById('cantidad2').value);
	var precio2 = parseInt(document.getElementById('precio2').value);
	var subtotal2 = precio2*cantidad2;
	document.getElementById('subtotal2').value=subtotal2;

	var cantidad3 = parseInt(document.getElementById('cantidad3').value);
	var precio3 = parseInt(document.getElementById('precio3').value);
	var subtotal3 = precio3*cantidad3;
	document.getElementById('subtotal3').value=subtotal3;

	var cantidad4 = parseInt(document.getElementById('cantidad4').value);
	var precio4 = parseInt(document.getElementById('precio4').value);
	var subtotal4 = precio4*cantidad4;
	document.getElementById('subtotal4').value=subtotal4;
}
function calcularTotal() {
	var subtotal1 = parseInt(document.getElementById('subtotal1').value);
	var subtotal2 = parseInt(document.getElementById('subtotal2').value);
	var subtotal3 = parseInt(document.getElementById('subtotal3').value);
	var subtotal4 = parseInt(document.getElementById('subtotal4').value);
	var total = subtotal1+subtotal2+subtotal3+subtotal4;
	document.getElementById('totalCompra').value=total;
}

