/* ============================================================
   Lewis & Sons Landscape — script.js
   Mobile menu, smooth scroll close, form handling, footer year
   ============================================================ */
(function () {
  "use strict";

  /* ---- Mobile hamburger menu ---- */
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    // Close the menu when a link is tapped (mobile)
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Contact form (front-end only) ---- */
  var form = document.getElementById("quote-form");
  var note = document.getElementById("form-note");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("name");
      var email = document.getElementById("email");

      if (!name.value.trim() || !email.value.trim()) {
        if (note) { note.style.color = "#c0392b"; note.textContent = "Please add your name and email so we can reach you."; }
        return;
      }

      // No backend yet — swap this for a Formspree/Netlify/email endpoint.
      if (note) {
        note.style.color = "";
        note.textContent = "Thanks, " + name.value.trim().split(" ")[0] + "! We'll be in touch within one business day.";
      }
      form.reset();
    });
  }

  /* ---- Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
})();
