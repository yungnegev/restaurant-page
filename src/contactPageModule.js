import locationImgSrc from './assets/location.png'
import mapImgSrc from './assets/default-marker.jpg'

const contactPage = () => {
    let page = document.createElement('div')
    page.classList.add('page')
    page.classList.add('contact-page')
    
        /* page items */
        let mainImg = document.createElement('img')
        mainImg.src = locationImgSrc
        mainImg.classList.add('location-img')

        let find = document.createElement('div')
        find.innerText = 'Find us.'
        find.classList.add('find-us')

        let map = document.createElement('img')
        map.src = mapImgSrc
        map.classList.add('map-img')

        let adress = document.createElement('div')
        adress.classList.add('adress-us')
        adress.innerText = '185 West 7th Street, New York, NY 10002'
            
    
        page.append(mainImg)
        page.append(find)
        page.append(map)
        page.append(adress)
    
    return page
}


export default contactPage 