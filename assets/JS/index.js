// importing services
import { fetchData } from "./service.js";

// This function will call the file for now and return the result
// Once the data is fetched then it calls showTopicCards.
async function fetchAndShow() {
  const data = await fetchData("Data/listTopics.json");
  if (data.result) {
    showTopicCards(data.result);
  }
}

fetchAndShow();

// params : topics [array]
// output: Display count and Cards in the index.html
function showTopicCards(topics) {
  // container that will save the cards in it
  let container = ``;
  // Variable to save the number of topics fetched
  let count = 0;
  // looping thorough the topics for to make the card for each topic.
  for (const topic of topics) {
    let card = `
        <a href="displayItem.html" class="card" title="${topic.title}">
        <div class="card-img">
          <img src="${topic.image}" alt="${topic.title}" loading="lazy"/>
        </div>
        <div class="card-content">
          <div class="card-caption">${topic.category}</div>
          <div class="card-title">${topic.title}</div>
          <div class="card-rating">`;
    // loop for making the rating
    for (let i = 1; i <= 5; i++) {
      if (i <= topic.rating) {
        card += `<span class="fa fa-star checked"></span>`;
      } else {
        card += `<span class="fa fa-star"></span>`;
      }
    }

    card += `</div>
          <div class="card-author">Author: ${topic.Author}</div>
        </div>
      </a>`;
    container += card;
    count += 1;
  }

  // Reflecting change to the index.html
  // Adding Cards to topic-container
  // Displaying the item-amount
  document.getElementById("topic-Container").innerHTML = container;
  document.getElementById("item-amount").innerHTML = count;
}

