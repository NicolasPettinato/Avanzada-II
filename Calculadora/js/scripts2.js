function init(){
document.getElementById("n1").addEventListener("click",n1);
document.getElementById("n2").addEventListener("click",n2);
document.getElementById("n3").addEventListener("click",n3);
document.getElementById("n4").addEventListener("click",n4);
document.getElementById("n5").addEventListener("click",n5);
document.getElementById("n6").addEventListener("click",n6);
document.getElementById("n7").addEventListener("click",n7);
document.getElementById("n8").addEventListener("click",n8);
document.getElementById("n9").addEventListener("click",n9);
document.getElementById("n0").addEventListener("click",n0);
document.getElementById("suma").addEventListener("click",suma);
document.getElementById("resta").addEventListener("click",resta);
document.getElementById("division").addEventListener("click",division);
document.getElementById("multiplicacion").addEventListener("click",multiplicacion);
document.getElementById("igual").addEventListener("click",igual);
document.getElementById("decimal").addEventListener("click",decimal);
}

function n1() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n1").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n2() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n2").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n3() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n3").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n4() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n4").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n5() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n5").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n6() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n6").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n7() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n7").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n8() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n8").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n9() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n9").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n0() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n0").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}

function decimal() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("decimal").innerHTML;
	document.getElementById('resultado').innerHTML = actual + "."
}

function suma() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("suma").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}

function resta() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("resta").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}

function division() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("division").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}

function multiplicacion() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("multiplicacion").innerHTML;
	document.getElementById('resultado').innerHTML = actual +  sumado
}

function igual() {
	let actual = document.getElementById('resultado').innerHTML;
	let suma = actual.indexOf("+");
	let resta = actual.indexOf("-");
	let div = actual.indexOf("÷");
	let mult = actual.indexOf("*");
	if (suma !== -1) {
		arr = actual.split("+");
		a = parseFloat(arr[0]);
		b = parseFloat(arr[1]);
		res = a + b;
		document.getElementById("resultado").innerHTML = res;
	} else if (resta !== -1) {
		arr = actual.split("-");
		a = parseFloat(arr[0]);
		b = parseFloat(arr[1]);
		res = a - b;
		document.getElementById("resultado").innerHTML = res;
		
	} else if (div !== -1) {
		arr = actual.split("÷",2);
		a = parseFloat(arr[0]);
		b = parseFloat(arr[1]);
		res = a / b;
		document.getElementById("resultado").innerHTML = res;
		
	} else if (mult !== -1) {
		arr = actual.split("*",2);
		a = parseFloat(arr[0]);
		b = parseFloat(arr[1]);
		res = a * b;
		document.getElementById("resultado").innerHTML = res;
		
	}
}