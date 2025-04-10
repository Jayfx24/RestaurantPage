import "./styles.css";
import { createHomePage } from "./home"; 
import { createMenuList } from "./menu";  
import { createAbout } from "./about";
import { createReserve } from "./reserve";


createHomePage()



const homeButton = document.querySelector('#home')
const menuButton = document.querySelector('#menu')
const aboutButton = document.querySelector('#about')
const reserveButton = document.querySelector('#reserve')
const showMenu = document.querySelector('#showMenu')



homeButton.addEventListener('click',(event) =>{
    event.preventDefault()
    createHomePage()
    
})

menuButton.addEventListener('click',(event) =>{
    event.preventDefault()
    createMenuList()

})

showMenu.addEventListener('click',(event) =>{
    event.preventDefault()
    createMenuList()

})

aboutButton.addEventListener('click',(event) =>{
    event.preventDefault()
    createAbout()

})

reserveButton.addEventListener('click',(event) =>{
    event.preventDefault()
    createReserve()

})