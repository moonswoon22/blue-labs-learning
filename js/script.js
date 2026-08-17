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

const quoteCarousel = document.querySelector(".quote-carousel");
if (quoteCarousel) {
  const viewport = quoteCarousel.querySelector(".quote-viewport");
  const track = quoteCarousel.querySelector(".quote-track");
  const cards = [...quoteCarousel.querySelectorAll(".quote-card")];
  const prev = quoteCarousel.querySelector(".quote-nav-prev");
  const next = quoteCarousel.querySelector(".quote-nav-next");
  let index = 0;

  const visibleCount = () => (window.matchMedia("(max-width: 900px)").matches ? 1 : 3);

  const maxIndex = () => Math.max(0, cards.length - visibleCount());

  const cardStep = () => {
    const card = cards[0];
    const styles = getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
    return card.getBoundingClientRect().width + gap;
  };

  const update = () => {
    index = Math.min(index, maxIndex());
    track.style.transform = `translateX(-${index * cardStep()}px)`;
    prev.disabled = index <= 0;
    next.disabled = index >= maxIndex();
  };

  prev.addEventListener("click", () => {
    index = Math.max(0, index - 1);
    update();
  });
  next.addEventListener("click", () => {
    index = Math.min(maxIndex(), index + 1);
    update();
  });
  window.addEventListener("resize", update);
  update();
}
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

    window.location.href =
      "mailto:sbush2860@gmail.com" +
      "?subject=" +
      encodeURIComponent("Blue Labs Learning inquiry") +
      "&body=" +
      encodeURIComponent(summary);
  });
}
