function cardDetails(element){
    let cardDetails = document.createElement('div')
    cardDetails.innerHTML = element.assetDescriptions[0].description
    cardDetails.setAttribute('class','hidden')

    return cardDetails
}

export default cardDetails