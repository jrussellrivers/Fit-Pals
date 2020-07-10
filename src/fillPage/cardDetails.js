function cardDetails(element){
    let cardDetails = document.createElement('div')
    if (element.assetDescriptions[0] != undefined){
        cardDetails.innerHTML = element.assetDescriptions[0].description
    } else{
        cardDetails.innerHTML = 'No Description'
    }
    cardDetails.setAttribute('class','hidden')

    return cardDetails
}

export default cardDetails