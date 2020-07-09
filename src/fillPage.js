import eventCard from './fillPage/eventCard.js'
import imgDiv from './fillPage/imgDiv.js'
import infoDiv from './fillPage/infoDiv.js'


function fillPage(storedPage){
    storedPage.forEach(element => {
        let page = document.getElementById('page')

        let newEventCard = eventCard()
        
        let newImgDiv = imgDiv(element)
        let newInfoDiv = infoDiv(element)

        newEventCard.append(newImgDiv, newInfoDiv)
        page.append(newEventCard)
    });
}

export default fillPage