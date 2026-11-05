
(function () {
  "use strict";

  var links = document.querySelectorAll("[data-nav]");

  var sections = [
    document.getElementById("home"),
    document.getElementById("tokenomics"),
    document.getElementById("roadmap")
  ].filter(Boolean);

  if (!links.length || !sections.length) return;

  function setActive(id) {
    links.forEach(function (link) {
      var active = link.getAttribute("data-nav") === id;

      link.classList.toggle("is-active", active);

      if (active) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  // Update active navigation when a section enters the viewport.
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        var visibleEntries = entries.filter(function (entry) {
          return entry.isIntersecting;
        });

        if (!visibleEntries.length) return;

        visibleEntries.sort(function (a, b) {
          return a.boundingClientRect.top - b.boundingClientRect.top;
        });

        setActive(visibleEntries[0].target.id);
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: 0
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });

  } else {
    // Fallback for browsers without IntersectionObserver.
    function updateActiveSection() {
      var activeSection = sections[0];

      sections.forEach(function (section) {
        var rect = section.getBoundingClientRect();

        if (rect.top <= window.innerHeight * 0.4) {
          activeSection = section;
        }
      });

      setActive(activeSection.id);
    }

    window.addEventListener("scroll", updateActiveSection, {
      passive: true
    });

    window.addEventListener("resize", updateActiveSection);

    updateActiveSection();
  }

  // Update navigation immediately when a navigation link is clicked.
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      var target = link.getAttribute("data-nav");

      if (target) {
        setActive(target);
      }
    });
  });

  // Initial navigation state.
  setActive("home");
})();
