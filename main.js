import './style.css'

function showHome() {
  document.getElementById("content").textContent = "Välkommen. Här ska det hamna innehåll";
}

function showAbout() {
  document.getElementById("content").textContent = "Om mig. Här kommer det info om mig";

}

function showContact() {
  document.getElementById("content").textContent = "Kontakta mig för mer information";
}

document.getElementById("homeLink").addEventListener("click", showHome);
document.getElementById("aboutLink"). addEventListener("click", showAbout);
document.getElementById("contactLink").addEventListener("click", showContact);

showHome();