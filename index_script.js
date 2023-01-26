// Programa que pida dos numeros y que nos diga cual es el menor, cual es el mayor y si son iguales

function mayor() {
    var primerNum = document.querySelector("#numero1").value;
    var primerNum = parseInt(primerNum);
    var segundoNum = document.querySelector("#numero2").value;
    var segundoNum = parseInt(segundoNum);

    

    if (primerNum > segundoNum) {
        document.querySelector("#resultado").innerHTML = "El mayor de los dos numeros es el: " + primerNum;
    } else {
        document.querySelector("#resultado").innerHTML = "El mayor de los dos numeros es el: " + segundoNum;
    }
}