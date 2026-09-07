const buscador = document.getElementById("buscador");
const items = document.querySelectorAll("#listaBuscable li");

buscador.addEventListener("input", function () {
const texto = buscador.value. toLowerCase();

items. forEach(function (item) {
const contenido = item. textContent.toLowerCase();
const coincide = contenido.includes(texto);

item.style.display = coincide ? "list-item" : "none";
});
});