let a = document.querySelector('.first')
let b = document.querySelector('.second')
let c = document.querySelector('.third')
let d = document.querySelector('.fourth')
let e = document.querySelector('.fifth')
let f = document.querySelector('.sixth')
let g = document.querySelector('.seventh')
let h = document.querySelector('.eigth')
let btn = document.querySelector('.button')
//let one = document.querySelector('.opacityOne')
//let zero = document.querySelector('.opacityZero')

document.addEventListener("dblclick", (e) => {
    e.preventDefault();
});

window.addEventListener("resize", () => {
    window.MoveTo(0, 0)
});

window.addEventListener('load', () => {
    setTimeout(() => {
    b.style.display = 'block'
    b.classList.add('opacityOne')
}, 1600)
});

b.addEventListener('click', () => {
    b.classList.remove('opacityOne')
    b.classList.add('opacityZero')
    setTimeout(() => {
    b.style.display = 'none'
    c.style.display = 'block'
    c.classList.add('opacityOne')
}, 1000)
}, {once: true})

c.addEventListener('click', () => {
    c.classList.remove('opacityOne')
    c.classList.add('opacityZero')
    setTimeout(() => {
    c.style.display = 'none'
    d.style.display = 'block'
    d.classList.add('opacityOne')
}, 1000)
}, {once: true})

d.addEventListener('click', () => {
    d.classList.remove('opacityOne')
    d.classList.add('opacityZero')
    setTimeout(() => {
    d.style.display = 'none'
    e.style.display = 'block'
    e.classList.add('opacityOne')
}, 1000)
}, {once: true})

e.addEventListener('click', () => {
    e.classList.remove('opacityOne')
    e.classList.add('opacityZero')
    setTimeout(() => {
    e.style.display = 'none'
    f.style.display = 'block'
    f.classList.add('opacityOne')
}, 1000)
}, {once: true})

f.addEventListener('click', () => {
    f.classList.remove('opacityOne')
    f.classList.add('opacityZero')
    setTimeout(() => {
    f.style.display = 'none'
    g.style.display = 'block'
    g.classList.add('opacityOne')
}, 1000)

setTimeout(() => {
    h.style.display = 'block'
    h.classList.add('opacityOne')
}, 3000)

setTimeout(() => {
    btn.style.display = 'block'
    btn.classList.add('opacityOne')
}, 5000)
}, {once: true})