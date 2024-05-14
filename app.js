document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".links a");

  const views = {
    home: { view: "home", controller: "home" },
    quotations: { view: "form", controller: "form" },
    insurances: { view: "insurances", controller: "insurances" },
    claims: { view: "claims", controller: "claims" },
    about: { view: "about", controller: "about" },
    notfound: { view: "notfound", controller: "notfound" },
  };

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const view = getViewFromHref(this.getAttribute("href"));
      chargeView(views[view]);
      history.pushState(null, null, this.getAttribute("href"));
    });
  });

  window.addEventListener("popstate", function (event) {
    const path = window.location.pathname;
    const view = getViewFromHref(path);
    chargeView(views[view]);
  });

  function chargeView({ view, controller }) {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = "";

    fetch(`/src/views/${view}.html`)
      .then((response) => response.text())
      .then((data) => {
        mainContent.innerHTML = data;
        import(`/src/controllers/${controller}.js`)
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

    if (views.hasOwnProperty(clean)) {
      return clean;
    } else {
      return "notfound";
    }
  }

  chargeView(views["home"]);
});
