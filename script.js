const header = document.querySelector("[data-header]");
const revealTargets = document.querySelectorAll(
  ".section-heading, .statement-inner, .compare-card, .learn-list article, .value-inner, .value-tags span, .process-list article, .check-list li, .timeline li, details, .cta-inner"
);

revealTargets.forEach((target) => target.setAttribute("data-reveal", ""));

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealTargets.forEach((target) => observer.observe(target));
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
