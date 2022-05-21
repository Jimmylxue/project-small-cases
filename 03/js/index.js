const btn = document.getElementsByClassName('btn')[0]
const container = document.getElementsByClassName('container')[0]
const navs = document.getElementsByClassName('navs')[0]
btn.addEventListener('click', e => {
	if (e.target.id === 'on') {
		// console.log('开')
		container.classList.add('active-container')
		btn.classList.add('active-btn')
		setTimeout(() => {
			navs.classList.add('active-nav')
		}, 100)
	} else if (e.target.id === 'off') {
		console.log('关')
		container.classList.remove('active-container')
		btn.classList.remove('active-btn')
		navs.classList.remove('active-nav')
	}
})
