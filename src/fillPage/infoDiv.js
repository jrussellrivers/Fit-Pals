import topInfo from './topInfo.js'
import bottomInfo from './bottomInfo.js'
import cardDetails from './cardDetails.js'

function infoDiv(element){
    let infoDiv = document.createElement('div')
    infoDiv.setAttribute('class', 'info-div')

    let newCardDetails = cardDetails(element)
    let newTopInfo = topInfo(element)
    let newBottomInfo = bottomInfo(element)

    infoDiv.append(newTopInfo, newBottomInfo, newCardDetails)

    return infoDiv
}

export default infoDiv