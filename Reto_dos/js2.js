/*2. Escribir un algoritmo que reciba dos números por teclado y diga cuál
es el mayor y cuál el menor.*/
let num1,num2;

num1= prompt(" Ingrese el primer número ");

num2= prompt(" Ingrese el segundo número "); 
if (num1 > num2){
    document.write(" Número Mayor " +num1+" Número Menor "+num2+"<br>");
}
else{
    document.write(" Número Menor " +num1+" Número mayor "+num2+"<br>");  
}