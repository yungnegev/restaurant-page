import menuImgSrc from './assets/restaurant-menu.png'
import pizzaImgSrc from './assets/pizza.png'
import sushiImgSrc from './assets/sushi.png'
import meatImgSrc from './assets/meat.png'
import ramenImgSrc from './assets/ramen.png'
import fishImgSrc from './assets/fish.png'


const menuPage = () => {
    let page = document.createElement('div')
    page.classList.add('page')
    page.classList.add('menu-page')
    /* --- page elements --- */
    /* --- menu img --- */
    let menuImg = document.createElement('img')
    menuImg.src = menuImgSrc
    menuImg.classList.add('menu-img')
    /* --- card container --- */
    let cardContainer = document.createElement('div')
    cardContainer.classList.add('card-container')
        /* --- card item --- */
        let card1 = document.createElement('div')
        card1.classList.add('card')
        let card1Img = document.createElement('img')
        card1Img.src = pizzaImgSrc
        card1Img.style.height = '200px'
        card1.append(card1Img)
        let name = document.createElement('div')
        name.classList.add('card-name')
        name.innerText = 'Pizza'
        card1.append(name)
        let priceContainer = document.createElement('div')
        priceContainer.classList.add('card-price-container')
        let priceIcon = document.createElement('span')
        priceIcon.classList.add('material-symbols-outlined')
        priceIcon.innerText = 'payments'
        let priceValue = document.createElement('span')
        priceValue.innerText = 'Price: 18.00'
        priceContainer.append(priceIcon,priceValue)
        card1.append(priceContainer)
        let btn = document.createElement('div')
        btn.classList.add('card-btn')
        let btnIcon = document.createElement('span')
        btnIcon.classList.add('material-symbols-outlined')
        btnIcon.innerText = 'shopping_bag'
        let btnText = document.createElement('div')
        btnText.innerText = 'Order'
        btn.append(btnIcon, btnText)
        card1.append(btn)

        let card2 = document.createElement('div')
        card2.classList.add('card')
        let card2Img = document.createElement('img')
        card2Img.src = sushiImgSrc
        card2Img.style.height = '200px'
        card2.append(card2Img)
        let name2 = document.createElement('div')
        name2.classList.add('card-name')
        name2.innerText = 'Sushi'
        card2.append(name2)
        let priceContainer2 = document.createElement('div')
        priceContainer2.classList.add('card-price-container')
        let priceIcon2 = document.createElement('span')
        priceIcon2.classList.add('material-symbols-outlined')
        priceIcon2.innerText = 'payments'
        let priceValue2 = document.createElement('span')
        priceValue2.innerText = 'Price: 22.00'
        priceContainer2.append(priceIcon2,priceValue2)
        card2.append(priceContainer2)
        let btn2 = document.createElement('div')
        btn2.classList.add('card-btn')
        let btnIcon2 = document.createElement('span')
        btnIcon2.classList.add('material-symbols-outlined')
        btnIcon2.innerText = 'shopping_bag'
        let btnText2 = document.createElement('div')
        btnText2.innerText = 'Order'
        btn2.append(btnIcon2, btnText2)
        card2.append(btn2)

        let card3 = document.createElement('div')
        card3.classList.add('card')
        let card3Img = document.createElement('img')
        card3Img.src = meatImgSrc
        card3Img.style.height = '200px'
        card3.append(card3Img)
        let name3 = document.createElement('div')
        name3.classList.add('card-name')
        name3.innerText = 'Wagyu'
        card3.append(name3)
        let priceContainer3 = document.createElement('div')
        priceContainer3.classList.add('card-price-container')
        let priceIcon3 = document.createElement('span')
        priceIcon3.classList.add('material-symbols-outlined')
        priceIcon3.innerText = 'payments'
        let priceValue3 = document.createElement('span')
        priceValue3.innerText = 'Price: 39.00'
        priceContainer3.append(priceIcon3,priceValue3)
        card3.append(priceContainer3)
        let btn3 = document.createElement('div')
        btn3.classList.add('card-btn')
        let btnIcon3 = document.createElement('span')
        btnIcon3.classList.add('material-symbols-outlined')
        btnIcon3.innerText = 'shopping_bag'
        let btnText3 = document.createElement('div')
        btnText3.innerText = 'Order'
        btn3.append(btnIcon3, btnText3)
        card3.append(btn3)


        let card4 = document.createElement('div')
        card4.classList.add('card')
        let card4Img = document.createElement('img')
        card4Img.src = ramenImgSrc
        card4Img.style.height = '200px'
        card4.append(card4Img)
        let name4 = document.createElement('div')
        name4.classList.add('card-name')
        name4.innerText = 'Ramen'
        card4.append(name4)
        let priceContainer4 = document.createElement('div')
        priceContainer4.classList.add('card-price-container')
        let priceIcon4 = document.createElement('span')
        priceIcon4.classList.add('material-symbols-outlined')
        priceIcon4.innerText = 'payments'
        let priceValue4 = document.createElement('span')
        priceValue4.innerText = 'Price: 13.00'
        priceContainer4.append(priceIcon4,priceValue4)
        card4.append(priceContainer4)
        let btn4 = document.createElement('div')
        btn4.classList.add('card-btn')
        let btnIcon4 = document.createElement('span')
        btnIcon4.classList.add('material-symbols-outlined')
        btnIcon4.innerText = 'shopping_bag'
        let btnText4 = document.createElement('div')
        btnText4.innerText = 'Order'
        btn4.append(btnIcon4, btnText4)
        card4.append(btn4)

        let card5 = document.createElement('div')
        card5.classList.add('card')
        let card5Img = document.createElement('img')
        card5Img.src = fishImgSrc
        card5Img.style.height = '200px'
        card5.append(card5Img)
        let name5 = document.createElement('div')
        name5.classList.add('card-name')
        name5.innerText = 'Dorado'
        card5.append(name5)
        let priceContainer5 = document.createElement('div')
        priceContainer5.classList.add('card-price-container')
        let priceIcon5 = document.createElement('span')
        priceIcon5.classList.add('material-symbols-outlined')
        priceIcon5.innerText = 'payments'
        let priceValue5 = document.createElement('span')
        priceValue5.innerText = 'Price: 27.00'
        priceContainer5.append(priceIcon5,priceValue5)
        card5.append(priceContainer5)
        let btn5 = document.createElement('div')
        btn5.classList.add('card-btn')
        let btnIcon5 = document.createElement('span')
        btnIcon5.classList.add('material-symbols-outlined')
        btnIcon5.innerText = 'shopping_bag'
        let btnText5 = document.createElement('div')
        btnText5.innerText = 'Order'
        btn5.append(btnIcon5, btnText5)
        card5.append(btn5)
        
        cardContainer.append(card1)
        cardContainer.append(card2)
        cardContainer.append(card3)
        cardContainer.append(card4)
        cardContainer.append(card5)

    page.append(menuImg)
    page.append(cardContainer)
    return page
}




export default menuPage