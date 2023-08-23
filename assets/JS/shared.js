// importing services
import { fetchData } from "./service.js";

// The following function will check if the theme is light then it will change it to dark,
// and if the theme is dark it will change it to dark-theme
document.querySelector("#toggle-theme").addEventListener("click", () => {
  if (document.documentElement.getAttribute("data-theme") === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
});

// The following function will check will be responsible for toggling the
// favorite topics by checking showFav variable
let showFav = true;
document.querySelector("#toggle-favorite").addEventListener("click", () => {
  if (showFav) {
    document.getElementById("bottom-drawer").style.display = "none";
  } else {
    document.getElementById("bottom-drawer").style.display = "block";
  }
  showFav = !showFav;
});

// This function will fetch data from json file
// Once the data is fetched then it calls buildDrawer.
async function fetchAndShow() {
  const data = await fetchData("Data/listFavorite.json");
  if (data.result) {
    buildFavoriteCards(data.result);
  }
}

fetchAndShow();

// This function will build the favorite cards in the bottom-drawer
function buildFavoriteCards(favoriteTopicsList) {
  // container that will save the cards in it
  let container = ``;
  // looping thorough the topics for to make the card for each topic.
  for (const topic of favoriteTopicsList) {
    let card = `
    <div class="card">
    <div class="card-img">
      <img src="${topic.image}" alt="${topic.title}" loading="lazy" />
    </div>
    <div class="card-content">
    <div class="card-title">${topic.title}</div>
    <div class="card-rating">`;
    // loop for making the rating
    for (let i = 1; i <= 5; i++) {
      if (i <= topic.rating) {
        card += `<ion-icon name="star" class="checked"></ion-icon>`;
      } else {
        card += `<ion-icon name="star-outline" class="checked"></ion-icon>`;
      }
    }
    card += `</div>
    </div>
  </div>
    `;
    /**
     *  card ex: <!-- <div class="card">
          <div class="card-img">
            <img src="assets/images/react.webp" alt="react.js" loading="lazy" />
          </div>
          <div class="card-title">React</div>
          <div class="card-rating">
            <ion-icon name="star" class="checked"></ion-icon>
            <ion-icon name="star" class="checked"></ion-icon>
            <ion-icon name="star" class="checked"></ion-icon>
            <ion-icon name="star" class="checked"></ion-icon>
            <ion-icon name="star" class="checked"></ion-icon>
          </div>
        </div> -->
     */
    container += card;
  }
  // Reflecting change to the pages
  document.getElementById("favoriteTopics").innerHTML = container;
}
