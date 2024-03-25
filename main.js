import './style.css'

function showHome() {
  let contentDiv = document.getElementById('content');
  let contentTitle = document.createElement('h1');
  contentTitle.textContent = "Välkommen!";
  let contentText = document.createElement('p');
  contentText.textContent = "Jag har en passion för kokböcker. Inte så att jag följer recept, utan snarare läser jag dem och roas av att få inspiration av recepten. Ju äldre böcker desto bättre, men det hindrar ju såklart inte att jag fyndar lite på bokrean när jag har chansen.";
  contentDiv.appendChild(contentTitle);
  contentTitle.appendChild(contentText);

}

function showAbout() {
  let contentDiv = document.getElementById('content');
  contentDiv.textContent = "";
  let aboutTitle = document.createElement('h1');
  aboutTitle.textContent = "Om mig";
  let aboutParagraph1 = document.createElement('p');
  aboutParagraph1.textContent = "Jag är en helt vanligt ovanlig person som gillar att samla på saker. Det handlar väl inte så mycket om att samla som att jag inte tycker om att slänga saker som det inte är fel på - och så finns det vissa saker som jag vill ha fler av.";
  let aboutParagraph2 = document.createElement('p');
  aboutParagraph2.textContent = "När jag inte samlar mina skatter på hög ägnar jag mig åt att sortera dem, lägga dem på bra ställen där jag glömmer att jag har dem och ibland använder jag dem till och med - tex de där lådorna med garn som jag till och från flyttar på och sedan rotar runt i för att sticka bollar."

  contentDiv.appendChild(aboutTitle);
  aboutTitle.appendChild(aboutParagraph1);
  aboutTitle.appendChild(aboutParagraph2);

}

function showContact() {
  let contentDiv = document.getElementById('content');
  contentDiv.textContent = "";
  let contactTitle = document.createElement('h2');
  contactTitle.textContent = "Kontakta mig:";
  let contactParagraph1 = document.createElement('p');
  contactParagraph1.textContent = "Via mail:";
  let contactParagraph2 = document.createElement('p');
  contactParagraph2.textContent = "Via LinkedIn:";

  contentDiv.appendChild(contactTitle);
  contactTitle.appendChild(contactParagraph1);
  contactTitle.appendChild(contactParagraph2);
}

document.getElementById("homeLink").addEventListener("click", showHome);
document.getElementById("aboutLink"). addEventListener("click", showAbout);
document.getElementById("contactLink").addEventListener("click", showContact);

showHome();