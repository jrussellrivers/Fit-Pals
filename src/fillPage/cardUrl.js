function cardUrl(element){
    let cardUrl = document.createElement('a')
    cardUrl.innerText = 'Register Here'
    cardUrl.setAttribute('href', element.homePageUrlAdr)

    return cardUrl
}

export default cardUrl