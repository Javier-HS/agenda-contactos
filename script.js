// Agenda de Contactos
let contactos = [];

const formContacto = document.getElementById("formContacto");
const mensaje = document.getElementById("mensaje");
const listaContactos = document.getElementById("listaContactos");

// Muestra un mensaje de validación o confirmación
function mostrarMensaje(texto, color) {
  mensaje.innerText = texto;
  mensaje.style.color = color;
}

// Elimina un contacto según su posición en el arreglo
function eliminarContacto(indice) {
  contactos.splice(indice, 1);
  mostrarContactos();
  mostrarMensaje("Contacto eliminado.", "#e67e22");
}

// Dibuja la lista de contactos en pantalla
function mostrarContactos() {
  listaContactos.innerHTML = "";
  contactos.forEach((c, indice) => {
    const li = document.createElement("li");
    li.innerText = c.nombre + " - " + c.telefono + " - " + c.correo + " ";

    const btnEliminar = document.createElement("button");
    btnEliminar.innerText = "Eliminar";
    btnEliminar.addEventListener("click", () => eliminarContacto(indice));

    li.appendChild(btnEliminar);
    listaContactos.appendChild(li);
  });
}

// Agrega un nuevo contacto validando los datos
formContacto.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const correo = document.getElementById("correo").value.trim();

  if (nombre === "" || telefono === "" || correo === "") {
    return mostrarMensaje("Completa todos los campos.", "#e74c3c");
  }

  contactos.push({ nombre, telefono, correo });
  formContacto.reset();
  mostrarMensaje("Contacto agregado correctamente.", "#27ae60");
  mostrarContactos();
});
