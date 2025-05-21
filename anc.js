function toggleAnuncio(header) {
  const contenido = header.nextElementSibling;
  const isVisible = contenido.style.display === "block";

  // Cierra todos
  document.querySelectorAll(".anuncio .contenido").forEach(div => {
    div.style.display = "none";
  });

  // Solo abre el actual si no estaba abierto
  if (!isVisible) {
    contenido.style.display = "block";
  }
}