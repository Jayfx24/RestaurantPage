 


export function createHomePage() {
  const contentContainer = document.querySelector("#content");
  const contentLogo = document.createElement("div");
  const contentTexts = document.createElement("div");
  const welcomeText = document.createElement("p");
  const otherWelcomeTexts = document.createElement("p");


  contentContainer.innerHTML = ''
  contentLogo.id = "content-logo";
  contentTexts.className = "content-texts";
  contentLogo.innerHTML = "<h1>Holder</h1>";
  welcomeText.innerHTML =
    "<p><strong>Welcome,</strong> to the <strong>Lorem Impase Foods</strong></p>";
  otherWelcomeTexts.innerHTML =
    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellendus dolore, quo minus delectus id! Ab a dignissimos, eius deserunt enim architecto fugit facilis repellendus nobis odit libero perferendis reiciendis!</p>";

    contentTexts.appendChild(welcomeText)
    contentTexts.appendChild(otherWelcomeTexts)
    contentContainer.appendChild(contentLogo)
    contentContainer.appendChild(contentTexts)

}

