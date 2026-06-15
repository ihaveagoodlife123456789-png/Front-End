const logo = document.querySelector('h2')


const wheelColor = () => {
    return Math.floor(Math.random() * 256)
} 

logo.addEventListener('mouseover', () => {
    logo.style.color = 'rgb(' + wheelColor() + ',' + wheelColor() + ',' + wheelColor() + ')'
})

/*const nav = document.querySelector('h4')

const navHover = () => {
 nav.style.color = 'blue'
 nav.style.position = 'relative'
 nav.style.bottom = '10px'

}

const navHoverOff = () => {
 nav.style.color = ''
 nav.style.position = ''
 nav.style.bottom = ''

}
nav.addEventListener('mouseover', navHover)
nav.addEventListener('mouseout', navHoverOff)*/

const titleArrayed = document.querySelector('h1')
const titleArrayed1 = titleArrayed.split(" ")
console.log(titleArrayed)

const hi = 'hii'





