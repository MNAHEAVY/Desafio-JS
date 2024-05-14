import { insuranceData } from "../utils/data.js";
export function handleHomeLogic() {
  const container = document.getElementById("insuranceContainer");

  Object.keys(insuranceData).forEach((key) => {
    const insurance = insuranceData[key];
    const insuranceHTML = `
    <div class="insudiv">
    <h2 class="insudiv-h">${insurance.name}</h2>
    <svg width="30" height="30"  fill="none" xmlns="http://www.w3.org/2000/svg"><path d="${insurance.svg}" stroke="#000" stroke-width="2" /></svg>
    <p class="insudiv-p">${insurance.description}</p> 
    
    `;
    container.innerHTML += insuranceHTML;
  });
}
