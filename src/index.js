import './styles/main.css'
import navBar from './navBarModule'
import homePage from './homePageModule'
import menuPage from './menuModule'
import contactPage from './contactPageModule'

const content = document.querySelector('#content')
content.append(navBar())
content.append(homePage())

const homeBtn = document.querySelector('#home-btn')
homeBtn.addEventListener('click', () =>{
    let toRemove = content.childNodes[2]
    content.removeChild(toRemove)
    content.append(homePage())
})

const menuBtn = document.querySelector('#menu-btn')
menuBtn.addEventListener('click', () => {
    let toRemove = content.childNodes[2]
    content.removeChild(toRemove)
    content.append(menuPage())
})

const contactBtn = document.querySelector('#contact-btn')
contactBtn.addEventListener('click', () => {
    let toRemove = content.childNodes[2]
    content.removeChild(toRemove)
    content.append(contactPage())
})











