let showFav = true;

// The following function will check if the theme is light then it will change it to dark,
// and if the theme is dark it will change it to dark-theme
const toggleTheme = (event) => {
  if (document.documentElement.getAttribute("data-theme") === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
};

// The following function will check will be responsible for toggling the
// favorite topics by checking showFav variable
const toggleFavorite = (event) => {
  console.log(showFav);
  if (showFav) {
    document.getElementById("bottom-drawer").style.display = "none";
  } else {
    document.getElementById("bottom-drawer").style.display = "block";
  }
  showFav = !showFav;
};
