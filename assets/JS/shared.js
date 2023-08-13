// The following function will check if the theme is light then it will change it to dark,
// and if the theme is dark it will change it to dark-theme
const toggleTheme = (event) => {
    console.log("test")
  if (document.documentElement.getAttribute("data-theme") === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
};
