document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".links a");

  const views = {
    home: { view: "home", controller: "home" },
    quotations: { view: "form", controller: "form" },
    insurances: { view: "insurances", controller: "insurances" },
    claims: { view: "claims", controller: "claims" },
    about: { view: "about", controller: "about" },
  };

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const view = getViewFromHref(this.getAttribute("href"));
      chargeView(views[view]);
    });
  });

  function chargeView({ view, controller }) {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = "";

    fetch(`views/${view}.html`)
      .then((response) => response.text())
      .then((data) => {
        mainContent.innerHTML = data;
        import(`./controllers/${controller}.js`)
          .then((controller) => {
            if (controller.init) {
              controller.init();
            }
          })
          .catch((error) => console.error("Error al cargar el controller:", error));
      })
      .catch((error) => console.error("Error al cargar la view:", error));
  }

  function getViewFromHref(href) {
    const clean = href.replace(/#|\//g, "");

    return clean !== "" ? clean : "home";
  }

  chargeView(views["home"]);
});
