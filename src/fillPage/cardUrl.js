function cardUrl(element){
    let cardUrl = document.createElement('a')
    cardUrl.innerText = element.homePageUrlAdr
    cardUrl.setAttribute('href', element.homePageUrlAdr)

    return cardUrl
}

export default cardUrl