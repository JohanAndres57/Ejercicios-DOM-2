const tareas = document.querySelectorAll(".tarea");
const btnMarcarTodas = document.getElementById("btnMarcarTodas");

tareas. forEach(function (tarea) {
    tarea.addEventListener("click", function () {
    tarea.classList.toggle("completada");
    });
});

btnMarcarTodas.addEventListener("click", function () {
tareas. forEach(function (tarea) {
tarea.classList.add("completada");

    });
});
