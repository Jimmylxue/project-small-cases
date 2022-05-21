const messageText = document.querySelector('.content')
const previewImg = document.getElementById('previewImg')

function changeText(e) {
	messageText.textContent = e.target.value
}

async function downloadImg() {
	const canvas = await html2canvas(document.querySelector('#imgContainer'))
	previewImg.src = canvas.toDataURL('image/png')
	const blob = base64ToBlob(canvas.toDataURL('image/png'))
	blob2DownLoad(blob)
}

function base64ToBlob(code) {
	const parts = code.split(';base64,')
	const contentType = parts[0].split(':')[1]
	const raw = window.atob(parts[1])
	const rawLength = raw.length
	const uint8Array = new Uint8Array(rawLength)
	for (let i = 0; i < rawLength; i++) {
		uint8Array[i] = raw.charCodeAt(i)
	}
	return new Blob([uint8Array], { type: contentType })
}

function blob2DownLoad(blob) {
	const aLink = document.createElement('a') // 创建一个a标签
	const event = document.createEvent('HTMLEvents')
	event.initEvent('click', true, true)
	aLink.download = new Date().getTime() + '.' + blob.type.split('/')[1] // 使用时间戳给文件命名
	aLink.href = URL.createObjectURL(blob)
	aLink.click()
}

async function initPage() {
	messageText.textContent = '有内鬼！终止交易！'
	const canvas = await html2canvas(document.querySelector('#imgContainer'))
	previewImg.src = canvas.toDataURL('image/png')
}

initPage()
