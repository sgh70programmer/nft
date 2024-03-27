const lightModeBtn = document.getElementById("lightModeBtn")
const darkModeBtn = document.getElementById("darkModeBtn")

if (localStorage.getItem("theme") == "dark") {
  themeMode(darkModeBtn, lightModeBtn, "dark")
} else {
  themeMode(lightModeBtn, darkModeBtn, "light")
}
function themeMode(btnActive, btnDisavtive, theme) {
  btnActive.classList.add("active")
  btnDisavtive.classList.remove("active")
  document.documentElement.setAttribute("data-bs-theme", theme)
  localStorage.setItem("theme", theme)
}

lightModeBtn.addEventListener("click", () => {
  themeMode(lightModeBtn, darkModeBtn, "light")
})

darkModeBtn.addEventListener("click", () => {
  themeMode(darkModeBtn, lightModeBtn, "dark")
})

