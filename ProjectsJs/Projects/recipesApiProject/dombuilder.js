import { recipes, search, reset } from "./recipes.js";

const searchInput = document.querySelector("#search");
searchInput.addEventListener("keydown", (event) => {
    reset();
    cardsDiv.innerHTML = "";
    search(event.target.value.trim()); // חיפוש על פי הטקסט המוזן
    console.log("Search term:", event.target.value.trim());
    createCardList()
});

const cardsDiv = document.getElementById("cards");

export const createCard = (recipe) => {

    const card = document.createElement("div");
    card.className = "card shadow m-2 col-md-4 col-sm-12"

    const cardImg = document.createElement("img");
    cardImg.className = "card-img-top mt-2 border-rounded";
    cardImg.src = recipe.image;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = recipe.label;

    const calories = document.createElement("p");
    calories.className = "card-text";
    calories.textContent = `Calories: ${recipe.calories}`;

    const cardFooter = document.createElement("div");
    cardFooter.className = "card-footer d-flex"

    const heart = document.createElement("i");
    heart.className = "bi bi-heart";

    heart.addEventListener("click", () => {
        if (heart.className === "bi bi-heart") {
            heart.className = "bi bi-heart-fill";
        } else {
            heart.className = "bi bi-heart";
        }
    })

    card.appendChild(cardImg);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(calories);
    cardFooter.appendChild(heart);
    card.appendChild(cardBody)
    card.appendChild(cardFooter);
    cardsDiv.appendChild(card);
};
export const createCardList = () => {
    for (const recipe of recipes) {
        createCard(recipe);
    }
};
