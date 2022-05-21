const progress = document.getElementsByClassName('progress')[0]
const bg = document.getElementsByClassName('bg')[0]

let index = 0
let blur = 20

bg.style.filter = `blur(${blur}px)`
let timer = setInterval(() => {
  if (index === 99) {
    clearInterval(timer)
    progress.style.display = 'none'
    return
  }
  index++
  blur-=0.2
  bg.style.filter = `blur(${blur}px)`
  progress.textContent = index + '%'
}, 100)