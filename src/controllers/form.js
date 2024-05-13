function iniciarInicio() {
  const form = document.getElementById("insurance-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const age = parseInt(document.getElementById("age").value);
    const insuranceType = document.getElementById("insurance-type").value;

    obtenerCotizacion(age, insuranceType);
  });
}

function obtenerCotizacion(age, insuranceType) {
  alert("La cotización para el seguro de " + insuranceType + " es: $1000"); // Ejemplo
}

document.addEventListener("DOMContentLoaded", iniciarInicio);
