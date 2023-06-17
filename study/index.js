let time = document.querySelector('.time')
let person = document.getElementById('person')
let plan = document.querySelector('.plan')
let greet = document.querySelector('.greet')
let names = document.querySelector('.name')
let base = document.querySelector('.base')
let body = document.body

function getTime() {
	let date = new Date()
	let year = date.getFullYear()
	let month = date.getMonth() + 1
	let day = date.getDate()
	let week = date.getDay()
	let hour = date.getHours()
	let min = date.getMinutes()
	let sec = date.getSeconds()
	base.innerHTML = `${year}.${month}.${day} ${getWeek(week)}`
	time.innerHTML = `${type(hour)}:${type(min)}:${type(sec)}`
	setTimeout(getTime, 1000)
}

function getWeek(data) {
	switch (data) {
		case 0:
			return '星期日'
		case 1:
			return '星期一'
		case 2:
			return '星期二'
		case 3:
			return '星期三'
		case 4:
			return '星期四'
		case 5:
			return '星期五'
		case 6:
			return '星期六'
	}
}

// function initLocal(){
//     localStorage.getItem()
// }
// initLocal()

function type(n) {
	return n < 10 ? '0' + n : n
}
function getname() {
	return localStorage.getItem('dz_name') == null
		? 'User'
		: localStorage.getItem('dz_name')
}
function getplan() {
	return localStorage.getItem('dz_plan') == null
		? 'Plan?'
		: localStorage.getItem('dz_plan')
}

async function changeBg() {
	let date = new Date()

	const localTime = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
	const hasDataFlag = localStorage.getItem(`study-flag`)
	console.log(hasDataFlag)
	let bingBg = ''
	if (String(hasDataFlag) !== localTime) {
		const res = await axios.get(
			'https://api.jimmyxuexue.top/bingBg/today?UHD=true'
		)
		if (res.data.code === 200) {
			bingBg = res.data.result
			localStorage.setItem('study-flag', localTime)
			localStorage.setItem('study-bg-source', res.data.result)
		}
	} else {
		bingBg = localStorage.getItem('study-bg-source')
	}

	let hour = date.getHours()
	console.log(hour)
	if (hour < 12) {
		greet.innerHTML = '早上好,'
		body.style.background = `url(${
			bingBg || 'img/04.jpg'
		}) center center/cover no-repeat`
	} else if (hour === 12) {
		greet.innerHTML = '中午好,'
		body.style.background = `url(${
			bingBg || 'img/02.jpg'
		}) center center/cover no-repeat`
	} else if (hour < 18) {
		greet.innerHTML = '下午好,'
		body.style.background = `url(${
			bingBg || 'img/03.jpg'
		}) center center/cover no-repeat`
	} else {
		greet.innerHTML = '晚上好,'
		body.style.background = `url(${
			bingBg || 'img/01.jpg'
		}) center center/cover no-repeat`
	}
}
function setname(e) {
	if (e.type === 'keypress') {
		if (e.keyCode == 13 || e.which == 13) {
			localStorage.setItem('dz_name', e.target.innerText)
			names.blur()
		}
	} else if (e.type === 'blur') {
		console.log('111')
		localStorage.setItem('dz_name', e.target.innerText)
	}
}
function setplan(e) {
	if (e.type === 'keypress') {
		if (e.keyCode == 13 || e.which == 13) {
			localStorage.setItem('dz_plan', e.target.innerText)
			plan.blur()
		}
	} else if (e.type === 'blur') {
		console.log('222')
		localStorage.setItem('dz_plan', e.target.innerText)
	}
}

person.addEventListener('keypress', setname)
person.addEventListener('blur', setname)
plan.addEventListener('keypress', setplan)
plan.addEventListener('blur', setplan)
names.innerHTML = getname()
plan.innerHTML = getplan()
changeBg()
getTime()
