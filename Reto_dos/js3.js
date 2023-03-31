/*3. Escriba un programa que lea tres números enteros positivos y que 
calcule e improma en pantalla el menor y el mayor de ellos.*/
let num1, num2, num3;
num1= prompt(" Ingrese el primer número ");
num2= prompt(" Ingrese el segundo número "); 
num3= prompt(" Ingrese el tercer número ");

if (num1 > num2) {
    if (num2 > num3) {
        
        document.write("Número Menor " + num3 + "<br>");
        document.write("Número Mayor " + num1 + "<br>");
    }
}
if (num2 > num3) {
    if (num2 > num1) {
        
        document.write("Número Menor " + num1 +  "<br>");
        document.write("Número Mayor " + num2 + "<br>");
    }
}
else {
    if (num3 > num2) {
        
        document.write("Número Menor " + num1 + "<br>");
        document.write("Número Mayor " + num3 +  "<br>");
    }
}



