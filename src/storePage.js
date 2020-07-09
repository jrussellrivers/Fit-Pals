import {activeKey, proxy} from "../config.js";
import fillPage from './fillPage.js'

function storePage(activity, page, date, radius){
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

export default storePage

