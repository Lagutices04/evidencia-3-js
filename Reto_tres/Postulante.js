

let postulante = prompt(" Ingrese nombre del postulante");
let preguntas = prompt(" Ingrese total de preguntas realizadas");
let correctas = prompt(" Ingrese total de preguntas realizadas correctamente");
respuesta= (parseInt(correctas) * 100) / parseInt(preguntas);
if (respuesta >= 90) {
    var nivel = ("Superior");
}
else if (respuesta >= 75 && respuesta < 90) {
    var nivel = ("Medio");
}
else if (respuesta >= 50 && respuesta < 75) {
    var nivel = ("Regular");
}
else {
    var nivel = ("Fuera de Nivel");
}
