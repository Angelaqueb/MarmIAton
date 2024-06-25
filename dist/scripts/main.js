const menu =  document.querySelector('.nav_menuResponsive')
const burgerButton = document.querySelector('.burger_icon')

burgerButton.addEventListener('click', function(){
    console.log('click')
    menu.classList.toggle('active')
})

//_______________________Page recette__________________________________
const page0L =  document.querySelector('.sectionRecipeDio_left1_img')
const page1L =  document.querySelector('.sectionRecipeDio_left2_img')
const page0R =  document.querySelector('.sectionRecipeDio_right1')
const page1R =  document.querySelector('.sectionRecipeDio_right2')
const page1LButton = document.querySelector('.sectionRecipeDio_right1_button')
const page2LButton = document.querySelector('.sectionRecipeDio_right2_button_round')

page1LButton.addEventListener('click', function(){
    console.log('click')
    page1R.classList.toggle('active')
    page0R.classList.toggle('active')
    page1L.classList.toggle('active')
    page0L.classList.toggle('active')
})


page2LButton.addEventListener('click', function(){
    console.log('click')
    page1R.classList.remove('active')
    page0R.classList.remove('active')
    page1L.classList.remove('active')
    page0L.classList.remove('active')
})


//_______________________Page recette slide__________________________________
const page2LButton = document.querySelector('.sectionRecipeDio_right2_button_round')
