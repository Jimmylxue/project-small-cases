const canvas = document.getElementById('myCanvas')
const canvasBg = document.getElementById('myCanvasBg')
const video = document.getElementById('video')
const photo = document.getElementById('photo')
const btn = document.getElementById('btn')

canvas.width = canvas.height = video.width = video.height = 400

const { width, height } = canvas

const ctx = canvas.getContext('2d')
const ctxBg = canvasBg.getContext('2d')

const constraints = {
	video: {
		width,
		height,
	},
}

navigator.mediaDevices.getUserMedia(constraints).then(stream => {
	video.srcObject = stream
	video.onloadedmetadata = () => video.play()
})

function takePhoto() {
	ctx.drawImage(video, 0, 0, width, height)
	// photo.src = canvas.toDataURL('image/png')
}

function changeBgColor(v) {
	ctxBg.clearRect(0, 0, width, height)
	ctxBg.fillStyle = v | '#06c'
	ctxBg.fillRect(0, 0, width, height)
}

btn.addEventListener('click', () => {
	console.log('111')
	takePhoto()
})
