let body = document.querySelector("body");
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
let nav = document.querySelectorAll('.nav')
let navCloseBy = document.querySelector('.navCloseBy')
let navLeaveBy = document.querySelector('.navLeaveBy')
let login = document.querySelector('#login')
let mainBar = document.querySelector('#mainBar')
let subject = document.querySelectorAll('.subject')
let question = document.querySelector('.questionHeading')
let yes = document.querySelector('.answerY')
let no = document.querySelector('.answerN')
let naming = document.querySelector('.naming')
let nameInput = document.querySelector('.nameInput')
let logoBall = document.querySelector('#logoBall')
let underAnswer = document.querySelector('.underAnswer')
let beginningHelper = document.querySelector('.beginningHelper')


document.addEventListener("dblclick", (e) => {
    e.preventDefault();
});

window.addEventListener("resize", () => {
    window.MoveTo(0, 0)
});

logoBall.addEventListener('mouseover', () => {
    logoBall.classList.remove('loginAnimation')
    logoBall.style.opacity = '1'
    logoBall.classList.add('ballMovements')
    setTimeout( () => {
        logoBall.classList.remove('ballMovements')
    }, 1000)
})

logoBall.addEventListener('mouseleave', () => {
    logoBall.classList.remove('ballMovements')
})

headingOne.addEventListener("click", () => {
    headingOne.classList.add('opacityBack')
    beginningHelper.classList.add('opacityBack')
    setTimeout( () => {
        beginningHelper.style.display = 'none'
        headingOne.style.display = "none";
        question.style.display = "block";
        yes.style.display = "block";
        no.style.display = "block";
        question.classList.add('opacityBackTwo')
        yes.classList.add('opacityBackTwo')
        no.classList.add('opacityBackTwo')
}, 1200)
    question.classList.add('waitTime')
    yes.classList.add('waitTime')
    no.classList.add('waitTime')
    setTimeout( () => {
        question.classList.remove('waitTime')
        yes.classList.remove('waitTime')
        no.classList.remove('waitTime')
    }, 2000)
       
}, {once: true});


yes.addEventListener('click', () => {
    yes.classList.remove('opacityBackTwo')
    no.classList.remove('opacityBackTwo')
    question.classList.remove('opacityBackTwo')
    yes.classList.add('opacityBack')
    no.classList.add('opacityBack')
    question.classList.add('opacityBack')
    setTimeout( () => {
        yes.style.display = "none";
        no.style.display = "none";
        question.style.display = "none";
        headingTwo.style.display = "block";
        naming.style.display = "block";
        nameInput.style.display = "flex";
        headingTwo.classList.add('opacityBackTwo')
}, 1200)

setTimeout( () => {
    headingTwo.classList.remove('opacityBackTwo')
    headingTwo.style.opacity = '1'
    headingTwo.classList.add('moveUp');
    naming.classList.add('opacityBackTwo')
    nameInput.classList.add('opacityBackTwo')
}, 3000)
    
}, {once: true});

yes.addEventListener('mouseover', () => {
    
    yes.classList.add('answerHover')
});

yes.addEventListener('mouseleave', () => {
    yes.classList.remove('answerHover')
});


no.addEventListener('click', () => {

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

yes.classList.remove('opacityBackTwo')
no.classList.remove('opacityBackTwo')
question.classList.remove('opacityBackTwo')
yes.classList.add('opacityBack')
no.classList.add('opacityBack')
question.classList.add('opacityBack')

setTimeout( () => {
    yes.style.display = "none";
    no.style.display = "none";
    question.style.display = "none";
    headingFour.innerHTML = 'Welcome back <br> valuable user!'
    headingFour.style.display = "block";
    headingFour.style.fontSize = '60px'
    headingFour.classList.add('opacityBackTwo')
    headingFour.classList.add('moveFour');
    login.style.display = 'flex'
}, 1200)

    logoBall.style.display = 'block'
    login.classList.add('loginAnimation')
    logo.classList.add('loginAnimation')
    logoBall.classList.add('loginAnimation')
    mainBar.classList.add('loginAnimation')
    paragraph.classList.add('moveFrontParagraph');
    button.style.animation = 'opacity 0.8s ease-out 5500ms 1 normal forwards';
}, {once: true});


