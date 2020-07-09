import checkImage from '../checkImage.js'

function cardLogo(element){
    let cardLogo = document.createElement('img')
    cardLogo.setAttribute('src', element.logoUrlAdr)
    checkImage(cardLogo)

    return cardLogo
}

export default cardLogo