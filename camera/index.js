const canvas = document.getElementById('myCanvas')
const video = document.getElementById('video')
const photo = document.getElementById('photo')
const btn = document.getElementById('btn')

canvas.width = canvas.height = video.width = video.height = 400

const { width, height } = canvas

const ctx = canvas.getContext('2d')

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

btn.addEventListener('click', () => {
	console.log('111')
	takePhoto()
})
