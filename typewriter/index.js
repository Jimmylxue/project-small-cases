const app = document.getElementById('app')
const contentLength = app.textContent.length
console.log(contentLength)

const styleElement = document.createElement('style')
document.head.appendChild(styleElement)

// sheet.insertRule 往样式表中增加规则
styleElement.sheet.insertRule(
	`#app::after {animation: typewriter ${
		contentLength * 0.2
	}s steps(${contentLength}) forwards;}`
)

styleElement.sheet.insertRule(
	`#app::before {animation: typewriter ${
		contentLength * 0.2
	}s steps(${contentLength}) forwards, flashing 0.3s ease-in-out forwards infinite;}`
)
