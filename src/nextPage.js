import clearPage from './clearPage.js'
import storePage from './storePage.js'

function nextPage(activity, newPage, date, radius){
    clearPage()
    window.scrollTo(0,0)
    storePage(activity, newPage, date, radius)
    // fillPage(storedPage)
}

export default nextPage