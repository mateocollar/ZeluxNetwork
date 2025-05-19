const logs = [
  {
    version: "v1.0.2",
    fecha: "19/05/2025",
    cambios: [
      "Se agregó página de Changelogs.",
      "Mejoras visuales en el botón de tienda.",
      "Correcciones menores en responsive."
    ]
  },
  {
    version: "v1.0.1",
    fecha: "18/05/2025",
    cambios: [
      "Actualizada la sección de Staff.",
      "Link de Discord actualizado.",
      "Nuevo pie de página con créditos."
    ]
  },
  {
    version: "v1.0.0",
    fecha: "17/05/2025",
    cambios: [
      "Lanzamiento inicial del sitio web.",
      "Secciones: Inicio, Info, Tienda, Staff, Soporte y Discord."
    ]
  }
];

const main = document.getElementById("logs");

logs.forEach(log => {
  const div = document.createElement("div");
  div.className = "changelog";
  div.innerHTML = `
    <h3>${log.version} - ${log.fecha}</h3>
    <ul>
      ${log.cambios.map(c => `<li>${c}</li>`).join("")}
    </ul>
  `;
  main.appendChild(div);
});