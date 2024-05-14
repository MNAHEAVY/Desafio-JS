import { handleFormLogic } from "./src/controllers/form.js";
import { handleHomeLogic } from "./src/controllers/home.js";

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: "./src/views/notfound.html",
  "/": {
    view: "./src/views/home.html",
    handler: handleHomeLogic,
  },
  "/quotations": {
    view: "./src/views/form.html",
    handler: handleFormLogic,
  },
  "/insurances": {
    view: "./src/views/insurances.html",
    //handler: handleHomeLogic
  },
  "/claims": {
    view: "./src/views/claims.html",
    //handler: handleHomeLogic
  },
  "/about": {
    view: "./src/views/about.html",
    //handler: handleHomeLogic
  },
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const routeData = routes[path] || routes[404];
  const html = await fetch(routeData.view).then((data) => data.text());
  document.getElementById("main-content").innerHTML = html;

  routeData.handler();
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
