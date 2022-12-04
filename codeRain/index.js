const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

function getWindowSize() {
	return {
		width: window.innerWidth,
		height: window.innerHeight,
	}
}

function getRandomChar() {
	const str = 'knowledge planet'
	return str[Math.floor(Math.random() * str.length)]
}

function getRandomColor() {
	const r = Math.floor(Math.random() * 256)
	const g = Math.floor(Math.random() * 256)
	const b = Math.floor(Math.random() * 256)
	return `rgb(${r},${g},${b})`
}

const { width, height } = getWindowSize()

canvas.width = width
canvas.height = height

const columnWidth = 25
const columnCount = Math.floor(width / columnWidth)

// one of column Index
const columnNextIndex = new Array(columnCount).fill(1)

function opacityBackground() {
	ctx.fillStyle = `rgba(240,240,240,0.1)`
	ctx.fillRect(0, 0, width, height)
}

function draw() {
	opacityBackground() // make background fade opacity
	const fontSize = 20
	ctx.fillStyle = getRandomColor()
	ctx.font = `${fontSize}px "Roboto Mono"`
	for (let i = 0; i < columnCount; i++) {
		const x = i * columnWidth
		const y = fontSize * columnNextIndex[i]
		ctx.fillText(getRandomChar(), x, y)
		if (y > height && Math.random() > 0.99) {
			columnNextIndex[i] = 0
		} else {
			columnNextIndex[i]++
		}
	}
	requestAnimationFrame(draw)
}

requestAnimationFrame(draw)
