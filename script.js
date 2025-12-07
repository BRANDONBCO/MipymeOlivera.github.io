const modal = document.getElementById("modal");
const nombreInput = document.getElementById("nombre");
const cantidadInput = document.getElementById("cantidad");
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
  const cantidad = cantidadInput.value.trim();
  if (nombre === "" || cantidad === "") {
    alert("Por favor, completa tu nombre y la cantidad.");
    return;
  }

  const numero = "5358581019";
  const mensaje = `Hola, soy ${nombre}. Quiero ${cantidad} ${productoSeleccionado}(s).`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");

  modal.style.display = "none";
  nombreInput.value = "";
  cantidadInput.value = "";
});
