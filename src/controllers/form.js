import { insuranceData } from "../utils/data.js";

const insuranceTypeSelect = document.getElementById("insurance-type");
const coverageSelect = document.getElementById("coverage");

// Llena las opciones del select de tipos de seguro
insuranceTypeSelect.innerHTML = '<option value="">Seleccione un tipo de seguro</option>';
Object.keys(insuranceData).forEach((type) => {
  const optionElement = document.createElement("option");
  optionElement.value = type;
  optionElement.textContent = insuranceData[type].name;
  insuranceTypeSelect.appendChild(optionElement);
});

// Agrega un event listener al select de tipos de seguro
insuranceTypeSelect.addEventListener("change", function () {
  const insuranceType = this.value;
  if (insuranceType) {
    fillCoverageOptions(insuranceType);
  } else {
    coverageSelect.innerHTML = '<option value="">Seleccione una cobertura</option>';
  }
});

// Llena las opciones de cobertura inicialmente
fillCoverageOptions(insuranceTypeSelect.value);

// Llena las opciones de cobertura cuando se selecciona un tipo de seguro
function fillCoverageOptions(insuranceType) {
  coverageSelect.innerHTML = '<option value="">Seleccione una cobertura</option>';
  if (insuranceType in insuranceData) {
    const coverageOptions = insuranceData[insuranceType].coverage;
    coverageOptions.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option;
      optionElement.textContent = option;
      coverageSelect.appendChild(optionElement);
    });
  }
}

document.getElementById("insurance-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const age = parseInt(document.getElementById("age").value);
  const insuranceType = document.getElementById("insurance-type").value;
  const coverage = document.getElementById("coverage").value;

  // Calcular la cotización
  const quote = calculateQuote(age, insuranceType, coverage);

  // Mostrar la cotización al usuario
  document.getElementById("quote-result").innerText =
    "La cotización para el seguro de " + insuranceType + " es: " + quote;
});

function calculateQuote(age, insuranceType, coverage) {
  let quote;

  if (insuranceType in insuranceData) {
    const insurance = insuranceData[insuranceType];

    if (insurance.coverage.includes(coverage)) {
      const priceRange = insurance.priceRange[insurance.coverage.indexOf(coverage)];
      const minPrice = parseFloat(
        priceRange.split(" - ")[0].replace("$", "").replace(",", "")
      );
      const maxPrice = parseFloat(
        priceRange.split(" - ")[1].replace("$", "").replace(",", "")
      );
      quote = ((minPrice + maxPrice) / 2) * (1 + age / 100);
      quote = quote.toFixed(2);
    } else {
      quote = "Seleccione una cobertura válida";
    }
  } else {
    quote = "Seleccione un tipo de seguro válido";
  }

  return quote;
}
