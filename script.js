const modal = document.getElementById("modal");
const nombreInput = document.getElementById("nombre");
const cantidadInput = document.getElementById("cantidad");
const directionInput = document.getElementById("dirección")
const enviarBtn = document.getElementById("enviar");
const cerrarBtn = document.getElementById("cerrar");

let productoSeleccionado = "";

document.querySelectorAll(".btn-comprar").forEach((btn) => {
  btn.addEventListener("click", () => {
    productoSeleccionado = btn.getAttribute("data-producto");
    modal.style.display = "flex";
  });
});

cerrarBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

enviarBtn.addEventListener("click", () => {
  const nombre = nombreInput.value.trim();
  const dirección = directionInput.value.trim();
  const cantidad = cantidadInput.value.trim();
  if (nombre === "" || dirección === "" || cantidad === "") {
    alert("Por favor, completa tu nombre, tu dirección y la cantidad del producto.");
    return;
  }

  const numero = "5358581019";
  const mensaje = `Hola, soy ${nombre}. Vivo en ${dirección}. Quiero ${cantidad} ${productoSeleccionado}(s).`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");

  modal.style.display = "none";
  nombreInput.value = "";
  directionInput.value = "";
  cantidadInput.value = "";

});
