// const respuestaCorrecta = {
//     reina: "angola",
//     relaciones: "rusia",
//     maruja: "g27",
//     gorillaMask: "guerrilla",
//     solanas: "warhol"
// }


document.querySelector('form[name= "reina"]').addEventListener('submit', (event) => {
    event.preventDefault();
})

document.getElementById("reina").value;
document.getElementById("relaciones").value;
document.getElementById("maruja").value;
document.getElementById("gorillaMask").value;
document.getElementById("solanas").value;

//cosntruir funcion validar

function validarQuiz() {

    let total = 5;
    let puntos = 0;
    let myForm = document.forms["quizForm"];
    let respuestas = []


    return false;


}

//la validacion se hace a raves de submit, pero antes de enviar le decimos que recorra las preguntas y nos diga cual es la respuesta correcta