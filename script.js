function change() {
  document.documentElement.classList.toggle("light");

  if (document.documentElement.classList.contains("light")) {
    localStorage.setItem("mode", "light");
  } else {
    localStorage.setItem("mode", "dark");
  }
}

const mode = localStorage.getItem("mode");
if (mode === "light") {
  document.documentElement.classList.add("light");
}
