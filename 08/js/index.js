const email = document.getElementsByClassName('email-text')[0]
const password = document.getElementsByClassName('pass-text')[0]

const emailText = document.getElementsByClassName('title-email')[0]
const emailPass = document.getElementsByClassName('title-pass')[0]

email.addEventListener('focus',()=>{
  emailText.classList.add('active-span')
})
email.addEventListener('blur',()=>{
  emailText.classList.remove('active-span')
})

password.addEventListener('focus',()=>{
  emailPass.classList.add('active-span')
})
password.addEventListener('blur',()=>{
  emailPass.classList.remove('active-span')
})