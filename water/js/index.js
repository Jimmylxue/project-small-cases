let col = [...document.querySelectorAll('.col')]
let container = document.querySelector('.container')
let column1 = document.querySelector('.column1')
let column2 = document.querySelector('.column2')
let column3 = document.querySelector('.column3')

function getInsertIndex() {
	const heightArr = getColumnHeight()
	let index = heightArr.indexOf(Math.min(...heightArr))
	console.log(index, heightArr)
	return index
}

function* addDom() {
	for (let i = 0; i < pictures.length; i++) {
		let minIndex = getInsertIndex()
		let img = document.createElement('img')
		img.src = pictures[i].img
		col[minIndex].appendChild(img)
		yield minIndex
	}
	// 同步修改 异步生效
}

let start = 0
window.onload = function () {
	let iterator = addDom()
	let interVal = setInterval(() => {
		if (start > pictures.length) {
			clearInterval(interVal)
			return
		}
		start++
		iterator.next()
	}, 10)
}

function getColumnHeight() {
	// console.log(column1.clientHeight)
	// console.log('每一列的高度', [
	// 	column1.clientHeight,
	// 	column2.clientHeight,
	// 	column3.clientHeight,
	// ])
	return [column1.clientHeight, column2.clientHeight, column3.clientHeight]
}

// getColumnHeight()
