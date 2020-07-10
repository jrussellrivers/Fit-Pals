function cardDate(element){
    let cardDate = document.createElement('div')
    let utcDate = element.activityRecurrences[0].activityStartDate
    let newDateArray = []
    for (var i = 0; i < utcDate.length; i++) {
        let letter = utcDate[i]
        newDateArray.push(letter)
    }

    let newDateString = `${newDateArray[5]}${newDateArray[6]}/${newDateArray[8]}${newDateArray[9]}/${newDateArray[2]}${newDateArray[3]} @ ${newDateArray[11]}${newDateArray[12]}${newDateArray[13]}${newDateArray[14]}${newDateArray[15]}`
    
    cardDate.innerText = newDateString

    return cardDate
}

export default cardDate