function getTextContent(app) {
	if (!app) {
		console.warn('请给文件设置内容')
		return
	}
	return [...app.textContent]
}

function renderColorValue() {
	const arr = [5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
	return arr[Math.floor(Math.random() * arr.length)]
}

function renderColor() {
	return (
		`#` +
		Array(6)
			.fill(null)
			.map(_ => renderColorValue())
			.join('')
	)
}

function createElement(text) {
	const element = document.createElement('div')
	element.classList.add('snow-text')
	element.style.color = renderColor()
	element.textContent = text
	return element
}

/**
 *
 * @param {HTMLElement} app
 * @param {any[]} text
 */
function reRenderInApp(app, texts) {
	const fragment = document.createDocumentFragment()
	texts.forEach(text => {
		const element = createElement(text)
		fragment.append(element)
	})
	app.appendChild(fragment)
}

function RenderTextAnimation(app) {
	const text = getTextContent(app)
	app.textContent = ''
	if (text) {
		reRenderInApp(app, text)
	}
}

RenderTextAnimation(document.getElementById('app'))
