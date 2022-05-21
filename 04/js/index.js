const btn = document.getElementsByClassName('btn')[0]
const input = document.getElementsByTagName('input')[0]
btn.addEventListener('click',()=>{
  input.classList.toggle('active')
})