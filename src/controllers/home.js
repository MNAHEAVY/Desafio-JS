import { insuranceData } from "../utils/data.js";

export function handleHomeLogic() {
  const container = document.getElementById("insuranceContainer");

  Object.keys(insuranceData).forEach((key) => {
    const insurance = insuranceData[key];
    const insuranceHTML = `
    <div class="insudiv">
    <h2 class="insudiv-h">${insurance.name}</h2>
    <img src=${insurance.svg} width="30px" height="30px"/>
    <p class="insudiv-p">${insurance.description}</p> 
    
    `;
    container.innerHTML += insuranceHTML;
  });
}
