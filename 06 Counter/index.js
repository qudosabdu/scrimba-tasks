
let cunter = 0
let counterEl = document.getElementById('count')
let prevEl = document.getElementById('prev')

const add = ()=>{
    cunter++
    counterEl.textContent = cunter
}

const save = ()=>{
    let counterStr = cunter + " - "
    prevEl.textContent += counterStr
    counterEl.textContent = 0
}

const reset = ()=>{
    cunter = 0
    document.getElementById('count').textContent= cunter
}