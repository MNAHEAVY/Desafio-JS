export function handleClaimLogic() {
  // Obtener el elemento donde se renderizarán los reclamos
  const claimsContainer = document.getElementById("claimsContainer");

  // Función para renderizar los reclamos guardados en localStorage
  function renderClaims() {
    claimsContainer.innerHTML = "";
    const savedClaims = JSON.parse(localStorage.getItem("claims")) || [];

    savedClaims.forEach((claim, index) => {
      const claimElement = document.createElement("div");
      claimElement.innerHTML = `
        <p>Reclamo #${index + 1}:</p>
        <p>Número de póliza: ${claim.policyNumber}</p>
        <p>Nombre completo: ${claim.fullName}</p>
        <p>Correo electrónico: ${claim.email}</p>
        <p>Teléfono de contacto: ${claim.phone}</p>
        <p>Descripción del reclamo: ${claim.claimDescription}</p>
      `;
      claimsContainer.appendChild(claimElement);
    });
  }

  renderClaims();

  // Agregar un event listener para el envío del formulario
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

        // Guardar el reclamo en localStorage
        const claim = {
          policyNumber: formData.get("policyNumber"),
          fullName: formData.get("fullName"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          claimDescription: formData.get("claimDescription"),
        };

        const savedClaims = JSON.parse(localStorage.getItem("claims")) || [];
        savedClaims.push(claim);
        localStorage.setItem("claims", JSON.stringify(savedClaims));

        renderClaims();

        alert("El reclamo y el PDF se han guardado en localStorage.");
      };
    } else {
      alert("Por favor, seleccione un archivo PDF.");
    }
  });
}
