const preguntas = document.querySelectorAll(".faq-pregunta");

preguntas. forEach(function (pregunta) {
    pregunta.addEventListener("click", function () {
        const respuestaActual = pregunta.nextElementSibling;
        const yaAbierta = respuestaActual.classList.contains("mostrar");

        preguntas. forEach(function (otraPregunta) {
            otraPregunta.nextElementSibling.classList.remove("mostrar");
        });
    if (!yaAbierta) {
    respuestaActual.classList.add("mostrar");
        }
    });
});