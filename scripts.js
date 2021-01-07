// capturo respuestas correctas en variable, usando clave valor
const respuestaCorrecta = {
    reina: "angola",
    relaciones: "rusia",
    maruja: "g27",
    gorillaMask: "guerrilla",
    solanas: "warhol"
}

// const respuestas = document.getElementsByTagName("input").name.value;

//accedo a mi formulario 
document.querySelector('form[name="quizForm"]').addEventListener('submit', (event) => {
            event.preventDefault();
            for (let i = 0; i < document.getElementsByClassName("reina").length; i++) {
                if (event.target.elements.reina.value === respuestaCorrecta.value) {
                    document.getElementById(respuestaCorrecta.reina).style.backgroundColor = "green"
                    alert("has acertado")
                } else {
                    document.getElementById(respuestaCorrecta.reina).style.backgroundColor = "red"
                    alert("te has equivocado")
                }
            }

            for (let i = 0; i < document.getElementsByClassName("relaciones").length; i++) {
                if (event.target.elements.relacionaes.value === respuestaCorrecta.value) {
                    document.getElementById(respuestaCorrecta.relaciones).style.backgroundColor = "green"
                    alert("has acertado")
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
                    alert("te has equivocado")
                }
            }
            for (let i = 0; i < document.getElementsByClassName("gorilaMask").length; i++) {
                if (event.target.elements.gorillaMask.value === respuestaCorrecta.value) {
                    document.getElementById(respuestaCorrecta.gorillaMask).style.backgroundColor = "green"
                    alert("has acertado")
                } else {
                    document.getElementById(respuestaCorrecta.gorillaMask).style.backgroundColor = "red"
                    alert("te has equivocado")
                }
            }
            for (let i = 0; i < document.getElementsByClassName("solanas").length; i++) {
                if (event.target.elements.solanas.value === respuestaCorrecta.value) {
                    document.getElementById(respuestaCorrecta.solanas).style.backgroundColor = "green"
                    alert("has acertado")
                } else {
                    document.getElementById(respuestaCorrecta.solanas).style.backgroundColor = "red"
                    alert("te has equivocado")
                }
            }
        }
        //accedo a la respuesta

        // document.getElementsByClassName("relaciones").value;
        // document.getElementsByClassName("maruja").value;
        // document.getElementsByClassName("reina").value;
        // document.getElementsByClassName("gorillaMask").value;
        // document.getElementsByClassName("solanas").value;