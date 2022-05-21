const button = document.getElementsByClassName('buttons')[0]
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circularArr = [...document.getElementsByClassName('circular')]
const lineArr = [...document.getElementsByClassName('line')]

let progress = 1

button.addEventListener('click', e => {
	if (e.target.id === 'prev') {
		if (progress !== 1) {
			progress--
			changStatus(progress)
		}
	} else if (e.target.id === 'next') {
		if (progress < circularArr.length) {
			progress++
			changStatus(progress)
		}
	}
})

function changStatus(progerss) {
	if (progerss === circularArr.length) {
		next.classList.add('disable')
	} else if (progerss === 1) {
		prev.classList.add('disable')
	} else {
		prev.classList.remove('disable')
		next.classList.remove('disable')
	}
	lineArr.forEach((line, index) => {
		index < progress - 1
			? line.classList.add('active')
			: line.classList.remove('active')
	})
	circularArr.forEach((circular, index) => {
		index <= progress - 1
			? circular.classList.add('active')
			: circular.classList.remove('active')
	})
}
