/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function numeroUno(){
	var numeroUno;
	numeroUno=parseInt(document.getElementById("txtIdNumeroUno").value);
	return numeroUno;
}	
function numeroDos(){
	var numeroDos;
	numeroDos=parseInt(document.getElementById("txtIdNumeroDos").value);
	return numeroDos;
}
function sumar()
{	
	var suma;
	var mensaje;
	suma=numeroUno() + numeroDos();
	mensaje="la Suma es "+suma
	alert(mensaje);	
}

function restar()
{
	var resta;
	var mensaje;
	resta=numeroUno() - numeroDos();
	mensaje="la Resta es "+resta
	alert(mensaje);	
}

function multiplicar()
{ 
	var multiplicacion;
	var mensaje;
	multiplicacion=numeroUno() * numeroDos();
	mensaje="la Multiplicacion es "+multiplicacion
	alert(mensaje);	
}

function dividir()
{
	var dividir;
	var mensaje;
	dividir=numeroUno() / numeroDos();
	mensaje="la Division es "+dividir
	alert(mensaje);	
}

