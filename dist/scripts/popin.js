//_______________________pop in__________________________________


const popin =  document.querySelector('.popin')
const buttonVoice = document.querySelector('.news_1')
const closeVoice = document.querySelector('.popin_container1_X')
const closeVoice2 = document.querySelector('.popin_container2_button')


buttonVoice.addEventListener('click', function(){
    console.log('click')
    popin.classList.add('active')
})


closeVoice.addEventListener('click', function(){
    console.log('click')
    popin.classList.remove('active')
})

closeVoice2.addEventListener('click', function(){
    console.log('click')
    popin.classList.remove('active')
})

//_______________________pop in2__________________________________


const popin2 =  document.querySelector('.popin2')
const buttonConnexion = document.querySelector('.news_2')
const closeConnexion = document.querySelector('.popin2_container1_X')
const closeConnexion2 = document.querySelector('.input2')


buttonConnexion.addEventListener('click', function(){
    console.log('click')
    popin2.classList.add('active')
})

closeConnexion.addEventListener('click', function(){
    console.log('click')
    popin2.classList.remove('active')
})
closeConnexion2.addEventListener('click', function(){
    console.log('click')
    popin2.classList.remove('active')
})
