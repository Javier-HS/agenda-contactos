// Agenda de Contactos
let contactos = [];

const formContacto = document.getElementById("formContacto");
const mensaje = document.getElementById("mensaje");

// Muestra un mensaje de validación o confirmación
function mostrarMensaje(texto, color) {
  mensaje.innerText = texto;
  mensaje.style.color = color;
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
});
