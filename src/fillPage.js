import checkImage from './checkImage.js'

function fillPage(storedPage){
    storedPage.forEach(element => {
        let page = document.getElementById('page')
        let eventCard = document.createElement('div')
        eventCard.setAttribute('class', 'event-card')

        let imgDiv = document.createElement('div')
        imgDiv.setAttribute('class', 'img-div')
        let infoDiv = document.createElement('div')
        infoDiv.setAttribute('class', 'info-div')

        // ------------------------------------

        let cardLogo = document.createElement('img')
        cardLogo.setAttribute('src', element.logoUrlAdr)
        checkImage(cardLogo)

        // ------------------------------------
        let topInfo = document.createElement('div')
        topInfo.setAttribute('class', 'top-info')

        let cardName = document.createElement('div')
        cardName.innerText = element.assetName

        let cardAddress = document.createElement('div')
        cardAddress.innerText = `${element.place.addressLine1Txt}, ${element.place.cityName}, ${element.place.stateProvinceCode}`

        let cardDate = document.createElement('div')
        cardDate.innerText = element.activityRecurrences[0].activityStartDate

        topInfo.append(cardName, cardAddress, cardDate)
        // ------------------------------------

        let bottomInfo = document.createElement('div')
        bottomInfo.setAttribute('class', 'bottom-info')

        let detailsLink = document.createElement('a')
        detailsLink.innerText = 'Click here for more details'

        detailsLink.addEventListener('click', (event)=>{
            event.target.parentElement.nextElementSibling.classList.toggle('hidden')
        })

        let cardUrl = document.createElement('a')
        cardUrl.innerText = element.homePageUrlAdr
        cardUrl.setAttribute('href', element.homePageUrlAdr)

        bottomInfo.append(detailsLink, cardUrl)
        // ------------------------------------

        let cardDetails = document.createElement('div')
        cardDetails.innerHTML = element.assetDescriptions[0].description
        cardDetails.setAttribute('class','hidden')

        // ------------------------------------

        imgDiv.append(cardLogo)
        infoDiv.append(topInfo, bottomInfo, cardDetails)

        eventCard.append(imgDiv, infoDiv)
        page.append(eventCard)
    });
}

export default fillPage