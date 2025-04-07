export function createAbout(){
    const contentContainer = document.querySelector("#content");
    const aboutContainer = document.createElement('div')
    const aboutTitle = document.createElement("h1");
    const aboutParagraph = document.createElement('p');
    contentContainer.innerHTML = ''

    aboutContainer.id = "aboutContainer"
    aboutTitle.id = "aboutTitle";
    aboutParagraph.id = "aboutParagraph";
    aboutTitle.textContent = "About Us";
    aboutParagraph.textContent = "Welcome to our world — where creativity meets purpose. We're a passionate team dedicated to delivering quality, style, and innovation in everything we do. Our mission is simple: to craft experiences that leave a lasting impression. Whether you're browsing, buying, or just stopping by, we aim to make your time with us meaningful. Every detail you see has been thoughtfully designed with you in mind — because you deserve the best.Thanks for being part of our journey. We’re just getting started.";

    aboutContainer.appendChild(aboutTitle);
    aboutContainer.appendChild(aboutParagraph);
    contentContainer.appendChild(aboutContainer)
}