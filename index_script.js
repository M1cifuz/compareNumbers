// Programa que pida dos numeros y que nos diga cual es el menor, cual es el mayor y si son iguales

function mayor() {
    var primerNum = document.getElementById("numero1").value;
    var segundoNum = document.getElementById("numero2").value;

    if (primerNum > segundoNum) {
        document.getElementById("resultado").innerHTML = "El mayor de los dos numeros es el: " + primerNum;
    } else {
        document.getElementById("resultado").innerHTML = "El mayor de los dos numeros es el: " + segundoNum;
    }
}