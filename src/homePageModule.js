import restImgSrc from './assets/restaurant.png'
import starsImgSrc from './assets/stars.png'

const homePage = () => {
    let page = document.createElement('div')
    page.classList.add('page')
    page.classList.add('home-page')
    
    /* page elements */
    /* --- Img --- */
    let restImg = document.createElement('img')
    restImg.classList.add('page-img')
    restImg.setAttribute('id', 'rest-img')
    restImg.src = restImgSrc
    /* --- welcome --- */
    let welcome = document.createElement('div')
    welcome.classList.add('welcome-text')
    welcome.innerText = 'Welcome to our restaurant.'
    /* --- Lorem --- */
    let lorem = document.createElement('div')
    lorem.classList.add('welcome-lorem')
    lorem.innerText = '"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo accusantium, eligendi recusandae consequatur impedit nam pariatur beatae deleniti sunt aspernatur quod iste ipsa accusamus debitis? Quos, nostrum praesentium tempore quisquam, nulla ea repellat obcaecati vitae impedit voluptate amet atque eius."'
    /* --- stars --- */
    let starsImg = document.createElement('img')
    starsImg.src = starsImgSrc
    starsImg.classList.add('home-stars')

    
    page.append(restImg)
    page.append(welcome)
    page.append(lorem)
    page.append(starsImg)
    return page
}


export default homePage