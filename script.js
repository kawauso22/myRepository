const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const toggle = document.getElementById("themeToggle");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});
