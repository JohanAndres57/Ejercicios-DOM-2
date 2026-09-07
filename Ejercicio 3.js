const botonesColor = document.querySelectorAll(".color-btn");
const vistaPrevia = document.getElementById("vistaPrevia");
const checkBloquear = document.getElementById("checkBloquear");

botonesColor.forEach(function (boton) {
boton.style.backgroundColor = boton.dataset.color;

boton.addEventListener("click", function () {
    vistaPrevia. style.backgroundColor = boton.dataset.color;
    });
});

checkBloquear.addEventListener("change", function () {
    botonesColor.forEach(function (boton) {
if (checkBloquear. checked) {
    boton.setAttribute("disabled", "true");
} else {
    boton.removeAttribute("disabled");
        }
    });
});