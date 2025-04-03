import "./styles.css";
import { createHomePage } from "./home"; 
import { createMenuList } from "./menu";  

// createHomePage()
createMenuList()



const homeButton = document.querySelector('#home')
const menuButton = document.querySelector('#menu')


homeButton.addEventListener('click',(event) =>{
    event.preventDefault()
    createHomePage()
    
})

menuButton.addEventListener('click',(event) =>{
    event.preventDefault()
    createMenuList()

})