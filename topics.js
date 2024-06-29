import { data } from "data.js";
// create course cards
function createCards(data) {
  console.log("test: " + data);
  var parent = document.getElementsByClassName("courses")[0]; // Access the first element in the collection

  data.forEach((element) => {
    let card = `<div class="course-card" data-course="${element.topic}">
                  <div class="course-image">
                    <img src="/Logos/${element.image}" alt="${element.topic}" />
                  </div>
                  <div class="course-card-data">
                    <section class="description">
                      <p>${element.category}</p>
                      <h3>${element.topic}</h3>
                    </section>
                    <div class="rate">
                      ${getRate(element.rating)}</div>
                    <div class="author">
                      <small>Author: ${element.name}</small>
                    </div>
                  </div>
                </div>`;
    parent.insertAdjacentHTML("beforeend", card); // Use insertAdjacentHTML to append the card
  });
}
// create the course rating
function getRate(rate) {
  let rateCode = "";
  let emptyStars = 5 - rate;
  let fullStars = 5 - emptyStars;

  for (let i = 0; i < Math.floor(fullStars); i++) {
    rateCode += '<ion-icon name="star-sharp"></ion-icon>';
  }
  if (!Number.isInteger(fullStars)) {
    rateCode += '<ion-icon name="star-half-outline"></ion-icon>';
  }
  for (let i = 0; i < Math.floor(emptyStars); i++) {
    rateCode += '<ion-icon name="star-outline"></ion-icon>';
  }

  console.log(rate, emptyStars, fullStars, rateCode);

  return rateCode;
}
createCards(data);
