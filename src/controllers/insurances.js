import { insuranceData } from "../utils/data.js";

export function handleInsurancesLogic() {
  const container = document.getElementById("insurances");

  Object.keys(insuranceData).forEach((key) => {
    const insurance = insuranceData[key];
    const insuranceHTML = `
      <div>
        <h2>${insurance.name}</h2>
        <p><strong>Descripción:</strong> ${insurance.description}</p> 
        <p><strong>Cobertura:</strong></p>
        <ul>
          ${insurance.coverage.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <p><strong>Rango de precios:</strong> ${insurance.priceRange.join(", ")}</p>
        <button id="btnChoose" class="bn53">Elegir</button>
        </div>
    `;
    container.innerHTML += insuranceHTML;
  });

  const btnChoose = document.getElementById("btnChoose");
  btnChoose.addEventListener("click", () => {
    alert("¡Muy pronto!");
  });
}
