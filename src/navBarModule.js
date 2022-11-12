/* Navigation bar module */







const navBar = () => {
    const bar = document.createElement('div')
    bar.classList.add('nav-bar')
    /* ------ bar content ---------*/

    /* --- home btn --- */
    const home = document.createElement('button')
    home.setAttribute('id', 'home-btn')
    home.classList.add('bar-btn')
    const homeIcon = document.createElement('span')
    homeIcon.classList.add('material-symbols-outlined')
    homeIcon.innerText = 'home'
    const homeText = document.createElement('span')
    homeText.innerText = 'Home'
    home.append(homeIcon)
    home.append(homeText)
    home.addEventListener('click', ()=> {
        home.classList.add('active')
        menu.classList.remove('active')
    })
    bar.append(home)
    /* --- menu btn --- */
    const menu = document.createElement('button')
    menu.setAttribute('id', 'menu-btn')
    menu.classList.add('bar-btn')
    const menuIcon = document.createElement('span')
    menuIcon.classList.add('material-symbols-outlined')
    menuIcon.innerText = 'menu_book'
    const menuText = document.createElement('span')
    menuText.innerText = 'Menu'
    menu.append(menuIcon)
    menu.append(menuText)
    menu.addEventListener('click', ()=>{
        menu.classList.add('active')
        home.classList.remove('active')
        contact.classList.remove('active')
    })
    bar.append(menu)
    /* --- contact btn --- */
    const contact = document.createElement('button')
    contact.setAttribute('id', 'contact-btn')
    contact.classList.add('bar-btn')
    const contactIcon = document.createElement('span')
    contactIcon.classList.add('material-symbols-outlined')
    contactIcon.innerText = 'pin_drop'
    const contactText = document.createElement('span')
    contactText.innerText = 'Contact'
    contact.append(contactIcon)
    contact.append(contactText)
    contact.addEventListener('click', ()=>{
        menu.classList.remove('active')
        home.classList.remove('active')
        contact.classList.add('active')
    })
    bar.append(contact)






    return bar
}


export default navBar