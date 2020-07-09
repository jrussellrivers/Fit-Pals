function cardAddress(element){
    let cardAddress = document.createElement('div')
    cardAddress.innerText = `${element.place.addressLine1Txt}, ${element.place.cityName}, ${element.place.stateProvinceCode}`

    return cardAddress
}

export default cardAddress