import clearPage from './clearPage.js'
import storePage from './storePage.js'

function startSearch(activity, page, date, radius){
    clearPage()
    storePage(activity, page, date, radius)
    // fillPage(storedPage)
}

export default startSearch