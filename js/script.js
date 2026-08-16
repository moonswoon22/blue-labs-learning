const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");
const yearEl = document.querySelector("[data-year]");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const open = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const methodGroups = document.querySelectorAll(".method-group");
methodGroups.forEach((group) => {
  group.addEventListener("toggle", () => {
    if (!group.open) return;
    methodGroups.forEach((other) => {
      if (other !== group) other.open = false;
    });
  });
});

const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const summary = [
      `Name: ${data.get("name") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Grade: ${data.get("grade") || ""}`,
      `School: ${data.get("school") || ""}`,
      `Format: ${data.get("format") || ""}`,
      `Where: ${data.get("where") || ""}`,
      `Message: ${data.get("message") || ""}`,
    ].join("\n");

    // Placeholder until backend / form service is wired
    window.alert("Thanks — inquiry captured locally for now.\n\n" + summary);
    form.reset();
  });
}
