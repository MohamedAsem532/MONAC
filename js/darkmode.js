const hideBar = document.querySelector(".navbar");
let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", "inactive");
};

if (darkmode === "active") {
  enableDarkmode();
}

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

window.addEventListener("scroll", () => {
  // Show after scrolling 100px, hide if back at top
  window.scrollY > 100
    ? (hideBar.style.borderBottom = "1px solid black")
    : hideBar.style.removeProperty("border-bottom");
});
