// capturo respuestas correctas en variable, usando clave valor
// const respuestaCorrecta = {
//     reina: "angola",
//     relaciones: "rusia",
//     maruja: "g27",
//     gorillaMask: "guerrilla",
//     solanas: "warhol"
// }

const respuestaCorrecta = ["angola", "rusia", "g27", "guerrilla", "warhol"]

// const respuestas = document.getElementsByTagName("input").name.value;
/*
function displayRadioValue() {
    var ele = document.getElementsByName('gender');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            document.getElementById("result").innerHTML = "Gender: " + ele[i].value;
    }
}
*/
//meter for y compobaciones en una funcion a la q le ppaso dos parametros: nombre y posicion, para no repetir codigo
//continuara...

function chequear(nombre, pos) {

}

//accedo a mi formulario 
document.querySelector('form[name="quizForm"]').addEventListener('submit', (event) => {
    event.preventDefault();

    //chequear('reina', 0)
    var ele = document.getElementsByName('reina');
    for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked == true && ele[i].value === respuestaCorrecta[0]) {
            ele[i].style.backgroundColor = "green"
            console.log(ele[i])
            console.log("has acertado")
        } else {
            ele[i].style.backgroundColor = "red"
            console.log("te has equivocado")
        }
    }
    /*
        for (let i = 0; i < document.getElementsByClassName("relaciones").length; i++) {
            if (event.target.elements.relacionaes.value === respuestaCorrecta.value) {
                document.getElementById(respuestaCorrecta.relaciones).style.backgroundColor = "green"
                console.log("has acertado")
            } else {
                document.getElementById(respuestaCorrecta.relaciones).style.backgroundColor = "red"
                alert("te has equivocado")
            }
        }
        for (let i = 0; i < document.getElementsByClassName("maruja").length; i++) {
            if (event.target.elements.maruja.value === respuestaCorrecta.value) {
                document.getElementById(respuestaCorrecta.maruja).style.backgroundColor = "green"
                alert("has acertado")
            } else {
                document.getElementById(respuestaCorrecta.maruja).style.backgroundColor = "red"
                console.log("te has equivocado")
            }
        }
        for (let i = 0; i < document.getElementsByClassName("gorilaMask").length; i++) {
            if (event.target.elements.gorillaMask.value === respuestaCorrecta.value) {
                document.getElementById(respuestaCorrecta.gorillaMask).style.backgroundColor = "green"
                console.log("has acertado")
            } else {
                document.getElementById(respuestaCorrecta.gorillaMask).style.backgroundColor = "red"
                console.log("te has equivocado")
            }
        }
        for (let i = 0; i < document.getElementsByClassName("solanas").length; i++) {
            if (event.target.elements.solanas.value === respuestaCorrecta.value) {
                document.getElementById(respuestaCorrecta.solanas).style.backgroundColor = "green"
                console.log("has acertado")
            } else {
                document.getElementById(respuestaCorrecta.solanas).style.backgroundColor = "red"
                console.log("te has equivocado")
            }
        }
        */

})