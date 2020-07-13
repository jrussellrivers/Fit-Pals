import startSearch from './startSearch.js'
import nextPage from './nextPage.js'

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

let nextButton = document.getElementById('next')
nextButton.addEventListener('click', ()=>{
    page += 1

    let inpActivity = document.getElementById('inpActivity').value
    let inpRadius = document.getElementById('inpRadius').value
    let inpDate = document.getElementById('inpDate').value
    let continuousDate = inpDate + '..'

    nextPage(inpActivity, page, continuousDate, inpRadius)
})
nextButton.disabled = true