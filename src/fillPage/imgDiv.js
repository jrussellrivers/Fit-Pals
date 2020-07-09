import cardLogo from './cardLogo.js'

function imgDiv(element){
    let imgDiv = document.createElement('div')
    imgDiv.setAttribute('class', 'img-div')

    let newCardLogo = cardLogo(element)
    imgDiv.append(newCardLogo)

    return imgDiv
}

export default imgDiv