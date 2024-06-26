const menu =  document.querySelector('.nav_menuResponsive')
const burgerButton = document.querySelector('.burger_icon')

burgerButton.addEventListener('click', function(){
    console.log('click')
    menu.classList.toggle('active')
})

//_______________________Page recette  slide __________________________________

document.addEventListener('DOMContentLoaded', function() {
    const pagesLeft = [
        document.querySelector('.sectionRecipeDio_left0_img'),
        document.querySelector('.sectionRecipeDio_left1_img'),
        document.querySelector('.sectionRecipeDio_left2_img'),
        document.querySelector('.sectionRecipeDio_left3_img'),
        document.querySelector('.sectionRecipeDio_left4_img'),
        document.querySelector('.sectionRecipeDio_left5_img'),
        document.querySelector('.sectionRecipeDio_left6_img'),
        document.querySelector('.sectionRecipeDio_left7_img'),
    ];
    
    const pagesRight = [
        document.querySelector('.sectionRecipeDio_right0'),
        document.querySelector('.sectionRecipeDio_right1'),
        document.querySelector('.sectionRecipeDio_right2'),
        document.querySelector('.sectionRecipeDio_right3'),
        document.querySelector('.sectionRecipeDio_right4'),
        document.querySelector('.sectionRecipeDio_right5'),
        document.querySelector('.sectionRecipeDio_right6'),
        document.querySelector('.sectionRecipeDio_right7'),
    ];
    
    const buttonsNext = [
        document.querySelector('.sectionRecipeDio_right0_button'),
        document.querySelector('.sectionRecipeDio_p1right_button_round'),
        document.querySelector('.sectionRecipeDio_p2right_button_round'),
        document.querySelector('.sectionRecipeDio_p3right_button_round'),
        document.querySelector('.sectionRecipeDio_p4right_button_round'),
        document.querySelector('.sectionRecipeDio_p5right_button_round'),
        document.querySelector('.sectionRecipeDio_p6right_button_round')
    ];
    
    const buttonsPrev = [
        document.querySelector('.sectionRecipeDio_p1left_button_round'),
        document.querySelector('.sectionRecipeDio_p2left_button_round'),
        document.querySelector('.sectionRecipeDio_p3left_button_round'),
        document.querySelector('.sectionRecipeDio_p4left_button_round'),
        document.querySelector('.sectionRecipeDio_p5left_button_round'),
        document.querySelector('.sectionRecipeDio_p6left_button_round')
    ];
    
    function goToPage(currentPageIndex, nextPageIndex) {
        if (pagesLeft[currentPageIndex]) {
            pagesLeft[currentPageIndex].style.display = 'none';
            pagesRight[currentPageIndex].style.display = 'none';
        }
        if (pagesLeft[nextPageIndex]) {
            pagesLeft[nextPageIndex].style.display = 'block';
            pagesRight[nextPageIndex].style.display = 'block';
        }
    }
    
    buttonsNext.forEach((button, index) => {
        button.addEventListener('click', function() {
            console.log('click next');
            goToPage(index, index + 1);
        });
    });
    
    buttonsPrev.forEach((button, index) => {
        button.addEventListener('click', function() {
            console.log('click prev');
            goToPage(index + 1, index);
        });
    });
});


