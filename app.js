// Lista de amigos
let amigos = [];
const LIMITE_AMIGOS = 10; // Máximo de amigos permitidos

// Función para agregar un amigo
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Validaciones
  if (!nombre) {
    alert("⚠️ Ingresa un nombre válido.");
    return;
  }

  if (amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase())) {
    alert("⚠️ Este nombre ya ha sido agregado.");
    return;
  }

  if (amigos.length >= LIMITE_AMIGOS) {
    alert(`⚠️ No puedes agregar más de ${LIMITE_AMIGOS} amigos.`);
    return;
  }

  // Agregar nombre a la lista
  amigos.push(nombre);
  input.value = "";

  actualizarLista();
}

// Función para actualizar la lista de amigos en pantalla
function actualizarLista() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${amigo}`;
    listaAmigos.appendChild(li);
  });
}

// Función para sortear un amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("⚠️ La lista de amigos está vacía. Agrega amigos antes de sortear.");
    return;
  }

  const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

  mostrarResultado(amigoSorteado);
  limpiarLista();
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(amigoSorteado) {
  const resultado = document.getElementById("resultado");
  resultado.textContent = `🎉 El amigo secreto sorteado es 🎉: ${amigoSorteado}`;
}

// Función para limpiar la lista de amigos
function limpiarLista() {
  amigos = [];
  actualizarLista();
}
