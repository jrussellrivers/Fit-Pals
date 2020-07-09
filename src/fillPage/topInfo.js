import cardName from './cardName.js'
import cardAddress from './cardAddress.js'
import cardDate from './cardDate.js'

function topInfo(element){
    let topInfo = document.createElement('div')
    topInfo.setAttribute('class', 'top-info')

    let newCardName = cardName(element)
    let newCardAddress = cardAddress(element)
    let newCardDate = cardDate(element)

    topInfo.append(newCardName, newCardAddress, newCardDate)

    return topInfo
}

export default topInfo