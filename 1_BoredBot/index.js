const content = document.getElementById('content');

document.getElementById('button').addEventListener('click', function() {
	fetch('https://apis.scrimba.com/bored/api/activity')
		.then(response => response.json())
		.then(data => content.innerHTML = data.activity)
})