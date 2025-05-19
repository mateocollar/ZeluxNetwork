function toggleAnuncio(header) {
  const contenido = header.nextElementSibling;
  contenido.style.display = contenido.style.display === "block" ? "none" : "block";
}