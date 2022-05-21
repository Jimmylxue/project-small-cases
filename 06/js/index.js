const container = document.getElementsByClassName('container')[0]
const anim = [...document.getElementsByClassName('animate')]
let num = 1
window.onscroll = function(e){
  // 获取滚动条滚动的高度 可以使用 document.documentElement.scrollTop
  let scrollTop = document.documentElement.scrollTop
  if(scrollTop/200>num){
    console.log('aaa')
    if(num%2==0){
      anim[num-1].classList.remove('animateLeft')
    }else{
      anim[num-1].classList.remove('animateRight')
    }
    num++
  }
}

