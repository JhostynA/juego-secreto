let numeroRamdon = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);
    
    if(numeroDeUsuario === numeroRamdon){
        manejoDeElementos('p', `Felicidades has acertado, lo hicistes en ${intentos} ${(intentos == 1) ? "vez" : "veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroRamdon){
            manejoDeElementos('p', "El numero secreto es menor")
        }else{
            manejoDeElementos('p', "El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
} 

function manejoDeElementos (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = (texto);
}

function generarNumeroSecreto (){
    let numeroRamdon =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroRamdon);
    console.log(listaNumeroSorteado);

    if(listaNumeroSorteado.length == numeroMaximo){
        manejoDeElementos('p', 'Ya se an sorteados todos los elementos posibles');
    }else{

        if(listaNumeroSorteado.includes(numeroRamdon)){
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteado.push(numeroRamdon);
            return numeroRamdon;
        }
    }

    
}

function limpiarCaja(){
    document.querySelector('#numeroUsuario').value = '';
}

function parametrosIniciales(){
    manejoDeElementos('h1', "Bienvenido al juego");
    manejoDeElementos('p', `selecciona un numero del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroRamdon = generarNumeroSecreto();
}

function reiniciarJuego(){
    limpiarCaja();
    parametrosIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}


parametrosIniciales();

/* //EJERCICIO

function saludar (){
    console.log("Hola, Mundo");
}
//saludar();

function saludar (nombre){
    console.log(`Hola, ${nombre}`);
}
//saludar("Jhostyn");

function numeroDoble(numero){
    resultado = numero * numero;
    console.log(`${resultado}`);
    //return;
}
//numeroDoble(8);

function promedio(num1, num2, num3){
    return (num1+num2+num3)/3;
}
//let resultado = promedio(4,4,4);
//console.log(resultado);

function mayorNum(num1, num2){
    return num1 > num2 ? num1 : num2;
}
//let resultado = mayorNum(8,10);
//console.log(resultado);

function doble(num){
    return num * num;
}
//let resultado = doble(5);
//console.log(resultado); */
/* 
let resultado = 0;
function calcularIMC(peso,altura){
    return resultado = peso/(altura*altura);
    
}
calcularIMC(67,1.70);
console.log(resultado);  


/* function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
}
// Ejemplo de uso
let numero = 2;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`); 


function calulaFactoraial(num){
    if(num == 1 || num == 0){
     return 1;
    }else{
     return num * calulaFactoraial(num - 1);
    }
 }
 let num = 3
 let respuesta = calulaFactoraial(num);
 console.log(respuesta); 

function sumaF(num){
    if(num == 1){
        return 1;
    }else if(num == 0){
        return 0;
    }else{
        return num + sumaF(num - 1);
    }
}
let num = 4;
let respuesta = sumaF(num);
console.log(respuesta); 
  
var saldo = 0;
function dolarASoles(dolar){
    return saldo = dolar * 3.18;
}
dolarASoles(5);
console.log(saldo) 

var area = 0;
var perimetro = 0;
function calcularAreaPerimetro(altura,ancho){
    area = altura * ancho;
    perimetro = (altura*altura) + (ancho * ancho);
    return area;
    return perimetro;
}
calcularAreaPerimetro(5,8);
console.log(area, perimetro); 

let pi = 3.14;
var area =0;
var perimetro = 0;
function calcularAreaPerimetroCirculo(radio){
    area = pi * (radio * radio);
    perimetro = 2 * pi * radio;
    return area, perimetro;
}
calcularAreaPerimetroCirculo(3);
console.log(area,perimetro);

let multiplicador = 1;
let resultado = 0;
function tablaDeMultiplicar(numero){
    while(multiplicador < 13){
        resultado = numero * multiplicador;
        console.log(resultado);
        multiplicador ++;
    }
}
tablaDeMultiplicar(1); 

let respuesta = 0;
function forN(num){
    for(var i = 1; i < 13; i++){
        respuesta = num * i;
        console.log(respuesta);
    }
}
forN(5);
*/


/* 
parametrosIniciales(); */
