function openSlideMenu(){
    document.getElementById('menu').style.width='250px';
    // document.getElementById('content').style.marginLeft='250px'
}
function closeSlideMenu(){
    document.getElementById('menu').style.width='0';
    // document.getElementById('content').style.marginLeft= '0'
}

let menuOpen = document.getElementById('menu-open')
menuOpen.addEventListener('click', ()=>{
    openSlideMenu()
})

let menuClose = document.getElementById('menu-close')
menuClose.addEventListener('click', ()=>{
    closeSlideMenu()
})

// -----------------------------------------------------

const chk = document.getElementById('chk');
chk.addEventListener('change', (cards) => {
  document.body.classList.toggle('dark');
  closeSlideMenu()
});

