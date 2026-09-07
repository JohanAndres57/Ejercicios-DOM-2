const inputProducto = document.getElementById("inputProducto");
const btnAgregar = document.getElementById("btnAgregarProducto");
const listaProductos = document.getElementById("listaProductos");

btnAgregar.addEventListener("click", function () {
    const texto = inputProducto.value.trim();
    if (texto === "") return;

    listaProductos.insertAdjacentHTML("beforeend", `<li>${texto} <button class="btn-borrar">Eliminar</button></li>`);
        inputProducto.value = "";

    });

listaProductos.addEventListener("click", function (evento) {
if (evento.target.classList.contains("btn-borrar")) {
evento.target.closest("li").remove();
}
});