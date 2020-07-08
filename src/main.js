import {activeKey, proxy} from "../config.js";

console.log('beginning of code')

let page = 1

let submitSearch = document.getElementById('Search')
submitSearch.addEventListener('click', ()=>{
    let inpActivity = document.getElementById('inpActivity').value
    let inpRadius = document.getElementById('inpRadius').value
    let inpDate = document.getElementById('inpDate').value
    let continuousDate = inpDate + '..'
    page = 1

    return startSearch(inpActivity, page, continuousDate, inpRadius)
})

function startSearch(activity, page, date, radius){
    clearPage()
    console.log('Starting page is '+page)
    storePage(activity, page, date, radius)
    // fillPage(storedPage)
}

function nextPage(activity, newPage, date, radius){
    console.log('Next page function ran')
    console.log('newPage is ' + newPage)
    clearPage()
    storePage(activity, newPage, date, radius)
    // fillPage(storedPage)
}

function storePage(activity, page, date, radius){
    console.log(`${proxy}http://api.amp.active.com/v2/search?query=${activity}&current_page=${page}&category=event&near=Atlanta,GA,US&start_date=${date}&radius=${radius}&api_key=${activeKey}`)
    fetch(`${proxy}http://api.amp.active.com/v2/search?query=${activity}&current_page=${page}&category=event&near=Atlanta,GA,US&start_date=${date}&radius=${radius}&api_key=${activeKey}`, {
        // headers:{Origin:'http://www.active.com'}
    })
    .then(resp=>resp.json())
    .then(json=>{
        // localStorage.setItem('events',JSON.stringify(json.results))
        fillPage(json.results)
    })

    // let storedPage = JSON.parse(localStorage.getItem('events'))
    // return storedPage
}

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

function checkImage(img) {
    img.onload = function() {
        return
    };
    img.onerror = function() {
        return img.setAttribute('src', 'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6')
    };
}

function clearPage() {
    let clearPage = document.getElementById('page');
    while ( clearPage.firstChild ) clearPage.removeChild( clearPage.firstChild );
}

let nextButton = document.getElementById('next')
nextButton.addEventListener('click', ()=>{
    console.log('page before is ' + page)
    page += 1
    console.log('page after is ' + page)

    let inpActivity = document.getElementById('inpActivity').value
    let inpRadius = document.getElementById('inpRadius').value
    let inpDate = document.getElementById('inpDate').value
    let continuousDate = inpDate + '..'

    nextPage(inpActivity, page, continuousDate, inpRadius)
})
