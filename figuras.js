// Codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " +ladoCuadrado+ "cm");

function perimetroCuadrado(lado){
    return lado*4;
}
//console.log("El perimetro del cuadrado es: " +perimetroCuadrado+ "cm");

//const areaCuadrado = ladoCuadrado * ladoCuadrado ;
function areaCuadrado(lado){
    return lado*lado;
}
//console.log("El area del cuadrado es: " +areaCuadrado+ "cm^2");
console.groupEnd();

// Codigo del triangulo
console.group("Triangulos")

/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4; 
const alturaTriangulo = 5.5;
console.log(
    "Los lados del triangulo miden: "
    +ladoTriangulo1
    + "cm, " 
    +ladoTriangulo2
    + "cm y " 
    +baseTriangulo
    + "cm"
);

console.log("La altura del triangulo es de: " +alturaTriangulo+ "cm");
*/

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
//console.log("El perimetro del triangulo es de: " +perimetroTriangulo+ "cm");

//const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
function areaTriangulo(base, altura){
    return (base*altura)/2;
}
//console.log("El area del triangulo es de: " +areaTriangulo+ "cm^2");
console.groupEnd();

//codigo del circulo
console.group("Circulos");

//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es de: " +radioCirculo+ "cm");

//Diametro
//const diametroCirculo = radioCirculo*2;
function diametroCirculo(radio){
    return radio*2;
}
//console.log("El diametro del circulo es de: " +diametroCirculo+ "cm");

//PI
const PI = Math.PI;
//console.log("PI es: " +PI);

//Circunferencia
//const perimetroCirculo = diametroCirculo*PI;
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro*PI;
}
//console.log("El perimetro del circulo es de: "+perimetroCirculo+ "cm");

//Area
//const areaCirculo = (radioCirculo*radioCirculo)*PI;
function areaCirculo(radio){
    return (radio*radio)*PI;
}
//console.log("El area del circulo es de: " +areaCirculo+ "cm^2");

console.groupEnd();

// Aqui interactuamos con HTML
function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}