const imgList = [...document.querySelectorAll('img')]
const html = document.querySelector('html')
const colorThief = new ColorThief()
const width = screen.width
const height = screen.height

function reset() {
	imgList.forEach(ele => (ele.style.opacity = 1))
}

function setOpacity(index) {
	imgList.forEach((ele, idx) => {
		if (index !== idx) {
			ele.style.opacity = 0.4
		}
	})
}

imgList.forEach((ele, index) => {
	ele.addEventListener('mouseenter', e => {
		setOpacity(index)
		console.log(e.target)
		const [c1, c2, c3] = colorThief
			.getPalette(e.target, 3)
			.map(item => `rgb(${item[0]},${item[1]},${item[2]})`)
		html.style.setProperty('--c1', c1)
		html.style.setProperty('--c2', c2)
		html.style.setProperty('--c3', c3)
		draw()
	})
	ele.addEventListener('mouseleave', () => {
		reset()
		clear()
	})
})

const canvas = document.getElementById('canvas')
canvas.width = width
canvas.height = height
const ctx = canvas.getContext('2d')

function draw() {
	const obj = ctx.createLinearGradient(0, 0, 0, height) // 从(0,0) 渐变到 (0,height) 就是从上到下渐变
	console.log('draw', html.style.getPropertyValue('--c1'))
	obj.addColorStop(0, html.style.getPropertyValue('--c1'))
	obj.addColorStop(0.5, html.style.getPropertyValue('--c2'))
	obj.addColorStop(1, html.style.getPropertyValue('--c3'))
	ctx.fillStyle = obj
	ctx.fillRect(0, 0, width, height)
}

function clear() {
	ctx.clearRect(0, 0, width, height)
}
