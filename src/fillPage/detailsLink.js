function detailsLink(){
    let detailsLink = document.createElement('a')
    detailsLink.innerText = 'Click here for more details ⧩'

    detailsLink.setAttribute('class', 'details-link')

    detailsLink.addEventListener('click', (event)=>{
        event.target.parentElement.nextElementSibling.classList.toggle('hidden')
    })

    return detailsLink
}

export default detailsLink