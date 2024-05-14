export function handleClaimLogic() {
  document.getElementById("claimForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto

    // Obtener los datos del formulario
    const formData = new FormData(this);

    // Obtener el archivo PDF seleccionado
    const pdfFile = formData.get("pdfFile");

    if (pdfFile) {
      // Leer el contenido del archivo PDF
      const reader = new FileReader();
      reader.readAsDataURL(pdfFile);
      reader.onload = function (event) {
        // Guardar el archivo PDF en localStorage
        localStorage.setItem("pdfFile", event.target.result);
        alert("El PDF se ha guardado en localStorage.");
      };
    } else {
      alert("Por favor, seleccione un archivo PDF.");
    }
  });
}
