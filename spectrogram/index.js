// 创建AudioContext对象
var audioCtx = new (window.AudioContext || window.webkitAudioContext)()

// 加载音频文件
var audioElement = document.createElement('audio')
// audioElement.src = './demo.m4a'
audioElement.src = './bgm.mp3'
// audioElement.src = './demo.m4a'
audioElement.controls = true
document.body.appendChild(audioElement)

// 创建MediaElementSource节点
var source = audioCtx.createMediaElementSource(audioElement)

// 创建Analyser节点
var analyser = audioCtx.createAnalyser()
analyser.fftSize = 2048
var bufferLength = analyser.frequencyBinCount
var dataArray = new Uint8Array(bufferLength)

// 连接节点
source.connect(analyser)
analyser.connect(audioCtx.destination)

// 绘制频谱图
var canvas = document.getElementById('spectrogram')
var canvasCtx = canvas.getContext('2d')

function draw() {
	requestAnimationFrame(draw)

	analyser.getByteFrequencyData(dataArray)

	canvasCtx.fillStyle = 'rgb(200, 200, 200)'
	canvasCtx.fillRect(0, 0, canvas.width, canvas.height)

	var barWidth = (canvas.width / bufferLength) * 2.5
	var barHeight
	var x = 0

	for (var i = 0; i < bufferLength; i++) {
		barHeight = dataArray[i]

		canvasCtx.fillStyle = 'rgb(' + (barHeight + 100) + ',50,50)'
		canvasCtx.fillRect(
			x,
			canvas.height - barHeight / 2,
			barWidth,
			barHeight / 2
		)

		x += barWidth + 1
	}
}

draw()
