import "./styles.css";
import { createHomePage } from "./home";   

createHomePage()

const contentContainer = document.querySelector("#content");

const homeButton = document.querySelector('#home')
const menuButton = document.querySelector('#menu')

menuButton.addEventListener('click',(event) =>{
    event.preventDefault()
    contentContainer.innerHTML = ''
    // homeButton.className = 'hidden'
    // remove contentContainer and at it to each module so ir clears the content div before displaying new module

})
