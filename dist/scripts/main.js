const menu =  document.querySelector('.nav_menuResponsive')
const burgerButton = document.querySelector('.burger_icon')

burgerButton.addEventListener('click', function(){
    console.log('click')
    menu.classList.toggle('active')
})

