import detailsLink from './detailsLink.js'
import cardUrl from './cardUrl.js'

function bottomInfo(element){
    let bottomInfo = document.createElement('div')
    bottomInfo.setAttribute('class', 'bottom-info')

    let newDetailsLink = detailsLink()
    let newCardUrl = cardUrl(element)

    bottomInfo.append(newDetailsLink, newCardUrl)

    return bottomInfo
}

export default bottomInfo