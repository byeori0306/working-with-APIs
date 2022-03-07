const palette = document.getElementById('palette')
let baseColor = palette.value.substr(1)
const modes = document.getElementById('modes')
let mode = modes.value
const colors = document.getElementById('colors')

function getValue(color) {
	navigator.clipboard.writeText(color.innerHTML)
	.then(() => {
		console.log("복사 성공")
	})
	.catch(() => {
		console.log("복사 실패")
	})
}

function showColors() {
	fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=${mode}`)
	.then(res => res.json())
	.then(data => {
		const fiveColors = [...data.colors]
		const html = fiveColors.map(color => {
			return `<div class="color" style="background-color:${color.hex.value}" onclick="getValue(this)">${color.hex.value}</div>`
		}).join('')
		colors.innerHTML = html
	})
}

palette.addEventListener('change', () => {
	baseColor = palette.value.substr(1)
	showColors()
})

modes.addEventListener('change', () => {
	mode = modes.value
	showColors()
})

showColors()