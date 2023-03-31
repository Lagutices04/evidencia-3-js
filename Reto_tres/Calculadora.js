
let calculadora = prompt(" Ingrese el tipo de operación que desea realizar: +, -, *, /");
switch (calculadora) {
    case "+":
        var n1= prompt("Ingrese el primer numaro");
        var n2= prompt("Ingrese el segundo numaro");
        respuesta=parseInt(n1)+parseInt(n2);
        break;
    case "-":
        var n1= prompt("Ingrese el primer numaro");
        var n2= prompt("Ingrese el segundo numaro");
        respuesta=parseInt(n1)-parseInt(n2);
        break;
    case "*":
        var n1= prompt("Ingrese el primer numaro");
        var n2= prompt("Ingrese el segundo numaro");
        respuesta=parseInt(n1)*parseInt(n2);
        break;
    case "/":
        var n1= prompt("Ingrese el primer numaro");
        var n2= prompt("Ingrese el segundo numaro");
        respuesta=parseInt(n1)/parseInt(n2);
        break;
    default:
        alert("esto no es una operación valida");
        break;
}
