const btnUp = document.querySelector(`.sizeUp`)
const btnDown = document.querySelector(`.sizeDown`)
const btnColor = document.querySelector(`.btnColor`)
const pArray = document.querySelectorAll(`.p`)
let size = 38

const fun1 = () => {
	let randomColor = Math.floor(Math.random() * 16777215).toString(16)
	for (const p of pArray) {
		p.style.color = `#${randomColor}`
	}
	pArray[2].textContent = `Color: #${randomColor}`
}

const fun2 = () => {
	if (size < 100) {
		size += 5
		for (const p of pArray) {
			p.style.fontSize = `${size}px`
		}
	}
	pArray[1].textContent = `Font-size: ${size}px`
}

const fun3 = () => {
	if (size > 15) {
		size -= 5
		for (const p of pArray) {
			p.style.fontSize = `${size}px`
		}
	}
	pArray[1].textContent = `Font-size: ${size}px`
}

btnUp.addEventListener(`click`, fun2)
btnDown.addEventListener(`click`, fun3)
btnColor.addEventListener(`click`, fun1)
