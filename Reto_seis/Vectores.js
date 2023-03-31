var vector1 = [], vector2 = [],vector3 = [];
let tamano= prompt ("Elija el tamaño de los vectores");
for (var i=0; i<parseInt (tamano);i++){
    var num1= prompt(" Ingrese valor números del vector uno");
    vector1.push (parseInt (num1));
}
for (var i=0; i<parseInt (tamano);i++){
    var num2= prompt(" Ingrese valor números del vector dos");
    vector2.push (parseInt (num2));
}
for (var i=0; i<parseInt (tamano);i++){
    vector3.push (parseInt (vector1 [i])+parseInt (vector2[i]));

}