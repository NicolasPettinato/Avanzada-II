let operandoa;
let operandob;
let operacion;

function init() {

    //variables
    let resultado = document.getElementById("resultado");
    let suma = document.getElementById("suma");
    let resta = document.getElementById("resta");
    let multiplicacion = document.getElementById("multiplicacion");
    let division = document.getElementById("division");
    let igual = document.getElementById("igual");
    let reset = document.getElementById("reset");
    
    let decimal = document.getElementById("decimal");
    let n0 = document.getElementById("n0");
    let n1 = document.getElementById("n1");
    let n2 = document.getElementById("n2");
    let n3 = document.getElementById("n3");
    let n4 = document.getElementById("n4");
    let n5 = document.getElementById("n5");
    let n6 = document.getElementById("n6");
    let n7 = document.getElementById("n7");
    let n8 = document.getElementById("n8");
    let n9 = document.getElementById("n9");

    //eventos
    decimal.onclick = function(e) {
        document.getElementById("resultado").innerHTML = document.getElementById("resultado").innerHTML + ".";
    }
    n0.onclick = function(e) {
        document.getElementById("resultado").innerHTML = document.getElementById("resultado").innerHTML + "0";
    }
    n1.onclick = function(e) {
        document.getElementById("resultado").innerHTML = document.getElementById("resultado").innerHTML + "1";
    }
    n2.onclick = function(e) {
        document.getElementById("resultado").innerHTML = document.getElementById("resultado").innerHTML + "2";
    }
    n3.onclick = function(e) {
        document.getElementById("resultado").innerHTML = document.getElementById("resultado").innerHTML + "3";
    }
    n4.onclick = function(e) {
        document.getElementById("resultado").innerHTML = document.getElementById("resultado").innerHTML + "4";
    }
    n5.onclick = function(e) {
        document.getElementById("resultado").innerHTML = document.getElementById("resultado").innerHTML + "5";
    }
    n6.onclick = function(e) {
        document.getElementById("resultado").innerHTML = document.getElementById("resultado").innerHTML + "6";
    }
    n7.onclick = function(e) {
        document.getElementById("resultado").innerHTML = document.getElementById("resultado").innerHTML + "7";
    }
    n8.onclick = function(e) {
        document.getElementById("resultado").innerHTML = document.getElementById("resultado").innerHTML + "8";
    }
    n9.onclick = function(e) {
        document.getElementById("resultado").innerHTML = document.getElementById("resultado").innerHTML + "9";
    }
   
    reset.onclick = function(e) {
        resetear();
    }

    suma.onclick = function(e) {
        operandoa = document.getElementById("resultado").innerHTML;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e) {
        operandoa = document.getElementById("resultado").innerHTML;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e) {
        operandoa = document.getElementById("resultado").innerHTML;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e) {
        operandoa = document.getElementById("resultado").innerHTML;
        operacion = "/";
        limpiar();
    }

    igual.onclick = function(e){
        operandob = document.getElementById("resultado").innerHTML;
        resolver();
    }   
}


function limpiar(){
    document.getElementById("resultado").innerHTML = "";
}

function resetear(){
    document.getElementById("resultado").innerHTML = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver(){ 
    let res = "";
    if (operacion == "+"){
        res = parseFloat(operandoa) + parseFloat(operandob);
    }else if (operacion == "-"){
        res = parseFloat(operandoa) - parseFloat(operandob);
    }else if (operacion == "/"){
        res = parseFloat(operandoa) / parseFloat(operandob);
    }else if (operacion == "*"){
        res = parseFloat(operandoa) * parseFloat(operandob);
    }
    resetear();
    document.getElementById("resultado").innerHTML = res;
}