no.addEventListener('mouseover', () => {
    no.classList.add('answerHover')
});

no.addEventListener('mouseleave', () => {
    no.classList.remove('answerHover')
});

nameInput.addEventListener('click', () => {
    nameInput.innerHTML = ''
}, {once: true});

let globalName = ''
let overEightlength = ''

//nameInput.addEventListener("keydown", function(event) {
body.addEventListener('keydown', function(event) {
   underAnswer.style.display = "block";
   underAnswer.classList.add('opacityBackTwo')

   const hi = getComputedStyle(nameInput).opacity

    if (event.key === "Enter" && (hi === '1')) {
     event.preventDefault();
     let name = nameInput.innerText.trim()
     globalName = name
     naming.classList.remove('opacityBackTwo')
     nameInput.classList.remove('opacityBackTwo')
    naming.classList.add('opacityBack')
    nameInput.classList.add('opacityBack')
    headingThree.style.display = "block";


    if (name == '') {
            headingThree.innerHTML = 'Hello, Stranger!'
        }  else if (name.length > 8) {
            headingThree.innerHTML = `Let's get started, <br> ${globalName}!`
        } else {
            headingThree.innerHTML = `Let's get started, ${globalName}!`
        }
    
    setTimeout( () => {
        underAnswer.style.display = "none";
    naming.style.display = 'none'
    nameInput.style.display = 'none'
    headingThree.classList.add('opacityBackTwo')
}, 1200)

setTimeout( () => {
    beginningHelper.style.opacity = '0'
    beginningHelper.style.display = 'block'
    beginningHelper.classList.add('opacityBackTwo')
}, 2400)

   underAnswer.classList.remove('opacityBackTwo')
   underAnswer.classList.add('opacityBack')

    headingThree.classList.add('waitTime')
    setTimeout( () => {headingThree.classList.remove('waitTime')}, 2600)
    /*const opacity = getComputedStyle(login).opacity;

    if (opacity == '0') {
        login.style.transition = 'none'
    }*/
}
});

 nameInput.addEventListener('keydown', (e) => {

    if (nameInput.innerText.length > 20) {
        if(e.key !== 'Enter' && e.key !== 'Backspace') {
             e.preventDefault()
        }
    }
})


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
beginningHelper.classList.remove('opacityBackTwo')
setTimeout( () => {
    beginningHelper.style.display = 'none'
    headingThree.style.display = "none";
    headingFour.style.display = "block";
    headingFour.classList.add('opacityBackTwo')
    headingFour.classList.add('moveFour');
    login.style.display = 'flex'
}, 1200)

setTimeout( () => {
    headingFour.classList.remove('opacityBackTwo')
    headingFour.classList.add('opacityBackSlower')
}, 4200)

setTimeout( () => {
    if (globalName.length > 8) {
headingFour.innerHTML = `Welcome <br> ${globalName}!`
    } else {
        headingFour.innerHTML = `Welcome ${globalName}!`
    }
    headingFour.classList.remove('opacityBackSlower')
    headingFour.classList.add('opacityBackTwoSlower')
}, 4500)

    logoBall.style.display = 'block'
    login.classList.add('loginAnimation')
    logo.classList.add('loginAnimation')
    logoBall.classList.add('loginAnimation')
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



nav.forEach(navEl => {

document.addEventListener('mousemove', (e) => {
    const position = navEl.getBoundingClientRect()

    const navCenterX = position.left + (position.width / 2)
    const navCenterY = position.top + (position.height / 2)

    const diffX = navCenterX - e.clientX
    const diffY = navCenterY - e.clientY

    const distance = Math.sqrt(diffX * diffX + diffY * diffY)

    if (distance < 51) {
        navEl.classList.add('navCloseBy')
    } else {
        navEl.classList.remove('navCloseBy')
    }

})

})