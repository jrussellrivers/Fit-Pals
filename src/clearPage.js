function clearPage() {
    let clearPage = document.getElementById('page');
    while ( clearPage.firstChild ) clearPage.removeChild( clearPage.firstChild );
}

export default clearPage