import "./style.css";
import recipes from "./recipe.js";

function easterEgg() {
  const contentDiv = document.getElementById("content");
  const fudgeRecipe =
    "<h2>Enklaste chokladtryffeln</h2><p><strong>Ingredienser:</strong></p><ul><li>400 - 450 g choklad (blanda gärna mörk och ljus)</li><li>1 burk sötad, kondenserad mjölk</li><li>50 - 75 g smör eller margarin</li><li>Valfri smaksättning, tex pepparmintsolja, romessens eller liknande</li></ul><p><strong>Gör så här:</strong></p><p>Smält choklad över vattenbad, blanda med den kondenserade mjölken och rör ner smöret. Blanda i smaksättning, minimarshmallows, krossade polkagrisar eller något annat gott om du vill (minimarshmallows smälter och gör allt kladdigt).</p><p>Häll upp i en bakpappersklädd form, ungefär 20 x 30 cm.</p><p>Häll eventuellt på minimarshmallows, strössel, nötter eller krossade polkagrisar eller något annat gott innan det börjar stelna - det går ganska fort.</p><p>Låt stelna i kylskåp några timmar, skär i bitar och njut.</p>";

  contentDiv.innerHTML = fudgeRecipe;
}

const headerText = document.getElementById("headerText");
headerText.addEventListener("click", easterEgg);

function showHome() {
  let contentDiv = document.getElementById("content");
  contentDiv.textContent = "";
  let contentTitle = document.createElement("h1");
  contentTitle.textContent = "Välkommen!";
  let contentParagraph1 = document.createElement("p");
  contentParagraph1.textContent =
    "Jag har en passion för kokböcker. Inte så att jag följer recept, utan snarare läser jag dem och roas av att få inspiration av recepten. Ju äldre böcker desto bättre, men det hindrar ju såklart inte att jag fyndar lite på bokrean när jag har chansen.";
  let contentParagraph2 = document.createElement("p");
  contentParagraph2.textContent =
    "Min huvudsakliga hobby nuförtiden är dock att baka glutenfritt. Inte så mycket av val som av nödvändighet eftersom min son fick celiakidiagnos för ett par år sedan och det glutenfria bröd som finns att köpa antingen är extremt dyrt, extremt tråkigt eller båda alternativen. Att då lyckas få fram några varianter av bröd som är lika gott som helt vanligt bröd med gluten är en utmaning, och att dessutom se till att det blir variation på brödet är ganska spännande.";
  let contentParagraph3 = document.createElement("p");
  contentParagraph3.textContent =
    "Om du är nyfiken på att själv baka glutenfritt så finns det några recept i menyn. Och någonstans på sidan har jag gömt en liten överaskning, så leta efter påskägget...";
  contentDiv.appendChild(contentTitle);
  contentTitle.appendChild(contentParagraph1);
  contentTitle.appendChild(contentParagraph2);
  contentTitle.appendChild(contentParagraph3);
}

function showAbout() {
  let contentDiv = document.getElementById("content");
  contentDiv.textContent = "";
  let aboutTitle = document.createElement("h1");
  aboutTitle.textContent = "Om mig";
  let aboutParagraph1 = document.createElement("p");
  aboutParagraph1.textContent =
    "Jag är en helt vanligt ovanlig person som gillar att samla på saker. Det handlar väl inte så mycket om att samla som att jag inte tycker om att slänga saker som det inte är fel på - och så finns det vissa saker som jag vill ha fler av.";
  let aboutParagraph2 = document.createElement("p");
  aboutParagraph2.textContent =
    "När jag inte samlar mina skatter på hög ägnar jag mig åt att sortera dem, lägga dem på bra ställen där jag glömmer att jag har dem och ibland använder jag dem till och med - tex de där lådorna med garn som jag till och från flyttar på och sedan rotar runt i för att sticka bollar.";

  contentDiv.appendChild(aboutTitle);
  aboutTitle.appendChild(aboutParagraph1);
  aboutTitle.appendChild(aboutParagraph2);
}

function showContact() {
  let contentDiv = document.getElementById("content");
  contentDiv.textContent = "";
  let contactTitle = document.createElement("h2");
  contactTitle.textContent = "Kontakta mig:";
  let contactParagraph1 = document.createElement("p");
  contactParagraph1.textContent = "Via mail: karlsen1973@outlook.com";
  let contactParagraph2 = document.createElement("p");
  contactParagraph2.textContent =
    "Via LinkedIn: https://www.linkedin.com/in/annakarlsen/";

  contentDiv.appendChild(contactTitle);
  contactTitle.appendChild(contactParagraph1);
  contactTitle.appendChild(contactParagraph2);
}

function showRecipe(recipe) {
  let contentDiv = document.getElementById("content");
  contentDiv.textContent = "";

  let recipeTitle = document.createElement("h2");
  recipeTitle.textContent = recipe.name;

  let ingredientsTitle = document.createElement("h2");
  ingredientsTitle.textContent = "Ingredienser:";

  let ingredientsList = document.createElement("ul");
  recipe.ingredients.forEach((ingredient) => {
    let ingredientItem = document.createElement("li");
    ingredientItem.textContent = ingredient;
    ingredientsList.appendChild(ingredientItem);
  });

  let instructionsTitle = document.createElement("h2");
  instructionsTitle.textContent = "Gör så här:";

  let instructionsList = document.createElement("ol");
  recipe.instructions.forEach((instruction) => {
    let instructionItem = document.createElement("li");
    instructionItem.textContent = instruction;
    instructionsList.appendChild(instructionItem);
  });

  let notesTitle = document.createElement("h2");
  notesTitle.textContent = "Tips!";

  let notesList = document.createElement("ul");
  recipe.notes.forEach((note) => {
    let noteItem = document.createElement("li");
    noteItem.textContent = note;
    notesList.appendChild(noteItem);
  });

  contentDiv.appendChild(recipeTitle);
  contentDiv.appendChild(ingredientsTitle);
  contentDiv.appendChild(ingredientsList);
  contentDiv.appendChild(instructionsTitle);
  contentDiv.appendChild(instructionsList);
  contentDiv.appendChild(notesTitle);
  contentDiv.appendChild(notesList);
}

function generateRecipeLinks(recipeData) {
  const recipeSubmenu = document.getElementById("recipeSubmenu");
  recipeSubmenu.textContent = "";

  recipeData.forEach((recipe) => {
    const recipeLink = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = recipe.name;

    link.addEventListener("click", function (event) {
      event.preventDefault();
      showRecipe(recipe);
    });
    recipeLink.appendChild(link);
    recipeSubmenu.appendChild(recipeLink);
  });
}

document.getElementById("homeLink").addEventListener("click", showHome);
document.getElementById("aboutLink").addEventListener("click", showAbout);
document.getElementById("contactLink").addEventListener("click", showContact);

showHome();

document.getElementById("aboutLink").addEventListener("click", function () {
  showAbout();
});
document.getElementById("contactLink").addEventListener("click", function () {
  showContact();
});

function updateTime() {
  let currentTimeElement = document.getElementById("currentTime");
  if (currentTimeElement) {
    let now = new Date();
    let days = [
      "Söndag",
      "Måndag",
      "Tisdag",
      "Onsdag",
      "Torsdag",
      "Fredag",
      "Lördag",
    ];
    let dayOfWeek = days[now.getDay()];
    let date = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    currentTimeElement.textContent =
      "Idag är det " +
      dayOfWeek +
      " " +
      date +
      "/" +
      month +
      "/" +
      year +
      " och klockan är " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  generateRecipeLinks(recipes);

  updateTime();
  setInterval(updateTime, 1000);
});
