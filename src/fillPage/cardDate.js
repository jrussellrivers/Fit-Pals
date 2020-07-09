function cardDate(element){
    let cardDate = document.createElement('div')
    cardDate.innerText = element.activityRecurrences[0].activityStartDate

    return cardDate
}

export default cardDate