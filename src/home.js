export function createHomePage() {
  const contentContainer = document.querySelector("#content");
  const contentLogo = document.createElement("div");
  const homeContainer = document.createElement("div");
  const showMenu = document.createElement("button");
  const showReserve = document.createElement('button')
  const contentTexts = document.createElement("div");
  const showBtns = document.createElement("div");

  const welcomeText = document.createElement("p");
  const otherWelcomeTexts = document.createElement("p");

  contentContainer.innerHTML = "";

  contentLogo.id = "content-logo";
  homeContainer.id = "homeContainer";
  welcomeText.className = "tagline";
  contentTexts.className = "content-texts";
  contentLogo.innerHTML = "<h1>Holder</h1>";
  welcomeText.innerHTML =
    "<p><strong>Welcome to Holder — A Symphony of Flavor and Elegance</strong></p>";
  otherWelcomeTexts.innerHTML =
    "<p>Where culinary artistry meets timeless ambiance. Join us for an unforgettable dining experience rooted in passion, precision, and hospitality.</p>";

  showBtns.id = 'showBtns'
  showMenu.textContent = "Our Menu";
  showMenu.id ="showMenu"
  showReserve.textContent = "Make a Reservation";
  showReserve.id ="showReserve"


  showBtns.appendChild(showMenu)
  // showBtns.appendChild(showReserve)
  contentTexts.appendChild(welcomeText);
  contentTexts.appendChild(otherWelcomeTexts);
  homeContainer.appendChild(contentLogo);
  homeContainer.appendChild(contentTexts);
  homeContainer.appendChild(showBtns)
  contentContainer.appendChild(homeContainer);
}
