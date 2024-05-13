document.getElementById("insurance-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe de forma tradicional

  // Obtener los valores del formulario
  const age = parseInt(document.getElementById("age").value);
  const insuranceType = document.getElementById("insurance-type").value;

  // Calcular la cotización
  const quote = calculateQuote(age, insuranceType);

  // Mostrar la cotización al usuario
  document.getElementById("quote-result").innerText =
    "La cotización para el seguro de " + insuranceType + " es: " + quote;
});

function calculateQuote(age, insuranceType) {
  let quote;

  // Lógica para calcular la cotización basada en la edad y el tipo de seguro
  // Esto es solo un ejemplo, debes implementar tu propia lógica aquí
  if (insuranceType === "auto") {
    quote = age * 10; // Ejemplo de cálculo simple
  } else if (insuranceType === "home") {
    quote = age * 5; // Ejemplo de cálculo simple
  } else if (insuranceType === "health") {
    quote = age * 15; // Ejemplo de cálculo simple
  }

  return quote.toFixed(2); // Redondear a 2 decimales y devolver como cadena de texto
}
