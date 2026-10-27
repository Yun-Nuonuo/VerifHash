(function () {
  "use strict";

  var links = document.querySelectorAll("[data-nav]");
  var sections = [
    document.getElementById("home"),
    document.getElementById("roadmap")
  ].filter(Boolean);

  if (!links.length || !sections.length) return;

  function setActive(id) {
    links.forEach(function (link) {
      var active = link.getAttribute("data-nav") === id;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(function (s) { observer.observe(s); });
  }

  setActive("home");
})();
