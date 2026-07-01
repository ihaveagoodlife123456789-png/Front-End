let divOne = document.querySelector(".container1");
let divTwo = document.querySelector(".container2");
let button = document.querySelector(".button");
let headingOne = document.querySelector(".firstHeading");
let headingTwo = document.querySelector(".secondHeading");
let headingThree = document.querySelector(".thirdHeading");
let headingFour = document.querySelector(".fourthHeading");
let paragraph = document.querySelector(".FrontParagraph");
let logo = document.getElementById('logo')
let navBar = document.querySelector('.navBar')
let login = document.querySelector('#login')
let mainBar = document.querySelector('#mainBar')
let subject = document.querySelectorAll('.subject')



headingOne.addEventListener("click", () => {
    headingOne.classList.add('opacityBack')
    setTimeout( () => {
        headingOne.style.display = "none";
        headingTwo.style.display = "block";
        headingTwo.classList.add('opacityBackTwo')
}, 1200)
    headingTwo.classList.add('waitTime')
    setTimeout( () => {headingTwo.classList.remove('waitTime')}, 2000)
}, {once: true});

headingTwo.addEventListener("click", () => {
    headingTwo.classList.remove('opacityBackTwo')
    headingTwo.classList.add('opacityBack')
    setTimeout( () => {
        headingTwo.style.display = "none";
    headingThree.style.display = "block";
    headingThree.classList.add('opacityBackTwo')
}, 1200)

    headingThree.classList.add('waitTime')
    setTimeout( () => {headingThree.classList.remove('waitTime')}, 2000)
    /*const opacity = getComputedStyle(login).opacity;

    if (opacity == '0') {
        login.style.transition = 'none'
    }*/
}, {once: true});

headingThree.addEventListener('click', () => {

    const randomNum = () => {
    return Math.floor(Math.random() * 10)
}

const num = randomNum()

    const randomQuote = () => {
    if (num == 1) {
        paragraph.innerHTML = 'When life gives you lemons <br> Make lemonade!'
    } else if (num == 2) {
        paragraph.innerHTML = 'You only live once, but if you do it right, <br> once is enough.'
    } else if (num == 3) {
        paragraph.innerHTML = "I've learned that people will forget what you said, <br> people will forget what you did, <br> but people will never forget how you made them feel."
    } else if (num == 4) {
        paragraph.innerHTML = 'Darkness cannot drive out darkness: only light can do that. <br> Hate cannot drive out hate: only love can do that.'
    } else if (num == 5) {
        paragraph.innerHTML = "Two things are infinite: the universe and human stupidity; <br> and I'm not sure about the universe."
    } else if (num == 6) {
        paragraph.innerHTML = 'Be yourself; everyone else is already taken.'
    } else if (num == 7) {
        paragraph.innerHTML = 'So many books, so little time.'
    } else if (num == 8) {
        paragraph.innerHTML = 'Be the change that you wish to see in the world.'
    } else if (num == 9) {
        paragraph.innerHTML = 'You only live once, but if you do it right, <br> once is enough.'
    } 
}

randomQuote();

headingThree.classList.remove('opacityBackTwo')
headingThree.classList.add('opacityBack')
setTimeout( () => {
    headingThree.style.display = "none";
    headingFour.style.display = "block";
    headingFour.classList.add('opacityBackTwo')
    headingFour.classList.add('moveFour');
}, 1200)

    login.classList.add('loginAnimation')
    logo.classList.add('loginAnimation')
    mainBar.classList.add('loginAnimation')
    paragraph.classList.add('moveFrontParagraph');
    button.style.animation = 'opacity 0.8s ease-out 5500ms 1 normal forwards';
}, {once: true});

logo.addEventListener("animationend", () => {
    login.style.opacity = '1'
    logo.style.opacity = '1'
    mainBar.style.opacity = '1'
    login.classList.remove('loginAnimation')
    logo.classList.remove('loginAnimation')
    mainBar.classList.remove('loginAnimation')
});

login.addEventListener('click', () => {
});

/*login.addEventListener('transitionend', () => {
    login.style.transition = 'none'
});

login.addEventListener('mouseleave', () => {
    login.style.transition = 'all 0.15s ease-in'
});

login.addEventListener('mouseenter', () => {
    login.style.transition = 'all 0.15s ease-in'
});*/

button.addEventListener("click", () => {

    if (button.innerHTML === 'Start') {
    divTwo.style.right = "0";
    setTimeout( () => {
    button.innerHTML = 'Back'
    }, 500)
    divOne.classList.add('move')
    navBar.classList.add('shrinkNav')
    mainBar.classList.add('opacityReverse')
    } else if (button.innerHTML === 'Back') {
        setTimeout( () => {
      button.innerHTML = 'Continue'
        }, 500)
      divTwo.style.right = "-50vw";
      divOne.classList.remove('move')
      divOne.classList.add('back')
      navBar.classList.remove('shrinkNav')
      navBar.classList.add('shrinkBack')
      mainBar.classList.remove('opacityReverse')
      mainBar.classList.add('opacityFast')
    } else if (button.innerHTML === 'Continue') {
    divTwo.style.right = "0";
    setTimeout( () => {
    button.innerHTML = 'Back'
    }, 500)
    divOne.classList.remove('back')
    divOne.classList.add('move')
    navBar.classList.remove('shrinkBack')
    navBar.classList.add('shrinkNav')
    mainBar.classList.remove('opacityFast')
    mainBar.classList.add('opacityReverse')
    }

});

subject.forEach((select) => {
select.addEventListener('mousedown', () => {
    select.classList.add('subjectChoose')
});
select.addEventListener('mouseup', () => {
    select.classList.remove('subjectChoose')
    //select.style.transition = 'moveBackUnderlineSubject 2s ease-out 0s 1 normal forwards';
});
select.addEventListener('mouseleave', () => {
    select.classList.remove('subjectChoose')
    //select.style.transition = 'moveBackUnderlineSubject 2s ease-out 0s 1 normal forwards';
});
});